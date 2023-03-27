/**
 * [貪婪的小偷 Part2](https://oj.lidemy.com/problem/1052)
 * Difficulty:Low
 *
 * 解答用 console.log 寫出來。
 *
 */

var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});

/** 
 * input
    3 10
    9 100
    5 60
    2 70

 * output
    130
 */

function solve(lines) {
  // 解題寫在這裡
  let [num, maxWeight] = lines[0].split(" ").map(Number);
  let weightArr = []; // [ 9, 5, 2 ]
  let priceArr = []; // [ 100, 60, 70 ]

  for (let i = 1; i < lines.length; i++) {
    let [w, p] = lines[i].split(" ").map(Number);
    weightArr.push(w);
    priceArr.push(p);
  }

  const result = dfs(weightArr, priceArr, 0, 0, maxWeight);
  console.log(result);

  function dfs(weightArr, priceArr, maxPrice, index, maxWeight) {
    if (index >= weightArr.length) return maxPrice; // 沒東西放就回傳 maxPrice

    let doNotTake = dfs(weightArr, priceArr, maxPrice, index + 1, maxWeight);
    let take = -1;

    // 如果可以放進去再算價值
    if (maxWeight >= weightArr[index]) {
      take = dfs(weightArr, priceArr, maxPrice + priceArr[index], index + 1, maxWeight - weightArr[index]);
    }
    return doNotTake > take ? doNotTake : take; // 拿跟不拿比較大的就是答案
  }
}

/** dfs (Depth First Search 深度優先搜尋)
 * 小花的名詞解釋："dfs" 在程式碼中通常是 Depth First Search 的縮寫，表示深度優先搜尋。深度優先搜尋是一種常見的搜尋演算法，用於遍歷或搜索樹或圖的節點。該演算法會從根節點開始，遞歸地探索每個子樹，直到達到最深的節點，然後回溯到上一個節點，直到遍歷完整棵樹。在程式碼中，"dfs" 通常是一個函數名稱，該函數實現深度優先搜尋算法。
 *
 *
 * 參考資料：https://hulitw.medium.com/%E6%9A%B4%E5%8A%9B%E8%A7%A3%E6%98%AF%E7%9C%9F%E7%9A%84%E5%8F%AF%E8%A1%8C-%E4%BD%86%E4%BD%A0%E6%96%B9%E6%B3%95%E7%94%A8%E9%8C%AFxd-6169c9677196
 */

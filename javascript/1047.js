/**
 * [搜尋數字](https://oj.lidemy.com/problem/1047)
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

/** 這一題 AC 有點問題，不能用字串比對，需要轉成數字比對才會通過。 */

/** 寫法一，窮舉法 */
function solve1(lines) {
  // 解題寫在這裡
  const nums = lines[0].split(" ");
  const n = Number(nums[0]);
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Number(lines[i + 1]);
  }

  for (let i = n + 1; i < lines.length; i++) {
    let target = Number(lines[i]);
    console.log(search(arr, target));
  }
}

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

/** 寫法二，二分搜尋法
 * 因為題目已經排序好了，所以才可以用二分搜尋法（類似找終極密碼的概念）
 * 可參考：淺談二分搜尋法 https://blog.huli.tw/2016/09/23/binary-search-introduction/
  
  圖解：
  [................]
  ^L      ^M      ^R

 */
function solve(lines) {
  // 解題寫在這裡
  const nums = lines[0].split(" ");
  const n = Number(nums[0]);
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Number(lines[i + 1]);
  }

  for (let i = n + 1; i < lines.length; i++) {
    let target = Number(lines[i]);
    console.log(search(arr, target));
  }
}

function binarySearch(arr, target) {
  let L = 0;
  let R = arr.length - 1;

  while (L <= R) {
    let M = Math.floor((L + R) / 2);
    if (arr[M] === target) {
      return M;
    } else if (arr[M] > target) {
      R = M - 1;
    } else {
      L - M - 1;
    }
  }
}

/**
 * [聯誼坐法排排看](https://oj.lidemy.com/problem/1006)
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

function solve(input) {
  const used = lines.slice(2);
  let set = new Set(used.map(Number));

  const length = Number(lines[0]);
  let result = -1; // 會多算一個座位，我們不要阿飄所以設定 -1

  for (let i = 1; i < length; ++i) {
    if (set.has(i)) continue; // 是空座位才繼續算
    if (!set.has(i + 2)) result += 1; // 算偶數座位
    if (!set.has(i + 1) && i % 2 === 1) result += 1; // 算奇數座位
  }
  console.log(result);
}

/*
 continue 的方式也可寫成
  for (let i = 1; i < length; ++i) {
    if (!set.has(i)) {   
      if (!set.has(i + 2)) result += 1; // 算偶數座位
      if (!set.has(i + 1) && i % 2 === 1) result += 1; // 算奇數座位
    }
  }
*/

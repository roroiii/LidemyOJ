/**
 * [NM 乘法表](https://oj.lidemy.com/problem/1024)
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

function solve(lines) {
  // 解題寫在這裡
  const n = Number(lines[0]);
  const m = Number(lines[1]);

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}

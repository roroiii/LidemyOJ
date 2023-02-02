/**
 * [數字比大小](https://oj.lidemy.com/problem/1002)
 * Difficulty:Low
 *
 * 解答用 console.log 寫出來。
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

  for (let i = 0; i < lines.length; i++) {
    let temp = lines[i].split(" ");
    let a = Number(temp[0]);
    let b = Number(temp[1]);

    if (a === 0 && b === 0) break;
    console.log(a > b ? a : b);
  }
}

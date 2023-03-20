/**
 * [好多星星](https://oj.lidemy.com/problem/1021)
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
  const num = Number(lines[0]);
  const start = "*";
  let str = "";

  for (let i = 0; i < num; i++) {
    str += start;
    console.log(str);
  }
}

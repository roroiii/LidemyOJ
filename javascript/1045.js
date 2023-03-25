/**
 * [String slice](https://oj.lidemy.com/problem/1045)
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
  const S = lines[0];
  const start = Number(lines[1]);
  const end = Number(lines[2]);

  let result = "";
  for (let i = start; i < end; i++) {
    result += S[i];
  }
  console.log(result);
}

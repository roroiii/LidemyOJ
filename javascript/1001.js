/**
 * [題目Ａ＋Ｂ](https://oj.lidemy.com/problem/1001)
 * Difficulty:Low
 *
 * 範例寫法，解答用 console.log 寫出來。
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
  var tmp = lines[0].split(" ");
  console.log(Number(tmp[0]) + Number(tmp[1]));
}

/**
 * [音速小子](https://oj.lidemy.com/problem/1015)
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
  const t = lines[0];
  const speedOfSound = 340;

  const speed = t * 340;
  console.log(speed);
}

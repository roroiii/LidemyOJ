/**
 * [String endsWith](https://oj.lidemy.com/problem/1043)
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
  const strArr = lines[0];
  const target = lines[1];

  const endStr = strArr.slice(strArr.length - target.length);

  if (endStr === target) {
    console.log("true");
  } else {
    console.log("false");
  }
}

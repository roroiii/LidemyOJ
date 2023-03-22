/**
 * [判斷迴文](https://oj.lidemy.com/problem/1030)
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
  const input = lines[0];
  const reverseStr = input.split("").reverse().join("");

  if (input === reverseStr) {
    console.log("True");
  } else {
    console.log("False");
  }
}

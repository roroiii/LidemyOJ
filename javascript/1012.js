/**
 * [買一送一](https://oj.lidemy.com/problem/1012)
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
  const price1 = Number(lines[0]);
  const price2 = Number(lines[1]);
  const maxPrice = price1 > price2 ? price1 : price2;
  const maxValue = maxPrice * 2;
  const lossValue = maxValue - price1 - price2;

  console.log(maxValue);
  console.log(lossValue);
}

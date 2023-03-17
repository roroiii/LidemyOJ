/**
 * [貪婪的小偷](https://oj.lidemy.com/problem/1017)
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
  const canTakeAway = Number(lines[0]);
  const totalThings = Number(lines[1]);
  const arr = [];
  let value = 0;

  for (let i = 2; i < totalThings + 2; i++) {
    arr.push(Number(lines[i]));
  }

  const priceArr = arr.sort((a, b) => b - a);
  const rangeArr = priceArr.slice(0, canTakeAway);
  for (let i = 0; i < rangeArr.length; i++) {
    value += rangeArr[i];
  }
  console.log(value);
}

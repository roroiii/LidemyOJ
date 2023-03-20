/**
 * [水仙花數](https://oj.lidemy.com/problem/1025)
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

function isNarcissistic(num) {
  const arr = String(num).split("");
  let result = 0;

  for (let j = 0; j < arr.length; j++) {
    result += Math.pow(Number(arr[j]), arr.length);
  }

  if (result === num) return true;
  return false;
}

function solve(lines) {
  // 解題寫在這裡
  const range = lines[0].split(" ");
  const n = Number(range[0]);
  const m = Number(range[1]);

  for (let i = n; i <= m; ++i) {
    const res = isNarcissistic(i);
    if (res) console.log(i);
  }
}

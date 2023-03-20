/**
 * [判斷等比數列](https://oj.lidemy.com/problem/1026)
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

function isYes(array, length) {
  const scale = Number(array[1]) / array[0];
  for (let i = 0; i < length; i++) {
    const numPlus1 = Number(array[i + 1]);
    const num = Number(array[i]);
    if (numPlus1 && numPlus1 / num !== scale) {
      return false;
    }
  }
  return true;
}

function solve(lines) {
  // 解題寫在這裡
  const length = Number(lines[0]);
  const array = lines[1].split(" ");

  const res = isYes(array, length);
  if (res) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

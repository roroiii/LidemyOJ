/**
 * [平面距離計算](https://oj.lidemy.com/problem/1032)
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

function calcDistance(arr) {
  const x1 = arr[0];
  const y1 = arr[1];
  const x2 = arr[2];
  const y2 = arr[3];

  const distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  //     也可寫成 = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;

  return distance.toFixed(2);
}

function solve(lines) {
  // 解題寫在這裡
  const length = Number(lines[0]);
  let num = 1;

  for (let i = 1; i <= length; i++) {
    const arr = lines.slice(num, num + 4);
    num += 4;
    const result = calcDistance(arr);
    console.log(result);
  }
}

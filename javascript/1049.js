/**
 * [陣列最短距離](https://oj.lidemy.com/problem/1049)
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

// 使用 Math.abs() 計算距離
function solve(lines) {
  const x = lines[1].split(" ").map(Number);
  const y = lines[2].split(" ").map(Number);
  let min = Infinity;

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      let distance = Math.abs(x[i] - y[j]);
      if (distance < min) min = distance;
    }
  }
  console.log(min);
}

/**
 * [大平台](https://oj.lidemy.com/problem/1018)
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

/* 先把一樣數字整理在一起並統計
     再比較哪個數字統計起來最大 */
function solve(lines) {
  // 解題寫在這裡
  const length = Number(lines[0]);
  const arr = lines[1].split(" ");
  const map = {};
  let max = 0;

  for (let i = 0; i < length; ++i) {
    if (map[arr[i]] !== undefined) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }

  for (let i = 1; i <= Object.values(map).length; ++i) {}
  const result = Math.max(...Object.values(map));
  console.log(result);
}

/**
 * [Array join](https://oj.lidemy.com/problem/1040)
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
  const target = lines[0];
  const length = Number(lines[1]);

  let str = "";
  for (let i = 2; i <= length + 1; ++i) {
    if (i === length + 1) {
      str += lines[i];
    } else {
      str += lines[i] + target;
    }
  }
  console.log(str);
}

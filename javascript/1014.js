/**
 * [不九人世](https://oj.lidemy.com/problem/1014)
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

/** parseInt(str, X) 用Ｘ進位看這個數字， 轉換成 10 進位
 *  parseInt("100", 2)  // 4
 */
function solve(lines) {
  // 解題寫在這裡
  const n = lines[0];
  console.log(parseInt(n, 9));
}

// 自己算的解法：https://github.com/burjee/LidemyOJ/blob/main/1014/main.js

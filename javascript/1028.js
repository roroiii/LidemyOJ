/**
 * [生命靈數](https://oj.lidemy.com/problem/1028)
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

function addUp(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }
  return result.toString();
}

function solve(lines) {
  // 解題寫在這裡
  let num = lines[0].split(" ");
  let result = addUp(num);

  for (let i = 0; i < num.length; i++) {
    num = result.split("");
    result = addUp(num);
  }
  if (result.length === 1) console.log(result);
}

/**
 * [簡易排序](https://oj.lidemy.com/problem/1035)
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
  const arr = [];

  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }

  // 自己排序的寫法會 Time Limit Exceeded ，要用內建函數 sort()
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     let min = arr[i];
  //     if (min > arr[j]) {
  //       min = arr[j];
  //       arr[j] = arr[i];
  //       arr[i] = min;
  //     }
  //   }
  // }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

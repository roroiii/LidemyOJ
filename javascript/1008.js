/**
 * [幾個水桶](https://oj.lidemy.com/problem/1008)
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

/** 寫法一 */
function solve(lines) {
  // 解題寫在這裡
  let m = Number(lines[0]);
  let arr = [];
  let count = 0;

  // 2147483648
  for (let i = 1; i <= 2 ** 31; i *= 2) {
    arr.push(i);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= m) {
      m -= arr[i];
      count++;
    }
  }

  console.log(count);
}

/** 寫法二 */
function solve(lines) {
  // 解題寫在這裡
  let m = Number(lines[0]);
  let str = m.toString(2); // 轉成二進制
  let count = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "1") count++;
  }

  console.log(count);
}

/** 寫法三，使用二元運算符號 */
function solve(lines) {
  // 解題寫在這裡
  let m = Number(lines[0]);
  let count = 0;

  while (m > 0) {
    count += m & 1;
    m = m >> 1;
  }

  console.log(count);
}

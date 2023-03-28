/**
 * [搭電梯](https://oj.lidemy.com/problem/1013)
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
function solve1(lines) {
  // 解題寫在這裡
  let floor = Number(lines[0]);
  let arr = [0, 1, 1, 2];

  for (let i = 4; i <= 5; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    console.log(arr[i]);
  }
  console.log({ arr });
  console.log(arr[floor]);
}

/** 寫法二，使用遞迴 */
function f(n) {
  if (n === 2) return 1; // 2F一種走法
  if (n === 3) return 2; // 3F二種走法
  return f(n - 1) + f(n - 2);
}

function solve(lines) {
  // 解題寫在這裡
  let n = Number(lines[0]);
  console.log(f(n));
}

/**
2: 1
3: 2
4: 1+2 = 3
5: 2+3 = 5
6: 3+5 = 8
7: 5+8 = 13

費波那契數列
f(n) = f(n-1) + f(n-2)
*/

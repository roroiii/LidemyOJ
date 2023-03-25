/**
 * [String padEnd](https://oj.lidemy.com/problem/1044)
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
  const S = lines[0];
  const length = Number(lines[1]);
  const str = lines[2];

  if (S.length >= length) {
    console.log(S);
    return;
  }
  let result = "";
  let num = 0;
  for (let i = 0; i < length - S.length; i++) {
    if (str[num] === undefined) num = 0;
    result += str[num];
    num++;
  }
  console.log(S + result);
}

/** 寫法二，改成使用 while */
function solve(lines) {
  // 解題寫在這裡
  const S = lines[0];
  const length = Number(lines[1]);
  const str = lines[2];

  if (S.length >= length) {
    console.log(S);
    return;
  }
  let result = "";
  let num = 0;
  let i = 0;
  while (i < length - S.length) {
    if (str[num] === undefined) num = 0;
    result += str[num];
    num++;
    i++;
  }
  console.log(S + result);
}

/** 寫法三，使用內建函數 Array.prototype.fill() 和 Array.prototype.join() 簡化 */
function solve(lines) {
  // 解題寫在這裡
  const S = lines[0];
  const length = Number(lines[1]);
  const str = lines[2];

  if (S.length >= length) {
    console.log(S);
    return;
  }
  const result = Array(length - S.length)
    .fill(str)
    .map((s, i) => s[i % s.length])
    .join("");
  console.log(S + result);

  /** map result
   * { s: 'xyz', result: i(0) % s_length(3) = 0 }
   * { s: 'xyz', result: i(1) % s_length(3) = 1 }
   * { s: 'xyz', result: i(2) % s_length(3) = 2 }
   * { s: 'xyz', result: i(3) % s_length(3) = 0 }
   * { s: 'xyz', result: i(4) % s_length(3) = 1 }
   */
}

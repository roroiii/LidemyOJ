/**
 * [String trim](https://oj.lidemy.com/problem/1041)
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
  const str = lines[0];
  console.log(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));

  // reference:https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#polyfill
}

/** 寫法二 */
function solve(lines) {
  // 解題寫在這裡
  const str = lines[0];
  let start = 0;
  let end = str.length - 1;

  // 找出字串前面的空白字串
  while (start <= end && /\s/.test(str[start])) {
    start++;
  }

  // 找出字串後面的空白元素
  while (end >= start && /\s/.test(str[end])) {
    end--;
  }

  // 刪除前後的空白字串
  let result = "";
  for (let i = start; i <= end; i++) {
    result += str[i];
  }

  console.log(result);
}

/**
 * [String toLowerCase](https://oj.lidemy.com/problem/1042)
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

// /** 寫法一 */
function solve(lines) {
  // 解題寫在這裡
  const strArr = lines[0];

  const replaceFn = function (match) {
    return String.fromCharCode(match.charCodeAt(0) + 32);
  };

  const result = strArr.replace(/[A-Z]/g, replaceFn);

  console.log(result);
}

/** 寫法二 */
function solve(lines) {
  // 解題寫在這裡
  const strArr = lines[0];
  let lowerCase = "";

  for (let i = 0; i < strArr.length; i++) {
    const charCode = strArr.charCodeAt(i); // 拿到編碼位置

    if (charCode >= 65 && charCode <= 90) {
      lowerCase += String.fromCharCode(charCode + 32);
    } else {
      lowerCase += strArr[i];
    }
  }

  console.log(lowerCase);
}

/**
 * [凱薩加密](https://oj.lidemy.com/problem/1034)
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

// 使用 charCodeAt() 與 fromCharCode() 計算字母位置
function caesarCipher(position, s) {
  const code = s.charCodeAt() - 97;
  const newCode = (code + position) % 26;
  return String.fromCharCode(newCode + 97);
}

// caesarCipher
function solve(lines) {
  const position = Number(lines[0]);
  const str = lines[1];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += caesarCipher(position, str[i]);
  }
  console.log(result);
}

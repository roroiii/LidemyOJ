/**
 * [聯誼門票搶起來](https://oj.lidemy.com/problem/1003)
 * Difficulty:Low
 *
 * 解答用 console.log 寫出來。
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

/**
 * 1.取出字串長度跟要取出的數字位置長度
 * 2.把字串們拼起來
 * 3.取出每個字然後合起來
 *  */

function solve(lines) {
  // 解題寫在這裡
  const strLength = Number(lines[0]);
  const numLength = Number(lines[strLength + 1]);
  const array = [...lines]; // 將 lines 轉為純陣列
  let str = "",
    result = "";

  for (let i = 1; i <= strLength; i++) {
    str += array[i];
  }

  for (let strPosition = 1; strPosition <= numLength; strPosition++) {
    const numPosition = array[strLength + strPosition + 1]; // 算出從第幾個地方開始取位置
    result += str[numPosition - 1];
  }
  console.log(result);
}

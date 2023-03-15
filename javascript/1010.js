/**
 * [靈魂伴侶](https://oj.lidemy.com/problem/1010)
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

isSoulmate = (num1, num2) => {
  if (Number(num1) === Number(num2)) return "Yes";
  return "No";
};

function solve(lines) {
  // 解題寫在這裡
  const numberArray = lines[0].split(" ");
  const soulmate = isSoulmate(numberArray[0], numberArray[1]);
  console.log(soulmate);
}

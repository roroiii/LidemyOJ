/**
 * [聯誼話題相親數](https://oj.lidemy.com/problem/1005)
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

getNumber = (amicable) => {
  let a = 0;
  let res = 0;

  for (let i = amicable; i > 0; i--) {
    const isInt = i % a === 0;
    if (isInt) res += a;
    a++;
  }
  return res;
};

function solve(lines) {
  // 解題寫在這裡

  for (let i = 0; i < lines.length; i++) {
    const num1 = getNumber(lines[i]);
    const num2 = getNumber(num1);
    if (Number(lines[i]) === 0) return;
    if (Number(lines[i]) === num2) console.log(num1);
    if (Number(lines[i]) !== num2) console.log("QQ");
  }
}

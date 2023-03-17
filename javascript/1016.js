/**
 * [不合群的人](https://oj.lidemy.com/problem/1016)
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

function solve(lines) {
  // 解題寫在這裡
  let people = Number(lines[0]);
  const arrA = [];
  const arrB = [];

  while (people > 0) {
    if (lines[people] === "A") {
      arrA.unshift(people);
    } else {
      arrB.unshift(people);
    }
    people--;
  }

  if (arrA.length === 0 || arrB.length === 0 || arrA.length === arrB.length) {
    console.log("PEACE");
  } else if (arrA.length > arrB.length) {
    for (let i = 0; i < arrB.length; i++) {
      console.log(arrB[i]);
    }
  } else {
    for (let i = 0; i < arrA.length; i++) {
      console.log(arrA[i]);
    }
  }
}

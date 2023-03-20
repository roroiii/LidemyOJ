/**
 * [印出聖誕樹](https://oj.lidemy.com/problem/1023)
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

function solve(lines) {
  // 解題寫在這裡
  const num = Number(lines[0]);

  for (let i = 1; i <= num; i++) {
    const spaceNum = num - i;
    const space = Array(spaceNum).fill(" ").join("");

    const startNum = i * 2 - 1;
    const start = Array(startNum).fill("*").join("");
    console.log(space + start);
  }

  for (let i = 1; i < num; i++) {
    const treeTrunkSpaceNum = num - 1;
    const treeSpace = Array(treeTrunkSpaceNum).fill(" ").join("");
    console.log(treeSpace + "|");
  }
}

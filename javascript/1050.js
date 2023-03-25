/**
 * [Two sum](https://oj.lidemy.com/problem/1050)
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
  const [n, target] = lines[0].split(" ");
  const array = lines[1].split(" ");
  let map = {};

  for (let i = 0; i < array.length; i++) {
    const num = target - array[i];

    if (map[num] === undefined) {
      map[array[i]] = i;
    } else {
      console.log(map[num], i);
    }
  }
}

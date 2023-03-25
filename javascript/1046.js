/**
 * [圈圈叉叉](https://oj.lidemy.com/problem/1046)
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
  const squares = lines[0] + lines[1] + lines[2]; // 'XXOXOXXOO'
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [1, 4, 8],
    [2, 4, 6],
  ];
  let result = "DRAW";

  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    const sameSymbol = squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    // console.log({ a: squares[a], b: squares[b], c: squares[c] });
    if (sameSymbol) result = squares[a];
  }
  console.log(result);
}

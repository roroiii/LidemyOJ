/**
 * [最近點對](https://oj.lidemy.com/problem/1033)
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

// 計算絕對值，也可用內建函數 Math.abs()
function abs(n) {
  if (n < 0) {
    return -n;
  }
  return n;
}

// 計算距離
function distance(x1, y1, x2, y2) {
  let dis = Math.sqrt(abs(x1 - x2) * abs(x1 - x2) + abs(y1 - y2) * abs(y1 - y2));
  return dis;
}

function solve(input) {
  let n = Number(input[0]);
  let dots = [];
  for (let i = 1; i < input.length; i += 1) {
    let temp = input[i].split(" ");
    dots.push({
      x: Number(temp[0]),
      y: Number(temp[1]),
    });
  }

  let min = Infinity; // 最短距離先設一個最大值
  let result = null;
  for (let i = 0; i < dots.length; i += 1) {
    for (let j = i + 1; j < dots.length; j += 1) {
      const { x: x1, y: y1 } = dots[i];
      const { x: x2, y: y2 } = dots[j];
      const dis = distance(x1, y1, x2, y2);
      if (dis < min) {
        min = dis;
        result = { x1, y1, x2, y2 };
      }
    }
  }

  function printAns1() {
    console.log(`${result.x2} ${result.y2}`);
    console.log(`${result.x1} ${result.y1}`);
  }

  function printAns2() {
    console.log(`${result.x1} ${result.y1}`);
    console.log(`${result.x2} ${result.y2}`);
  }

  if (result.x1 > result.x2) {
    printAns1();
  } else if (result.x1 < result.x2) {
    printAns2();
  } else {
    result.y1 > result.y2 ? printAns1() : printAns2();
  }
}

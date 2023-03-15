/**
 * [183 Club](https://oj.lidemy.com/problem/1011)
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

/* 解題一，簡單的解法 */
function solve(lines) {
  // 解題寫在這裡
  const length = Number(lines[0]);
  const heightArray = lines[1].split(" ");
  let result = 0;

  for (let i = 0; i < length; i++) {
    result += Number(heightArray[i]);
  }
  if (result / length >= 183) {
    console.log("real");
  } else {
    console.log("fake");
  }
}

/* 解題二，有語意的解法 */
function solve(lines) {
  // 解題寫在這裡
  const calculateTotalHeight = (heightArray, length) => {
    let result = 0;
    for (let i = 0; i < length; i++) {
      result += Number(heightArray[i]);
    }
    return result;
  };

  const length = Number(lines[0]);
  const heightArray = lines[1].split(" ");
  const totalHeight = calculateTotalHeight(heightArray, length);

  const is183 = totalHeight / length >= 183;
  if (is183) {
    console.log("real");
  } else {
    console.log("fake");
  }
}

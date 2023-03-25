/**
 * [搜尋數字](https://oj.lidemy.com/problem/1047)
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

/** 這一題 AC 有點問題，不能用字串比對，需要轉成數字比對才會通過。 */
function solve(lines) {
  // 解題寫在這裡
  const nums = lines[0].split(" ");
  const n = Number(nums[0]);
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Number(lines[i + 1]);
  }

  for (let i = n + 1; i < lines.length; i++) {
    let target = Number(lines[i]);
    console.log(search(arr, target));
  }
}

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

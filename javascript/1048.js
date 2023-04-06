/**
 * [最大連續和](https://oj.lidemy.com/problem/1048)
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

/** 寫法一，暴力破解複雜度O(N^3) */
function solve(lines) {
  const arr = [];

  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }

  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let currSum = 0;
      for (let k = i; k <= j; k++) {
        currSum += arr[k];
      }
      if (currSum > maxSum) maxSum = currSum;
    }
  }
  console.log(maxSum);
}

/** 寫法二，O(N) */
function solve(lines) {
  const arr = [];

  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }

  let maxSum = -Infinity;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currSum + arr[i]) {
      currSum = arr[i];
    } else {
      currSum = currSum + arr[i];
    }

    if (currSum > maxSum) maxSum = currSum;
  }
  console.log(maxSum);
}

/** 寫法三，把寫法二改成三元運算子，O(N) */
function solve(lines) {
  const arr = [];

  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }

  let maxSum = -Infinity;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum = arr[i] > currSum + arr[i] ? arr[i] : currSum + arr[i];
    maxSum = maxSum > currSum ? maxSum : currSum;
  }
  console.log(maxSum);
}

/** 之後可以再試試看使用二分法或是其他演算法。 */

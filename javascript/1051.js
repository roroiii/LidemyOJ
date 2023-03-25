/**
 * [逆序數對](https://oj.lidemy.com/problem/1051)
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

/** 寫法一，窮舉法 */
function solve(lines) {
  // 解題寫在這裡
  const length = Number(lines[0]);
  const array = lines[1].split(" ").map(Number); // 這題要先把 array 中的字串轉為數字才會 AC
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        result++;
      }
    }
  }
  console.log(result);
}

/** 寫法二，小花提供合併排序（Merge sort）
 * 這種寫法時間上會快很多，跟窮舉法比起來比較沒有超時的問題。
 */
function mergeSort(arr) {
  if (arr.length <= 1) return { sortedArr: arr, count: 0 };

  const mid = Math.floor(arr.length / 2);
  const { sortedArr: leftArr, count: leftCount } = mergeSort(arr.slice(0, mid));
  const { sortedArr: rightArr, count: rightCount } = mergeSort(arr.slice(mid));
  const { sortedArr, count: mergeCount } = merge(leftArr, rightArr);

  return { sortedArr, count: leftCount + rightCount + mergeCount };
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let count = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
      count += leftArr.length - leftIndex;
    }
  }

  return { sortedArr: mergedArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex)), count };
}

function solve(lines) {
  const n = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  const { count } = mergeSort(arr);
  console.log(count);
}

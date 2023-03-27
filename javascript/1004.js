/**
 * [聯誼順序比大小](https://oj.lidemy.com/problem/1004)
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

/** A 與 B 可能是很大的數字，但保證長度為 512 個位數以內
 * 可先使用字串長度比較
 */

/** 寫法一 */
function judge(rule, larger, smaller) {
  if (rule === "1") console.log(larger);
  else console.log(smaller);
  return false;
}

function solve(lines) {
  // 解題寫在這裡
  const array = lines.slice(1);

  for (let i = 0; i < array.length; i++) {
    let [a, b, k] = array[i].split(" ");

    if (a.length > b.length) {
      judge(k, "A", "B");
    } else if (a.length < b.length) {
      judge(k, "B", "A");
    } else {
      let flag = true;
      for (let j = 0; j < a.length; j++) {
        if (a[j] > b[j]) {
          flag = judge(k, "A", "B");
          break;
        } else if (a[j] < b[j]) {
          flag = judge(k, "B", "A");
          break;
        }
      }
      if (flag) console.log("DRAW");
    }
  }
}

/** 寫法二 */
function compareStrings(rule, larger, smaller) {
  console.log(rule === "1" ? larger : smaller);
}

function compare(a, b, k) {
  if (a.length !== b.length) {
    const larger = a.length > b.length ? "A" : "B";
    const smaller = a.length < b.length ? "A" : "B";
    compareStrings(k, larger, smaller);
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        compareStrings(k, "A", "B");
        return;
      } else if (a[i] < b[i]) {
        compareStrings(k, "B", "A");
        return;
      }
    }
    console.log("DRAW");
  }
}

function solve(lines) {
  // 解題寫在這裡
  const length = Number(lines[0]);

  for (let i = 1; i <= length; i++) {
    const [a, b, k] = lines[i].split(" ");
    compare(a, b, k);
  }
}

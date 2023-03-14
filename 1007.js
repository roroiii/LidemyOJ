/**
 * [聯誼排行大比拼](https://oj.lidemy.com/problem/1007)
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

const getTopNumber = (people) => {
  let topNumber = 0;
  for (let i = 1; i <= people; i++) {
    let data = lines[i].split(" ");
    if (Number(data[1]) >= topNumber) topNumber = data[1];
  }
  return topNumber;
};

function solve(lines) {
  // 解題寫在這裡
  const people = Number(lines[0]);
  const topNumber = getTopNumber(people);

  for (let i = 1; i <= people; i++) {
    let data = lines[i].split(" ");

    if (Number(data[1]) >= topNumber) {
      console.log(data[0]); // 依照順序 console.log 出來
    }
  }
}

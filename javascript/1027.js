/**
 * [信用卡號驗證](https://oj.lidemy.com/problem/1027)
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
  const cardNum = lines[0].split("-").join("").split("");

  // check
  const odd = cardNum.filter((num, index) => index % 2 === 0);
  const oddList = odd.map((num) => (num * 2 >= 10 ? num * 2 - 9 : num * 2));
  const oddSum = oddList.reduce((acc, num) => acc + num, 0);

  const even = cardNum.filter((num, index) => index % 2 === 1);
  const evenList = even.slice(0, -1); // 題目只用 15 碼加權驗證，所以刪除最後一位數
  const evenSum = evenList.reduce((acc, num) => acc + Number(num), 0);

  const result = (oddSum + evenSum) % 10 === 0 ? 0 : 10 - ((oddSum + evenSum) % 10);

  if (result === Number(cardNum[cardNum.length - 1])) {
    if (cardNum[0] === "4") {
      console.log("VISA");
    } else if (cardNum[0] === "5") {
      console.log("MASTER_CARD");
    }
  } else {
    console.log("INVALID");
  }
}

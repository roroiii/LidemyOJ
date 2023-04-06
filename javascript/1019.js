/**
 * [一條路走到黑](https://oj.lidemy.com/problem/1019)
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

/**
  123
  456
  789

  2（即向上）
  4（即向左）
  5（中間）
  6（即向右）
  8（即向下）
 */

function solve(lines) {
  let [w, h] = lines[0].split(" "); // 取得地圖的寬度 w 和高度 h
  let [x, y] = [0, 1]; // 設定起點座標為 (0, 1)，x 為橫向座標，y 為縱向座標
  let state = 5; // 設定初始方向為下方 (代號為 5)
  let ans = 0; // 計算走了幾步，初始值為 0

  // 進入 while 迴圈，直到抵達終點時跳出迴圈
  while (true) {
    // 如果抵達終點 (底部右方)，則跳出迴圈
    if (x == w - 1 && y == h) break;

    // 根據目前的方向來判斷下一步該往哪個方向前進
    if (lines[y][x + 1] === "." && state !== 4) {
      // 如果右邊可以走且不是從左邊來的，則往右前進
      state = 6; // 設定目前方向為右方 (代號為 6)
      x += 1; // 更新 x 座標
    } else if (lines[y][x - 1] === "." && state !== 6) {
      // 如果左邊可以走且不是從右邊來的，則往左前進
      state = 4; // 設定目前方向為左方 (代號為 4)
      x -= 1; // 更新 x 座標
    } else if (lines[y + 1][x] === "." && state !== 2) {
      // 如果下方可以走且不是從上方來的，則往下前進
      state = 8; // 設定目前方向為下方 (代號為 8)
      y += 1; // 更新 y 座標
    } else if (lines[y - 1][x] === "." && state !== 8) {
      // 如果上方可以走且不是從下方來的，則往上前進
      state = 2; // 設定目前方向為上方 (代號為 2)
      y -= 1; // 更新 y 座標
    }

    ans += 1; // 走了一步，計數器加 1
  }

  console.log(ans); // 輸出走到終點所需走的最短步數
}

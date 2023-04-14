/**
 * [走迷宮](https://oj.lidemy.com/problem/1053)
 * Difficulty:Low
 *
 * 解答用 console.log 寫出來。
 *
 */

var readline = require('readline')

var lines = []
var rl = readline.createInterface({
  input: process.stdin,
})

rl.on('line', function (line) {
  lines.push(line)
})

rl.on('close', function () {
  solve(lines)
})

function bfsMazeSolver(maze, start, end) {
  const queue = []
  const visited = []
  const prev = {}
  const rows = maze.length
  const cols = maze[0].length

  for (let i = 0; i < rows; i++) {
    visited.push([])
    for (let j = 0; j < cols; j++) {
      visited[i].push(false) // 先把全部路徑都設定成 false
    }
  }

  queue.push(start)
  visited[start[0]][start[1]] = true // 從 start 的位置開始走，設定成 true

  while (queue.length > 0) {
    const current = queue.shift() // 拿出 queue 的第一個值

    if (current[0] === end[0] && current[1] === end[1]) {
      return getPath(current) // 走到終點的話就回傳所有路徑
    }

    const neighbors = getNeighbors(current[0], current[1])

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i]
      const row = neighbor[0]
      const col = neighbor[1]

      if (!visited[row][col] && maze[row][col] !== '#') {
        visited[row][col] = true
        queue.push(neighbor)
        prev[`${row},${col}`] = current
      }
    }
  }

  return null

  function getPath(current) {
    const path = []

    // 從終點倒推回起點
    while (current) {
      path.push(current)
      current = prev[`${current[0]},${current[1]}`]
    }

    return path.reverse()
  }

  function getNeighbors(row, col) {
    const neighbors = []

    // 檢查上方是否有鄰居
    if (row > 0) {
      neighbors.push([row - 1, col])
    }

    // 檢查下方是否有鄰居
    if (row < rows - 1) {
      neighbors.push([row + 1, col])
    }

    // 檢查左方是否有鄰居
    if (col > 0) {
      neighbors.push([row, col - 1])
    }

    // 檢查右方是否有鄰居
    if (col < cols - 1) {
      neighbors.push([row, col + 1])
    }

    // 回傳所有鄰居座標
    return neighbors
  }
}

/**
 * 小花熱情贊助 bfsMazeSolver 解法

Example usage:
const maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0],
]

const start = [0, 0]
const end = [4, 4]
const path = bfsMazeSolver(maze, start, end)
*/

function solve(lines) {
  // 解題寫在這裡
  const [h, w] = lines[0].split(' ').map(Number)
  const maze = lines.slice(1).map((n) => n.split(''))

  const start = [0, 0]
  const end = [h - 1, w - 1]

  const path = bfsMazeSolver(maze, start, end)
  console.log(path.length - 1)
}

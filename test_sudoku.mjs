// test_sudoku.mjs — 从 index.html 提取数独纯函数并 Node 断言。
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import assert from "node:assert";

const here = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(here, "index.html"), "utf-8");
const m = html.match(/\/\/ ===== 纯函数：数独核心[\s\S]*?\/\/ ===== SUDOKU_LOGIC_END =====/);
assert.ok(m, "未找到数独纯函数标记");
const fns = new Function(`${m[0]}\nreturn { solveSudoku, isValidSolution, isValidPlace };`)();

// 已知谜题（LeetCode 9x9 经典题）
const puzzle = [
  [5,3,0, 0,7,0, 0,0,0],
  [6,0,0, 1,9,5, 0,0,0],
  [0,9,8, 0,0,0, 0,6,0],
  [8,0,0, 0,6,0, 0,0,3],
  [4,0,0, 8,0,3, 0,0,1],
  [7,0,0, 0,2,0, 0,0,6],
  [0,6,0, 0,0,0, 2,8,0],
  [0,0,0, 4,1,9, 0,0,5],
  [0,0,0, 0,8,0, 0,7,9],
];
const sol = fns.solveSudoku(puzzle);
assert.ok(sol, "应解出谜题");
assert.ok(fns.isValidSolution(sol), "解必须是合法完整数独");
// 原已知数字应被保留
assert.strictEqual(sol[0][0], 5);
assert.strictEqual(sol[8][8], 9);
// 无解盘
const unsolvable = puzzle.map(r => r.slice()); unsolvable[0][1] = 5;
assert.strictEqual(fns.solveSudoku(unsolvable), null);

console.log("OK: sudoku-solver-ai 全部用例通过");
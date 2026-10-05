# sudoku-solver-ai

单 HTML 数独应用：生成题目（挖空）、回溯法一键求解、逐步提示下一格。双击 `index.html` 即用，纯前端、零依赖、无需联网。

## 功能
- 9×9 盘面，点击输入；
- **生成题目**：从可解盘面挖空；
- **求解**：回溯法填出完整解；
- **提示一格**：高亮下一个应填的位置与数字；
- 核心逻辑（求解/合法性校验）用纯函数实现，可用 Node 断言。

## 运行测试
```bash
node test_sudoku.mjs
```

## 无 API key
完全本地运行，不需要任何 key。

## License
MIT License，Copyright (c) 2026 ljiang9

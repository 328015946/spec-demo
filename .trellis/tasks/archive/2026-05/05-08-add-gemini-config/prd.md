# PRD: 添加 .gemini 配置

## 目标
为 Gemini CLI 提供 Trellis 集成支持，使得在 Gemini 环境下也能享受自动化上下文注入、工作流引导和子代理功能。

## 需求
1. **创建目录结构**：在项目根目录创建 `.gemini` 文件夹，包含 `agents`, `commands`, `hooks`, `skills` 子目录。
2. **配置 Hook**：创建 `.gemini/hooks.json`，配置 `SessionStart`, `BeforeAgent` 和 `PreToolUse` 钩子。
3. **迁移脚本**：将 `.trellis` 相关的钩子脚本从 `.cursor/hooks` 或 `.claude/hooks` 迁移/适配到 `.gemini/hooks`。
4. **迁移代理定义**：将 `trellis-implement.md`, `trellis-check.md`, `trellis-research.md` 迁移到 `.gemini/agents`。
5. **迁移技能定义**：将 Trellis 相关技能迁移到 `.gemini/skills`。

## 验收标准
- [ ] `.gemini` 目录结构完整。
- [ ] `.gemini/hooks.json` 格式正确且指向正确的脚本路径。
- [ ] 所有的 `.py` 脚本都已正确放置在 `.gemini/hooks` 中。
- [ ] 子代理和技能定义已就绪。

# 工作区总索引

> 汇总本项目所有开发者的 AI 会话记录与维护说明。

---

## 概览

本目录用于统一管理 Trellis 工作区记录：

- 每位开发者有独立目录：`.trellis/workspace/{developer}/`
- 每位开发者目录下维护：
  - `index.md`（个人索引，通常由 `add_session.py` 自动更新）
  - `journal-N.md`（会话日志，按序号递增）

---

## 目录结构

```text
workspace/
├─ index.md                     # 本文件：全局总索引（人工维护）
└─ {developer}/                 # 开发者个人目录
   ├─ index.md                  # 个人索引（自动更新）
   └─ journal-N.md              # 会话日志（N=1,2,3...）
```

---

## 当前开发者状态

| 开发者 | 最近活跃   | 会话数 | 当前日志文件   | 个人索引                           |
| ------ | ---------- | -----: | -------------- | ---------------------------------- |
| `xiao` | 2026-05-08 |      6 | `journal-1.md` | `.trellis/workspace/xiao/index.md` |

> 说明：本表来自当前仓库中的实际记录，请在新增开发者或会话变化后手动同步。

---

## 使用说明

### 新开发者初始化

```bash
python ./.trellis/scripts/init_developer.py <developer-name>
```

初始化后会创建：

1. `.trellis/.developer`（开发者身份文件，gitignore）
2. `.trellis/workspace/<developer>/`
3. `.trellis/workspace/<developer>/index.md`
4. `.trellis/workspace/<developer>/journal-1.md`

### 记录一次会话（推荐）

```bash
python ./.trellis/scripts/add_session.py --title "<会话标题>" --summary "<摘要>"
```

该命令会自动更新 **个人索引**（`workspace/<developer>/index.md`）并追加 `journal`。

---

## 维护约定（重要）

- `workspace/<developer>/index.md`：由 `add_session.py` 自动维护。
- `workspace/index.md`（本文件）：**不会自动维护**，需要人工更新。
- 建议在以下时机更新本文件：
  - 新增开发者
  - 开发者会话数明显变化（例如阶段收尾）
  - 需要对外展示团队活动总览

---

## 会话记录建议模板（中文）

```markdown
## Session {N}: {标题}

**Date**: YYYY-MM-DD **Task**: {任务名} **Branch**: `{分支名}`

### Summary

{一句话总结}

### Main Changes

- {改动 1}
- {改动 2}

### Git Commits

| Hash      | Message    |
| --------- | ---------- |
| `abc1234` | {提交信息} |

### Testing

- [OK] {测试结果}

### Status

[OK] **Completed** / [~] **In Progress** / [P] **Blocked**

### Next Steps

- {下一步 1}
```

---

## 备注

- 当前全局索引已从默认模板切换为中文版本。
- 若后续希望“自动化更新本文件”，可新增脚本扫描 `workspace/*/index.md` 后回写此文件。

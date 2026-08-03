# 拾味小馆 · 餐厅首页

基于 **Vue 3 + Vite** 的单页餐厅官网演示项目,纯前端、无后端依赖。

## 技术栈

- Vue 3(`<script setup>` 组合式 API)
- Vite 6
- 原生 CSS(无 UI 框架,含响应式布局与入场动画)

## 快速开始

```bash
# 1. 安装依赖(需要联网)
pnpm install

# 2. 启动开发服务器 http://localhost:5173
pnpm dev

# 3. 生产构建
pnpm build

# 4. 本地预览构建产物
pnpm preview
```

> 本机未安装全局 Node 时,可使用 Codex 桌面自带运行时:
> `C:\Users\20357\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe`
> 配合 `...\dependencies\bin\fallback\pnpm.cmd` 使用。

## 页面区块

| 区块 | 说明 |
| --- | --- |
| 顶部导航 | 固定吸顶、滚动变色、移动端抽屉菜单 |
| Hero 主视觉 | 手绘 SVG 面碗插画、浮动评分卡片、数据统计 |
| 关于我们 | 品牌故事、三大特色、发展里程碑 |
| 特色菜单 | 5 个分类 Tab 切换、菜品卡片(价格/标签/描述) |
| 餐厅环境 | 6 宫格空间卡片(悬停动效) |
| 顾客评价 | 自动轮播 + 圆点切换 |
| 在线订位 | 表单校验 + 时间快捷选择 + 提交成功态 |
| 页脚 | 导航、宴请服务、联系方式、社交图标 |

## 结构说明

```
├─ index.html                 # 入口 HTML(加载 Google Fonts,离线有回退字体)
├─ package.json
├─ vite.config.js
└─ src
   ├─ main.js                 # 应用入口 + v-reveal 滚动动画指令
   ├─ style.css               # 全局样式变量/基础样式
   ├─ App.vue                 # 页面组装
   └─ components/             # 各区块组件
```

## 自定义

- 品牌色、字体、圆角等统一在 `src/style.css` 的 `:root` 中调整。
- 菜品数据集中在 `src/components/MenuSection.vue` 的 `dishes` 数组。
- 预订信息为纯前端演示,如需真实提交请接入后端接口。
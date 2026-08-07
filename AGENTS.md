# AGENTS.md · 项目指南

> 本文件供 Codex 等 AI 编码助手阅读,包含项目关键信息与开发约定。

## 个人偏好

- 我是红豆,很懒但是喜欢新技术。
- 中文交流,回复简洁清晰。

## 项目概况

**拾味小馆(ShiWei Bistro)· 新中式融合餐厅官网**

- 类型:纯前端单页应用(SPA),无后端依赖,内容为演示数据
- 技术栈:Vue 3.5(`<script setup>` 组合式 API)+ Vite 6 + pnpm 11.9
- 包名:`shiwei-bistro` v1.0.0(`type: module`)
- 页面语言:`zh-CN`

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `index.html` | 入口 HTML,加载 Google Fonts(Noto Serif SC / Noto Sans SC) |
| `vite.config.js` | Vite 配置,`base: './'` 支持子路径部署,端口 5173 |
| `package.json` | 依赖与脚本(`dev` / `build` / `preview`) |
| `src/main.js` | 应用入口,注册全局 `v-reveal` 滚动动画指令 |
| `src/App.vue` | 页面组件总装 |
| `src/style.css` | 全局样式与 `:root` 设计变量 |
| `src/components/` | 9 个页面区块组件 |
| `public/favicon.svg` | 站点图标 |
| `.github/workflows/deploy.yml` | GitHub Pages 自动部署(推送 main 触发) |
| `dist/` | 构建产物目录 |

## 页面区块与组件

| 组件 | 区块 | 要点 |
| --- | --- | --- |
| `SiteHeader.vue` | 顶部导航 | 固定吸顶、滚动变色;≤900px 切换汉堡抽屉菜单 |
| `HeroSection.vue` | 首屏 Hero | 手绘 SVG 面碗插画、浮动评分卡;统计数据在 `stats` 数组 |
| `AboutSection.vue` | 关于我们 | 品牌故事、三大特色、发展里程碑(2014→2026) |
| `MenuSection.vue` | 特色菜单 | 5 分类 Tab 切换;菜品数据集中在 `dishes` 数组 |
| `GallerySection.vue` | 餐厅环境 | 6 宫格空间卡片(`spaces` 数组),悬停动效 |
| `TestimonialsSection.vue` | 顾客评价 | 自动轮播(5.2s),圆点切换 |
| `ReservationSection.vue` | 在线订位 | 表单前端校验,提交后展示成功状态 |
| `SiteFooter.vue` | 页脚 | 导航、业务服务、社交图标 |
| `BackToTop.vue` | 返回顶部 | 滚动超过 480px 显示,平滑滚动 |

页面锚点:`#home` `#about` `#menu` `#gallery` `#testimonials` `#reservation`

## 数据在哪里改

- 菜品:编辑 `src/components/MenuSection.vue` 的 `dishes` 数组(`id` 对应分类)
- 环境卡片:编辑 `src/components/GallerySection.vue` 的 `spaces` 数组
- 顾客评价:`src/components/TestimonialsSection.vue` 的 `reviews` 数组
- 首屏统计:`src/components/HeroSection.vue` 的 `stats` 数组
- 导航链接:`src/components/SiteHeader.vue` 的 `links` 数组
- 联系信息/营业时间:`src/components/ReservationSection.vue` 模板中的联系列表

## 样式约定

- 全局设计变量统一在 `src/style.css` 的 `:root` 中定义
- 品牌色:深绿 `--green-dark`(#14291c)、金色 `--gold`(#d9a441)、暖橙 `--accent`(#c96f3a)、米白 `--cream`(#faf6ee)
- 字体:标题 `--font-serif`(Noto Serif SC),正文 `--font-sans`(Noto Sans SC)
- 组件样式使用 `<style scoped>`,全局类(如 `.container`、`.btn`)定义在 `style.css`
- 响应式断点:900px(导航)、960px(Hero)、520px(统计)

## 常用命令

```bash
pnpm install   # 安装依赖
pnpm dev       # 启动开发服务器 http://localhost:5173
pnpm build     # 生产构建,输出到 dist/
pnpm preview   # 本地预览构建产物
```

> 本机未安装全局 Node,可用 Codex 桌面自带运行时:
> `C:\Users\20357\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe`
> 配合 `...\dependencies\bin\fallback\pnpm.cmd` 使用。

## 部署

- 推送到 `main` 分支触发 GitHub Actions(见 `.github/workflows/deploy.yml`),自动构建并部署到 GitHub Pages
- `vite.config.js` 中 `base: './'`,构建产物可在子路径下访问
- 注意:工作区中 `deploy.yml` 当前已被删除(未提交),需要恢复时可用 `git show HEAD:.github/workflows/deploy.yml` 找回

## 注意事项

- 修改中文文案时保持文件 UTF-8 编码,避免乱码
- 本机终端可能以 GBK 显示中文,读取文件时显式指定 UTF-8 更稳妥
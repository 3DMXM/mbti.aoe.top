# MBTI 性格测试网站部署指南

一个基于 Vue 3 + TypeScript + Vite 构建的多语言 MBTI 性格测试网站，支持6种语言和完整的SEO优化。

## 🌍 多语言支持

网站支持以下语言版本：
- 中文 (zh): `/zh/*`
- 英文 (en): `/en/*` 
- 日文 (ja): `/ja/*`
- 法文 (fr): `/fr/*`
- 德文 (de): `/de/*`
- 西班牙文 (es): `/es/*`

## 🚀 GitHub Pages 部署

### 自动部署（推荐）

1. **启用 GitHub Pages**：
   - 进入 GitHub 仓库设置页面
   - 找到 "Pages" 设置
   - 在 "Source" 下选择 "GitHub Actions"

2. **推送代码触发部署**：
   ```bash
   git add .
   git commit -m "feat: add GitHub Pages deployment"
   git push origin main
   ```

3. **访问网站**：
   - 部署完成后，网站将可通过以下地址访问：
   - `https://3DMXM.github.io/MBTI.aoe.top/`

### 手动部署

如果您想要手动部署到 GitHub Pages：

```bash
# 构建项目
npm run build:github

# 部署到 gh-pages 分支
npm run deploy
```

## 🔧 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📝 部署配置说明

### Vite 配置
- `base`: 设置为 `/MBTI.aoe.top/` 以匹配 GitHub Pages 的路径
- 代码分割优化，分离 vendor 和 i18n 包

### 路由配置
- 使用 `import.meta.env.BASE_URL` 确保路由在不同环境下正常工作
- 添加了 404.html 处理 SPA 路由重定向

### GitHub Actions 工作流
- 自动在 `main` 分支推送时触发构建和部署
- 使用官方 GitHub Pages 部署 Action
- 支持 Node.js 18 环境

## 🌐 访问地址

- **开发环境**: http://localhost:3000
- **GitHub Pages**: https://3DMXM.github.io/MBTI.aoe.top/

## 📦 构建产物

构建后的文件将输出到 `dist` 目录，包含：
- 优化后的 HTML、CSS、JavaScript 文件
- 静态资源（图片、字体等）
- Service Worker（如果配置）

## 🔍 故障排除

如果部署后网站无法正常访问：

1. 检查 GitHub Pages 设置是否正确
2. 确认 base URL 配置是否与仓库名称匹配
3. 查看 GitHub Actions 运行日志排查构建错误
4. 确保所有静态资源路径正确

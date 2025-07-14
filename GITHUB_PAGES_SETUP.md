# GitHub Pages 部署指南

## 🚀 一键部署

您的 MBTI 测试网站已经配置好了 GitHub Pages 自动部署！

### 步骤 1: 启用 GitHub Pages

1. 进入您的 GitHub 仓库：`https://github.com/3DMXM/MBTI.aoe.top`
2. 点击 `Settings` 标签
3. 在左侧菜单中找到 `Pages`
4. 在 `Source` 部分选择 `GitHub Actions`

### 步骤 2: 推送代码触发部署

```bash
git add .
git commit -m "feat: add GitHub Pages deployment"
git push origin main
```

### 步骤 3: 等待部署完成

- GitHub Actions 会自动运行部署工作流
- 您可以在 `Actions` 标签页查看部署进度
- 部署通常需要 2-5 分钟

### 步骤 4: 访问您的网站

部署完成后，您的网站将在以下地址可用：
**https://3DMXM.github.io/MBTI.aoe.top/**

## 🔧 本地测试部署

在推送之前，您可以本地测试构建：

```bash
# 测试生产构建
npm run build:github

# 预览构建结果
npm run preview
```

## 📝 已配置的功能

✅ **自动部署**: 推送到 main 分支时自动部署  
✅ **SPA 路由**: 支持 Vue Router 的单页应用路由  
✅ **资源优化**: 代码分割和压缩  
✅ **多语言支持**: 中英文界面  
✅ **响应式设计**: 移动端适配  

## 🔍 故障排除

如果遇到问题：

1. **检查 Actions 日志**: 在仓库的 Actions 标签查看错误信息
2. **验证设置**: 确保 Pages 设置选择了 "GitHub Actions"
3. **清除缓存**: 在浏览器中强制刷新 (Ctrl+F5)

## 🎉 下一步

现在您可以：
- 分享您的 MBTI 测试网站给朋友们
- 继续开发新功能
- 每次推送代码都会自动更新网站

祝您使用愉快！🌟

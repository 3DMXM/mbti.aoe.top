# 部署测试清单

## 🔍 GitHub Pages 部署后测试清单

在代码推送到生产环境后，请按以下步骤验证网站功能：

### ✅ 基础路由测试

1. **根路径访问**
   - [ ] `https://mbti.aoe.top/` → 自动重定向到 `/zh`
   - [ ] 无无限重定向循环
   - [ ] 页面正常加载

2. **语言特定路径**
   - [ ] `https://mbti.aoe.top/zh` → 中文首页
   - [ ] `https://mbti.aoe.top/en` → 英文首页
   - [ ] `https://mbti.aoe.top/ja` → 日文首页
   - [ ] `https://mbti.aoe.top/fr` → 法文首页
   - [ ] `https://mbti.aoe.top/de` → 德文首页
   - [ ] `https://mbti.aoe.top/es` → 西班牙文首页

3. **子页面路径**
   - [ ] `https://mbti.aoe.top/zh/test` → 中文测试页
   - [ ] `https://mbti.aoe.top/en/about` → 英文关于页
   - [ ] `https://mbti.aoe.top/ja/result` → 日文结果页

### ✅ 重定向功能测试

1. **旧路径兼容性**
   - [ ] `https://mbti.aoe.top/test` → 重定向到 `/zh/test`
   - [ ] `https://mbti.aoe.top/about` → 重定向到 `/zh/about`
   - [ ] `https://mbti.aoe.top/result` → 重定向到 `/zh/result`

2. **404处理**
   - [ ] `https://mbti.aoe.top/nonexistent` → 重定向到 `/zh`
   - [ ] `https://mbti.aoe.top/zh/nonexistent` → 正确处理404

### ✅ 语言切换测试

1. **界面语言切换**
   - [ ] 在中文页面切换到英文 → 正确跳转到对应英文页面
   - [ ] 在测试页面切换语言 → 保持在测试页面但切换语言
   - [ ] 语言选择持久化到localStorage

2. **路由同步**
   - [ ] URL路径与界面语言一致
   - [ ] 浏览器刷新后语言状态保持
   - [ ] 浏览器前进/后退按钮正常工作

### ✅ SEO验证

1. **Meta标签**
   - [ ] 查看页面源代码，确认title标签正确
   - [ ] description meta标签包含对应语言内容
   - [ ] hreflang标签指向所有语言版本

2. **搜索引擎工具**
   - [ ] Google Search Console 无错误
   - [ ] `https://mbti.aoe.top/sitemap.xml` 可访问
   - [ ] `https://mbti.aoe.top/robots.txt` 可访问

### ✅ 性能测试

1. **加载速度**
   - [ ] 首页加载时间 < 3秒
   - [ ] 语言切换响应时间 < 1秒
   - [ ] 测试页面交互流畅

2. **移动端适配**
   - [ ] 移动端导航菜单正常
   - [ ] 语言切换器在移动端可用
   - [ ] 触摸交互正常

### ✅ 功能测试

1. **MBTI测试功能**
   - [ ] 测试流程完整可用
   - [ ] 每种语言的测试问题显示正确
   - [ ] 结果页面在所有语言下正常显示

2. **跨浏览器兼容性**
   - [ ] Chrome - 所有功能正常
   - [ ] Firefox - 所有功能正常
   - [ ] Safari - 所有功能正常
   - [ ] Edge - 所有功能正常

### 🐛 问题排查

如果遇到问题，请检查：

1. **无限重定向**
   - 检查URL是否包含`~and~`字符
   - 检查浏览器控制台是否有路由错误
   - 清除浏览器缓存重新测试

2. **404错误**
   - 验证GitHub Pages设置正确
   - 确认dist目录已正确部署
   - 检查404.html文件是否存在

3. **语言不正确**
   - 检查localStorage中的语言设置
   - 验证路由meta信息
   - 确认i18n配置正确

### 📊 监控建议

部署完成后建议添加：
- Google Analytics 跟踪
- 错误监控服务
- 性能监控工具
- 用户行为分析

---

最后更新：2025年1月15日

# MBTI 性格测试网站

🧠 一个现代化的多语言 MBTI (Myers-Briggs Type Indicator) 性格测试平台，支持6种语言，帮助用户深入了解自己的性格类型和特点。

## ✨ 功能特性

- 🎯 **专业测试**：60道精心设计的问题，涵盖MBTI四个维度
- 🌍 **多语言支持**：中文、英文、日文、法文、德文、西班牙文
- � **语言特定路由**：每种语言独立的URL路径 (`/zh/*`, `/en/*`, `/ja/*` 等)
- �📊 **7点量表**：更精确的评分系统，提供更准确的结果
- 🎨 **现代设计**：深色主题，优雅的用户界面
- 📱 **响应式布局**：完美适配桌面端、平板和移动设备
- ⚡ **智能交互**：点击选项自动进入下一题，流畅的用户体验
- 🔄 **进度保存**：支持回退到上一题，可以修改答案
- 📈 **详细报告**：完整的16种性格类型分析和特征描述
- 🔍 **SEO优化**：完整的meta标签、Open Graph、Schema.org支持

## 🌐 多语言路由

网站支持以下语言特定的路由：

| 语言     | 代码 | 路由路径 | 示例       |
| -------- | ---- | -------- | ---------- |
| 中文     | zh   | `/zh/*`  | `/zh/test` |
| English  | en   | `/en/*`  | `/en/test` |
| 日本語   | ja   | `/ja/*`  | `/ja/test` |
| Français | fr   | `/fr/*`  | `/fr/test` |
| Deutsch  | de   | `/de/*`  | `/de/test` |
| Español  | es   | `/es/*`  | `/es/test` |

每种语言都包含以下页面：
- 首页: `/{lang}/`
- 测试页: `/{lang}/test`
- 结果页: `/{lang}/result`
- 关于页: `/{lang}/about`

## 🚀 技术栈

- **前端框架**：Vue 3 + TypeScript
- **构建工具**：Vite
- **路由管理**：Vue Router 4 (支持多语言路由)
- **国际化**：Vue I18n 9 (6种语言支持)
- **状态管理**：Pinia
- **SEO优化**：动态meta标签、hreflang、sitemap
- **样式方案**：原生CSS + CSS Grid + Flexbox
- **开发工具**：VS Code + Volar

## 📦 项目结构

```
mbti.aoe.top/
├── src/
│   ├── components/          # 公共组件
│   ├── data/               # 数据文件
│   │   ├── questions.ts    # 测试题目数据
│   │   └── mbtiTypes.ts   # MBTI类型定义
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia状态管理
│   │   └── mbtiStore.ts   # MBTI测试状态
│   ├── types/             # TypeScript类型定义
│   ├── views/             # 页面组件
│   │   ├── Home.vue       # 首页
│   │   ├── Test.vue       # 测试页面
│   │   ├── Result.vue     # 结果页面
│   │   └── About.vue      # 关于页面
│   ├── App.vue            # 根组件
│   ├── main.ts            # 应用入口
│   └── style.css          # 全局样式
├── public/                # 静态资源
├── index.html            # HTML模板
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript配置
├── vite.config.ts        # Vite配置
└── README.md            # 项目说明
```

## 🛠️ 安装和运行

### 环境要求

- Node.js (版本 16.0 或更高)
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

访问 `http://localhost:5173` 查看应用

### 构建生产版本

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 🎮 使用指南

### 开始测试

1. 访问网站首页
2. 点击"开始测试"按钮
3. 阅读每个问题，选择最符合你的选项（1-7分）
4. 系统会自动进入下一题
5. 完成所有60道题目
6. 查看你的MBTI性格类型结果

### 功能说明

- **7点量表**：1(很不符合) → 7(很符合)
- **自动前进**：选择答案后自动跳转下一题
- **回退功能**：可以返回上一题修改答案
- **进度显示**：实时显示测试进度
- **响应式**：支持各种设备尺寸

## 📊 MBTI 维度说明

本测试基于四个核心维度：

1. **外向(E) vs 内向(I)**：能量来源和社交偏好
2. **感觉(S) vs 直觉(N)**：信息收集方式
3. **思考(T) vs 情感(F)**：决策制定方式
4. **判断(J) vs 感知(P)**：生活方式偏好

## 🎨 设计特色

### 视觉设计
- 深色渐变背景
- 半透明毛玻璃效果
- 紫蓝色调主题
- 流畅的动画过渡

### 交互设计
- 直观的选项布局
- 悬停反馈效果
- 移动端汉堡菜单
- 加载动画

### 响应式设计
- 桌面端：7列网格布局
- 平板端：3列网格布局
- 移动端：单列垂直布局

## 🔧 自定义配置

### 修改题目

编辑 `src/data/questions.ts` 文件来修改或添加测试题目：

```typescript
export const questions: Question[] = [
  {
    id: 1,
    text: "你的问题内容",
    dimension: "EI", // EI, SN, TF, JP
    isReversed: false // 是否反向计分
  }
  // ...更多题目
]
```

### 修改MBTI类型

编辑 `src/data/mbtiTypes.ts` 文件来自定义性格类型描述。

### 样式自定义

主要样式文件：
- `src/style.css` - 全局样式和主题色彩
- 各个 `.vue` 文件的 `<style>` 部分 - 组件特定样式

## 🌐 部署

### 静态网站部署

1. 构建生产版本：`npm run build`
2. 将 `dist/` 目录部署到任何静态网站托管服务：
   - Vercel
   - Netlify
   - GitHub Pages
   - 阿里云OSS
   - 腾讯云COS

### 环境变量

如需自定义配置，可以创建 `.env` 文件：

```bash
VITE_APP_TITLE=MBTI性格测试
VITE_APP_DESCRIPTION=专业的MBTI性格测试平台
```

## 🔧 GitHub Pages 部署优化

### 修复无限重定向问题

本项目针对GitHub Pages部署进行了特殊优化，解决了多语言路由在生产环境中可能出现的无限重定向问题：

- **404.html 优化**：自定义404页面处理，直接重定向到正确的语言路径
- **查询字符串处理**：优化GitHub Pages的SPA重定向机制，避免`~and~`参数累积
- **路由守卫增强**：在路由层面检测并阻止重定向循环
- **生产环境检测**：根据环境自动调整路由行为

### 支持的访问方式

✅ `https://mbti.aoe.top/zh` - 直接访问中文版  
✅ `https://mbti.aoe.top/en/test` - 直接访问英文测试页  
✅ `https://mbti.aoe.top/` - 自动重定向到默认语言  
✅ 旧版本链接自动重定向到新的多语言路由

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -am 'Add some feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 创建 Pull Request

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 Vue 3 Composition API 最佳实践
- 保持代码简洁和可读性
- 添加适当的注释

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- **GitHub**: [3DMXM](https://github.com/3DMXM)
- **项目地址**: [https://github.com/3DMXM/mbti.aoe.top](https://github.com/3DMXM/mbti.aoe.top)

## 🙏 致谢

- MBTI理论基础来自 Myers-Briggs Type Indicator®
- 设计灵感来自现代化心理测试平台
- 感谢所有贡献者的支持

---

**开始探索你的性格类型吧！** 🎯✨

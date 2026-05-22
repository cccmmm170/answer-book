# 答案之书 - NFC 版

手机碰一下 NFC 标签，自动打开"答案之书"网页，随机显示一条人生指引。

## 项目结构

```
├── index.html      # 主页面
├── style.css       # 样式（书本翻开动画）
├── script.js       # 随机答案逻辑
└── answers.json    # 答案库（50条）
```

## 部署步骤

### 方法一：GitHub Pages（推荐，免费）

1. 在 GitHub 创建一个新仓库（如 `answer-book`）
2. 把项目文件推送上去：

```bash
git init
git add .
git commit -m "init: answer book"
git remote add origin https://github.com/你的用户名/answer-book.git
git push -u origin main
```

3. 进入仓库 Settings → Pages → Source 选择 `main` 分支，保存
4. 等待几分钟，你会得到一个地址如：`https://你的用户名.github.io/answer-book/`

### 方法二：Vercel（更快）

1. 注册 [Vercel](https://vercel.com)
2. 导入 GitHub 仓库，一键部署
3. 获得类似 `https://answer-book-xxx.vercel.app` 的地址

### 方法三：本地测试

直接用浏览器打开 `index.html` 即可预览效果。

## NFC 标签写入

### 你需要准备

- NFC 标签（NTAG213/215/216 均可，淘宝搜"NFC贴纸"，几毛钱一个）
- 手机安装 **NFC Tools** App（iOS / Android 均有）

### 写入步骤

1. 打开 NFC Tools App
2. 点击"写入" → "添加记录" → "URL"
3. 输入你部署好的网址（如 `https://你的用户名.github.io/answer-book/`）
4. 点击"写入"，将手机靠近 NFC 标签
5. 写入成功！

### 使用

任何支持 NFC 的手机靠近标签，会自动弹出浏览器打开答案之书页面。

## 自定义答案

编辑 `script.js` 中的 `answers` 数组，添加或修改你想要的答案即可。

## 兼容性

- iOS 13+ 的 iPhone（iPhone 7 及以上）原生支持读取 NFC 标签中的 URL
- 大部分 Android 手机（带 NFC 功能）原生支持
- 无需安装任何 App，碰一下自动打开浏览器

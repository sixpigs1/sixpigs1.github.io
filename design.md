# Personal Academic Website — Design Specification

## 1. 项目目标

构建一个 **简洁、学术导向、可长期维护的个人主页**，用于展示：
- 学术背景与研究方向
- 论文 / 预印本
- 奖项
- 较为个人化但仍保持克制的经历记录（Explore / Journey）

核心原则：
- 信息结构扁平，避免页面过度拆分
- Home 页面信息密度最高
- 学术内容优先，但允许有限个人表达
- 支持中英文双语切换
- 使用静态站点，便于托管与长期维护

---

## 2. 页面结构（Information Architecture）

网站仅包含 4 个主页面：

```

/
├── Home
├── Publications
├── Awards
└── Explore / Journey

```

### 页面关系说明
- Home 页面展示基本信息
- Publications / Awards 页面展示 **完整列表**
- Home 中通过 “More →” 链接跳转到对应完整页面
- Explore / Journey 为非正式页面，记录一些其他经历

---

## 3. 各页面设计说明

### 3.1 Home（核心页面）

Home 页面包含以下 section（自上而下）：

#### 1. Hero Section
- 包含个人照片、姓名、职业、研究方向等
- 姓名（中 / 英）: 叶泽玮 / Zewei Ye
- 当前身份（如：Undergraduate Student, 电子与计算机工程）
- 研究方向关键词（如：Embodied AI, Robotics, VLA）
- 其他信息：
  - Email: yzw758241@sjtu.edu.cn
  - GitHub: https://github.com/sixpigs1
  - Google Scholar: https://scholar.google.com/citations?user=6mVNnkMAAAAJ&hl=en

要求：
- 学术风格
- 信息高度浓缩

---

#### 2. About
- 一个简短段落（4–6 行）
- 内容包括：
  - 当前研究方向
  - 技术 / 方法偏好
  - 长期学术兴趣

---

#### 3. Experience
- 按时间倒序
- 仅包含 **学术 / 技术相关经历**
- 不包含社团、志愿活动等（这些放在 Explore / Journey 页面）

条目格式建议：
```
[Year–Year] Institution / Group
Role — keywords
```

---

#### 4. Publications / Preprints
- 展示一个最简单的列表，不包含论文细节

条目格式：
```
[Preprint/Publication Year] Title Authors [Paper(link)] [Code(link)]
```

右下角包含链接：
```
details → Preprints / Publications
```
---

#### 5. Selected Awards
- 只展示奖项基本名称，不包括具体内容

条目格式：
```
[Year] Award Name — Organization
```

右下角包含链接：
```
details → Awards
```

### 3.2 Publications 页面

目的：完整、标准、学术化地展示论文与预印本。

结构：
- Preprints
- Publications

条目格式统一：每项工作提供一个方框，左侧是一张关键图片，右侧是基本信息。基本信息的格式如下
```
Title
Authors
Staus — Journal / Conference / Workshop / Preprint
Abstract
[Paper(link)] [Code(link)]
```

---

### 3.3 Awards 页面

展示所有奖项，结构清晰即可。

分类建议：
- Academic Awards
- Competitions / Grants

条目格式：每个奖项展示一个方框，左侧是奖项证书图片，右侧是基本信息。基本信息的格式如下
```
[Year] Award Name — Organization
Description
```

---

### 3.4 Explore / Journey 页面

页面定位：
> 非正式，但不随意；  
> 用于记录与学术并行的人生轨迹。

内容模块建议：

#### 1. Experiences beyond Research
- 社团
- 支教
- 工程项目
- 其他经历

格式：同样是一个方框，左侧是图片，右侧是基本信息。基本信息的格式如下
```
[Year] Activity Name
description
```
方框点击后应当可以展开来展示更多图片和信息等。

---

#### 2. Reflections（可选）
- 此处留一块内容可以放一些个人观点等。

---

## 4. 技术实现方案

### 4.1 推荐技术栈

优先方案：
```
Astro
* Static Site Generation (SSG)
* Markdown / MDX content
```

### 4.2 技术实现要求

由于个人网页在右新的工作和经历时随时可能更新，因此需要考虑网页的可拓展性，也就是便于在不更改主要代码的情况下方便的增添新的 preprints / publications

---

## 5. 设计风格约束

- Academic / minimal
- 单栏布局
- 白色背景
- 单一强调色
- 无或极少动画
- 注重可读性而非视觉炫技

---

## 6. 部署与托管

推荐方案：
```
GitHub Repository
→ Cloudflare Pages
→ Global CDN
```

- 使用静态构建
- 图片直接放在 `public/images`
- Cloudflare Pages 负责 CDN 与 HTTPS

---

## 7. 迭代原则

- 第一版不追求完整
- Home + Publications 优先
- Explore / Reflections 可逐步补充
- 内容更新优先于视觉微调

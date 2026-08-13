# awesome-dataviz

前后端分离的数据可视化图表挑战库项目。

项目目标是做一个 DataViz Challenge Library：用户通过完成不同类型的图表实现挑战，从基础图表、交互能力、复杂图表逐步练习到完整数据看板。

## 项目结构

```text
awesome-dataviz/
├── package.json              # 根目录脚本，负责同时启动前后端
├── package-lock.json
├── backend/
│   ├── go.mod                # Go module: awesome-dataviz/backend
│   ├── main.go
│   └── demo.go
└── frontend/
    ├── package.json          # Next.js 前端依赖和脚本
    ├── next.config.ts
    ├── tsconfig.json
    ├── eslint.config.mjs
    ├── postcss.config.mjs
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── favicon.ico
    ├── components/
    └── public/
        ├── file.svg
        ├── globe.svg
        ├── next.svg
        ├── vercel.svg
        └── window.svg
```

## 技术栈

- 后端：Go，module 为 `awesome-dataviz/backend`
- 前端：Next.js、React、TypeScript、Tailwind CSS
- 根目录使用 `concurrently` 同时启动前后端开发服务

## 产品方向

本项目不是按天解锁的 Advent 活动站，而是一个长期维护的图表挑战库。

核心体验：

- 浏览图表挑战
- 按分类和难度筛选挑战
- 查看单个挑战的题目说明、数据集和实现要求
- 在挑战详情页完成图表配置或图表实现
- 查看预览结果和测试反馈
- 后续支持用户进度和排行榜

## 页面规划

```text
/                         首页
/challenges               挑战库
/challenges/[slug]        单个挑战详情
/categories/[slug]        分类页
/leaderboard              排行榜
/about                    项目介绍
/support                  支持项目
```

首页模块：

- Header：顶部导航
- Hero：项目介绍和主操作入口
- Challenge Library：挑战分类入口
- Featured Challenges：推荐挑战
- Learning Path：学习路径
- Footer：底部链接

## 首页组件拆分

```text
frontend/components/
├── site-header.tsx
├── hero-section.tsx
├── challenge-library-section.tsx
├── featured-challenges-section.tsx
├── learning-path-section.tsx
└── site-footer.tsx
```

组件职责：

- `site-header.tsx`：顶部导航，包含项目名、挑战库、排行榜、About、Support、Login
- `hero-section.tsx`：首页主视觉，说明项目定位并提供主按钮
- `challenge-library-section.tsx`：展示挑战分类入口
- `featured-challenges-section.tsx`：展示推荐挑战卡片
- `learning-path-section.tsx`：展示从基础图表到完整看板的学习路径
- `site-footer.tsx`：展示 GitHub、Terms、Privacy、Contact 等链接

## 挑战分类

```text
Basic Charts
- Bar Chart
- Line Chart
- Area Chart
- Pie Chart
- Scatter Plot

Interactions
- Tooltip Interaction
- Legend Filter
- Brush Selection
- Zoom & Pan
- Responsive Chart

Advanced Charts
- Heatmap
- Calendar Heatmap
- Treemap
- Radar Chart
- Funnel Chart
- Sankey Diagram
- Candlestick Chart
- Map Visualization
- Network Graph

Dashboards
- Sales Dashboard
- Retention Dashboard
- Real-time Monitoring
- Analytics Dashboard
- Final DataViz Project
```

## 挑战数据结构草案

```ts
type Challenge = {
  id: string;
  slug: string;
  title: string;
  category: "basic" | "interaction" | "advanced" | "dashboard";
  chartType: string;
  difficulty: "beginner" | "easy" | "medium" | "hard";
  status: "available" | "locked" | "completed";
  summary: string;
  learningGoals: string[];
  requirements: string[];
};
```

示例：

```ts
{
  id: "bar-chart",
  slug: "bar-chart",
  title: "Bar Chart",
  category: "basic",
  chartType: "bar",
  difficulty: "beginner",
  status: "available",
  summary: "Build a basic bar chart from monthly revenue data.",
  learningGoals: [
    "Map categorical data to the x-axis",
    "Map numeric values to the y-axis",
    "Render one bar per data item"
  ],
  requirements: [
    "Use month as the x-axis field",
    "Use revenue as the y-axis field",
    "Render all data points",
    "Show a tooltip on hover"
  ]
}
```

## 推荐实现顺序

```text
1. 首页静态框架
2. 首页组件拆分
3. 静态挑战数据
4. 挑战库列表页
5. 单个挑战详情页
6. 第一个配置型挑战：Bar Chart
7. 图表预览
8. 本地测试规则
9. Go 后端 API
10. 用户进度和排行榜
```

## 常用命令

在项目根目录执行：

```bash
npm run dev
```

分别启动：

```bash
npm run dev:backend
npm run dev:frontend
```

脚本说明：

- `npm run dev:backend`：进入 `backend` 后执行 `go run *.go`
- `npm run dev:frontend`：进入 `frontend` 后执行 `npm run dev`
- `npm run dev`：同时启动后端和前端

## 主要入口

- 后端入口：[backend/main.go](backend/main.go)
- 后端示例：[backend/demo.go](backend/demo.go)
- 前端页面：[frontend/app/page.tsx](frontend/app/page.tsx)
- 前端布局：[frontend/app/layout.tsx](frontend/app/layout.tsx)

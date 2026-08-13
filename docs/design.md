# Design Document

本文档用于沉淀项目设计相关内容。后续页面结构、组件拆分、交互规则、挑战题目设计和视觉方向都优先补充到这里。

## 产品定位

`awesome-dataviz` 是一个数据可视化图表挑战库，不采用按天解锁的 Advent 活动模式。

目标用户通过完成不同类型的图表实现挑战，逐步练习：

- 基础图表实现
- 图表交互能力
- 复杂图表结构
- 多图表数据看板

## 核心体验

- 浏览图表挑战
- 按分类和难度筛选挑战
- 查看挑战详情，包括题目说明、数据集、实现要求和学习目标
- 在挑战详情页完成图表配置或图表实现
- 查看图表预览和测试反馈
- 后续支持用户进度、排行榜和提交记录

## 页面路由

本项目使用 Next.js App Router。页面路径和文件位置对应关系如下：

```text
网站路径                    文件位置

/                          frontend/app/page.tsx
/challenges                frontend/app/challenges/page.tsx
/challenges/[slug]         frontend/app/challenges/[slug]/page.tsx
/categories/[slug]         frontend/app/categories/[slug]/page.tsx
/leaderboard               frontend/app/leaderboard/page.tsx
/about                     frontend/app/about/page.tsx
/support                   frontend/app/support/page.tsx
```

其中：

- `frontend/app/challenges/` 负责挑战库页面路由
- `frontend/data/challenges.ts` 负责挑战数据

## 首页设计

首页目标：让用户快速理解这是一个图表实现挑战库，并进入挑战列表。

首页模块：

- Header：顶部导航
- Hero：项目介绍和主操作入口
- Challenge Library：挑战分类入口
- Featured Challenges：推荐挑战
- Learning Path：学习路径
- Footer：底部链接

首页主文案建议：

```text
Build data visualization skills through hands-on chart challenges.
```

主按钮：

```text
Explore Challenges
```

次按钮：

```text
View Leaderboard
```

### 首页视觉方向

整体风格定位：

```text
开发者挑战平台 + 数据可视化工作台
```

设计关键词：

- 清晰
- 专业
- 有代码感
- 有图表感
- 信息密度适中
- 不做营销型大留白官网

第一版建议采用深色界面，但避免整页只有单一深蓝或单一紫色。可以使用接近黑色的背景，搭配多种图表强调色。

推荐色彩角色：

```text
Page background: near black
Surface: dark neutral
Surface elevated: slightly lighter neutral
Primary accent: cyan or blue
Secondary accent: green
Warning accent: amber
Danger accent: red
Text primary: near white
Text secondary: muted gray
Border: subtle neutral border
```

图表挑战库需要有图表色彩点缀，但颜色应服务于状态和分类：

```text
Basic Charts: blue
Interactions: green
Advanced Charts: amber
Dashboards: red or rose
```

### 首页布局规范

桌面端：

```text
最大内容宽度：约 1120px - 1200px
页面左右留白：32px - 48px
区块间距：64px - 96px
Header 高度：64px - 72px
Hero 第一屏：不需要占满整屏，但要成为首屏主体
```

移动端：

```text
页面左右留白：16px - 20px
区块间距：40px - 56px
Header 使用紧凑布局
卡片单列排列
按钮可换行或纵向排列
```

首页区块顺序：

```text
1. SiteHeader
2. HeroSection
3. ChallengeLibrarySection
4. FeaturedChallengesSection
5. LearningPathSection
6. SiteFooter
```

### Header 规范

Header 目标是让用户知道自己在哪里，并快速进入主要页面。

内容：

```text
Logo / 项目名
Challenges
Leaderboard
About
Support
Login
```

交互规则：

- 当前页面导航项需要有 active 状态
- Login 第一版可以是静态按钮，不接认证
- 移动端可以先折叠为简化导航，或保留主要链接换行展示

### Hero 规范

Hero 只表达一个核心信息：

```text
通过实际图表挑战学习数据可视化
```

推荐结构：

```text
左侧：
- Eyebrow: DataViz Challenge Library
- H1: Build data visualization skills through hands-on chart challenges.
- Supporting copy
- Primary CTA: Explore Challenges
- Secondary CTA: View Leaderboard

右侧或背景：
- 代码片段
- 简单图表预览
- 小型指标面板
```

右侧视觉不需要真实可交互，第一版可以是静态图表感布局：

```text
小型柱状图
小型折线图
配置片段
测试结果列表
```

避免：

- 纯营销型大图
- 复杂插画
- 无意义渐变球
- 过多装饰卡片

### 卡片规范

挑战卡片用于展示图表题目。

卡片信息层级：

```text
Category / Difficulty
Title
Summary
Status
Action
```

卡片规则：

- 圆角不超过 8px
- 边框要轻，不要过重
- hover 状态可以提高边框亮度或背景亮度
- 卡片高度尽量稳定，避免内容多少导致网格跳动明显
- 状态信息要清晰，但不要喧宾夺主

### 按钮规范

按钮分两类：

```text
Primary
- Explore Challenges
- Start Challenge
- Run Preview
- Submit

Secondary
- View Leaderboard
- Back to Challenges
- Reset Config
```

按钮规则：

- 主按钮使用高对比背景色
- 次按钮使用边框或低对比背景
- 按钮文字必须短
- 移动端按钮宽度可以撑满容器

### 排版规范

字体：

```text
继续使用 Next.js 默认 Geist 字体
```

层级建议：

```text
H1: 48px - 64px desktop, 36px - 44px mobile
H2: 28px - 36px
H3: 20px - 24px
Body: 15px - 17px
Small: 13px - 14px
```

规则：

- 不使用负 letter-spacing
- 不使用随 viewport 宽度缩放的字体
- 卡片和工具区域内标题保持紧凑
- 长文案要限制行宽

### 响应式规范

首页在不同屏幕下的布局：

```text
Desktop
- Hero 可左右分栏
- 挑战分类 4 列
- 推荐挑战 3 列或 4 列

Tablet
- Hero 可上下布局
- 挑战分类 2 列
- 推荐挑战 2 列

Mobile
- 全部单列
- Header 简化
- CTA 纵向排列
- 图表预览模块放在正文后
```

所有固定格式 UI，如图表预览、小型指标面板、挑战卡片，应使用稳定尺寸或最小高度，避免 hover、标签或动态内容导致布局跳动。

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

- `site-header.tsx`：顶部导航，包含项目名、Challenges、Leaderboard、About、Support、Login
- `hero-section.tsx`：首页主视觉，说明项目定位并提供主操作入口
- `challenge-library-section.tsx`：展示挑战分类入口
- `featured-challenges-section.tsx`：展示推荐挑战卡片
- `learning-path-section.tsx`：展示从基础图表到完整看板的学习路径
- `site-footer.tsx`：展示 GitHub、Terms、Privacy、Contact 等链接

## 挑战库页面

路径：

```text
/challenges
```

页面目标：让用户浏览所有图表挑战，并通过分类和难度找到想练习的挑战。

页面区域：

- 页面标题区
- 分类筛选
- 难度筛选
- 挑战卡片网格
- 空状态

挑战卡片展示：

- 标题
- 分类
- 难度
- 状态
- 简介
- 操作按钮

挑战库页面组件规划：

```text
frontend/components/
├── challenge-filter-bar.tsx
├── challenge-card.tsx
└── challenge-grid.tsx
```

组件职责：

- `challenge-filter-bar.tsx`：显示分类筛选和难度筛选
- `challenge-card.tsx`：显示单个挑战卡片
- `challenge-grid.tsx`：接收 challenges，渲染 challenge-card 列表，并处理空状态

### 挑战库视觉规范

页面整体应偏工具型和目录型，重点是帮助用户快速扫描和选择挑战，不做过重的营销展示。

页面结构：

```text
Header
Page Hero
Filter Bar
Challenge Grid
Footer
```

Page Hero 内容：

```text
Title: Challenges
Description: Practice chart building from basic visuals to full analytical dashboards.
Stats:
- Total Challenges
- Available Challenges
- Categories
```

布局规则：

- 页面最大内容宽度保持和首页一致
- Page Hero 高度不宜过大
- Filter Bar 放在 Challenge Grid 上方
- Filter Bar 在滚动时可以不吸顶，第一版保持普通布局
- Grid 是页面主内容，视觉权重最高

### 筛选交互规范

第一版筛选维度：

```text
Category
- All
- Basic
- Interaction
- Advanced
- Dashboard

Difficulty
- All
- Beginner
- Easy
- Medium
- Hard
```

筛选规则：

- 默认选中 `All Categories` 和 `All Difficulties`
- 选择分类后，只展示对应分类的挑战
- 选择难度后，只展示对应难度的挑战
- 分类和难度筛选可以组合
- 没有结果时显示空状态

URL 规则建议：

```text
/challenges
/challenges?category=basic
/challenges?difficulty=beginner
/challenges?category=advanced&difficulty=hard
```

第一版如果不想引入 URL query，也可以先用本地状态；但最终建议筛选状态进入 URL，方便分享和刷新保留状态。

筛选控件形式：

```text
Desktop
- 使用 segmented controls 或 pill buttons
- 分类和难度分两行或左右分组

Mobile
- 可以纵向排列
- 每组选项允许横向滚动
```

### 排序规则

第一版默认排序：

```text
1. category order
   basic -> interaction -> advanced -> dashboard

2. difficulty order
   beginner -> easy -> medium -> hard

3. original list order
```

后续可以增加排序：

```text
- Difficulty
- Recently Added
- Popular
- Completed
```

第一版先不做排序 UI，保持固定排序。

### 挑战卡片规范

挑战卡片是 `/challenges` 页面的核心元素。

卡片字段：

```text
Category label
Difficulty badge
Title
Summary
Status
Action
```

卡片示例：

```text
Basic Charts · Beginner
Bar Chart
Build a basic bar chart from monthly revenue data.
Available
Start Challenge
```

状态展示：

```text
available
- 文案：Available
- 操作：Start Challenge

locked
- 文案：Locked
- 操作：View Details 或 Disabled

completed
- 文案：Completed
- 操作：Review Challenge
```

第一版所有挑战都可以是 `available`，等用户进度功能完成后再启用 `completed`。

卡片尺寸规则：

- 桌面端 3 列或 4 列，取决于实际内容宽度
- 平板端 2 列
- 移动端 1 列
- 卡片最小高度保持一致，避免网格跳动
- 标题和简介需要限制行数

### 空状态

当筛选没有结果时显示空状态。

空状态内容：

```text
No challenges found
Try a different category or difficulty filter.
Reset filters
```

空状态规则：

- 不要显示空白页面
- 提供 Reset filters 操作
- 保持和页面整体视觉一致，不使用夸张插画

### 挑战库第一版边界

第一版暂不做：

- 服务端筛选
- 搜索
- 排序 UI
- 用户完成状态
- 收藏挑战
- 分页

第一版只做：

- 展示所有静态挑战
- 分类筛选
- 难度筛选
- 空状态
- 点击进入挑战详情页

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

## 第一版挑战清单

第一版先从 `Basic Charts` 开始。这个分类决定挑战题目的基础模板，后续 `Interactions`、`Advanced Charts` 和 `Dashboards` 都按相同结构扩展。

### Basic Charts

#### Bar Chart

- slug: `bar-chart`
- category: `basic`
- chartType: `bar`
- difficulty: `beginner`
- status: `available`

简介：

```text
Build a basic bar chart from monthly revenue data.
```

学习目标：

- 理解分类字段如何映射到 x 轴
- 理解数值字段如何映射到 y 轴
- 根据每条数据渲染一个柱子
- 为图表添加基础 tooltip

实现要求：

- 使用 `month` 作为 x 轴字段
- 使用 `revenue` 作为 y 轴字段
- 渲染数据集中的全部数据行
- 鼠标悬浮时显示 tooltip
- 图表需要包含清晰的 x 轴和 y 轴

示例数据：

```ts
[
  { month: "Jan", revenue: 120 },
  { month: "Feb", revenue: 180 },
  { month: "Mar", revenue: 150 },
  { month: "Apr", revenue: 220 },
  { month: "May", revenue: 170 },
  { month: "Jun", revenue: 260 }
]
```

第一版测试规则：

- `chartType` 必须是 `bar`
- `xField` 必须是 `month`
- `yField` 必须是 `revenue`
- `tooltip` 必须开启
- 数据不应被过滤

#### Line Chart

- slug: `line-chart`
- category: `basic`
- chartType: `line`
- difficulty: `beginner`
- status: `available`
- summary: `Build a line chart to show a trend over time.`

学习目标：

- 理解时间序列数据
- 学会将日期字段映射到 x 轴
- 学会将数值字段映射到 y 轴
- 用折线表达趋势变化

#### Area Chart

- slug: `area-chart`
- category: `basic`
- chartType: `area`
- difficulty: `beginner`
- status: `available`
- summary: `Build an area chart to emphasize volume changes over time.`

学习目标：

- 理解面积图和折线图的关系
- 学会用填充面积表达累计或规模变化
- 学会控制图表透明度和视觉层级

#### Pie Chart

- slug: `pie-chart`
- category: `basic`
- chartType: `pie`
- difficulty: `easy`
- status: `available`
- summary: `Build a pie chart to compare part-to-whole relationships.`

学习目标：

- 理解分类占比数据
- 学会将数值转换为扇区角度
- 学会显示标签和百分比

#### Scatter Plot

- slug: `scatter-plot`
- category: `basic`
- chartType: `scatter`
- difficulty: `easy`
- status: `available`
- summary: `Build a scatter plot to explore relationships between two numeric fields.`

学习目标：

- 理解两个数值字段之间的关系
- 学会将一个数值字段映射到 x 轴
- 学会将另一个数值字段映射到 y 轴
- 用点的位置表达数据分布

### Interactions

#### Tooltip Interaction

- slug: `tooltip-interaction`
- category: `interaction`
- chartType: `bar`
- difficulty: `easy`
- status: `available`

简介：

```text
Add a useful tooltip to a chart so users can inspect exact values.
```

学习目标：

- 理解 tooltip 在图表阅读中的作用
- 学会在鼠标悬浮时显示当前数据点
- 学会组织 tooltip 中的标签和值
- 学会避免 tooltip 遮挡关键数据

实现要求：

- 鼠标悬浮到图表元素时显示 tooltip
- tooltip 需要展示分类字段和值字段
- tooltip 内容需要包含清晰的字段标签
- 鼠标移出图表元素后隐藏 tooltip
- tooltip 位置需要跟随当前悬浮目标或指针位置

示例数据：

```ts
[
  { product: "Notebook", sales: 420 },
  { product: "Keyboard", sales: 310 },
  { product: "Mouse", sales: 260 },
  { product: "Monitor", sales: 190 }
]
```

第一版测试规则：

- `tooltip` 必须开启
- tooltip 必须包含分类字段
- tooltip 必须包含数值字段
- tooltip 必须有可读标签
- 鼠标移出后 tooltip 不应继续显示

#### Legend Filter

- slug: `legend-filter`
- category: `interaction`
- chartType: `line`
- difficulty: `easy`
- status: `available`
- summary: `Use a legend to toggle chart series visibility.`

学习目标：

- 理解多系列图表中的图例作用
- 学会通过图例控制系列显示和隐藏
- 学会维护图例状态和图表状态的一致性

#### Brush Selection

- slug: `brush-selection`
- category: `interaction`
- chartType: `line`
- difficulty: `medium`
- status: `available`
- summary: `Select a range of data points with a brush interaction.`

学习目标：

- 理解范围选择在时间序列分析中的作用
- 学会用拖拽选择局部数据
- 学会根据选择范围更新图表状态

#### Zoom & Pan

- slug: `zoom-and-pan`
- category: `interaction`
- chartType: `line`
- difficulty: `medium`
- status: `available`
- summary: `Explore dense time-series data with zoom and pan controls.`

学习目标：

- 理解缩放和平移如何帮助查看密集数据
- 学会控制可见数据范围
- 学会在交互后保持坐标轴和图形同步

#### Responsive Chart

- slug: `responsive-chart`
- category: `interaction`
- chartType: `bar`
- difficulty: `medium`
- status: `available`
- summary: `Make a chart adapt to different screen sizes without losing readability.`

学习目标：

- 理解图表容器尺寸变化对布局的影响
- 学会处理移动端和桌面端的图表尺寸
- 学会在小屏幕上保持标签、坐标轴和图形可读

### Advanced Charts

#### Heatmap

- slug: `heatmap`
- category: `advanced`
- chartType: `heatmap`
- difficulty: `medium`
- status: `available`

简介：

```text
Build a heatmap to show intensity across two categorical dimensions.
```

学习目标：

- 理解二维分类维度和数值强度之间的关系
- 学会将 x 轴和 y 轴组合成网格单元
- 学会使用颜色表达数值大小
- 学会设计可读的颜色映射和图例

实现要求：

- 使用 `weekday` 作为 x 轴字段
- 使用 `hour` 作为 y 轴字段
- 使用 `orders` 作为颜色强度字段
- 每个 `weekday` 和 `hour` 组合需要渲染一个单元格
- 需要显示颜色图例或颜色范围说明

示例数据：

```ts
[
  { weekday: "Mon", hour: "09:00", orders: 24 },
  { weekday: "Mon", hour: "10:00", orders: 38 },
  { weekday: "Tue", hour: "09:00", orders: 18 },
  { weekday: "Tue", hour: "10:00", orders: 42 },
  { weekday: "Wed", hour: "09:00", orders: 31 },
  { weekday: "Wed", hour: "10:00", orders: 56 }
]
```

第一版测试规则：

- `chartType` 必须是 `heatmap`
- `xField` 必须是 `weekday`
- `yField` 必须是 `hour`
- `colorField` 必须是 `orders`
- 必须存在颜色映射配置
- 数据不应被过滤

#### Calendar Heatmap

- slug: `calendar-heatmap`
- category: `advanced`
- chartType: `calendar-heatmap`
- difficulty: `medium`
- status: `available`
- summary: `Build a calendar heatmap to show daily activity over time.`

学习目标：

- 理解日期数据如何映射到日历网格
- 学会按周和星期组织时间序列数据
- 学会用颜色表达每日数值强度

#### Treemap

- slug: `treemap`
- category: `advanced`
- chartType: `treemap`
- difficulty: `medium`
- status: `available`
- summary: `Build a treemap to compare hierarchical categories by size.`

学习目标：

- 理解层级数据结构
- 学会用面积表达数值大小
- 学会在有限空间中展示分类层级

#### Radar Chart

- slug: `radar-chart`
- category: `advanced`
- chartType: `radar`
- difficulty: `medium`
- status: `available`
- summary: `Build a radar chart to compare multiple metrics across categories.`

学习目标：

- 理解多指标比较场景
- 学会将多个指标映射到极坐标轴
- 学会比较不同对象的能力轮廓

#### Funnel Chart

- slug: `funnel-chart`
- category: `advanced`
- chartType: `funnel`
- difficulty: `medium`
- status: `available`
- summary: `Build a funnel chart to visualize conversion through sequential steps.`

学习目标：

- 理解转化漏斗数据
- 学会表达阶段之间的数量递减
- 学会展示转化率和流失率

#### Sankey Diagram

- slug: `sankey-diagram`
- category: `advanced`
- chartType: `sankey`
- difficulty: `hard`
- status: `available`
- summary: `Build a Sankey diagram to show weighted flows between nodes.`

学习目标：

- 理解节点和流量边的数据结构
- 学会用连线宽度表达流量大小
- 学会阅读来源、去向和中间转化路径

#### Candlestick Chart

- slug: `candlestick-chart`
- category: `advanced`
- chartType: `candlestick`
- difficulty: `hard`
- status: `available`
- summary: `Build a candlestick chart to visualize open, high, low, and close values.`

学习目标：

- 理解 OHLC 金融时间序列数据
- 学会表达价格区间和涨跌方向
- 学会处理密集时间轴上的数据可读性

#### Map Visualization

- slug: `map-visualization`
- category: `advanced`
- chartType: `map`
- difficulty: `hard`
- status: `available`
- summary: `Build a map visualization to compare metrics across regions.`

学习目标：

- 理解地理区域数据和指标数据的关联
- 学会使用颜色或符号表达区域指标
- 学会处理地图标签、图例和交互提示

#### Network Graph

- slug: `network-graph`
- category: `advanced`
- chartType: `network`
- difficulty: `hard`
- status: `available`
- summary: `Build a network graph to explore relationships between entities.`

学习目标：

- 理解节点和边的数据结构
- 学会用位置、大小和颜色表达关系网络
- 学会处理复杂关系图中的可读性问题

### Dashboards

#### Sales Dashboard

- slug: `sales-dashboard`
- category: `dashboard`
- chartType: `dashboard`
- difficulty: `hard`
- status: `available`

简介：

```text
Build a sales dashboard that combines KPI cards, trend charts, and category breakdowns.
```

学习目标：

- 理解数据看板如何组织多个指标和图表
- 学会设计 KPI、趋势图和分类图之间的信息层级
- 学会让多个图表共享同一份业务上下文
- 学会在有限页面空间内保持可读性

实现要求：

- 展示总收入、订单数和平均订单金额三个 KPI
- 使用折线图展示收入趋势
- 使用柱状图展示品类销售额
- 使用表格或列表展示 Top Products
- 页面需要有清晰的标题、时间范围和模块分区

示例数据：

```ts
{
  kpis: {
    revenue: 128400,
    orders: 1840,
    averageOrderValue: 69.78
  },
  revenueTrend: [
    { month: "Jan", revenue: 16800 },
    { month: "Feb", revenue: 19200 },
    { month: "Mar", revenue: 21400 },
    { month: "Apr", revenue: 23800 },
    { month: "May", revenue: 21900 },
    { month: "Jun", revenue: 25300 }
  ],
  categorySales: [
    { category: "Accessories", revenue: 34200 },
    { category: "Devices", revenue: 46800 },
    { category: "Software", revenue: 27400 },
    { category: "Services", revenue: 20000 }
  ],
  topProducts: [
    { name: "Analytics Pro", revenue: 18400 },
    { name: "Data Studio", revenue: 16200 },
    { name: "Insight Pack", revenue: 14100 }
  ]
}
```

第一版测试规则：

- 必须展示三个 KPI
- 必须包含收入趋势图
- 必须包含品类销售图
- 必须包含 Top Products 模块
- 页面模块需要有明确标题
- 图表和指标需要使用同一份数据上下文

#### Retention Dashboard

- slug: `retention-dashboard`
- category: `dashboard`
- chartType: `dashboard`
- difficulty: `hard`
- status: `available`
- summary: `Build a retention dashboard to track cohort behavior over time.`

学习目标：

- 理解 cohort 留存分析
- 学会用热力图表达不同 cohort 的留存率
- 学会组合概览指标和明细矩阵

#### Real-time Monitoring

- slug: `real-time-monitoring`
- category: `dashboard`
- chartType: `dashboard`
- difficulty: `hard`
- status: `available`
- summary: `Build a real-time monitoring dashboard for streaming metrics.`

学习目标：

- 理解实时数据看板的刷新节奏
- 学会表达当前值、趋势和异常状态
- 学会处理动态数据变化带来的布局稳定性

#### Analytics Dashboard

- slug: `analytics-dashboard`
- category: `dashboard`
- chartType: `dashboard`
- difficulty: `hard`
- status: `available`
- summary: `Build an analytics dashboard for traffic, conversion, and user behavior.`

学习目标：

- 理解分析型看板的信息结构
- 学会组合流量、转化和行为指标
- 学会为不同粒度的数据选择合适图表

#### Final DataViz Project

- slug: `final-dataviz-project`
- category: `dashboard`
- chartType: `dashboard`
- difficulty: `hard`
- status: `available`
- summary: `Build a complete data visualization project that combines multiple chart types and interactions.`

学习目标：

- 综合使用基础图表、交互图表和复杂图表
- 学会围绕一个业务问题组织可视化叙事
- 学会设计完整、可读、可操作的数据可视化页面

## 挑战数据结构

第一版挑战数据先使用静态文件：

```text
frontend/data/challenges.ts
```

推荐类型：

```ts
export type ChallengeCategory = "basic" | "interaction" | "advanced" | "dashboard";

export type ChallengeDifficulty = "beginner" | "easy" | "medium" | "hard";

export type ChallengeStatus = "available" | "locked" | "completed";

export type Challenge = {
  id: string;
  slug: string;
  title: string;
  category: ChallengeCategory;
  chartType: string;
  difficulty: ChallengeDifficulty;
  status: ChallengeStatus;
  summary: string;
  learningGoals: string[];
  requirements: string[];
};
```

### Bar Chart 详细数据模型

`bar-chart` 是第一版需要完整跑通的挑战，用它验证：

```text
题目说明 -> 数据集 -> 配置输入 -> 图表预览 -> 测试结果
```

#### Dataset

第一版可以先把数据集直接挂在 challenge 上，后续数据复杂后再抽成独立 `datasets.ts`。

```ts
export type DatasetField = {
  name: string;
  type: "string" | "number" | "date";
  description: string;
};

export type ChartDataset = {
  id: string;
  name: string;
  description: string;
  fields: DatasetField[];
  rows: Record<string, string | number>[];
};
```

Bar Chart 数据集：

```ts
{
  id: "monthly-revenue",
  name: "Monthly Revenue",
  description: "Monthly revenue from January to June.",
  fields: [
    {
      name: "month",
      type: "string",
      description: "Month name"
    },
    {
      name: "revenue",
      type: "number",
      description: "Revenue in thousands of dollars"
    }
  ],
  rows: [
    { month: "Jan", revenue: 120 },
    { month: "Feb", revenue: 180 },
    { month: "Mar", revenue: 150 },
    { month: "Apr", revenue: 220 },
    { month: "May", revenue: 170 },
    { month: "Jun", revenue: 260 }
  ]
}
```

#### User Config

第一版配置型挑战使用表单输入，最终形成一个配置对象。

```ts
export type ChartConfig = {
  chartType: string;
  xField: string;
  yField: string;
  tooltip: boolean;
};
```

Bar Chart 起始配置：

```ts
{
  chartType: "bar",
  xField: "",
  yField: "",
  tooltip: false
}
```

Bar Chart 正确配置：

```ts
{
  chartType: "bar",
  xField: "month",
  yField: "revenue",
  tooltip: true
}
```

#### Tests

第一版测试规则只检查配置，不做截图对比。

```ts
export type ChallengeTest = {
  id: string;
  label: string;
  description: string;
  points: number;
};
```

Bar Chart 测试项：

```ts
[
  {
    id: "chart-type",
    label: "Uses a bar chart",
    description: "chartType must be bar",
    points: 20
  },
  {
    id: "x-field",
    label: "Maps month to the x-axis",
    description: "xField must be month",
    points: 20
  },
  {
    id: "y-field",
    label: "Maps revenue to the y-axis",
    description: "yField must be revenue",
    points: 20
  },
  {
    id: "tooltip",
    label: "Enables tooltip",
    description: "tooltip must be true",
    points: 20
  },
  {
    id: "all-data",
    label: "Uses all data rows",
    description: "data should not be filtered",
    points: 20
  }
]
```

#### Test Result

测试执行后返回结果列表和总分。

```ts
export type ChallengeTestResult = {
  id: string;
  label: string;
  passed: boolean;
  points: number;
  message: string;
};

export type ChallengeScore = {
  earnedPoints: number;
  totalPoints: number;
  percentage: number;
};
```

Bar Chart 测试逻辑：

```text
chart-type
- passed when config.chartType === "bar"

x-field
- passed when config.xField === "month"

y-field
- passed when config.yField === "revenue"

tooltip
- passed when config.tooltip === true

all-data
- first version always passed because filtering is not exposed in the UI
```

#### Challenge 类型扩展

为了支持详情页，`Challenge` 后续需要扩展：

```ts
export type Challenge = {
  id: string;
  slug: string;
  title: string;
  category: ChallengeCategory;
  chartType: string;
  difficulty: ChallengeDifficulty;
  status: ChallengeStatus;
  summary: string;
  learningGoals: string[];
  requirements: string[];
  dataset?: ChartDataset;
  starterConfig?: ChartConfig;
  tests?: ChallengeTest[];
};
```

第一版只有 `bar-chart` 需要完整提供：

```text
dataset
starterConfig
tests
```

其他挑战可以先只提供元信息，详情页显示占位工作区。

## 静态数据实现方案

第一版先不接后端，挑战库、首页推荐挑战、分类页和详情页都从同一个静态数据文件读取：

```text
frontend/data/challenges.ts
```

该文件建议导出三类内容：

```text
1. 类型定义
2. 分类数据
3. 挑战数据
```

推荐文件结构：

```ts
export type ChallengeCategory = "basic" | "interaction" | "advanced" | "dashboard";

export type ChallengeDifficulty = "beginner" | "easy" | "medium" | "hard";

export type ChallengeStatus = "available" | "locked" | "completed";

export type Challenge = {
  id: string;
  slug: string;
  title: string;
  category: ChallengeCategory;
  chartType: string;
  difficulty: ChallengeDifficulty;
  status: ChallengeStatus;
  summary: string;
  learningGoals: string[];
  requirements: string[];
};

export type ChallengeCategoryMeta = {
  id: ChallengeCategory;
  title: string;
  description: string;
};

export const challengeCategories: ChallengeCategoryMeta[] = [];

export const challenges: Challenge[] = [];

export const featuredChallengeSlugs = [
  "bar-chart",
  "line-chart",
  "tooltip-interaction",
  "heatmap",
  "sales-dashboard"
];
```

### 分类数据

分类数据用于首页分类入口、挑战库筛选和分类页。

```ts
export const challengeCategories = [
  {
    id: "basic",
    title: "Basic Charts",
    description: "Start with common charts and learn how data maps to visual marks."
  },
  {
    id: "interaction",
    title: "Interactions",
    description: "Add tooltip, filtering, brushing, zooming, and responsive behavior."
  },
  {
    id: "advanced",
    title: "Advanced Charts",
    description: "Build complex charts that require hierarchy, geography, networks, or time series."
  },
  {
    id: "dashboard",
    title: "Dashboards",
    description: "Combine charts into complete analytical interfaces."
  }
];
```

### 挑战数据

第一版挑战数据包含 24 个挑战：

```text
Basic Charts: 5
Interactions: 5
Advanced Charts: 9
Dashboards: 5
```

所有挑战都先设置为：

```text
status: available
```

这样第一版可以专注于浏览和页面结构，后续再接入用户进度后改成真实状态。

### 查询辅助函数

可以在同一个文件中提供轻量查询函数，避免页面里重复写筛选逻辑。

```ts
export function getChallengeBySlug(slug: string) {
  return challenges.find((challenge) => challenge.slug === slug);
}

export function getChallengesByCategory(category: ChallengeCategory) {
  return challenges.filter((challenge) => challenge.category === category);
}

export function getFeaturedChallenges() {
  return featuredChallengeSlugs
    .map((slug) => getChallengeBySlug(slug))
    .filter((challenge): challenge is Challenge => Boolean(challenge));
}
```

### 页面使用关系

```text
首页 /
- 使用 challengeCategories 展示分类入口
- 使用 getFeaturedChallenges() 展示推荐挑战

挑战库 /challenges
- 使用 challenges 展示全部挑战
- 使用 challengeCategories 渲染分类筛选
- 使用 difficulty 字段渲染难度筛选

挑战详情 /challenges/[slug]
- 使用 getChallengeBySlug(slug) 获取单个挑战

分类页 /categories/[slug]
- 使用 getChallengesByCategory(category) 获取分类下挑战
```

### 后续后端迁移

静态数据文件只是第一版方案。后续接入 Go 后端时，可以保持前端使用的 `Challenge` 类型不变，将数据来源从本地数组替换成 API。

推荐迁移路径：

```text
1. 静态数组
2. 本地 JSON 或 seed 数据
3. Go API 返回挑战列表和详情
4. 数据库存储挑战、提交和用户进度
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

## 挑战详情页

路径：

```text
/challenges/[slug]
```

页面目标：让用户理解题目、查看数据、完成图表实现，并得到反馈。

页面区域：

- 题目标题
- 分类、难度、状态
- 题目简介
- 学习目标
- 数据集说明
- 实现要求
- 配置或代码输入区
- 图表预览区
- 测试结果区

第一版建议使用配置型挑战，先避免浏览器代码沙箱和任意代码执行问题。

### 详情页布局

第一版挑战详情页采用三段式结构：

```text
顶部：挑战上下文
中部：题目说明和实现区域
底部：测试反馈和下一步操作
```

桌面端建议布局：

```text
┌─────────────────────────────────────────────────────────────┐
│ Header                                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Bar Chart                                                   │
│ Basic Charts · Beginner · Available                         │
│ Build a basic bar chart from monthly revenue data.           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────┬───────────────────────────────┐
│ Challenge Brief             │ Workspace                     │
│                             │                               │
│ Learning Goals              │ Config Input                  │
│ Requirements                │ Chart Preview                 │
│ Dataset                     │ Test Results                  │
└─────────────────────────────┴───────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Previous Challenge · Back to Challenges · Next Challenge     │
└─────────────────────────────────────────────────────────────┘
```

移动端建议布局：

```text
Header
Challenge Title
Challenge Brief
Dataset
Config Input
Chart Preview
Test Results
Navigation Actions
Footer
```

### 详情页组件规划

```text
frontend/components/
├── challenge-detail-header.tsx
├── challenge-brief-panel.tsx
├── challenge-dataset-panel.tsx
├── challenge-config-editor.tsx
├── chart-preview-panel.tsx
├── challenge-test-results.tsx
└── challenge-navigation.tsx
```

组件职责：

- `challenge-detail-header.tsx`：展示标题、分类、难度、状态和简介
- `challenge-brief-panel.tsx`：展示学习目标和实现要求
- `challenge-dataset-panel.tsx`：展示数据字段说明和示例数据
- `challenge-config-editor.tsx`：第一版使用配置输入，不直接运行任意代码
- `chart-preview-panel.tsx`：根据配置渲染图表预览
- `challenge-test-results.tsx`：展示测试项、通过状态和分数
- `challenge-navigation.tsx`：返回挑战库、上一题、下一题

### 配置型挑战交互

第一版不要求用户直接写完整 React、D3 或 ECharts 代码，而是填写图表配置。

Bar Chart 示例配置：

```ts
{
  chartType: "bar",
  xField: "month",
  yField: "revenue",
  tooltip: true
}
```

用户操作流程：

```text
1. 用户打开 /challenges/bar-chart
2. 页面展示题目说明、数据集和实现要求
3. 用户在配置输入区填写或修改配置
4. 用户点击 Run Preview
5. 页面根据配置渲染图表预览
6. 用户点击 Submit
7. 页面执行本地测试规则
8. 测试结果区展示通过项、失败项和总分
```

### 配置输入区

第一版配置输入区可以先采用表单模式，而不是代码编辑器。

Bar Chart 输入项：

```text
Chart Type: select
- bar
- line
- area
- pie
- scatter

X Field: select
- month
- revenue

Y Field: select
- month
- revenue

Tooltip: toggle
- true
- false
```

表单模式的好处：

- 更容易实现
- 更容易校验
- 不需要代码沙箱
- 用户能先理解图表配置和数据映射

后续可以升级为代码编辑器模式：

```text
阶段 1：表单配置
阶段 2：JSON 配置编辑器
阶段 3：ECharts / Recharts 配置编辑器
阶段 4：完整代码挑战
```

### 图表预览区

预览区负责展示用户当前配置生成的图表。

第一版预览区状态：

```text
Empty
- 用户还没有运行配置

Valid Preview
- 配置可以正常渲染图表

Invalid Config
- 配置缺少关键字段或字段类型不匹配

Render Error
- 图表渲染失败
```

预览区需要展示：

- 图表容器
- 当前图表类型
- 数据行数
- 配置错误提示

### 测试结果区

测试结果区在用户点击 Submit 后展示。

Bar Chart 第一版测试项：

```text
Uses a bar chart
- chartType must be bar
- 20 points

Maps month to the x-axis
- xField must be month
- 20 points

Maps revenue to the y-axis
- yField must be revenue
- 20 points

Enables tooltip
- tooltip must be true
- 20 points

Uses all data rows
- data should not be filtered
- 20 points
```

测试结果展示字段：

```text
label
status: passed / failed
points
message
```

总分计算：

```text
score = passed test points / total test points
```

### 详情页第一版边界

第一版暂不做：

- 登录
- 真实提交记录
- 代码沙箱
- 服务端判题
- 截图对比
- 排行榜更新

第一版只做：

- 题目展示
- 数据展示
- 配置输入
- 图表预览
- 本地测试反馈

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

## 组件实现顺序和依赖关系

第一版实现目标是先跑通静态站点和挑战浏览体验，再进入挑战详情页和配置型挑战。

### 实现阶段 1：基础数据

先实现：

```text
frontend/data/challenges.ts
```

原因：

- 首页推荐挑战依赖它
- 挑战库列表依赖它
- 挑战详情页依赖它
- 分类页依赖它

该文件需要先提供：

- 类型定义
- `challengeCategories`
- `challenges`
- `featuredChallengeSlugs`
- `getChallengeBySlug`
- `getChallengesByCategory`
- `getFeaturedChallenges`

### 实现阶段 2：首页基础组件

先实现无复杂交互的展示组件：

```text
frontend/components/site-header.tsx
frontend/components/hero-section.tsx
frontend/components/challenge-library-section.tsx
frontend/components/featured-challenges-section.tsx
frontend/components/learning-path-section.tsx
frontend/components/site-footer.tsx
```

依赖关系：

```text
site-header.tsx
- 不依赖挑战数据

hero-section.tsx
- 不依赖挑战数据

challenge-library-section.tsx
- 依赖 challengeCategories

featured-challenges-section.tsx
- 依赖 getFeaturedChallenges()

learning-path-section.tsx
- 可以先使用组件内部静态数组

site-footer.tsx
- 不依赖挑战数据
```

然后组合：

```text
frontend/app/page.tsx
```

### 实现阶段 3：挑战库页面组件

再实现挑战库相关组件：

```text
frontend/components/challenge-card.tsx
frontend/components/challenge-grid.tsx
frontend/components/challenge-filter-bar.tsx
frontend/app/challenges/page.tsx
```

依赖关系：

```text
challenge-card.tsx
- 依赖 Challenge 类型
- 只负责展示单个挑战

challenge-grid.tsx
- 依赖 Challenge[]
- 负责渲染卡片列表和空状态

challenge-filter-bar.tsx
- 依赖 challengeCategories
- 负责分类和难度筛选 UI

frontend/app/challenges/page.tsx
- 依赖 challenges
- 负责筛选状态和页面组合
```

第一版建议：

- 筛选逻辑可以先放在 `/challenges/page.tsx`
- 等逻辑复杂后再抽 hook
- 排序先使用静态默认顺序

### 实现阶段 4：挑战详情页展示组件

再实现详情页的只读展示部分：

```text
frontend/components/challenge-detail-header.tsx
frontend/components/challenge-brief-panel.tsx
frontend/components/challenge-dataset-panel.tsx
frontend/components/challenge-navigation.tsx
frontend/app/challenges/[slug]/page.tsx
```

依赖关系：

```text
challenge-detail-header.tsx
- 依赖 Challenge

challenge-brief-panel.tsx
- 依赖 learningGoals 和 requirements

challenge-dataset-panel.tsx
- 依赖挑战数据集

challenge-navigation.tsx
- 依赖 challenges 列表和当前 challenge slug

frontend/app/challenges/[slug]/page.tsx
- 依赖 getChallengeBySlug(slug)
```

第一版如果挑战数据模型还没有 dataset 字段，可以先在 `Bar Chart` 详情页写固定示例数据，后续再统一抽进模型。

### 实现阶段 5：配置型挑战交互组件

最后实现配置输入、图表预览和测试反馈：

```text
frontend/components/challenge-config-editor.tsx
frontend/components/chart-preview-panel.tsx
frontend/components/challenge-test-results.tsx
```

依赖关系：

```text
challenge-config-editor.tsx
- 依赖当前挑战可用字段
- 输出用户配置

chart-preview-panel.tsx
- 依赖用户配置和数据集
- 负责渲染图表预览

challenge-test-results.tsx
- 依赖测试规则和用户配置
- 负责展示通过项、失败项和分数
```

第一版建议只支持 `bar-chart` 的配置型挑战。其他挑战详情页可以先展示题目说明和占位工作区。

### 实现阶段 6：抽象和后端接入

只有当前端静态流程跑通后，再考虑：

```text
- 抽象通用 Challenge Workspace
- 增加更多图表类型预览
- 将静态数据迁移到 Go API
- 增加用户进度
- 增加排行榜
- 增加真实提交记录
```

### 不建议一开始做的事情

第一版避免：

- 一开始就接登录
- 一开始就接数据库
- 一开始就做代码沙箱
- 一开始就支持所有图表预览
- 一开始就做排行榜实时更新
- 一开始就抽太多通用框架

先让路径跑通：

```text
首页 -> 挑战库 -> Bar Chart 详情 -> 配置输入 -> 预览 -> 本地测试结果
```

## 设计记录规则

- 设计相关内容优先更新本文档
- 若页面结构变化，先更新“页面路由”或对应页面章节
- 若组件职责变化，先更新对应组件拆分章节
- 若挑战模型变化，先更新“挑战数据结构”
- 旧的按天 Advent 设计需要逐步迁移到挑战库模式
- 后续设计讨论、页面规划、组件规划、挑战规则和实现顺序由 Codex 负责补充到本文档
- 在开始代码实现前，优先确认本文档是否已经记录对应设计

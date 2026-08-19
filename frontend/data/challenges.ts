/*
1. Challenge 类型
2. challengeCategories 分类
3. challenges 挑战列表
 */


export type ChallengeCategory  = "basic" | "interaction" | "advanced" | "dashboard"

export type ChallengeDifficulty = "beginner" | "easy" | "medium" | "hard"

export type  ChallengeStatus = "available" | "locked" | "completed"

export type DatasetField = {
    name: string;
    type: "string" | "number" | "date";
    description: string;
};

export type ChartDataset = {
    id: string,
    name: string,
    description: string;
    fields: DatasetField[];
    rows: Record<string,string | number>[]; // 多个“键为字符串，值为字符串或数字”的对象构成的数组。
};

export type ChartConfig  = {
    chartType: string;
    xField: string;
    yField: string;
    tooltip: boolean;
};

export type ChallengeTest = {
    id: string;
    label: string;
    description: string;
    points: number;
};

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
    dataset?: ChartDataset; // ?代表可选参数
    starterConfig?: ChartConfig;
    tests?: ChallengeTest[];
};

export type ChallengeCategoryMeta = {
    id : ChallengeCategory;
    title: string;
    description: string;
}

export const featuredChallengeSlugs = [
    "bar-chart",
    "line-chart",
    "area-chart",
    "pie-chart",
    "scatter-plot",
];

export const challengeCategories: ChallengeCategoryMeta[] = [
    {
        id: "basic",
        title: "Basic Charts",
        description: "Start with common charts and learn how data maps to visual marks.",
    },
    {
        id: "interaction",
        title: "Interactions",
        description: "Add tooltip, filtering, brushing, zooming, and responsive behavior.",
    },
    {
        id: "advanced",
        title: "Advanced Charts",
        description: "Build complex charts that require hierarchy, geography, networks, or time series.",
    },
    {
        id: "dashboard",
        title: "Dashboards",
        description: "Combine charts into complete analytical interfaces.",
    },
];

export const challenges: Challenge[] = [
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
            "Render one bar per data item",
            "Add basic tooltip interaction",
        ],
        requirements: [
            "Use month as the x-axis field",
            "Use revenue as the y-axis field",
            "Render all data rows",
            "Show tooltip on hover",
            "Display clear x-axis and y-axis labels",
        ],
        dataset: {
            id: "monthly-revenue",
            name: "Monthly Revenue",
            description: "Monthly revenue from January to June.",
            fields: [
                {
                    name: "month",
                    type: "string",
                    description: "Month name",
                },
                {
                    name: "revenue",
                    type: "number",
                    description: "Revenue in thousands of dollars",
                },
            ],
            rows: [
                { month: "Jan", revenue: 120 },
                { month: "Feb", revenue: 180 },
                { month: "Mar", revenue: 150 },
                { month: "Apr", revenue: 220 },
                { month: "May", revenue: 170 },
                { month: "Jun", revenue: 260 },
            ],
        },
        starterConfig: {
            chartType: "bar",
            xField: "",
            yField: "",
            tooltip: false,
        },
        tests: [
            {
                id: "chart-type",
                label: "Uses a bar chart",
                description: "chartType must be bar",
                points: 20,
            },
            {
                id: "x-field",
                label: "Maps month to the x-axis",
                description: "xField must be month",
                points: 20,
            },
            {
                id: "y-field",
                label: "Maps revenue to the y-axis",
                description: "yField must be revenue",
                points: 20,
            },
            {
                id: "tooltip",
                label: "Enables tooltip",
                description: "tooltip must be true",
                points: 20,
            },
            {
                id: "all-data",
                label: "Uses all data rows",
                description: "data should not be filtered",
                points: 20,
            },
        ],
    },
    {
        id: "line-chart",
        slug: "line-chart",
        title: "Line Chart",
        category: "basic",
        chartType: "line",
        difficulty: "beginner",
        status: "available",
        summary: "Build a line chart to show a trend over time.",
        learningGoals: [
            "Understand time-series data",
            "Map date fields to the x-axis",
            "Map numeric values to the y-axis",
            "Use lines to communicate trends",
        ],
        requirements: [],
    },
    {
        id: "area-chart",
        slug: "area-chart",
        title: "Area Chart",
        category: "basic",
        chartType: "area",
        difficulty: "beginner",
        status: "available",
        summary: "Build an area chart to emphasize volume changes over time.",
        learningGoals: [
            "Understand the relationship between area charts and line charts",
            "Use filled areas to communicate volume",
            "Control opacity and visual hierarchy",
        ],
        requirements: [],
    },
    {
        id: "pie-chart",
        slug: "pie-chart",
        title: "Pie Chart",
        category: "basic",
        chartType: "pie",
        difficulty: "easy",
        status: "available",
        summary: "Build a pie chart to compare part-to-whole relationships.",
        learningGoals: [
            "Understand part-to-whole data",
            "Convert values into slice angles",
            "Display labels and percentages",
        ],
        requirements: [],
    },
    {
        id: "scatter-plot",
        slug: "scatter-plot",
        title: "Scatter Plot",
        category: "basic",
        chartType: "scatter",
        difficulty: "easy",
        status: "available",
        summary: "Build a scatter plot to explore relationships between two numeric fields.",
        learningGoals: [
            "Understand relationships between numeric fields",
            "Map one numeric field to the x-axis",
            "Map another numeric field to the y-axis",
            "Use point positions to show distribution",
        ],
        requirements: [],
    },
];

export function getChallengeBySlug(slug: string){
    return challenges.find((challenge) => challenge.slug === slug);
}

export function getChallengesByCategory(category: ChallengeCategory) {
    return challenges.filter((challenges) => challenges.category === category);
}

export function getFeaturedChallenges() {
    return featuredChallengeSlugs
        .map((slug) => getChallengeBySlug(slug))
        .filter((challenge): challenge is Challenge => Boolean(challenge));
}
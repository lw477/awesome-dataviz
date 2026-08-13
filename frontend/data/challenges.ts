/*
1. Challenge 类型
2. challengeCategories 分类
3. challenges 挑战列表
 */


export type ChallengeCategory  = "basic" | "interaction" | "advanced" | "dashboard"

export type ChallengeDifficulty = "begin" | "easy" | "medium" | "hard"

export type  ChallengeStatus = "available" | "locked" | "hard"

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
    dateset?: ChartDataset; // ?代表可选参数
    starterConfig?: ChartConfig;
    tests?: ChallengeTest;
};

export type ChallengeCategoryMeta = {
    id : ChallengeCategory;
    title: string;
    description: string;
}


export const challengeCategories = [
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
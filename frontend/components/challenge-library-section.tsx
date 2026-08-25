import Link from "next/link";

// 导入挑战分类数据、分类查询函数和分类类型。

import {
    challengeCategories,
    getChallengesByCategory,
    type ChallengeCategory,
} from "@/data/challenges";

/*
  为每一种挑战分类设置颜色。

  Record<ChallengeCategory, string> 表示：
  - 对象的键必须是 ChallengeCategory 中定义的分类
  - 对象的值必须是字符串

  这样可以避免遗漏某个分类的颜色。
*/

const categoryColors: Record<ChallengeCategory,string> = {
    basic: "bg-blue-400",
    interaction: "bg-green-400",
    advanced: "bg-amber-400",
    dashboard: "bg-rose-400",
};

export function ChallengeLibrarySection() {
    return (
        <section className="border-b border-white/10 bg-neutral-950 text-white">
            {/* 限制内容宽度，让整个区域居中并保留内边距。 */}
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="md:flex md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-cyan-400">
                            Challenge Library
                        </p>
                        <h2 className="mt-3 text-3xl font-bold">
                            Choose what you want to practice
                        </h2>
                        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                            Start with basic charts, learn interactive techniques, and
                            gradually move toward advanced visualizations and dashboards.
                        </p>
                    </div>

                    <Link
                        href="/challenges"
                        className="mt-6 inline-block text-sm font-medium text-neutral-400 transition-colors hover:text-cyan-300 md:mt-0"
                    >
                        View all challenges →
                    </Link>
                </div>

                {/* 小屏幕一列、中等屏幕两列、大屏幕四列。 */}
                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {challengeCategories.map((category) => {
                        const challengeCount = getChallengesByCategory(category.id).length;

                        return (
                            <Link
                                key={category.id}
                                href={`/challenges?category=${category.id}`}
                                className="group rounded-lg border border-white/10 bg-neutral-900 p-5 transition-colors hover:border-white/25 hover:bg-neutral-800"
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`h-2.5 w-2.5 rounded-full ${categoryColors[category.id]}`}
                                        aria-hidden="true"
                                    />

                                    <span className="text-xs text-neutral-500">
                                        {challengeCount} challenges
                                    </span>
                                </div>
                                {/* 分类名称。 */}
                                <h3 className="mt-8 text-lg font-semibold transition-colors group-hover:text-cyan-300">
                                    {category.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-neutral-400">
                                    {category.description}
                                </p>

                                <span className="mt-6 inline-block text-sm text-neutral-500 transition-colors group-hover:text-white">
                                    Explore category →
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

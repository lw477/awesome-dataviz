import Link from "next/link";

// 模拟一组图表数据。
// 目前只用于 Hero 右侧的装饰性柱状图
const charData = [
    { label: "Jan", value: 42 },
    { label: "Feb", value: 68 },
    { label: "Mar", value: 54 },
    { label: "Apr", value: 82 },
    { label: "May", value: 65 },
    { label: "Jun", value: 94 },
];

// 导出首页主视觉组件。
export function HeroSection(){
    return (
        // Hero 是首页最先被用户看到的主要内容区域。
        <section className="border-b border-white/10 bg-neutral-950 text-white">
            {/*
        grid：使用网格布局
        lg:grid-cols-2：大屏幕显示为左右两列
        小屏幕默认只有一列，左右内容会上下排列
      */}
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
                <div>
                    <p className="text-sm font-medium text-cyan-400">
                        DataViz Challenge Library
                    </p>

                    {/* 首页最重要的标题。 */}
                    <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
                        Build data visualization skills through hands-on chart challenges.
                    </h1>

                    {/* 对产品进行补充说明。 */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400">
                        Practice charts, interactions, and dashboards through focused
                        challenges with datasets, requirements, and instant feedback.
                    </p>

                    {/* 主操作按钮区域。 */}

                    <div className="mt-8 flex flex-wrap gap-4">
                        {/*
                        主按钮：进入挑战列表。
                        href 指定用户点击后要进入的页面。
                        */}
                        <Link
                            href="/challenges"
                            className="rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-cyan-300"
                        >
                            Explore Challenges
                        </Link>
                        {/* 次按钮：进入排行榜。 */}
                        <Link
                            href="/leaderboard"
                            className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            View Leaderboard
                        </Link>
                    </div>
                </div>

                {/* Hero 右侧：模拟数据可视化工作台。 */}
                <div className="rounded-lg border border-white/10 bg-neutral-900 p-5 shadow-2xl">
                    {/* 模拟工作台顶部信息。 */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div>
                            <p className="text-sm font-medium">
                                Monthly Revenue
                            </p>
                            <p className="mt-1 text-xs text-neutral-500">
                                Bar chart challenge
                            </p>
                        </div>

                        {/* 模拟挑战状态。 */}
                        <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-400">
                        Available
                    </span>
                    </div>

                    {/*
                    模拟柱状图。
                    aria-hidden 表示这是装饰内容，屏幕阅读器可以忽略它。
                */}
                    <div
                        className="mt-6 flex h-52 items-end gap-3"
                        aria-hidden="true"
                    >
                        {/*
                    遍历 chartData。
                    每个数据对象都会生成一根柱子和一个月份标签。
                    */}
                        {charData.map((item) => (
                            <div
                                key={item.label}
                                className="flex h-full flex-1 flex-col justify-end gap-2"
                            >
                                {/*
                             style 用于设置每根柱子的动态高度。
                             例如 value 为 42，就会生成 height: 42%。
                            */}
                                <div className="w-full rounded-t bg-cyan-400/80 transition-colors hover:bg-cyan-300"
                                     style={{height: `${item.value}%`}}
                                />
                                {/* 柱状图底部的月份标签。 */}
                                <span className="text-center text-xs text-neutral-500">
                            {item.label}
                        </span>
                            </div>
                        ))}
                    </div>
                    {/* 模拟测试通过信息。 */}
                    <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-green-400">
                    <span aria-hidden="true">
                        ✓
                    </span>
                        <span> 5 challenge requirements ready</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
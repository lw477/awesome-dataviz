import Link from "next/link";

// 定义导航菜单的数据。
// label 是页面显示的文字，href 是点击后跳转的路径。
// 以后增加导航项时，只需要在数组中增加一个对象。
const navItems = [
    { label: "Challenges", href: "/challenges" },
    { label: "LeaderBoard", href: "/leaderboard" },
    { label: "About", href: "/about"},
    { label: "Support", href: "/support"},
];

// 导出 SiteHeader 组件，使其他文件可以导入并使用它。
export function SiteHeader(){
    // return 中写的是这个组件最终要显示的页面结构。
    return (
        // <header> 是 HTML 的语义化顶部区域。
        // Tailwind 样式：
        // border-b：添加底部边框
        // border-white/10：边框使用 10% 透明度的白色
        // bg-neutral-950：使用接近黑色的背景
        // text-white：默认文字颜色为白色
        <header className="border-b border-white/10 bg-neutral-950 text-white">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link href="/" className="font-semibold">
                    Awesome DataViz
                </Link>

                <nav className="hidden items-center gap-6 md:flex"
                aria-label="Main navigation"
                >
                    {navItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-neutral-300 transition-colors hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Link href="/login"
                      className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
                      >
                    Login
                </Link>
            </div>
        </header>
    );
}
// 导入顶部导航组件。
import {SiteHeader} from "@/components/site-header";


// 导入首页 Hero 主视觉组件。
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
    return (
        // React Fragment：用于包裹多个同级元素，不会生成额外 HTML 标签。
        <>
            {/* 网站顶部导航。 */}
            <SiteHeader/>

            {/* 首页主要内容。 */}
            <main>
                {/* 首页主视觉区域。 */}
                <HeroSection/>
            </main>
        </>
    );
}
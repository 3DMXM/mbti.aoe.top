import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
import Result from '@/views/Result.vue'
import About from '@/views/About.vue'

// 支持的语言列表
const supportedLanguages = ['zh', 'en', 'ja', 'fr', 'de', 'es']

// 为每个语言创建路由
const createRouteForLanguage = (lang: string) => [
    {
        path: `/${lang}`,
        name: `${lang}-Home`,
        component: Home,
        meta: { lang, page: 'home' }
    },
    {
        path: `/${lang}/test`,
        name: `${lang}-Test`,
        component: Test,
        meta: { lang, page: 'test' }
    },
    {
        path: `/${lang}/result`,
        name: `${lang}-Result`,
        component: Result,
        meta: { lang, page: 'result' }
    },
    {
        path: `/${lang}/about`,
        name: `${lang}-About`,
        component: About,
        meta: { lang, page: 'about' }
    }
]

// 生成所有语言的路由
const languageRoutes = supportedLanguages.flatMap(createRouteForLanguage)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // 根路径重定向到默认语言（中文）
        {
            path: '/',
            redirect: () => {
                // 尝试从浏览器语言检测默认语言
                const browserLang = navigator.language.slice(0, 2)
                const defaultLang = supportedLanguages.includes(browserLang) ? browserLang : 'zh'
                return `/${defaultLang}`
            }
        },
        // 语言特定的路由
        ...languageRoutes,
        // 旧路由的重定向（保持向后兼容）
        {
            path: '/test',
            redirect: '/zh/test'
        },
        {
            path: '/result',
            redirect: '/zh/result'
        },
        {
            path: '/about',
            redirect: '/zh/about'
        }
        // 移除通用的404重定向，改在路由守卫中处理
    ]
})

// 路由守卫：根据路由设置语言
router.beforeEach((to, from, next) => {
    // 检测无限重定向循环
    if (to.path.includes('~and~') || to.path.includes('?/&/~')) {
        next('/zh')
        return
    }

    console.log(to, from);


    // 防止重复重定向 - 检测 /zh -> /zh/zh 这种循环
    if (from.path && to.path) {
        const fromSegments = from.path.split('/').filter(Boolean)
        const toSegments = to.path.split('/').filter(Boolean)

        // 检查是否从语言首页重定向到同样的语言首页（但路径变长了）
        if (fromSegments.length === 1 &&
            toSegments.length === 2 &&
            fromSegments[0] === toSegments[0] &&
            fromSegments[0] === toSegments[1] &&
            supportedLanguages.includes(fromSegments[0])) {
            next(false) // 阻止这次导航
            return
        }
    }

    // 处理404情况 - 如果路由不匹配且不是已知路由
    if (to.matched.length === 0) {
        const pathSegments = to.path.split('/').filter(Boolean)

        // 如果路径以语言代码开头，重定向到对应语言首页
        if (pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0])) {
            next(`/${pathSegments[0]}`)
            return
        }

        // 其他情况重定向到中文首页
        next('/zh')
        return
    }

    if (to.meta?.lang) {
        // 设置语言到localStorage
        localStorage.setItem('mbti-locale', to.meta.lang as string)
    }
    next()
})

export default router

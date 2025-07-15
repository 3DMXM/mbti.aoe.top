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
        },
        // 404页面重定向
        {
            path: '/:pathMatch(.*)*',
            redirect: (to) => {
                // 避免无限重定向
                if (to.path.includes('~and~') || to.path.includes('?/&/~')) {
                    return '/zh'
                }
                // 如果路径已经是语言路径，重定向到对应的首页
                const pathSegments = to.path.split('/').filter(Boolean)
                if (pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0])) {
                    return `/${pathSegments[0]}`
                }
                return '/zh'
            }
        }
    ]
})

// 路由守卫：根据路由设置语言
router.beforeEach((to, _from, next) => {
    // 检测无限重定向循环
    if (to.path.includes('~and~') || to.path.includes('?/&/~')) {
        next('/zh')
        return
    }

    // 如果是根路径且在生产环境中，确保正确重定向
    if (to.path === '/' && import.meta.env.PROD) {
        const browserLang = navigator.language.slice(0, 2)
        const defaultLang = supportedLanguages.includes(browserLang) ? browserLang : 'zh'
        next(`/${defaultLang}`)
        return
    }

    if (to.meta?.lang) {
        // 设置语言到localStorage
        localStorage.setItem('mbti-locale', to.meta.lang as string)
    }
    next()
})

export default router

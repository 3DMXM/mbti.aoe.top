import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getSEOConfig, generateHreflangLinks, type SEOConfig } from '@/config/seo'

export function useSEO() {
    const route = useRoute()
    const { locale } = useI18n()
    const currentSEO = ref<SEOConfig | null>(null)

    // 更新页面SEO信息
    const updateSEO = (language: string, routeName: string) => {
        const seoConfig = getSEOConfig(language, routeName)
        if (!seoConfig) return

        currentSEO.value = seoConfig

        // 更新页面标题
        document.title = seoConfig.title

        // 更新或创建meta标签
        updateMetaTag('description', seoConfig.description)
        updateMetaTag('keywords', seoConfig.keywords)
        updateMetaTag('og:title', seoConfig.ogTitle || seoConfig.title)
        updateMetaTag('og:description', seoConfig.ogDescription || seoConfig.description)
        updateMetaTag('og:image', seoConfig.ogImage || '/og-image-default.jpg')
        updateMetaTag('og:url', window.location.href)
        updateMetaTag('og:type', 'website')
        updateMetaTag('og:site_name', 'MBTI Personality Test')

        // 更新语言属性
        document.documentElement.lang = seoConfig.lang
        updateMetaTag('language', seoConfig.lang)

        // 更新Twitter Card
        updateMetaTag('twitter:card', 'summary_large_image')
        updateMetaTag('twitter:title', seoConfig.ogTitle || seoConfig.title)
        updateMetaTag('twitter:description', seoConfig.ogDescription || seoConfig.description)
        updateMetaTag('twitter:image', seoConfig.ogImage || '/og-image-default.jpg')

        // 更新hreflang链接
        updateHreflangLinks(routeName)
    }

    // 更新meta标签的辅助函数
    const updateMetaTag = (name: string, content: string) => {
        // 优先查找property属性（用于og标签）
        let meta = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement

        // 如果没找到，查找name属性
        if (!meta) {
            meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
        }

        if (meta) {
            meta.content = content
        } else {
            // 创建新的meta标签
            meta = document.createElement('meta')
            if (name.startsWith('og:') || name.startsWith('twitter:')) {
                meta.setAttribute('property', name)
            } else {
                meta.setAttribute('name', name)
            }
            meta.content = content
            document.head.appendChild(meta)
        }
    }

    // 更新hreflang链接
    const updateHreflangLinks = (routeName: string) => {
        // 移除现有的hreflang链接
        const existingLinks = document.querySelectorAll('link[hreflang]')
        existingLinks.forEach(link => link.remove())

        // 添加新的hreflang链接
        const hreflangLinks = generateHreflangLinks(routeName)
        hreflangLinks.forEach(({ hreflang, href }) => {
            const link = document.createElement('link')
            link.rel = 'alternate'
            link.hreflang = hreflang
            link.href = href
            document.head.appendChild(link)
        })

        // 添加x-default链接（默认指向英文版本）
        const defaultPath = routeName === 'home' ? '' : '/' + routeName
        const defaultLink = document.createElement('link')
        defaultLink.rel = 'alternate'
        defaultLink.hreflang = 'x-default'
        defaultLink.href = `${window.location.origin}/en${defaultPath}`
        document.head.appendChild(defaultLink)
    }

    // 监听路由和语言变化
    watch([() => route.meta?.page, () => route.meta?.lang, locale], ([routePage, routeLang, currentLocale]) => {
        // 优先使用路由中的语言信息，然后是i18n的locale
        const language = (routeLang as string) || currentLocale
        const pageName = (routePage as string) || 'home'

        if (language && pageName) {
            console.log('SEO update:', { language, pageName, route: route.name })
            updateSEO(language, pageName)
        }
    }, { immediate: true })

    return {
        currentSEO,
        updateSEO
    }
}

// 生成多语言站点地图
export function generateSitemap() {
    const baseUrl = 'https://mbti.aoe.top'
    const languages = ['zh', 'en', 'ja', 'fr', 'de', 'es']
    const pages = ['', '/test', '/result', '/about'] // 空字符串代表首页
    const currentDate = new Date().toISOString().split('T')[0]

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`

    // 为每个语言和页面组合生成URL
    languages.forEach(lang => {
        pages.forEach(page => {
            const url = `${baseUrl}/${lang}${page}`
            const priority = page === '' ? '1.0' : page === '/test' ? '0.9' : '0.7'
            const changefreq = page === '' ? 'weekly' : 'monthly'

            sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
`

            // 添加hreflang链接
            languages.forEach(altLang => {
                const altUrl = `${baseUrl}/${altLang}${page}`
                sitemap += `    <xhtml:link rel="alternate" hreflang="${getHreflang(altLang)}" href="${altUrl}" />
`
            })

            sitemap += `  </url>
`
        })
    })

    sitemap += `</urlset>`
    return sitemap
}

function getHreflang(lang: string): string {
    const hreflangMap: Record<string, string> = {
        zh: 'zh-CN',
        en: 'en-US',
        ja: 'ja-JP',
        fr: 'fr-FR',
        de: 'de-DE',
        es: 'es-ES'
    }
    return hreflangMap[lang] || lang
}

// 生成robots.txt
export function generateRobots() {
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://mbti.aoe.top/sitemap.xml

# Language-specific pages
Allow: /zh/
Allow: /en/
Allow: /ja/
Allow: /fr/
Allow: /de/
Allow: /es/

# Crawl-delay
Crawl-delay: 1`
}

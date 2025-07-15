import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'
import ja from './ja'
import fr from './fr'
import de from './de'
import es from './es'

// 支持的语言列表
export const supportedLanguages = ['zh', 'en', 'ja', 'fr', 'de', 'es']

// 检测浏览器语言
const getDefaultLocale = () => {
    // 优先从URL路径检测语言
    const pathLang = window.location.pathname.split('/')[1]
    if (supportedLanguages.includes(pathLang)) {
        return pathLang
    }

    // 其次从localStorage获取
    const saved = localStorage.getItem('mbti-locale')
    if (saved && supportedLanguages.includes(saved)) return saved

    // 最后从浏览器语言检测
    const browserLang = navigator.language.toLowerCase().slice(0, 2)
    if (supportedLanguages.includes(browserLang)) return browserLang

    return 'zh' // 默认中文
}

const i18n = createI18n({
    legacy: false,
    locale: getDefaultLocale(),
    fallbackLocale: 'zh',
    messages: {
        zh,
        en,
        ja,
        fr,
        de,
        es
    }
})

export default i18n

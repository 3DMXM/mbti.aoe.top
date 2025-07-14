import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'
import ja from './ja'
import fr from './fr'
import de from './de'
import es from './es'

// 检测浏览器语言
const getDefaultLocale = () => {
    const saved = localStorage.getItem('mbti-locale')
    if (saved) return saved

    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('en')) return 'en'
    if (browserLang.startsWith('zh')) return 'zh'
    if (browserLang.startsWith('ja')) return 'ja'
    if (browserLang.startsWith('fr')) return 'fr'
    if (browserLang.startsWith('de')) return 'de'
    if (browserLang.startsWith('es')) return 'es'
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

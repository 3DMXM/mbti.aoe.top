// SEO配置文件
export interface SEOConfig {
    title: string
    description: string
    keywords: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    lang: string
    hreflang: string
}

export const seoConfig: Record<string, Record<string, SEOConfig>> = {
    zh: {
        home: {
            title: 'MBTI性格测试 - 免费在线心理测评工具',
            description: '专业的MBTI性格测试，深入了解您的性格类型、优势特点和发展方向。基于心理学理论，提供科学准确的性格分析报告。',
            keywords: 'MBTI测试,性格测试,心理测试,性格分析,MBTI性格类型,免费测试,在线测试',
            ogTitle: 'MBTI性格测试 - 发现真实的自己',
            ogDescription: '通过专业的MBTI性格测试，深入了解您的性格类型、优势特点和发展方向',
            ogImage: '/og-image-zh.jpg',
            lang: 'zh-CN',
            hreflang: 'zh-CN'
        },
        test: {
            title: 'MBTI性格测试题目 - 开始您的性格探索之旅',
            description: '60道精心设计的MBTI测试题目，7点量表评分系统，科学准确地分析您的性格特征和类型。',
            keywords: 'MBTI测试题目,性格测试题,心理测评,性格分析题,MBTI问卷',
            ogTitle: 'MBTI性格测试 - 开始测试',
            ogDescription: '通过60道科学设计的题目，发现您的MBTI性格类型',
            lang: 'zh-CN',
            hreflang: 'zh-CN'
        },
        result: {
            title: 'MBTI测试结果 - 您的性格类型分析报告',
            description: '查看您的MBTI性格测试结果，详细了解16种性格类型特征、优势、发展建议和职业方向。',
            keywords: 'MBTI结果,性格类型,性格分析报告,MBTI性格特征,职业建议',
            ogTitle: 'MBTI测试结果分析',
            ogDescription: '详细的性格分析报告，了解您的MBTI类型特征',
            lang: 'zh-CN',
            hreflang: 'zh-CN'
        },
        about: {
            title: '关于MBTI - Myers-Briggs性格类型指标详解',
            description: '了解MBTI的历史背景、理论基础、16种性格类型详解，以及如何运用MBTI改善人际关系和职业发展。',
            keywords: 'MBTI理论,Myers-Briggs,性格类型理论,心理学,性格分析方法',
            ogTitle: '关于MBTI性格类型理论',
            ogDescription: '深入了解MBTI理论基础和16种性格类型',
            lang: 'zh-CN',
            hreflang: 'zh-CN'
        }
    },
    en: {
        home: {
            title: 'Free MBTI Personality Test - Discover Your True Self',
            description: 'Professional MBTI personality test to understand your personality type, strengths, and development directions. Based on psychological theory for accurate personality analysis.',
            keywords: 'MBTI test,personality test,psychology test,personality analysis,MBTI personality types,free test,online test',
            ogTitle: 'MBTI Personality Test - Discover Your True Self',
            ogDescription: 'Through professional MBTI personality testing, gain deep insights into your personality type and strengths',
            ogImage: '/og-image-en.jpg',
            lang: 'en-US',
            hreflang: 'en'
        },
        test: {
            title: 'MBTI Test Questions - Start Your Personality Journey',
            description: '60 carefully designed MBTI test questions with 7-point scale scoring system for accurate personality assessment.',
            keywords: 'MBTI test questions,personality test questions,psychology assessment,personality analysis questions,MBTI questionnaire',
            ogTitle: 'MBTI Personality Test - Start Test',
            ogDescription: 'Discover your MBTI personality type through 60 scientifically designed questions',
            lang: 'en-US',
            hreflang: 'en'
        },
        result: {
            title: 'MBTI Test Results - Your Personality Analysis Report',
            description: 'View your MBTI personality test results with detailed analysis of 16 personality types, strengths, and career recommendations.',
            keywords: 'MBTI results,personality types,personality analysis report,MBTI characteristics,career advice',
            ogTitle: 'MBTI Test Results Analysis',
            ogDescription: 'Detailed personality analysis report understanding your MBTI type characteristics',
            lang: 'en-US',
            hreflang: 'en'
        },
        about: {
            title: 'About MBTI - Myers-Briggs Type Indicator Explained',
            description: 'Learn about MBTI history, theoretical foundation, 16 personality types explained, and how to use MBTI for relationships and career development.',
            keywords: 'MBTI theory,Myers-Briggs,personality type theory,psychology,personality analysis method',
            ogTitle: 'About MBTI Personality Theory',
            ogDescription: 'Deep dive into MBTI theoretical foundation and 16 personality types',
            lang: 'en-US',
            hreflang: 'en'
        }
    },
    ja: {
        home: {
            title: 'MBTI性格診断 - 無料オンライン心理テストツール',
            description: '専門的なMBTI性格診断で、あなたの性格タイプ、強み、発展方向を深く理解できます。心理学理論に基づいた科学的で正確な性格分析を提供します。',
            keywords: 'MBTI診断,性格診断,心理テスト,性格分析,MBTI性格タイプ,無料テスト,オンラインテスト',
            ogTitle: 'MBTI性格診断 - 本当の自分を発見',
            ogDescription: '専門的なMBTI性格診断を通じて、あなたの性格タイプと強みを深く理解',
            ogImage: '/og-image-ja.jpg',
            lang: 'ja-JP',
            hreflang: 'ja'
        },
        test: {
            title: 'MBTI診断テスト - 性格探求の旅を始めよう',
            description: '60の精心設計されたMBTI診断問題、7段階評価システムで科学的で正確な性格分析を行います。',
            keywords: 'MBTI診断問題,性格診断問題,心理評価,性格分析問題,MBTIアンケート',
            ogTitle: 'MBTI性格診断 - テスト開始',
            ogDescription: '60の科学的に設計された質問を通じて、あなたのMBTI性格タイプを発見',
            lang: 'ja-JP',
            hreflang: 'ja'
        },
        result: {
            title: 'MBTI診断結果 - あなたの性格分析レポート',
            description: 'MBTI性格診断結果を確認し、16の性格タイプの特徴、強み、発展提案、職業方向を詳しく理解できます。',
            keywords: 'MBTI結果,性格タイプ,性格分析レポート,MBTI性格特徴,職業アドバイス',
            ogTitle: 'MBTI診断結果分析',
            ogDescription: '詳細な性格分析レポートであなたのMBTIタイプ特徴を理解',
            lang: 'ja-JP',
            hreflang: 'ja'
        },
        about: {
            title: 'MBTIについて - Myers-Briggs性格タイプ指標詳解',
            description: 'MBTIの歴史背景、理論基礎、16の性格タイプ詳解、およびMBTIを活用した人間関係と職業発展の改善方法を学べます。',
            keywords: 'MBTI理論,Myers-Briggs,性格タイプ理論,心理学,性格分析方法',
            ogTitle: 'MBTI性格タイプ理論について',
            ogDescription: 'MBTI理論基礎と16の性格タイプを深く理解',
            lang: 'ja-JP',
            hreflang: 'ja'
        }
    },
    fr: {
        home: {
            title: 'Test de Personnalité MBTI Gratuit - Découvrez Votre Vrai Moi',
            description: 'Test de personnalité MBTI professionnel pour comprendre votre type de personnalité, forces et directions de développement. Basé sur la théorie psychologique pour une analyse précise.',
            keywords: 'test MBTI,test de personnalité,test de psychologie,analyse de personnalité,types de personnalité MBTI,test gratuit,test en ligne',
            ogTitle: 'Test de Personnalité MBTI - Découvrez Votre Vrai Moi',
            ogDescription: 'Grâce au test de personnalité MBTI professionnel, comprenez profondément votre type de personnalité et vos forces',
            ogImage: '/og-image-fr.jpg',
            lang: 'fr-FR',
            hreflang: 'fr'
        },
        test: {
            title: 'Questions Test MBTI - Commencez Votre Voyage de Personnalité',
            description: '60 questions de test MBTI soigneusement conçues avec un système de notation à 7 points pour une évaluation précise de la personnalité.',
            keywords: 'questions test MBTI,questions test de personnalité,évaluation psychologique,questions analyse de personnalité,questionnaire MBTI',
            ogTitle: 'Test de Personnalité MBTI - Commencer le Test',
            ogDescription: 'Découvrez votre type de personnalité MBTI à travers 60 questions scientifiquement conçues',
            lang: 'fr-FR',
            hreflang: 'fr'
        },
        result: {
            title: 'Résultats Test MBTI - Votre Rapport d\'Analyse de Personnalité',
            description: 'Consultez vos résultats du test de personnalité MBTI avec une analyse détaillée des 16 types de personnalité, forces et recommandations de carrière.',
            keywords: 'résultats MBTI,types de personnalité,rapport analyse de personnalité,caractéristiques MBTI,conseils de carrière',
            ogTitle: 'Analyse des Résultats du Test MBTI',
            ogDescription: 'Rapport détaillé d\'analyse de personnalité comprenant les caractéristiques de votre type MBTI',
            lang: 'fr-FR',
            hreflang: 'fr'
        },
        about: {
            title: 'À Propos de MBTI - Indicateur de Types Myers-Briggs Expliqué',
            description: 'Apprenez l\'histoire de MBTI, les fondements théoriques, l\'explication des 16 types de personnalité, et comment utiliser MBTI pour améliorer les relations et le développement de carrière.',
            keywords: 'théorie MBTI,Myers-Briggs,théorie des types de personnalité,psychologie,méthode d\'analyse de personnalité',
            ogTitle: 'À Propos de la Théorie de Personnalité MBTI',
            ogDescription: 'Plongée profonde dans les fondements théoriques MBTI et les 16 types de personnalité',
            lang: 'fr-FR',
            hreflang: 'fr'
        }
    },
    de: {
        home: {
            title: 'Kostenloser MBTI Persönlichkeitstest - Entdecke Dein Wahres Ich',
            description: 'Professioneller MBTI Persönlichkeitstest zum Verständnis Ihres Persönlichkeitstyps, Stärken und Entwicklungsrichtungen. Basiert auf psychologischer Theorie für präzise Persönlichkeitsanalyse.',
            keywords: 'MBTI Test,Persönlichkeitstest,Psychologie Test,Persönlichkeitsanalyse,MBTI Persönlichkeitstypen,kostenloser Test,Online Test',
            ogTitle: 'MBTI Persönlichkeitstest - Entdecke Dein Wahres Ich',
            ogDescription: 'Durch professionelle MBTI Persönlichkeitstests verstehen Sie Ihren Persönlichkeitstyp und Stärken tiefgreifend',
            ogImage: '/og-image-de.jpg',
            lang: 'de-DE',
            hreflang: 'de'
        },
        test: {
            title: 'MBTI Testfragen - Beginnen Sie Ihre Persönlichkeitsreise',
            description: '60 sorgfältig gestaltete MBTI Testfragen mit 7-Punkte-Bewertungssystem für präzise Persönlichkeitsbewertung.',
            keywords: 'MBTI Testfragen,Persönlichkeitstest Fragen,psychologische Bewertung,Persönlichkeitsanalyse Fragen,MBTI Fragebogen',
            ogTitle: 'MBTI Persönlichkeitstest - Test Starten',
            ogDescription: 'Entdecken Sie Ihren MBTI Persönlichkeitstyp durch 60 wissenschaftlich gestaltete Fragen',
            lang: 'de-DE',
            hreflang: 'de'
        },
        result: {
            title: 'MBTI Testergebnisse - Ihr Persönlichkeitsanalysebericht',
            description: 'Betrachten Sie Ihre MBTI Persönlichkeitstestergebnisse mit detaillierter Analyse der 16 Persönlichkeitstypen, Stärken und Karriereempfehlungen.',
            keywords: 'MBTI Ergebnisse,Persönlichkeitstypen,Persönlichkeitsanalysebericht,MBTI Eigenschaften,Karriereberatung',
            ogTitle: 'MBTI Testergebnisse Analyse',
            ogDescription: 'Detaillierter Persönlichkeitsanalysebericht zum Verständnis Ihrer MBTI Typ-Eigenschaften',
            lang: 'de-DE',
            hreflang: 'de'
        },
        about: {
            title: 'Über MBTI - Myers-Briggs Typenindikator Erklärt',
            description: 'Lernen Sie die MBTI Geschichte, theoretische Grundlagen, Erklärung der 16 Persönlichkeitstypen und wie MBTI für Beziehungen und Karriereentwicklung verwendet wird.',
            keywords: 'MBTI Theorie,Myers-Briggs,Persönlichkeitstyp Theorie,Psychologie,Persönlichkeitsanalyse Methode',
            ogTitle: 'Über MBTI Persönlichkeitstheorie',
            ogDescription: 'Tiefe Einblicke in MBTI theoretische Grundlagen und 16 Persönlichkeitstypen',
            lang: 'de-DE',
            hreflang: 'de'
        }
    },
    es: {
        home: {
            title: 'Test de Personalidad MBTI Gratuito - Descubre Tu Verdadero Yo',
            description: 'Test de personalidad MBTI profesional para entender tu tipo de personalidad, fortalezas y direcciones de desarrollo. Basado en teoría psicológica para análisis preciso.',
            keywords: 'test MBTI,test de personalidad,test de psicología,análisis de personalidad,tipos de personalidad MBTI,test gratuito,test en línea',
            ogTitle: 'Test de Personalidad MBTI - Descubre Tu Verdadero Yo',
            ogDescription: 'A través del test de personalidad MBTI profesional, comprende profundamente tu tipo de personalidad y fortalezas',
            ogImage: '/og-image-es.jpg',
            lang: 'es-ES',
            hreflang: 'es'
        },
        test: {
            title: 'Preguntas Test MBTI - Comienza Tu Viaje de Personalidad',
            description: '60 preguntas de test MBTI cuidadosamente diseñadas con sistema de puntuación de 7 puntos para evaluación precisa de personalidad.',
            keywords: 'preguntas test MBTI,preguntas test de personalidad,evaluación psicológica,preguntas análisis de personalidad,cuestionario MBTI',
            ogTitle: 'Test de Personalidad MBTI - Comenzar Test',
            ogDescription: 'Descubre tu tipo de personalidad MBTI a través de 60 preguntas científicamente diseñadas',
            lang: 'es-ES',
            hreflang: 'es'
        },
        result: {
            title: 'Resultados Test MBTI - Tu Informe de Análisis de Personalidad',
            description: 'Ve tus resultados del test de personalidad MBTI con análisis detallado de 16 tipos de personalidad, fortalezas y recomendaciones de carrera.',
            keywords: 'resultados MBTI,tipos de personalidad,informe análisis de personalidad,características MBTI,consejos de carrera',
            ogTitle: 'Análisis de Resultados del Test MBTI',
            ogDescription: 'Informe detallado de análisis de personalidad entendiendo las características de tu tipo MBTI',
            lang: 'es-ES',
            hreflang: 'es'
        },
        about: {
            title: 'Acerca de MBTI - Indicador de Tipos Myers-Briggs Explicado',
            description: 'Aprende sobre la historia de MBTI, fundamentos teóricos, explicación de 16 tipos de personalidad, y cómo usar MBTI para relaciones y desarrollo profesional.',
            keywords: 'teoría MBTI,Myers-Briggs,teoría de tipos de personalidad,psicología,método de análisis de personalidad',
            ogTitle: 'Acerca de la Teoría de Personalidad MBTI',
            ogDescription: 'Inmersión profunda en fundamentos teóricos MBTI y 16 tipos de personalidad',
            lang: 'es-ES',
            hreflang: 'es'
        }
    }
}

// 获取当前页面的SEO配置
export function getSEOConfig(language: string, route: string): SEOConfig | null {
    const langConfig = seoConfig[language]
    if (!langConfig) return null

    const routeKey = route.replace('/', '') || 'home'
    return langConfig[routeKey] || null
}

// 生成hreflang链接
export function generateHreflangLinks(currentRoute: string): Array<{ hreflang: string; href: string }> {
    const languages = ['zh', 'en', 'ja', 'fr', 'de', 'es']
    const baseUrl = window.location.origin

    return languages.map(lang => ({
        hreflang: seoConfig[lang]?.home?.hreflang || lang,
        href: `${baseUrl}/${lang}${currentRoute === 'home' ? '' : '/' + currentRoute}`
    }))
}

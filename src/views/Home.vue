<template>
    <div class="home-page">
        <div class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">发现真实的自己</h1>
                    <p class="hero-subtitle">
                        通过专业的 MBTI 性格测试，深入了解您的性格类型、优势特点和发展方向。
                        采用7点精细量表，60道深度问题，一键式快速答题体验。
                    </p>
                    <div class="hero-features">
                        <div class="feature-item">
                            <div class="feature-icon">🧠</div>
                            <div class="feature-text">科学专业</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">⚡</div>
                            <div class="feature-text">快速准确</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">🎯</div>
                            <div class="feature-text">个性化分析</div>
                        </div>
                    </div>
                    <div class="hero-actions">
                        <router-link to="/test" class="btn btn-primary btn-large">
                            开始测试
                        </router-link>
                        <router-link to="/about" class="btn btn-outline">
                            了解更多
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="info-section">
            <div class="container">
                <div class="section-header">
                    <h2>什么是 MBTI？</h2>
                    <p>Myers-Briggs 类型指标是世界上最受欢迎的性格评估工具之一</p>
                </div>

                <div class="grid grid-2">
                    <div class="info-card">
                        <div class="card-icon">🔍</div>
                        <h3>深度自我认知</h3>
                        <p>帮助您更深入地了解自己的性格特点、思维方式和行为模式，发现内在的真实自我。</p>
                    </div>

                    <div class="info-card">
                        <div class="card-icon">🚀</div>
                        <h3>职业发展指导</h3>
                        <p>基于您的性格类型，为您推荐最适合的职业方向和发展路径，助力事业成功。</p>
                    </div>

                    <div class="info-card">
                        <div class="card-icon">💝</div>
                        <h3>改善人际关系</h3>
                        <p>了解不同性格类型的特点，改善与家人、朋友、同事的关系，建立更和谐的人际网络。</p>
                    </div>

                    <div class="info-card">
                        <div class="card-icon">🎯</div>
                        <h3>个人成长</h3>
                        <p>认识自己的优势和待改进的地方，制定更有针对性的个人发展计划。</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="types-preview">
            <div class="container">
                <div class="section-header">
                    <h2>16 种性格类型</h2>
                    <p>每个人都拥有独特的性格组合，探索属于您的那一种</p>
                </div>

                <div class="types-grid">
                    <div class="type-category">
                        <h3 class="category-title">分析家 (NT)</h3>
                        <div class="type-items">
                            <div class="type-item">
                                <div class="type-code">INTJ</div>
                                <div class="type-name">建筑师</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">INTP</div>
                                <div class="type-name">思想家</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ENTJ</div>
                                <div class="type-name">指挥官</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ENTP</div>
                                <div class="type-name">辩论家</div>
                            </div>
                        </div>
                    </div>

                    <div class="type-category">
                        <h3 class="category-title">外交家 (NF)</h3>
                        <div class="type-items">
                            <div class="type-item">
                                <div class="type-code">INFJ</div>
                                <div class="type-name">提倡者</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">INFP</div>
                                <div class="type-name">调停者</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ENFJ</div>
                                <div class="type-name">主人公</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ENFP</div>
                                <div class="type-name">竞选者</div>
                            </div>
                        </div>
                    </div>

                    <div class="type-category">
                        <h3 class="category-title">守护者 (SJ)</h3>
                        <div class="type-items">
                            <div class="type-item">
                                <div class="type-code">ISTJ</div>
                                <div class="type-name">物流师</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ISFJ</div>
                                <div class="type-name">守护者</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ESTJ</div>
                                <div class="type-name">总经理</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ESFJ</div>
                                <div class="type-name">执政官</div>
                            </div>
                        </div>
                    </div>

                    <div class="type-category">
                        <h3 class="category-title">探险家 (SP)</h3>
                        <div class="type-items">
                            <div class="type-item">
                                <div class="type-code">ISTP</div>
                                <div class="type-name">鉴赏家</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ISFP</div>
                                <div class="type-name">探险家</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ESTP</div>
                                <div class="type-name">企业家</div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ESFP</div>
                                <div class="type-name">娱乐家</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cta-section">
            <div class="container">
                <div class="cta-content">
                    <h2>准备好了解真实的自己吗？</h2>
                    <p>60道精心设计的问题，7点精细量表评分，一键式快速答题。只需 15-20 分钟，获得专业的性格分析报告</p>
                    <router-link to="/test" class="btn btn-primary btn-large">
                        立即开始测试
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// 页面逻辑
</script>

<style scoped>
.home-page {
    min-height: 100vh;
}

.hero-section {
    padding: 6rem 0;
    text-align: center;
    background: linear-gradient(135deg, rgba(76, 81, 191, 0.2) 0%, rgba(102, 126, 234, 0.2) 100%);
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #4c51bf 0%, #667eea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.3rem;
    color: #cbd5e0;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.hero-features {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;
}

.feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.feature-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.feature-text {
    font-weight: 600;
    color: #e2e8f0;
}

.hero-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-large {
    padding: 16px 32px;
    font-size: 1.1rem;
}

.info-section {
    padding: 6rem 0;
    background: rgba(45, 55, 72, 0.8);
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #f7fafc;
}

.section-header p {
    font-size: 1.2rem;
    color: #cbd5e0;
    max-width: 600px;
    margin: 0 auto;
}

.info-card {
    background: rgba(45, 55, 72, 0.95);
    padding: 2.5rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.info-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #f7fafc;
}

.info-card p {
    color: #cbd5e0;
    line-height: 1.6;
}

.types-preview {
    padding: 6rem 0;
    background: rgba(26, 32, 44, 0.9);
}

.types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.type-category {
    background: rgba(45, 55, 72, 0.95);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #f7fafc;
    text-align: center;
}

.type-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.type-item {
    background: #4a5568;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.type-item:hover {
    background: linear-gradient(135deg, #4c51bf 0%, #667eea 100%);
    color: white;
    transform: translateY(-2px);
}

.type-code {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: #e2e8f0;
}

.type-name {
    font-size: 0.9rem;
    opacity: 0.8;
    color: #cbd5e0;
}

.cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #4c51bf 0%, #667eea 100%);
    text-align: center;
    color: white;
}

.cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: white;
}

.cta-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-features {
        flex-direction: column;
        gap: 1.5rem;
    }

    .hero-actions {
        flex-direction: column;
        align-items: center;
    }

    .types-grid {
        grid-template-columns: 1fr;
    }

    .type-items {
        grid-template-columns: 1fr;
    }
}
</style>

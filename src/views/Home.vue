<template>
    <div class="home-page">
        <div class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">{{ $t('home.title') }}</h1>
                    <p class="hero-subtitle">
                        {{ $t('home.description') }}
                    </p>
                    <div class="hero-features">
                        <div class="feature-item">
                            <div class="feature-icon">🧠</div>
                            <div class="feature-text">{{ $t('home.features.accurate.title') }}</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">⚡</div>
                            <div class="feature-text">{{ $t('home.features.professional.title') }}</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">🎯</div>
                            <div class="feature-text">{{ $t('home.features.detailed.title') }}</div>
                        </div>
                    </div>
                    <div class="hero-actions">
                        <router-link to="/test" class="btn btn-primary btn-large">
                            {{ $t('home.startButton') }}
                        </router-link>
                        <router-link to="/about" class="btn btn-outline">
                            {{ $t('nav.about') }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="info-section">
            <div class="container">
                <div class="section-header">
                    <h2>{{ $t('home.infoSection.title') }}</h2>
                    <p>{{ $t('home.infoSection.subtitle') }}</p>
                </div>

                <div class="grid grid-2">
                    <div class="info-card">
                        <div class="card-icon">🔍</div>
                        <h3>{{ $t('home.infoSection.cards.selfAwareness.title') }}</h3>
                        <p>{{ $t('home.infoSection.cards.selfAwareness.description') }}</p>
                    </div>

                    <div class="info-card">
                        <div class="card-icon">🚀</div>
                        <h3>{{ $t('home.infoSection.cards.careerGuidance.title') }}</h3>
                        <p>{{ $t('home.infoSection.cards.careerGuidance.description') }}</p>
                    </div>

                    <div class="info-card">
                        <div class="card-icon">💝</div>
                        <h3>{{ $t('home.infoSection.cards.relationships.title') }}</h3>
                        <p>{{ $t('home.infoSection.cards.relationships.description') }}</p>
                    </div>

                    <div class="info-card">
                        <div class="card-icon">🎯</div>
                        <h3>{{ $t('home.infoSection.cards.personalGrowth.title') }}</h3>
                        <p>{{ $t('home.infoSection.cards.personalGrowth.description') }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="types-preview">
            <div class="container">
                <div class="section-header">
                    <h2>{{ $t('home.typesPreview.title') }}</h2>
                    <p>{{ $t('home.typesPreview.subtitle') }}</p>
                </div>

                <div class="types-grid">
                    <div class="type-category">
                        <h3 class="category-title">{{ $t('home.typesPreview.categories.analysts.title') }}</h3>
                        <div class="type-items">
                            <div class="type-item">
                                <div class="type-code">INTJ</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.analysts.types.intj') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">INTP</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.analysts.types.intp') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ENTJ</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.analysts.types.entj') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ENTP</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.analysts.types.entp') }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="type-category">
                        <h3 class="category-title">{{ $t('home.typesPreview.categories.diplomats.title') }}</h3>
                        <div class="type-items">
                            <div class="type-item">
                                <div class="type-code">INFJ</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.diplomats.types.infj') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">INFP</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.diplomats.types.infp') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ENFJ</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.diplomats.types.enfj') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ENFP</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.diplomats.types.enfp') }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="type-category">
                        <h3 class="category-title">{{ $t('home.typesPreview.categories.sentinels.title') }}</h3>
                        <div class="type-items">
                            <div class="type-item">
                                <div class="type-code">ISTJ</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.sentinels.types.istj') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ISFJ</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.sentinels.types.isfj') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ESTJ</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.sentinels.types.estj') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ESFJ</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.sentinels.types.esfj') }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="type-category">
                        <h3 class="category-title">{{ $t('home.typesPreview.categories.explorers.title') }}</h3>
                        <div class="type-items">
                            <div class="type-item">
                                <div class="type-code">ISTP</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.explorers.types.istp') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ISFP</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.explorers.types.isfp') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ESTP</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.explorers.types.estp') }}
                                </div>
                            </div>
                            <div class="type-item">
                                <div class="type-code">ESFP</div>
                                <div class="type-name">{{ $t('home.typesPreview.categories.explorers.types.esfp') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cta-section">
            <div class="container">
                <div class="cta-content">
                    <h2>{{ $t('home.cta.title') }}</h2>
                    <p>{{ $t('home.cta.subtitle') }}</p>
                    <router-link to="/test" class="btn btn-primary btn-large">
                        {{ $t('home.cta.startButton') }}
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

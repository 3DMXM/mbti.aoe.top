<template>
    <div class="about-page">
        <div class="container">
            <div class="about-header">
                <h1>{{ $t('about.title') }}</h1>
                <p class="subtitle">{{ $t('about.description') }}</p>
            </div>

            <div class="about-content">
                <div class="card">
                    <h2>{{ $t('about.dimensions.title') }}</h2>
                    <div class="dimensions-grid">
                        <div class="dimension-item">
                            <h3>{{ $t('about.dimensions.ei.title') }}</h3>
                            <div class="dimension-types">
                                <div class="type-desc">
                                    <strong>{{ $t('result.dimensions.extroversion') }}</strong>
                                    <p>{{ $t('about.dimensions.ei.description') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="dimension-item">
                            <h3>{{ $t('about.dimensions.sn.title') }}</h3>
                            <div class="dimension-types">
                                <div class="type-desc">
                                    <strong>{{ $t('result.dimensions.sensing') }} vs {{
                                        $t('result.dimensions.intuition') }}</strong>
                                    <p>{{ $t('about.dimensions.sn.description') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="dimension-item">
                            <h3>{{ $t('about.dimensions.tf.title') }}</h3>
                            <div class="dimension-types">
                                <div class="type-desc">
                                    <strong>{{ $t('result.dimensions.thinking') }} vs {{ $t('result.dimensions.feeling')
                                        }}</strong>
                                    <p>{{ $t('about.dimensions.tf.description') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="dimension-item">
                            <h3>{{ $t('about.dimensions.jp.title') }}</h3>
                            <div class="dimension-types">
                                <div class="type-desc">
                                    <strong>{{ $t('result.dimensions.judging') }} vs {{
                                        $t('result.dimensions.perceiving') }}</strong>
                                    <p>{{ $t('about.dimensions.jp.description') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h2>{{ $t('about.what.title') }}</h2>
                    <p>{{ $t('about.what.description') }}</p>
                </div>

                <div class="card">
                    <h2>{{ $t('about.types.title') }}</h2>
                    <p>{{ $t('about.types.description') }}</p>

                    <div class="type-categories">
                        <div class="category">
                            <h3>{{ $t('about.types.analysts.title') }}</h3>
                            <div class="category-types">
                                <span class="type-badge">{{ $t('about.types.analysts.intj') }}</span>
                                <span class="type-badge">{{ $t('about.types.analysts.intp') }}</span>
                                <span class="type-badge">{{ $t('about.types.analysts.entj') }}</span>
                                <span class="type-badge">{{ $t('about.types.analysts.entp') }}</span>
                            </div>
                        </div>

                        <div class="category">
                            <h3>{{ $t('about.types.diplomats.title') }}</h3>
                            <div class="category-types">
                                <span class="type-badge">{{ $t('about.types.diplomats.infj') }}</span>
                                <span class="type-badge">{{ $t('about.types.diplomats.infp') }}</span>
                                <span class="type-badge">{{ $t('about.types.diplomats.enfj') }}</span>
                                <span class="type-badge">{{ $t('about.types.diplomats.enfp') }}</span>
                            </div>
                        </div>

                        <div class="category">
                            <h3>{{ $t('about.types.sentinels.title') }}</h3>
                            <div class="category-types">
                                <span class="type-badge">{{ $t('about.types.sentinels.istj') }}</span>
                                <span class="type-badge">{{ $t('about.types.sentinels.isfj') }}</span>
                                <span class="type-badge">{{ $t('about.types.sentinels.estj') }}</span>
                                <span class="type-badge">{{ $t('about.types.sentinels.esfj') }}</span>
                            </div>
                        </div>

                        <div class="category">
                            <h3>{{ $t('about.types.explorers.title') }}</h3>
                            <div class="category-types">
                                <span class="type-badge">{{ $t('about.types.explorers.istp') }}</span>
                                <span class="type-badge">{{ $t('about.types.explorers.isfp') }}</span>
                                <span class="type-badge">{{ $t('about.types.explorers.estp') }}</span>
                                <span class="type-badge">{{ $t('about.types.explorers.esfp') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h2>{{ $t('about.value.title') }}</h2>
                    <div class="value-grid">
                        <div class="value-item">
                            <div class="value-icon">🎯</div>
                            <h3>{{ $t('about.value.career.title') }}</h3>
                            <p>{{ $t('about.value.career.description') }}</p>
                        </div>
                        <div class="value-item">
                            <div class="value-icon">🤝</div>
                            <h3>{{ $t('about.value.relationships.title') }}</h3>
                            <p>{{ $t('about.value.relationships.description') }}</p>
                        </div>
                        <div class="value-item">
                            <div class="value-icon">📚</div>
                            <h3>{{ $t('about.value.learning.title') }}</h3>
                            <p>{{ $t('about.value.learning.description') }}</p>
                        </div>
                        <div class="value-item">
                            <div class="value-icon">🌱</div>
                            <h3>{{ $t('about.value.growth.title') }}</h3>
                            <p>{{ $t('about.value.growth.description') }}</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h2>{{ $t('about.notice.title') }}</h2>
                    <div class="notice-list">
                        <div class="notice-item">
                            <span class="notice-icon">⚠️</span>
                            <p>{{ $t('about.notice.limitation') }}</p>
                        </div>
                        <div class="notice-item">
                            <span class="notice-icon">🔄</span>
                            <p>{{ $t('about.notice.change') }}</p>
                        </div>
                        <div class="notice-item">
                            <span class="notice-icon">🎭</span>
                            <p>{{ $t('about.notice.equality') }}</p>
                        </div>
                        <div class="notice-item">
                            <span class="notice-icon">🔍</span>
                            <p>{{ $t('about.notice.reference') }}</p>
                        </div>
                    </div>
                </div>

                <div class="cta-section">
                    <h2>{{ $t('about.cta.title') }}</h2>
                    <p>{{ $t('about.cta.description') }}</p>
                    <router-link to="/test" class="btn btn-primary btn-large">
                        {{ $t('about.cta.button') }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// About page logic
</script>

<style scoped>
.about-page {
    min-height: 100vh;
    padding: 4rem 0;
}

.about-header {
    text-align: center;
    margin-bottom: 4rem;
}

.about-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #4c51bf 0%, #667eea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle {
    font-size: 1.3rem;
    color: #cbd5e0;
}

.about-content {
    max-width: 1000px;
    margin: 0 auto;
}

.dimensions-grid {
    display: grid;
    gap: 2rem;
    margin-top: 1.5rem;
}

.dimension-item {
    border: 1px solid #4a5568;
    border-radius: 10px;
    padding: 1.5rem;
    background: #4a5568;
}

.dimension-item h3 {
    margin-bottom: 1rem;
    color: #f7fafc;
}

.dimension-types {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.type-desc {
    padding: 1rem;
    background: rgba(45, 55, 72, 0.9);
    border-radius: 8px;
    border-left: 4px solid #4c51bf;
}

.type-desc strong {
    color: #f7fafc;
    display: block;
    margin-bottom: 0.5rem;
}

.type-desc p {
    margin: 0;
    color: #cbd5e0;
    font-size: 0.9rem;
}

.type-categories {
    display: grid;
    gap: 2rem;
    margin-top: 1.5rem;
}

.category {
    border-left: 4px solid #4c51bf;
    padding-left: 1.5rem;
}

.category h3 {
    margin-bottom: 1rem;
    color: #f7fafc;
}

.category-types {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.type-badge {
    background: linear-gradient(135deg, #4c51bf 0%, #667eea 100%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.value-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
}

.value-item {
    text-align: center;
    padding: 1.5rem;
    background: #4a5568;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.value-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.value-item h3 {
    margin-bottom: 0.75rem;
    color: #f7fafc;
}

.value-item p {
    margin: 0;
    color: #cbd5e0;
    font-size: 0.95rem;
}

.notice-list {
    display: grid;
    gap: 1rem;
    margin-top: 1.5rem;
}

.notice-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: rgba(237, 137, 54, 0.2);
    border: 1px solid rgba(237, 137, 54, 0.4);
    border-radius: 8px;
}

.notice-icon {
    font-size: 1.2rem;
    flex-shrink: 0;
}

.notice-item p {
    margin: 0;
    color: #fbd38d;
}

.cta-section {
    background: linear-gradient(135deg, #4c51bf 0%, #667eea 100%);
    color: white;
    padding: 3rem;
    border-radius: 15px;
    text-align: center;
    margin-top: 3rem;
}

.cta-section h2 {
    color: white;
    margin-bottom: 1rem;
}

.cta-section p {
    margin-bottom: 2rem;
    opacity: 0.9;
}

.btn-large {
    padding: 16px 32px;
    font-size: 1.1rem;
}

@media (max-width: 768px) {
    .about-header h1 {
        font-size: 2.5rem;
    }

    .dimension-types {
        grid-template-columns: 1fr;
    }

    .value-grid {
        grid-template-columns: 1fr;
    }

    .category-types {
        justify-content: flex-start;
    }

    .type-badge {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
    }
}
</style>

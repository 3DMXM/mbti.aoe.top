<template>
    <div class="result-page">
        <div class="container-sm">
            <div v-if="resultType" class="result-content">
                <!-- 主要结果卡片 -->
                <div class="result-card">
                    <div class="mbti-type">{{ resultType.code }}</div>
                    <div class="mbti-name">{{ resultType.name }}</div>
                    <div class="mbti-description">{{ resultType.description }}</div>
                </div>

                <!-- 特质分析 -->
                <div class="card">
                    <h3>{{ $t('result.coreTraits') }}</h3>
                    <div class="traits-grid">
                        <div class="trait-item">
                            <div class="trait-label">{{ $t('result.dimensions.energySource') }}</div>
                            <div class="trait-value">
                                {{ resultType.code[0] === 'E' ? $t('result.dimensions.extroversion') :
                                    $t('result.dimensions.introversion') }}
                            </div>
                        </div>
                        <div class="trait-item">
                            <div class="trait-label">{{ $t('result.dimensions.informationGathering') }}</div>
                            <div class="trait-value">
                                {{ resultType.code[1] === 'S' ? $t('result.dimensions.sensing') :
                                    $t('result.dimensions.intuition') }}
                            </div>
                        </div>
                        <div class="trait-item">
                            <div class="trait-label">{{ $t('result.dimensions.decisionMaking') }}</div>
                            <div class="trait-value">
                                {{ resultType.code[2] === 'T' ? $t('result.dimensions.thinking') :
                                    $t('result.dimensions.feeling') }}
                            </div>
                        </div>
                        <div class="trait-item">
                            <div class="trait-label">{{ $t('result.dimensions.lifestyle') }}</div>
                            <div class="trait-value">
                                {{ resultType.code[3] === 'J' ? $t('result.dimensions.judging') :
                                    $t('result.dimensions.perceiving') }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 优势特点 -->
                <div class="card">
                    <h3>{{ $t('result.strengths') }}</h3>
                    <div class="strengths-list">
                        <div v-for="strength in resultType.strengths" :key="strength" class="strength-item">
                            <div class="strength-icon">✨</div>
                            <div class="strength-text">{{ strength }}</div>
                        </div>
                    </div>
                </div>

                <!-- 需要注意的地方 -->
                <div class="card">
                    <h3>{{ $t('result.weaknesses') }}</h3>
                    <div class="weaknesses-list">
                        <div v-for="weakness in resultType.weaknesses" :key="weakness" class="weakness-item">
                            <div class="weakness-icon">⚠️</div>
                            <div class="weakness-text">{{ weakness }}</div>
                        </div>
                    </div>
                </div>

                <!-- 适合的职业 -->
                <div class="card">
                    <h3>{{ $t('result.careers') }}</h3>
                    <div class="careers-grid">
                        <div v-for="career in resultType.careers" :key="career" class="career-item">
                            {{ career }}
                        </div>
                    </div>
                </div>

                <!-- 著名人物 -->
                <div class="card">
                    <h3>{{ $t('result.famousPeople') }}</h3>
                    <div class="famous-people">
                        <div v-for="person in resultType.famousPeople" :key="person" class="person-item">
                            <div class="person-icon">👤</div>
                            <div class="person-name">{{ person }}</div>
                        </div>
                    </div>
                </div>

                <!-- 兼容性类型 -->
                <div class="card">
                    <h3>{{ $t('result.compatibleTypes') }}</h3>
                    <div class="compatible-types">
                        <div v-for="type in resultType.compatibleTypes" :key="type" class="compatible-type">
                            {{ type }}
                        </div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="result-actions">
                    <button @click="retakeTest" class="btn btn-outline">
                        {{ $t('result.retakeTest') }}
                    </button>
                    <button @click="shareResult" class="btn btn-primary">
                        {{ $t('result.shareResult') }}
                    </button>
                    <router-link to="/" class="btn btn-secondary">
                        {{ $t('result.backToHome') }}
                    </router-link>
                </div>
            </div>

            <!-- 加载状态 -->
            <div v-else class="loading">
                <div class="spinner"></div>
                <p>{{ $t('result.loading') }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useMbtiStore } from '@/stores/mbtiStore'

const router = useRouter()
const i18n = useI18n()
const { t } = i18n
const mbtiStore = useMbtiStore()

const resultType = computed(() => mbtiStore.resultType)

const retakeTest = () => {
    mbtiStore.resetTest()
    router.push('/test')
}

const shareResult = () => {
    if (resultType.value) {
        const shareText = `${t('result.shareText', {
            code: resultType.value.code,
            name: resultType.value.name,
            description: resultType.value.description
        })}`

        if (navigator.share) {
            navigator.share({
                title: t('result.shareTitle'),
                text: shareText,
                url: window.location.href
            })
        } else {
            // 复制到剪贴板
            navigator.clipboard.writeText(shareText).then(() => {
                alert(t('result.copySuccess'))
            }).catch(() => {
                alert(t('result.shareUnavailable'))
            })
        }
    }
}

onMounted(() => {
    // 如果没有测试结果，重定向到测试页面
    if (!mbtiStore.result) {
        router.push('/test')
    }
})
</script>

<style scoped>
.result-page {
    min-height: 100vh;
    padding: 2rem 0;
}

.result-content {
    animation: fadeInUp 0.8s ease;
}

.strengths-list,
.weaknesses-list {
    display: grid;
    gap: 1rem;
}

.strength-item,
.weakness-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #4a5568;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.strength-icon,
.weakness-icon {
    font-size: 1.2rem;
}

.careers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.career-item {
    background: linear-gradient(135deg, #4c51bf 0%, #667eea 100%);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
}

.famous-people {
    display: grid;
    gap: 1rem;
}

.person-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #4a5568;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.person-icon {
    font-size: 1.5rem;
}

.compatible-types {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.compatible-type {
    background: #38b2ac;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1.1rem;
}

.result-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .careers-grid {
        grid-template-columns: 1fr;
    }

    .compatible-types {
        justify-content: flex-start;
    }

    .result-actions {
        flex-direction: column;
        align-items: center;
    }

    .result-actions .btn {
        width: 100%;
        max-width: 200px;
    }
}
</style>

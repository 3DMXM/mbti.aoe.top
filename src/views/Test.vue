<template>
    <div class="test-page">
        <div class="container-sm">
            <!-- 进度条 -->
            <div class="progress-container">
                <div class="progress-bar" :style="{ width: progress + '%' }"></div>
            </div>
            <div class="progress-text">
                问题 {{ currentQuestionIndex + 1 }} / {{ totalQuestions }}
            </div>

            <!-- 测试完成 -->
            <div v-if="isTestCompleted" class="completion-screen">
                <div class="card text-center">
                    <div class="completion-icon">🎉</div>
                    <h2>测试完成！</h2>
                    <p>正在分析您的答案，即将为您生成专属的性格分析报告...</p>
                    <div class="loading">
                        <div class="spinner"></div>
                    </div>
                </div>
            </div>

            <!-- 问题卡片 -->
            <div v-else-if="currentQuestion" class="question-card">
                <div class="question-number">
                    第 {{ currentQuestionIndex + 1 }} 题
                </div>

                <div class="question-text">
                    {{ currentQuestion.text }}
                </div>

                <div class="options">
                    <div v-for="(option, index) in options" :key="index" class="option"
                        :class="{ selected: selectedAnswer === option.value }" @click="selectAnswer(option.value)">
                        <span class="option-number">{{ index + 1 }}</span>
                        <span class="option-text">{{ option.text }}</span>
                    </div>
                </div>

                <div class="question-actions">
                    <button class="btn btn-outline" @click="goBack" :disabled="currentQuestionIndex === 0">
                        ← 上一题
                    </button>

                    <div class="question-hint">
                        点击选项自动进入下一题
                    </div>
                </div>
            </div>

            <!-- 加载状态 -->
            <div v-else class="loading">
                <div class="spinner"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useMbtiStore } from '@/stores/mbtiStore'

const router = useRouter()
const mbtiStore = useMbtiStore()

const selectedAnswer = ref<number | null>(null)

// 选项数据
const options = [
    { text: '很不符合', value: 1 },
    { text: '不符合', value: 2 },
    { text: '较少符合', value: 3 },
    { text: '中性', value: 4 },
    { text: '较多符合', value: 5 },
    { text: '符合', value: 6 },
    { text: '很符合', value: 7 }
]

// 计算属性
const currentQuestion = computed(() => mbtiStore.currentQuestion)
const currentQuestionIndex = computed(() => mbtiStore.currentQuestionIndex)
const isTestCompleted = computed(() => mbtiStore.isTestCompleted)
const progress = computed(() => mbtiStore.progress)
const totalQuestions = computed(() => 60) // 总问题数

// 方法
const selectAnswer = (value: number) => {
    selectedAnswer.value = value

    // 延迟一小段时间让用户看到选择效果，然后自动进入下一题
    setTimeout(() => {
        nextQuestion()
    }, 300)
}

const nextQuestion = () => {
    if (selectedAnswer.value === null) return

    mbtiStore.answerQuestion(selectedAnswer.value)
    selectedAnswer.value = null
}

const goBack = () => {
    if (currentQuestionIndex.value > 0) {
        mbtiStore.currentQuestionIndex--
        // 恢复之前的答案
        const previousAnswer = mbtiStore.answers[currentQuestionIndex.value]
        selectedAnswer.value = previousAnswer?.value || null
    }
}

// 监听测试完成状态
watch(isTestCompleted, (completed) => {
    if (completed) {
        // 延迟跳转到结果页面
        setTimeout(() => {
            router.push('/result')
        }, 3000)
    }
})

// 页面初始化
onMounted(() => {
    // 如果已有答案，恢复选择状态
    const existingAnswer = mbtiStore.answers[currentQuestionIndex.value]
    if (existingAnswer) {
        selectedAnswer.value = existingAnswer.value
    }
})

// 监听问题变化，重置选择
watch(currentQuestionIndex, () => {
    const existingAnswer = mbtiStore.answers[currentQuestionIndex.value]
    selectedAnswer.value = existingAnswer?.value || null
})
</script>

<style scoped>
.test-page {
    min-height: 100vh;
    padding: 2rem 0;
}

.completion-screen {
    animation: fadeIn 0.6s ease;
}

.completion-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.question-actions {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.question-actions .btn {
    flex: 1;
    min-width: 120px;
}

.question-actions .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .question-actions {
        flex-direction: column;
    }

    .question-actions .btn {
        width: 100%;
    }
}

.options {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.8rem 0.4rem;
    border: 2px solid #4a5568;
    border-radius: 12px;
    background: #2d3748;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    color: #e2e8f0;
    position: relative;
    overflow: hidden;
    min-height: 70px;
}

.option::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(76, 81, 191, 0.1), transparent);
    transition: left 0.5s;
}

.option:hover::before {
    left: 100%;
}

.option:hover {
    border-color: #4c51bf;
    background: #4a5568;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 81, 191, 0.2);
}

.option.selected {
    border-color: #4c51bf;
    background: linear-gradient(135deg, #4c51bf 0%, #667eea 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 81, 191, 0.4);
    animation: pulseSelection 0.3s ease;
}

@keyframes pulseSelection {
    0% {
        transform: translateY(-2px) scale(1);
    }

    50% {
        transform: translateY(-2px) scale(1.02);
    }

    100% {
        transform: translateY(-2px) scale(1);
    }
}

.option-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    font-weight: 600;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.option.selected .option-number {
    background: rgba(255, 255, 255, 0.2);
}

.option-text {
    flex: 1;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.2;
    text-align: center;
}

.question-hint {
    color: #a0aec0;
    font-size: 0.9rem;
    font-style: italic;
    text-align: center;
    flex: 1;
}

@media (max-width: 768px) {
    .options {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .option {
        flex-direction: row;
        justify-content: flex-start;
        padding: 1rem;
        gap: 0.75rem;
        min-height: auto;
    }

    .option-text {
        text-align: left;
        font-size: 0.8rem;
    }

    .question-actions {
        flex-direction: column;
        text-align: center;
    }

    .question-actions .btn {
        width: 100%;
        max-width: 200px;
    }

    .question-hint {
        order: -1;
        margin-bottom: 1rem;
    }

    .option-number {
        width: 28px;
        height: 28px;
        font-size: 0.8rem;
    }
}

@media (max-width: 1200px) and (min-width: 769px) {
    .options {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .option {
        flex-direction: row;
        justify-content: flex-start;
        padding: 1rem;
        gap: 0.75rem;
        min-height: auto;
    }

    .option-text {
        text-align: left;
        font-size: 0.8rem;
    }
}
</style>

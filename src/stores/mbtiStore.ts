import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { questions } from '@/data/questions'
import { mbtiTypes } from '@/data/mbtiTypes'
import type { Question, MBTIType, Answer } from '@/types'

export const useMbtiStore = defineStore('mbti', () => {
    // 状态
    const currentQuestionIndex = ref(0)
    const answers = ref<Answer[]>([])
    const result = ref<string | null>(null)
    const isTestCompleted = ref(false)

    // 计算属性
    const currentQuestion = computed<Question | null>(() => {
        return questions[currentQuestionIndex.value] || null
    })

    const progress = computed(() => {
        return (currentQuestionIndex.value / questions.length) * 100
    })

    const resultType = computed(() => {
        if (!result.value) return null
        return mbtiTypes.find(type => type.code === result.value) || null
    })

    // 方法
    const answerQuestion = (value: number) => {
        // 记录答案
        answers.value[currentQuestionIndex.value] = {
            questionId: currentQuestion.value?.id || 0,
            value
        }

        // 如果是最后一个问题，计算结果
        if (currentQuestionIndex.value === questions.length - 1) {
            calculateResult()
            isTestCompleted.value = true
        } else {
            // 否则前进到下一个问题
            currentQuestionIndex.value++
        }
    }

    const calculateResult = () => {
        // 计算E vs I
        const eScore = calculateDimensionScore('EI', 1)
        const iScore = calculateDimensionScore('EI', -1)
        const eiResult = eScore > iScore ? 'E' : 'I'

        // 计算S vs N
        const sScore = calculateDimensionScore('SN', 1)
        const nScore = calculateDimensionScore('SN', -1)
        const snResult = sScore > nScore ? 'S' : 'N'

        // 计算T vs F
        const tScore = calculateDimensionScore('TF', 1)
        const fScore = calculateDimensionScore('TF', -1)
        const tfResult = tScore > fScore ? 'T' : 'F'

        // 计算J vs P
        const jScore = calculateDimensionScore('JP', 1)
        const pScore = calculateDimensionScore('JP', -1)
        const jpResult = jScore > pScore ? 'J' : 'P'

        // 组合结果
        result.value = eiResult + snResult + tfResult + jpResult
    }

    const calculateDimensionScore = (dimension: string, polarity: number) => {
        return answers.value.reduce((score, answer) => {
            const question = questions.find(q => q.id === answer.questionId)
            if (question && question.dimension === dimension && question.polarity === polarity) {
                return score + answer.value
            }
            return score
        }, 0)
    }

    const resetTest = () => {
        currentQuestionIndex.value = 0
        answers.value = []
        result.value = null
        isTestCompleted.value = false
    }

    return {
        currentQuestionIndex,
        answers,
        result,
        isTestCompleted,
        currentQuestion,
        progress,
        resultType,
        answerQuestion,
        resetTest
    }
})

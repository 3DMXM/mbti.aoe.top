export interface Question {
    id: number
    text: string
    dimension: 'EI' | 'SN' | 'TF' | 'JP' // 表示问题所测量的维度
    polarity: number // 1 表示正向 (E/S/T/J), -1 表示反向 (I/N/F/P)
}

export interface Answer {
    questionId: number
    value: number // 7点量表: 1 = 非常不同意, 7 = 非常同意
}

export interface MBTIType {
    code: string
    name: string
    description: string
    strengths: string[]
    weaknesses: string[]
    careers: string[]
    famousPeople: string[]
    compatibleTypes: string[]
}

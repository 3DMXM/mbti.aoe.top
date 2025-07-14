import type { Question } from '@/types'

export const questions: Question[] = [
    // E vs I 维度 (外向 vs 内向)
    {
        id: 1,
        text: '我喜欢认识新朋友并扩大我的社交圈',
        dimension: 'EI',
        polarity: 1 // E
    },
    {
        id: 2,
        text: '在大型社交聚会后，我通常感到精力充沛而不是疲惫',
        dimension: 'EI',
        polarity: 1 // E
    },
    {
        id: 3,
        text: '我更喜欢小组活动而不是单独工作',
        dimension: 'EI',
        polarity: 1 // E
    },
    {
        id: 4,
        text: '我喜欢有大量的朋友，而不是少数亲密的朋友',
        dimension: 'EI',
        polarity: 1 // E
    },
    {
        id: 5,
        text: '我更愿意独自思考问题而不是与他人讨论',
        dimension: 'EI',
        polarity: -1 // I
    },
    {
        id: 6,
        text: '我需要独处的时间来恢复精力',
        dimension: 'EI',
        polarity: -1 // I
    },
    {
        id: 7,
        text: '我喜欢在行动前充分思考',
        dimension: 'EI',
        polarity: -1 // I
    },
    {
        id: 8,
        text: '我更喜欢深入地了解少数几个话题，而不是广泛了解很多话题',
        dimension: 'EI',
        polarity: -1 // I
    },

    // S vs N 维度 (实感 vs 直觉)
    {
        id: 9,
        text: '我注重细节和具体事实',
        dimension: 'SN',
        polarity: 1 // S
    },
    {
        id: 10,
        text: '我相信亲身经历和切实证据',
        dimension: 'SN',
        polarity: 1 // S
    },
    {
        id: 11,
        text: '我倾向于按照既定的方式做事',
        dimension: 'SN',
        polarity: 1 // S
    },
    {
        id: 12,
        text: '我关注当下的实际情况而不是未来的可能性',
        dimension: 'SN',
        polarity: 1 // S
    },
    {
        id: 13,
        text: '我经常思考未来和各种可能性',
        dimension: 'SN',
        polarity: -1 // N
    },
    {
        id: 14,
        text: '我喜欢寻找模式和联系，思考事物之间的关系',
        dimension: 'SN',
        polarity: -1 // N
    },
    {
        id: 15,
        text: '我更喜欢创新和变化，而不是遵循传统',
        dimension: 'SN',
        polarity: -1 // N
    },
    {
        id: 16,
        text: '我倾向于相信直觉和灵感',
        dimension: 'SN',
        polarity: -1 // N
    },

    // T vs F 维度 (思考 vs 情感)
    {
        id: 17,
        text: '我做决定时更注重逻辑和客观分析',
        dimension: 'TF',
        polarity: 1 // T
    },
    {
        id: 18,
        text: '我倾向于直接指出问题，即使可能会伤害他人感受',
        dimension: 'TF',
        polarity: 1 // T
    },
    {
        id: 19,
        text: '我认为维护公平和原则比维护和谐更重要',
        dimension: 'TF',
        polarity: 1 // T
    },
    {
        id: 20,
        text: '我通常不受情绪影响做出理性决定',
        dimension: 'TF',
        polarity: 1 // T
    },
    {
        id: 21,
        text: '我做决定时考虑他人的感受和价值观',
        dimension: 'TF',
        polarity: -1 // F
    },
    {
        id: 22,
        text: '我喜欢赞美他人并给予情感支持',
        dimension: 'TF',
        polarity: -1 // F
    },
    {
        id: 23,
        text: '维护人际关系的和谐对我很重要',
        dimension: 'TF',
        polarity: -1 // F
    },
    {
        id: 24,
        text: '我倾向于同理他人并能感受到他人的情绪',
        dimension: 'TF',
        polarity: -1 // F
    },

    // J vs P 维度 (判断 vs 感知)
    {
        id: 25,
        text: '我喜欢有明确的计划和时间表',
        dimension: 'JP',
        polarity: 1 // J
    },
    {
        id: 26,
        text: '我倾向于提前完成任务，而不是在最后期限前完成',
        dimension: 'JP',
        polarity: 1 // J
    },
    {
        id: 27,
        text: '我喜欢有序和结构化的环境',
        dimension: 'JP',
        polarity: 1 // J
    },
    {
        id: 28,
        text: '我喜欢做决定并确定事情',
        dimension: 'JP',
        polarity: 1 // J
    },
    {
        id: 29,
        text: '我喜欢保持灵活性，不喜欢被严格的计划束缚',
        dimension: 'JP',
        polarity: -1 // P
    },
    {
        id: 30,
        text: '我喜欢即兴行事，根据当时情况调整计划',
        dimension: 'JP',
        polarity: -1 // P
    },
    {
        id: 31,
        text: '我喜欢探索多种选择，不急于做最终决定',
        dimension: 'JP',
        polarity: -1 // P
    },
    {
        id: 32,
        text: '我更喜欢开放式的结局，而不是明确的结论',
        dimension: 'JP',
        polarity: -1 // P
    },

    // 第二轮 E vs I 维度问题
    {
        id: 33,
        text: '我在聚会中往往是话题的发起者',
        dimension: 'EI',
        polarity: 1 // E
    },
    {
        id: 34,
        text: '我喜欢在人群中成为焦点',
        dimension: 'EI',
        polarity: 1 // E
    },
    {
        id: 35,
        text: '我倾向于边说边想，通过交流来理清思路',
        dimension: 'EI',
        polarity: 1 // E
    },
    {
        id: 36,
        text: '我觉得与陌生人交谈很容易',
        dimension: 'EI',
        polarity: 1 // E
    },
    {
        id: 37,
        text: '我更喜欢在安静的环境中工作',
        dimension: 'EI',
        polarity: -1 // I
    },
    {
        id: 38,
        text: '我倾向于先思考再发言',
        dimension: 'EI',
        polarity: -1 // I
    },
    {
        id: 39,
        text: '我在大群体中感到不自在',
        dimension: 'EI',
        polarity: -1 // I
    },
    {
        id: 40,
        text: '我更喜欢通过写作而不是口头表达想法',
        dimension: 'EI',
        polarity: -1 // I
    },

    // 第二轮 S vs N 维度问题
    {
        id: 41,
        text: '我喜欢处理实际的、具体的问题',
        dimension: 'SN',
        polarity: 1 // S
    },
    {
        id: 42,
        text: '我更相信已经验证过的方法',
        dimension: 'SN',
        polarity: 1 // S
    },
    {
        id: 43,
        text: '我注重实用性胜过理论性',
        dimension: 'SN',
        polarity: 1 // S
    },
    {
        id: 44,
        text: '我喜欢循序渐进地学习新技能',
        dimension: 'SN',
        polarity: 1 // S
    },
    {
        id: 45,
        text: '我经常想象各种假设情况',
        dimension: 'SN',
        polarity: -1 // N
    },
    {
        id: 46,
        text: '我喜欢探索新的理论和概念',
        dimension: 'SN',
        polarity: -1 // N
    },
    {
        id: 47,
        text: '我倾向于看到事物的整体图景而不是细节',
        dimension: 'SN',
        polarity: -1 // N
    },
    {
        id: 48,
        text: '我喜欢头脑风暴和创意思考',
        dimension: 'SN',
        polarity: -1 // N
    },

    // 第二轮 T vs F 维度问题
    {
        id: 49,
        text: '我在做决定时很少受个人情感影响',
        dimension: 'TF',
        polarity: 1 // T
    },
    {
        id: 50,
        text: '我认为一致性和逻辑比个人关系更重要',
        dimension: 'TF',
        polarity: 1 // T
    },
    {
        id: 51,
        text: '我喜欢分析问题的根本原因',
        dimension: 'TF',
        polarity: 1 // T
    },
    {
        id: 52,
        text: '我倾向于用客观标准评判事物',
        dimension: 'TF',
        polarity: 1 // T
    },
    {
        id: 53,
        text: '我很容易理解他人的情感需求',
        dimension: 'TF',
        polarity: -1 // F
    },
    {
        id: 54,
        text: '我在做决定时会考虑对所有人的影响',
        dimension: 'TF',
        polarity: -1 // F
    },
    {
        id: 55,
        text: '我倾向于避免可能伤害他人的言论',
        dimension: 'TF',
        polarity: -1 // F
    },
    {
        id: 56,
        text: '我认为和谐的人际关系非常重要',
        dimension: 'TF',
        polarity: -1 // F
    },

    // 第二轮 J vs P 维度问题
    {
        id: 57,
        text: '我喜欢按照既定的时间表行事',
        dimension: 'JP',
        polarity: 1 // J
    },
    {
        id: 58,
        text: '我倾向于快速做决定并坚持执行',
        dimension: 'JP',
        polarity: 1 // J
    },
    {
        id: 59,
        text: '我喜欢把事情安排得井井有条',
        dimension: 'JP',
        polarity: 1 // J
    },
    {
        id: 60,
        text: '我更喜欢有明确的规则和指导方针',
        dimension: 'JP',
        polarity: 1 // J
    }
]

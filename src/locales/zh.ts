export default {
    // 导航栏
    nav: {
        home: '首页',
        test: '开始测试',
        about: '关于MBTI',
        github: 'GitHub',
        viewSource: '查看源码'
    },

    // 首页
    home: {
        title: 'MBTI 性格测试',
        subtitle: '发现真实的自己',
        description: '通过专业的MBTI性格测试，深入了解您的性格类型、优势特点和发展方向。基于心理学理论，为您提供科学准确的性格分析。',
        startButton: '开始测试',
        features: {
            professional: {
                title: '专业可靠',
                description: '基于MBTI理论体系，60道精心设计的测试题目'
            },
            accurate: {
                title: '精准分析',
                description: '7点量表评分系统，提供更准确的性格评估'
            },
            detailed: {
                title: '详细报告',
                description: '16种性格类型详细解析，了解性格特征和发展建议'
            }
        }
    },

    // 测试页面
    test: {
        question: '问题',
        of: '/',
        completion: {
            title: '测试完成！',
            description: '正在分析您的答案，即将为您生成专属的性格分析报告...'
        },
        options: {
            veryDisagree: '很不符合',
            disagree: '不符合',
            slightlyDisagree: '较少符合',
            neutral: '中性',
            slightlyAgree: '较多符合',
            agree: '符合',
            veryAgree: '很符合'
        },
        actions: {
            previous: '← 上一题',
            hint: '点击选项自动进入下一题'
        }
    },

    // 结果页面
    result: {
        title: '您的MBTI性格类型',
        personality: '性格类型',
        traits: '性格特征',
        dimensions: {
            title: '维度分析',
            extroversion: '外向性',
            introversion: '内向性',
            sensing: '感觉',
            intuition: '直觉',
            thinking: '思考',
            feeling: '情感',
            judging: '判断',
            perceiving: '感知'
        },
        actions: {
            retake: '重新测试',
            share: '分享结果'
        }
    },

    // 关于页面
    about: {
        title: '关于MBTI',
        description: 'MBTI（Myers-Briggs Type Indicator）是一种性格分类理论模型，主要用于测量和描述人们在获取信息、做出决策等方面的心理偏好。',
        dimensions: {
            title: 'MBTI四个维度',
            ei: {
                title: '外向(E) vs 内向(I)',
                description: '关注外部世界还是内心世界，能量来源于与他人互动还是独处思考'
            },
            sn: {
                title: '感觉(S) vs 直觉(N)',
                description: '更关注具体信息和细节，还是可能性和整体概念'
            },
            tf: {
                title: '思考(T) vs 情感(F)',
                description: '做决定时更依赖逻辑分析，还是个人价值观和情感因素'
            },
            jp: {
                title: '判断(J) vs 感知(P)',
                description: '喜欢有计划有秩序的生活，还是灵活随性的生活方式'
            }
        },
        what: {
            title: '什么是MBTI？',
            description: 'MBTI基于卡尔·荣格的心理类型理论，通过四个维度的组合来描述16种不同的性格类型。它帮助人们更好地了解自己和他人的行为模式、决策方式和沟通偏好。'
        },
        types: {
            title: '16种性格类型',
            description: '四个维度的不同组合形成了16种独特的性格类型，每种类型都有其特色和优势。',
            analysts: {
                title: '分析家（NT）',
                intj: 'INTJ 建筑师',
                intp: 'INTP 逻辑学家',
                entj: 'ENTJ 指挥官',
                entp: 'ENTP 辩论家'
            },
            diplomats: {
                title: '外交家（NF）',
                infj: 'INFJ 提倡者',
                infp: 'INFP 调停者',
                enfj: 'ENFJ 主人公',
                enfp: 'ENFP 竞选者'
            },
            sentinels: {
                title: '守护者（SJ）',
                istj: 'ISTJ 物流师',
                isfj: 'ISFJ 守护者',
                estj: 'ESTJ 总经理',
                esfj: 'ESFJ 执政官'
            },
            explorers: {
                title: '探险家（SP）',
                istp: 'ISTP 鉴赏家',
                isfp: 'ISFP 探险家',
                estp: 'ESTP 企业家',
                esfp: 'ESFP 娱乐家'
            }
        },
        value: {
            title: 'MBTI的价值',
            career: {
                title: '职业发展',
                description: '帮助你找到最适合的职业道路和工作环境，发挥你的天然优势。'
            },
            relationships: {
                title: '人际关系',
                description: '理解不同性格类型的沟通方式，改善人际关系和团队合作。'
            },
            learning: {
                title: '学习成长',
                description: '了解自己的学习偏好和思维方式，制定更有效的学习策略。'
            },
            growth: {
                title: '个人成长',
                description: '认识自己的优势和盲点，促进自我认知和个人发展。'
            }
        },
        notice: {
            title: '重要提示',
            limitation: 'MBTI只是一个工具，不能完全定义一个人的全部特质和能力。',
            change: '性格类型可能会随着时间和经历的变化而发生改变。',
            equality: '没有任何一种性格类型比其他类型更好或更差，每种类型都有其独特价值。',
            reference: '本测试仅供参考，建议结合多种方法来了解自己的性格特征。'
        },
        cta: {
            title: '开始你的MBTI之旅',
            description: '通过我们精心设计的测试，发现你的性格类型，了解更真实的自己。',
            button: '开始测试'
        }
    },

    // 通用
    common: {
        loading: '加载中...',
        copyright: '了解自己，发现潜能'
    },

    // 测试问题
    questions: [
        // E vs I 维度 (外向 vs 内向)
        '我喜欢认识新朋友并扩大我的社交圈',
        '在大型社交聚会后，我通常感到精力充沛而不是疲惫',
        '我更喜欢小组活动而不是单独工作',
        '我喜欢有大量的朋友，而不是少数亲密的朋友',
        '我更愿意独自思考问题而不是与他人讨论',
        '我需要独处的时间来恢复精力',
        '我喜欢在行动前充分思考',
        '我更喜欢深入地了解少数几个话题，而不是广泛了解很多话题',

        // S vs N 维度 (实感 vs 直觉)
        '我注重细节和具体事实',
        '我相信亲身经历和切实证据',
        '我倾向于按照既定的方式做事',
        '我关注当下的实际情况而不是未来的可能性',
        '我经常思考未来和各种可能性',
        '我喜欢寻找模式和联系，思考事物之间的关系',
        '我更喜欢创新和变化，而不是遵循传统',
        '我倾向于相信直觉和灵感',

        // T vs F 维度 (思考 vs 情感)
        '我做决定时更注重逻辑和客观分析',
        '我倾向于直接指出问题，即使可能会伤害他人感受',
        '我认为维护公平和原则比维护和谐更重要',
        '我通常不受情绪影响做出理性决定',
        '我做决定时考虑他人的感受和价值观',
        '我喜欢赞美他人并给予情感支持',
        '维护人际关系的和谐对我很重要',
        '我倾向于同理他人并能感受到他人的情绪',

        // J vs P 维度 (判断 vs 感知)
        '我喜欢有明确的计划和时间表',
        '我倾向于提前完成任务，而不是在最后期限前完成',
        '我喜欢有序和结构化的环境',
        '我喜欢做决定并确定事情',
        '我喜欢保持灵活性，不喜欢被严格的计划束缚',
        '我喜欢即兴行事，根据当时情况调整计划',
        '我喜欢探索多种选择，不急于做最终决定',
        '我更喜欢开放式的结局，而不是明确的结论',

        // 第二轮 E vs I 维度问题
        '我在聚会中往往是话题的发起者',
        '我喜欢在人群中成为焦点',
        '我倾向于边说边想，通过交流来理清思路',
        '我觉得与陌生人交谈很容易',
        '我更喜欢在安静的环境中工作',
        '我倾向于先思考再发言',
        '我在大群体中感到不自在',
        '我更喜欢通过写作而不是口头表达想法',

        // 第二轮 S vs N 维度问题
        '我喜欢处理实际的、具体的问题',
        '我更相信已经验证过的方法',
        '我注重实用性胜过理论性',
        '我喜欢循序渐进地学习新技能',
        '我经常想象各种假设情况',
        '我喜欢探索新的理论和概念',
        '我倾向于看到事物的整体图景而不是细节',
        '我喜欢头脑风暴和创意思考',

        // 第二轮 T vs F 维度问题
        '我在做决定时很少受个人情感影响',
        '我认为一致性和逻辑比个人关系更重要',
        '我喜欢分析问题的根本原因',
        '我倾向于用客观标准评判事物',
        '我很容易理解他人的情感需求',
        '我在做决定时会考虑对所有人的影响',
        '我倾向于避免可能伤害他人的言论',
        '我认为和谐的人际关系非常重要',

        // 第二轮 J vs P 维度问题
        '我喜欢按照既定的时间表行事',
        '我倾向于快速做决定并坚持执行',
        '我喜欢把事情安排得井井有条',
        '我更喜欢有明确的规则和指导方针'
    ],

    // MBTI类型
    mbtiTypes: {
        INTJ: {
            name: '建筑师',
            description: '富有想象力和战略思维，一切皆在计划中。',
            strengths: ['独立自主', '具有远见', '逻辑思维强', '善于规划', '坚定不移'],
            weaknesses: ['过于理想化', '难以表达情感', '过分挑剔', '不善社交'],
            careers: ['科学家', '工程师', '建筑师', '系统分析师', '研究员'],
            famousPeople: ['埃隆·马斯克', '史蒂夫·乔布斯', '尼古拉·特斯拉'],
            compatibleTypes: ['ENFP', 'ENTP', 'INFJ']
        },
        INTP: {
            name: '思想家',
            description: '创新的发明家，对知识有着止不住的渴望。',
            strengths: ['逻辑分析能力强', '创造力丰富', '客观公正', '思维灵活'],
            weaknesses: ['缺乏耐心', '不重视实用性', '难以完成项目', '情感表达困难'],
            careers: ['程序员', '数学家', '哲学家', '研究员', '分析师'],
            famousPeople: ['阿尔伯特·爱因斯坦', '比尔·盖茨', '查尔斯·达尔文'],
            compatibleTypes: ['ENTJ', 'ENFJ', 'INFJ']
        },
        ENTJ: {
            name: '指挥官',
            description: '大胆，富有想象力，意志强烈的领导者。',
            strengths: ['天生的领导者', '自信果断', '目标导向', '善于规划', '高效执行'],
            weaknesses: ['过于强势', '缺乏耐心', '情感冷漠', '过分挑剔'],
            careers: ['CEO', '管理顾问', '律师', '企业家', '投资银行家'],
            famousPeople: ['史蒂夫·乔布斯', '拿破仑', '玛格丽特·撒切尔'],
            compatibleTypes: ['INTP', 'INFP', 'ENFP']
        },
        ENTP: {
            name: '辩论家',
            description: '聪明好奇的思想家，不会拒绝智力上的挑战。',
            strengths: ['创新思维', '适应性强', '口才出众', '精力充沛', '机智幽默'],
            weaknesses: ['注意力分散', '缺乏耐心', '难以坚持', '忽视细节'],
            careers: ['企业家', '咨询师', '记者', '律师', '发明家'],
            famousPeople: ['马克·吐温', '本杰明·富兰克林', '托马斯·爱迪生'],
            compatibleTypes: ['INTJ', 'INFJ', 'ENFJ']
        },
        INFJ: {
            name: '提倡者',
            description: '安静而神秘，同时鼓舞他人的理想主义者。',
            strengths: ['富有同情心', '创造力强', '善于洞察', '坚持原则', '鼓舞他人'],
            weaknesses: ['过度敏感', '容易倦怠', '完美主义', '难以处理冲突'],
            careers: ['心理咨询师', '作家', '教师', '社会工作者', '艺术家'],
            famousPeople: ['马丁·路德·金', '甘地', '柏拉图'],
            compatibleTypes: ['ENFP', 'ENTP', 'INTJ']
        },
        INFP: {
            name: '调停者',
            description: '诗意而善良的利他主义者，总是热切地为正当理由而服务。',
            strengths: ['富有创意', '善解人意', '适应性强', '忠诚正直', '关爱他人'],
            weaknesses: ['过于理想化', '情绪化', '缺乏实用性', '难以批评他人'],
            careers: ['作家', '心理学家', '艺术家', '社会工作者', '记者'],
            famousPeople: ['威廉·莎士比亚', '约翰·列侬', 'J.K.罗琳'],
            compatibleTypes: ['ENFJ', 'ENTJ', 'ENFP']
        },
        ENFJ: {
            name: '主人公',
            description: '魅力非凡的领导者，能够鼓舞听众达成共同目标。',
            strengths: ['天生的领导者', '善于激励他人', '沟通能力强', '富有同情心', '组织能力强'],
            weaknesses: ['过度保护他人', '过分敏感', '难以做决定', '忽视自己需求'],
            careers: ['教师', '咨询师', '政治家', '人力资源', '培训师'],
            famousPeople: ['奥普拉·温弗瑞', '巴拉克·奥巴马', '马丁·路德·金'],
            compatibleTypes: ['INFP', 'ISFP', 'INTP']
        },
        ENFP: {
            name: '竞选者',
            description: '热情洋溢，富有创意，社交能力强的自由精神。',
            strengths: ['热情洋溢', '创造力丰富', '社交能力强', '适应性强', '善于鼓励他人'],
            weaknesses: ['注意力分散', '缺乏耐心', '过度乐观', '难以处理常规任务'],
            careers: ['记者', '演员', '咨询师', '心理学家', '企业家'],
            famousPeople: ['罗宾·威廉姆斯', '威尔·史密斯', '艾伦·德杰尼勒斯'],
            compatibleTypes: ['INTJ', 'INFJ', 'INFP']
        },
        ISTJ: {
            name: '物流师',
            description: '实用而注重事实的可靠性，堪称可靠性的化身。',
            strengths: ['可靠负责', '注重细节', '组织能力强', '务实高效', '忠诚可信'],
            weaknesses: ['抗拒变化', '过于严肃', '缺乏灵活性', '难以表达情感'],
            careers: ['会计师', '律师', '医生', '工程师', '管理员'],
            famousPeople: ['乔治·华盛顿', '沃伦·巴菲特', '安吉拉·默克尔'],
            compatibleTypes: ['ESFP', 'ESTP', 'ISFP']
        },
        ISFJ: {
            name: '守护者',
            description: '非常专注而温暖的守护者，时刻准备保护珍爱的人。',
            strengths: ['细心体贴', '可靠忠诚', '善于倾听', '务实高效', '无私奉献'],
            weaknesses: ['过度牺牲自己', '避免冲突', '抗拒变化', '缺乏自信'],
            careers: ['护士', '教师', '社会工作者', '人力资源', '图书管理员'],
            famousPeople: ['特蕾莎修女', '凯特·米德尔顿', '罗莎·帕克斯'],
            compatibleTypes: ['ESTP', 'ESFP', 'ISFP']
        },
        ESTJ: {
            name: '总经理',
            description: '出色的管理者，在管理事物或人员方面表现卓越。',
            strengths: ['领导能力强', '组织有序', '目标导向', '果断高效', '责任心强'],
            weaknesses: ['过于严格', '缺乏灵活性', '忽视他人感受', '抗拒变化'],
            careers: ['管理者', '军官', '法官', '银行家', '项目经理'],
            famousPeople: ['亨利·福特', '维斯·克拉克', '希拉里·克林顿'],
            compatibleTypes: ['ISFP', 'ISTP', 'ISFJ']
        },
        ESFJ: {
            name: '执政官',
            description: '非常关爱他人，善于交际，在促进和谐方面表现卓越。',
            strengths: ['善于交际', '关爱他人', '组织能力强', '忠诚可靠', '善于合作'],
            weaknesses: ['过分在意他人看法', '避免冲突', '缺乏自信', '抗拒变化'],
            careers: ['护士', '教师', '人力资源', '销售', '公关'],
            famousPeople: ['泰勒·斯威夫特', '比尔·克林顿', '休·杰克曼'],
            compatibleTypes: ['ISFP', 'ISTP', 'ISFJ']
        },
        ISTP: {
            name: '鉴赏家',
            description: '大胆且实用的实验家，擅长使用各种工具。',
            strengths: ['动手能力强', '逻辑思维', '适应性强', '独立自主', '冷静理性'],
            weaknesses: ['情感表达困难', '缺乏长远规划', '不善言辞', '容易感到无聊'],
            careers: ['工程师', '技师', '飞行员', '外科医生', '侦探'],
            famousPeople: ['汤姆·克鲁斯', '克林特·伊斯特伍德', '迈克尔·乔丹'],
            compatibleTypes: ['ESTJ', 'ESFJ', 'ENFJ']
        },
        ISFP: {
            name: '探险家',
            description: '灵活、迷人的艺术家，时刻准备探索新的可能性。',
            strengths: ['富有创意', '善解人意', '适应性强', '艺术天赋', '忠诚友善'],
            weaknesses: ['过度敏感', '缺乏规划', '避免冲突', '缺乏自信'],
            careers: ['艺术家', '音乐家', '设计师', '心理学家', '兽医'],
            famousPeople: ['迈克尔·杰克逊', '奥黛丽·赫本', '莫扎特'],
            compatibleTypes: ['ESTJ', 'ESFJ', 'ENFJ']
        },
        ESTP: {
            name: '企业家',
            description: '聪明、精力充沛，非常善于感知他人和事物。',
            strengths: ['精力充沛', '适应性强', '实用主义', '善于沟通', '勇于冒险'],
            weaknesses: ['缺乏耐心', '难以坚持', '忽视感受', '冲动鲁莽'],
            careers: ['销售', '企业家', '运动员', '演员', '警察'],
            famousPeople: ['唐纳德·特朗普', '欧内斯特·海明威', '约翰·F·肯尼迪'],
            compatibleTypes: ['ISFJ', 'ISTJ', 'ISFP']
        },
        ESFP: {
            name: '娱乐家',
            description: '自发的、精力充沛和热情的表演者 - 生活绝不无聊。',
            strengths: ['热情洋溢', '善于交际', '乐观积极', '适应性强', '关爱他人'],
            weaknesses: ['缺乏规划', '容易分心', '过度敏感', '避免冲突'],
            careers: ['演员', '音乐家', '销售', '导游', '社会工作者'],
            famousPeople: ['玛丽莲·梦露', '埃尔顿·约翰', '威尔·史密斯'],
            compatibleTypes: ['ISFJ', 'ISTJ', 'ISFP']
        }
    }
}

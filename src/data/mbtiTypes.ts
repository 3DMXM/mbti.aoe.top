import type { MBTIType } from '@/types'

export const mbtiTypes: MBTIType[] = [
    {
        code: 'INTJ',
        name: '建筑师',
        description: '富有想象力和战略思维，一切皆在计划中。',
        strengths: ['独立自主', '具有远见', '逻辑思维强', '善于规划', '坚定不移'],
        weaknesses: ['过于理想化', '难以表达情感', '过分挑剔', '不善社交'],
        careers: ['科学家', '工程师', '建筑师', '系统分析师', '研究员'],
        famousPeople: ['埃隆·马斯克', '史蒂夫·乔布斯', '尼古拉·特斯拉'],
        compatibleTypes: ['ENFP', 'ENTP', 'INFJ']
    },
    {
        code: 'INTP',
        name: '思想家',
        description: '创新的发明家，对知识有着止不住的渴望。',
        strengths: ['逻辑分析能力强', '创造力丰富', '客观公正', '思维灵活'],
        weaknesses: ['缺乏耐心', '不重视实用性', '难以完成项目', '情感表达困难'],
        careers: ['程序员', '数学家', '哲学家', '研究员', '分析师'],
        famousPeople: ['阿尔伯特·爱因斯坦', '比尔·盖茨', '查尔斯·达尔文'],
        compatibleTypes: ['ENTJ', 'ENFJ', 'INFJ']
    },
    {
        code: 'ENTJ',
        name: '指挥官',
        description: '大胆，富有想象力，意志强烈的领导者。',
        strengths: ['天生的领导者', '自信果断', '目标导向', '善于规划', '高效执行'],
        weaknesses: ['过于强势', '缺乏耐心', '情感冷漠', '过分挑剔'],
        careers: ['CEO', '管理顾问', '律师', '企业家', '投资银行家'],
        famousPeople: ['史蒂夫·乔布斯', '拿破仑', '玛格丽特·撒切尔'],
        compatibleTypes: ['INTP', 'INFP', 'ENFP']
    },
    {
        code: 'ENTP',
        name: '辩论家',
        description: '聪明好奇的思想家，不会拒绝智力上的挑战。',
        strengths: ['创新思维', '适应性强', '口才出众', '精力充沛', '机智幽默'],
        weaknesses: ['注意力分散', '缺乏耐心', '难以坚持', '忽视细节'],
        careers: ['企业家', '咨询师', '记者', '律师', '发明家'],
        famousPeople: ['马克·吐温', '本杰明·富兰克林', '托马斯·爱迪生'],
        compatibleTypes: ['INTJ', 'INFJ', 'ENFJ']
    },
    {
        code: 'INFJ',
        name: '提倡者',
        description: '安静而神秘，同时鼓舞他人的理想主义者。',
        strengths: ['富有同情心', '创造力强', '善于洞察', '坚持原则', '鼓舞他人'],
        weaknesses: ['过度敏感', '容易倦怠', '完美主义', '难以处理冲突'],
        careers: ['心理咨询师', '作家', '教师', '社会工作者', '艺术家'],
        famousPeople: ['马丁·路德·金', '甘地', '柏拉图'],
        compatibleTypes: ['ENFP', 'ENTP', 'INTJ']
    },
    {
        code: 'INFP',
        name: '调停者',
        description: '诗意而善良的利他主义者，总是热切地为正当理由而服务。',
        strengths: ['富有创意', '善解人意', '适应性强', '忠诚正直', '关爱他人'],
        weaknesses: ['过于理想化', '情绪化', '缺乏实用性', '难以批评他人'],
        careers: ['作家', '心理学家', '艺术家', '社会工作者', '记者'],
        famousPeople: ['威廉·莎士比亚', '约翰·列侬', 'J.K.罗琳'],
        compatibleTypes: ['ENFJ', 'ENTJ', 'ENFP']
    },
    {
        code: 'ENFJ',
        name: '主人公',
        description: '魅力非凡的领导者，能够鼓舞听众达成共同目标。',
        strengths: ['天生的领导者', '善于激励他人', '沟通能力强', '富有同情心', '组织能力强'],
        weaknesses: ['过度保护他人', '过分敏感', '难以做决定', '忽视自己需求'],
        careers: ['教师', '咨询师', '政治家', '人力资源', '培训师'],
        famousPeople: ['奥普拉·温弗瑞', '巴拉克·奥巴马', '马丁·路德·金'],
        compatibleTypes: ['INFP', 'ISFP', 'INTP']
    },
    {
        code: 'ENFP',
        name: '竞选者',
        description: '热情洋溢，富有创意，社交能力强的自由精神。',
        strengths: ['热情洋溢', '创造力丰富', '社交能力强', '适应性强', '善于鼓励他人'],
        weaknesses: ['注意力分散', '缺乏耐心', '过度乐观', '难以处理常规任务'],
        careers: ['记者', '演员', '咨询师', '心理学家', '企业家'],
        famousPeople: ['罗宾·威廉姆斯', '威尔·史密斯', '艾伦·德杰尼勒斯'],
        compatibleTypes: ['INTJ', 'INFJ', 'INFP']
    },
    {
        code: 'ISTJ',
        name: '物流师',
        description: '实用而注重事实的可靠性，堪称可靠性的化身。',
        strengths: ['可靠负责', '注重细节', '组织能力强', '务实高效', '忠诚可信'],
        weaknesses: ['抗拒变化', '过于严肃', '缺乏灵活性', '难以表达情感'],
        careers: ['会计师', '律师', '医生', '工程师', '管理员'],
        famousPeople: ['乔治·华盛顿', '沃伦·巴菲特', '安吉拉·默克尔'],
        compatibleTypes: ['ESFP', 'ESTP', 'ISFP']
    },
    {
        code: 'ISFJ',
        name: '守护者',
        description: '非常专注而温暖的守护者，时刻准备保护珍爱的人。',
        strengths: ['细心体贴', '可靠忠诚', '善于倾听', '务实高效', '无私奉献'],
        weaknesses: ['过度牺牲自己', '避免冲突', '抗拒变化', '缺乏自信'],
        careers: ['护士', '教师', '社会工作者', '人力资源', '图书管理员'],
        famousPeople: ['特蕾莎修女', '凯特·米德尔顿', '罗莎·帕克斯'],
        compatibleTypes: ['ESTP', 'ESFP', 'ISFP']
    },
    {
        code: 'ESTJ',
        name: '总经理',
        description: '出色的管理者，在管理事物或人员方面表现卓越。',
        strengths: ['领导能力强', '组织有序', '目标导向', '果断高效', '责任心强'],
        weaknesses: ['过于严格', '缺乏灵活性', '忽视他人感受', '抗拒变化'],
        careers: ['管理者', '军官', '法官', '银行家', '项目经理'],
        famousPeople: ['亨利·福特', '维斯·克拉克', '希拉里·克林顿'],
        compatibleTypes: ['ISFP', 'ISTP', 'ISFJ']
    },
    {
        code: 'ESFJ',
        name: '执政官',
        description: '非常关爱他人，善于交际，在促进和谐方面表现卓越。',
        strengths: ['善于交际', '关爱他人', '组织能力强', '忠诚可靠', '善于合作'],
        weaknesses: ['过分在意他人看法', '避免冲突', '缺乏自信', '抗拒变化'],
        careers: ['护士', '教师', '人力资源', '销售', '公关'],
        famousPeople: ['泰勒·斯威夫特', '比尔·克林顿', '休·杰克曼'],
        compatibleTypes: ['ISFP', 'ISTP', 'ISFJ']
    },
    {
        code: 'ISTP',
        name: '鉴赏家',
        description: '大胆且实用的实验家，擅长使用各种工具。',
        strengths: ['动手能力强', '逻辑思维', '适应性强', '独立自主', '冷静理性'],
        weaknesses: ['情感表达困难', '缺乏长远规划', '不善言辞', '容易感到无聊'],
        careers: ['工程师', '技师', '飞行员', '外科医生', '侦探'],
        famousPeople: ['汤姆·克鲁斯', '克林特·伊斯特伍德', '迈克尔·乔丹'],
        compatibleTypes: ['ESTJ', 'ESFJ', 'ENFJ']
    },
    {
        code: 'ISFP',
        name: '探险家',
        description: '灵活、迷人的艺术家，时刻准备探索新的可能性。',
        strengths: ['富有创意', '善解人意', '适应性强', '艺术天赋', '忠诚友善'],
        weaknesses: ['过度敏感', '缺乏规划', '避免冲突', '缺乏自信'],
        careers: ['艺术家', '音乐家', '设计师', '心理学家', '兽医'],
        famousPeople: ['迈克尔·杰克逊', '奥黛丽·赫本', '莫扎特'],
        compatibleTypes: ['ESTJ', 'ESFJ', 'ENFJ']
    },
    {
        code: 'ESTP',
        name: '企业家',
        description: '聪明、精力充沛，非常善于感知他人和事物。',
        strengths: ['精力充沛', '适应性强', '实用主义', '善于沟通', '勇于冒险'],
        weaknesses: ['缺乏耐心', '难以坚持', '忽视感受', '冲动鲁莽'],
        careers: ['销售', '企业家', '运动员', '演员', '警察'],
        famousPeople: ['唐纳德·特朗普', '欧内斯特·海明威', '约翰·F·肯尼迪'],
        compatibleTypes: ['ISFJ', 'ISTJ', 'ISFP']
    },
    {
        code: 'ESFP',
        name: '娱乐家',
        description: '自发的、精力充沛和热情的表演者 - 生活绝不无聊。',
        strengths: ['热情洋溢', '善于交际', '乐观积极', '适应性强', '关爱他人'],
        weaknesses: ['缺乏规划', '容易分心', '过度敏感', '避免冲突'],
        careers: ['演员', '音乐家', '销售', '导游', '社会工作者'],
        famousPeople: ['玛丽莲·梦露', '埃尔顿·约翰', '威尔·史密斯'],
        compatibleTypes: ['ISFJ', 'ISTJ', 'ISFP']
    }
]

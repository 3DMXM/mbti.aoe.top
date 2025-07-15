export default {
    // Navigation
    nav: {
        home: 'Home',
        test: 'Take Test',
        about: 'About MBTI',
        github: 'GitHub',
        viewSource: 'View Source'
    },

    // Home page
    home: {
        title: 'MBTI Personality Test',
        subtitle: 'Discover Your True Self',
        description: 'Through professional MBTI personality testing, gain deep insights into your personality type, strengths, and development directions. Based on psychological theory, providing you with scientifically accurate personality analysis.',
        startButton: 'Start Test',
        features: {
            professional: {
                title: 'Professional & Reliable',
                description: 'Based on MBTI theory with 60 carefully designed test questions'
            },
            accurate: {
                title: 'Accurate Analysis',
                description: '7-point scale scoring system for more precise personality assessment'
            },
            detailed: {
                title: 'Detailed Report',
                description: 'Comprehensive analysis of 16 personality types with characteristics and development suggestions'
            }
        },
        infoSection: {
            title: 'What is MBTI?',
            subtitle: 'Myers-Briggs Type Indicator is one of the world\'s most popular personality assessment tools',
            cards: {
                selfAwareness: {
                    title: 'Deep Self-Awareness',
                    description: 'Help you gain deeper understanding of your personality traits, thinking patterns, and behavioral styles to discover your authentic self.'
                },
                careerGuidance: {
                    title: 'Career Development Guidance',
                    description: 'Based on your personality type, recommend the most suitable career directions and development paths to empower your success.'
                },
                relationships: {
                    title: 'Improve Relationships',
                    description: 'Understand the characteristics of different personality types to improve relationships with family, friends, and colleagues, building a more harmonious interpersonal network.'
                },
                personalGrowth: {
                    title: 'Personal Growth',
                    description: 'Recognize your strengths and areas for improvement to create more targeted personal development plans.'
                }
            }
        },
        typesPreview: {
            title: '16 Personality Types',
            subtitle: 'Everyone has a unique personality combination, explore yours',
            categories: {
                analysts: {
                    title: 'Analysts (NT)',
                    types: {
                        intj: 'Architect',
                        intp: 'Thinker',
                        entj: 'Commander',
                        entp: 'Debater'
                    }
                },
                diplomats: {
                    title: 'Diplomats (NF)',
                    types: {
                        infj: 'Advocate',
                        infp: 'Mediator',
                        enfj: 'Protagonist',
                        enfp: 'Campaigner'
                    }
                },
                sentinels: {
                    title: 'Sentinels (SJ)',
                    types: {
                        istj: 'Logistician',
                        isfj: 'Defender',
                        estj: 'Executive',
                        esfj: 'Consul'
                    }
                },
                explorers: {
                    title: 'Explorers (SP)',
                    types: {
                        istp: 'Virtuoso',
                        isfp: 'Adventurer',
                        estp: 'Entrepreneur',
                        esfp: 'Entertainer'
                    }
                }
            }
        },
        cta: {
            title: 'Start Your MBTI Journey',
            subtitle: 'Discover your personality type and unlock your potential',
            startButton: 'Start Test Now',
            learnMore: 'Learn More'
        }
    },

    // Test page
    test: {
        question: 'Question',
        of: 'of',
        completion: {
            title: 'Test Completed!',
            description: 'Analyzing your answers and generating your personalized personality analysis report...'
        },
        options: {
            veryDisagree: 'Strongly Disagree',
            disagree: 'Disagree',
            slightlyDisagree: 'Slightly Disagree',
            neutral: 'Neutral',
            slightlyAgree: 'Slightly Agree',
            agree: 'Agree',
            veryAgree: 'Strongly Agree'
        },
        actions: {
            previous: '← Previous',
            hint: 'Click option to automatically proceed to next question'
        }
    },

    // Result page
    result: {
        title: 'Your MBTI Personality Type',
        personality: 'Personality Type',
        traits: 'Personality Traits',
        dimensions: {
            title: 'Dimension Analysis',
            extroversion: 'Extroversion',
            introversion: 'Introversion',
            sensing: 'Sensing',
            intuition: 'Intuition',
            thinking: 'Thinking',
            feeling: 'Feeling',
            judging: 'Judging',
            perceiving: 'Perceiving'
        },
        actions: {
            retake: 'Retake Test',
            share: 'Share Results'
        }
    },

    // About page
    about: {
        title: 'About MBTI',
        description: 'MBTI (Myers-Briggs Type Indicator) is a personality classification theory model, primarily used to measure and describe people\'s psychological preferences in obtaining information and making decisions.',
        dimensions: {
            title: 'MBTI Four Dimensions',
            ei: {
                title: 'Extroversion(E) vs Introversion(I)',
                description: 'Focus on the external world or inner world, energy from interacting with others or solitary thinking'
            },
            sn: {
                title: 'Sensing(S) vs Intuition(N)',
                description: 'Focus more on concrete information and details, or possibilities and overall concepts'
            },
            tf: {
                title: 'Thinking(T) vs Feeling(F)',
                description: 'Rely more on logical analysis or personal values and emotional factors when making decisions'
            },
            jp: {
                title: 'Judging(J) vs Perceiving(P)',
                description: 'Prefer planned and orderly life, or flexible and spontaneous lifestyle'
            }
        },
        what: {
            title: 'What is MBTI?',
            description: 'MBTI is based on Carl Jung\'s psychological type theory, describing 16 different personality types through combinations of four dimensions. It helps people better understand their own and others\' behavioral patterns, decision-making styles, and communication preferences.'
        },
        types: {
            title: '16 Personality Types',
            description: 'Different combinations of the four dimensions form 16 unique personality types, each with its own characteristics and strengths.',
            analysts: {
                title: 'Analysts (NT)',
                intj: 'INTJ Architect',
                intp: 'INTP Logician',
                entj: 'ENTJ Commander',
                entp: 'ENTP Debater'
            },
            diplomats: {
                title: 'Diplomats (NF)',
                infj: 'INFJ Advocate',
                infp: 'INFP Mediator',
                enfj: 'ENFJ Protagonist',
                enfp: 'ENFP Campaigner'
            },
            sentinels: {
                title: 'Sentinels (SJ)',
                istj: 'ISTJ Logistician',
                isfj: 'ISFJ Defender',
                estj: 'ESTJ Executive',
                esfj: 'ESFJ Consul'
            },
            explorers: {
                title: 'Explorers (SP)',
                istp: 'ISTP Virtuoso',
                isfp: 'ISFP Adventurer',
                estp: 'ESTP Entrepreneur',
                esfp: 'ESFP Entertainer'
            }
        },
        value: {
            title: 'Value of MBTI',
            career: {
                title: 'Career Development',
                description: 'Help you find the most suitable career path and work environment, leveraging your natural strengths.'
            },
            relationships: {
                title: 'Relationships',
                description: 'Understand communication styles of different personality types, improve relationships and teamwork.'
            },
            learning: {
                title: 'Learning & Growth',
                description: 'Understand your learning preferences and thinking patterns, develop more effective learning strategies.'
            },
            growth: {
                title: 'Personal Growth',
                description: 'Recognize your strengths and blind spots, promote self-awareness and personal development.'
            }
        },
        notice: {
            title: 'Important Notice',
            limitation: 'MBTI is just a tool and cannot completely define all traits and abilities of a person.',
            change: 'Personality types may change over time with experience and growth.',
            equality: 'No personality type is better or worse than others; each type has its unique value.',
            reference: 'This test is for reference only. It is recommended to combine multiple methods to understand your personality traits.'
        },
        cta: {
            title: 'Start Your MBTI Journey',
            description: 'Discover your personality type through our carefully designed test and understand your true self.',
            button: 'Start Test'
        }
    },

    // Common
    common: {
        loading: 'Loading...',
        copyright: 'Know Yourself, Unlock Your Potential'
    },

    // Test questions
    questions: [
        // E vs I dimension (Extraversion vs Introversion)
        'I like meeting new people and expanding my social circle',
        'After large social gatherings, I usually feel energized rather than tired',
        'I prefer group activities over working alone',
        'I like having many friends rather than a few close friends',
        'I prefer to think through problems alone rather than discuss them with others',
        'I need alone time to recharge my energy',
        'I like to think thoroughly before taking action',
        'I prefer to understand a few topics deeply rather than know about many topics broadly',

        // S vs N dimension (Sensing vs Intuition)
        'I pay attention to details and concrete facts',
        'I trust personal experience and tangible evidence',
        'I tend to do things in established ways',
        'I focus on current practical situations rather than future possibilities',
        'I often think about the future and various possibilities',
        'I like finding patterns and connections, thinking about relationships between things',
        'I prefer innovation and change over following tradition',
        'I tend to trust intuition and inspiration',

        // T vs F dimension (Thinking vs Feeling)
        'When making decisions, I focus more on logic and objective analysis',
        'I tend to point out problems directly, even if it might hurt others\' feelings',
        'I believe maintaining fairness and principles is more important than maintaining harmony',
        'I usually make rational decisions without being influenced by emotions',
        'When making decisions, I consider others\' feelings and values',
        'I like praising others and providing emotional support',
        'Maintaining harmony in interpersonal relationships is important to me',
        'I tend to empathize with others and can sense their emotions',

        // J vs P dimension (Judging vs Perceiving)
        'I like having clear plans and schedules',
        'I tend to complete tasks early rather than at the deadline',
        'I like orderly and structured environments',
        'I like making decisions and settling things',
        'I like maintaining flexibility and dislike being bound by strict plans',
        'I like acting spontaneously and adjusting plans based on circumstances',
        'I like exploring multiple options without rushing to make final decisions',
        'I prefer open-ended conclusions rather than definitive ones',

        // Second round E vs I dimension questions
        'I am often the conversation starter at parties',
        'I like being the center of attention in crowds',
        'I tend to think while speaking, clarifying thoughts through communication',
        'I find it easy to talk to strangers',
        'I prefer working in quiet environments',
        'I tend to think before speaking',
        'I feel uncomfortable in large groups',
        'I prefer expressing ideas through writing rather than speaking',

        // Second round S vs N dimension questions
        'I like dealing with practical, concrete problems',
        'I trust methods that have been proven',
        'I value practicality over theory',
        'I like learning new skills step by step',
        'I often imagine various hypothetical situations',
        'I like exploring new theories and concepts',
        'I tend to see the big picture rather than details',
        'I like brainstorming and creative thinking',

        // Second round T vs F dimension questions
        'I am rarely influenced by personal emotions when making decisions',
        'I believe consistency and logic are more important than personal relationships',
        'I like analyzing the root causes of problems',
        'I tend to judge things by objective standards',
        'I easily understand others\' emotional needs',
        'When making decisions, I consider the impact on everyone',
        'I tend to avoid statements that might hurt others',
        'I believe harmonious interpersonal relationships are very important',

        // Second round J vs P dimension questions
        'I like acting according to established schedules',
        'I tend to make decisions quickly and stick to them',
        'I like organizing things in an orderly manner',
        'I prefer having clear rules and guidelines'
    ],

    // MBTI Types
    mbtiTypes: {
        INTJ: {
            name: 'Architect',
            description: 'Imaginative and strategic thinkers, with a plan for everything.',
            strengths: ['Independent', 'Visionary', 'Strong logical thinking', 'Good at planning', 'Determined'],
            weaknesses: ['Overly idealistic', 'Difficulty expressing emotions', 'Overly critical', 'Poor social skills'],
            careers: ['Scientist', 'Engineer', 'Architect', 'Systems Analyst', 'Researcher'],
            famousPeople: ['Elon Musk', 'Steve Jobs', 'Nikola Tesla'],
            compatibleTypes: ['ENFP', 'ENTP', 'INFJ']
        },
        INTP: {
            name: 'Thinker',
            description: 'Innovative inventors with an unquenchable thirst for knowledge.',
            strengths: ['Strong analytical ability', 'Rich creativity', 'Objective', 'Flexible thinking'],
            weaknesses: ['Lack of patience', 'Disregard for practicality', 'Difficulty completing projects', 'Difficulty expressing emotions'],
            careers: ['Programmer', 'Mathematician', 'Philosopher', 'Researcher', 'Analyst'],
            famousPeople: ['Albert Einstein', 'Bill Gates', 'Charles Darwin'],
            compatibleTypes: ['ENTJ', 'ENFJ', 'INFJ']
        },
        ENTJ: {
            name: 'Commander',
            description: 'Bold, imaginative and strong-willed leaders.',
            strengths: ['Natural leader', 'Confident and decisive', 'Goal-oriented', 'Good at planning', 'Efficient execution'],
            weaknesses: ['Too domineering', 'Lack of patience', 'Emotionally cold', 'Overly critical'],
            careers: ['CEO', 'Management Consultant', 'Lawyer', 'Entrepreneur', 'Investment Banker'],
            famousPeople: ['Steve Jobs', 'Napoleon', 'Margaret Thatcher'],
            compatibleTypes: ['INTP', 'INFP', 'ENFP']
        },
        ENTP: {
            name: 'Debater',
            description: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
            strengths: ['Innovative thinking', 'Highly adaptable', 'Excellent communication skills', 'Energetic', 'Witty and humorous'],
            weaknesses: ['Scattered attention', 'Lack of patience', 'Difficulty persisting', 'Overlook details'],
            careers: ['Entrepreneur', 'Consultant', 'Journalist', 'Lawyer', 'Inventor'],
            famousPeople: ['Mark Twain', 'Benjamin Franklin', 'Thomas Edison'],
            compatibleTypes: ['INTJ', 'INFJ', 'ENFJ']
        },
        INFJ: {
            name: 'Advocate',
            description: 'Quiet and mystical, yet very inspiring and tireless idealists.',
            strengths: ['Compassionate', 'Highly creative', 'Good at insight', 'Principled', 'Inspiring to others'],
            weaknesses: ['Overly sensitive', 'Prone to burnout', 'Perfectionist', 'Difficulty handling conflict'],
            careers: ['Counselor', 'Writer', 'Teacher', 'Social Worker', 'Artist'],
            famousPeople: ['Martin Luther King Jr.', 'Gandhi', 'Plato'],
            compatibleTypes: ['ENFP', 'ENTP', 'INTJ']
        },
        INFP: {
            name: 'Mediator',
            description: 'Poetic, kind and altruistic people, always eager to help a good cause.',
            strengths: ['Creative', 'Empathetic', 'Adaptable', 'Loyal and honest', 'Caring'],
            weaknesses: ['Overly idealistic', 'Emotional', 'Lack of practicality', 'Difficulty criticizing others'],
            careers: ['Writer', 'Psychologist', 'Artist', 'Social Worker', 'Journalist'],
            famousPeople: ['William Shakespeare', 'John Lennon', 'J.K. Rowling'],
            compatibleTypes: ['ENFJ', 'ENTJ', 'ENFP']
        },
        ENFJ: {
            name: 'Protagonist',
            description: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
            strengths: ['Natural leader', 'Good at motivating others', 'Strong communication skills', 'Compassionate', 'Strong organizational skills'],
            weaknesses: ['Overprotective of others', 'Overly sensitive', 'Difficulty making decisions', 'Neglect own needs'],
            careers: ['Teacher', 'Counselor', 'Politician', 'Human Resources', 'Trainer'],
            famousPeople: ['Oprah Winfrey', 'Barack Obama', 'Martin Luther King Jr.'],
            compatibleTypes: ['INFP', 'ISFP', 'INTP']
        },
        ENFP: {
            name: 'Campaigner',
            description: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
            strengths: ['Enthusiastic', 'Highly creative', 'Strong social skills', 'Adaptable', 'Good at encouraging others'],
            weaknesses: ['Scattered attention', 'Lack of patience', 'Overly optimistic', 'Difficulty with routine tasks'],
            careers: ['Journalist', 'Actor', 'Consultant', 'Psychologist', 'Entrepreneur'],
            famousPeople: ['Robin Williams', 'Will Smith', 'Ellen DeGeneres'],
            compatibleTypes: ['INTJ', 'INFJ', 'INFP']
        },
        ISTJ: {
            name: 'Logistician',
            description: 'Practical and fact-minded, reliability personified.',
            strengths: ['Reliable and responsible', 'Detail-oriented', 'Strong organizational skills', 'Practical and efficient', 'Loyal and trustworthy'],
            weaknesses: ['Resistant to change', 'Too serious', 'Lack of flexibility', 'Difficulty expressing emotions'],
            careers: ['Accountant', 'Lawyer', 'Doctor', 'Engineer', 'Administrator'],
            famousPeople: ['George Washington', 'Warren Buffett', 'Angela Merkel'],
            compatibleTypes: ['ESFP', 'ESTP', 'ISFP']
        },
        ISFJ: {
            name: 'Protector',
            description: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
            strengths: ['Thoughtful and considerate', 'Reliable and loyal', 'Good listener', 'Practical and efficient', 'Selfless'],
            weaknesses: ['Over-sacrificing', 'Avoid conflict', 'Resistant to change', 'Lack of confidence'],
            careers: ['Nurse', 'Teacher', 'Social Worker', 'Human Resources', 'Librarian'],
            famousPeople: ['Mother Teresa', 'Kate Middleton', 'Rosa Parks'],
            compatibleTypes: ['ESTP', 'ESFP', 'ISFP']
        },
        ESTJ: {
            name: 'Executive',
            description: 'Excellent administrators, unsurpassed at managing things or people.',
            strengths: ['Strong leadership', 'Well-organized', 'Goal-oriented', 'Decisive and efficient', 'Strong sense of responsibility'],
            weaknesses: ['Too strict', 'Lack of flexibility', 'Ignore others\' feelings', 'Resistant to change'],
            careers: ['Manager', 'Military Officer', 'Judge', 'Banker', 'Project Manager'],
            famousPeople: ['Henry Ford', 'Vince Clarke', 'Hillary Clinton'],
            compatibleTypes: ['ISFP', 'ISTP', 'ISFJ']
        },
        ESFJ: {
            name: 'Consul',
            description: 'Extraordinarily caring, social and popular people, always eager to help.',
            strengths: ['Sociable', 'Caring', 'Strong organizational skills', 'Loyal and reliable', 'Good at cooperation'],
            weaknesses: ['Too concerned about others\' opinions', 'Avoid conflict', 'Lack of confidence', 'Resistant to change'],
            careers: ['Nurse', 'Teacher', 'Human Resources', 'Sales', 'Public Relations'],
            famousPeople: ['Taylor Swift', 'Bill Clinton', 'Hugh Jackman'],
            compatibleTypes: ['ISFP', 'ISTP', 'ISFJ']
        },
        ISTP: {
            name: 'Virtuoso',
            description: 'Bold and practical experimenters, masters of all kinds of tools.',
            strengths: ['Strong hands-on ability', 'Logical thinking', 'Adaptable', 'Independent', 'Calm and rational'],
            weaknesses: ['Difficulty expressing emotions', 'Lack of long-term planning', 'Poor verbal skills', 'Easily bored'],
            careers: ['Engineer', 'Technician', 'Pilot', 'Surgeon', 'Detective'],
            famousPeople: ['Tom Cruise', 'Clint Eastwood', 'Michael Jordan'],
            compatibleTypes: ['ESTJ', 'ESFJ', 'ENFJ']
        },
        ISFP: {
            name: 'Adventurer',
            description: 'Flexible and charming artists, always ready to explore new possibilities.',
            strengths: ['Creative', 'Empathetic', 'Adaptable', 'Artistic talent', 'Loyal and friendly'],
            weaknesses: ['Overly sensitive', 'Lack of planning', 'Avoid conflict', 'Lack of confidence'],
            careers: ['Artist', 'Musician', 'Designer', 'Psychologist', 'Veterinarian'],
            famousPeople: ['Michael Jackson', 'Audrey Hepburn', 'Mozart'],
            compatibleTypes: ['ESTJ', 'ESFJ', 'ENFJ']
        },
        ESTP: {
            name: 'Entrepreneur',
            description: 'Smart, energetic and very perceptive people, truly enjoy living on the edge.',
            strengths: ['Energetic', 'Adaptable', 'Pragmatic', 'Good communication skills', 'Risk-taking'],
            weaknesses: ['Lack of patience', 'Difficulty persisting', 'Ignore feelings', 'Impulsive and reckless'],
            careers: ['Sales', 'Entrepreneur', 'Athlete', 'Actor', 'Police Officer'],
            famousPeople: ['Donald Trump', 'Ernest Hemingway', 'John F. Kennedy'],
            compatibleTypes: ['ISFJ', 'ISTJ', 'ISFP']
        },
        ESFP: {
            name: 'Entertainer',
            description: 'Spontaneous, energetic and enthusiastic people – life is never boring around them.',
            strengths: ['Enthusiastic', 'Sociable', 'Optimistic', 'Adaptable', 'Caring'],
            weaknesses: ['Lack of planning', 'Easily distracted', 'Overly sensitive', 'Avoid conflict'],
            careers: ['Actor', 'Musician', 'Sales', 'Tour Guide', 'Social Worker'],
            famousPeople: ['Marilyn Monroe', 'Elton John', 'Will Smith'],
            compatibleTypes: ['ISFJ', 'ISTJ', 'ISFP']
        }
    }
}

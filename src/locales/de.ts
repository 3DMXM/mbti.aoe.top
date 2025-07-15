export default {
    // Navigation
    nav: {
        home: 'Startseite',
        test: 'Test',
        result: 'Ergebnis',
        about: 'Über MBTI',
        github: 'GitHub',
        viewSource: 'Quellcode ansehen',
        language: 'Sprache',
        languages: {
            zh: '中文',
            en: 'English',
            ja: '日本語',
            fr: 'Français',
            de: 'Deutsch',
            es: 'Español'
        }
    },

    // Startseite
    home: {
        title: 'MBTI Persönlichkeitstest',
        subtitle: 'Verstehen Sie sich selbst und entdecken Sie Ihr Potenzial',
        description: 'MBTI ist eines der weltweit autoritativsten Persönlichkeitsklassifikationssysteme. Durch die Beantwortung einiger einfacher Fragen können Sie Ihren Persönlichkeitstyp und Ihre Eigenschaften entdecken.',
        startButton: 'Test starten',
        features: {
            professional: {
                title: 'Professionell und Zuverlässig',
                description: 'Basierend auf der MBTI-Theorie mit 60 sorgfältig gestalteten Testfragen'
            },
            accurate: {
                title: 'Präzise Analyse',
                description: '7-Punkte-Bewertungssystem für eine genauere Persönlichkeitsbewertung'
            },
            detailed: {
                title: 'Detaillierter Bericht',
                description: 'Umfassende Analyse von 16 Persönlichkeitstypen mit Eigenschaften und Entwicklungsvorschlägen'
            }
        },
        infoSection: {
            title: 'Was ist MBTI?',
            subtitle: 'Der Myers-Briggs-Typenindikator ist eines der weltweit beliebtesten Persönlichkeitsbewertungstools',
            cards: {
                selfAwareness: {
                    title: 'Tiefere Selbsterkenntnis',
                    description: 'Wir helfen Ihnen dabei, Ihre Persönlichkeitsmerkmale, Denkmuster und Verhaltensstile tiefer zu verstehen und Ihr wahres Selbst zu entdecken.'
                },
                careerGuidance: {
                    title: 'Berufliche Orientierung',
                    description: 'Basierend auf Ihrem Persönlichkeitstyp empfehlen wir die besten Karriererichtungen und Entwicklungspfade, um Sie auf dem Weg zum Erfolg zu unterstützen.'
                },
                relationships: {
                    title: 'Beziehungsverbesserung',
                    description: 'Verstehen Sie die Eigenschaften verschiedener Persönlichkeitstypen, um Ihre Beziehungen zu Familie, Freunden und Kollegen zu verbessern und harmonischere Beziehungen aufzubauen.'
                },
                personalGrowth: {
                    title: 'Persönliches Wachstum',
                    description: 'Erkennen Sie Ihre Stärken und Verbesserungsbereiche, um einen gezielteren persönlichen Entwicklungsplan zu erstellen.'
                }
            }
        },
        typesPreview: {
            title: '16 Persönlichkeitstypen',
            subtitle: 'Jeder besitzt eine einzigartige Kombination von Persönlichkeitsmerkmalen. Erkunden Sie, um Ihren zu finden',
            categories: {
                analysts: {
                    title: 'Analysten (NT)',
                    types: {
                        intj: 'Architekt',
                        intp: 'Denker',
                        entj: 'Kommandeur',
                        entp: 'Debattierer'
                    }
                },
                diplomats: {
                    title: 'Diplomaten (NF)',
                    types: {
                        infj: 'Anwalt',
                        infp: 'Vermittler',
                        enfj: 'Protagonist',
                        enfp: 'Aktivist'
                    }
                },
                sentinels: {
                    title: 'Wächter (SJ)',
                    types: {
                        istj: 'Logistiker',
                        isfj: 'Beschützer',
                        estj: 'Direktor',
                        esfj: 'Konsul'
                    }
                },
                explorers: {
                    title: 'Entdecker (SP)',
                    types: {
                        istp: 'Virtuose',
                        isfp: 'Abenteurer',
                        estp: 'Unternehmer',
                        esfp: 'Entertainer'
                    }
                }
            }
        },
        cta: {
            title: 'Beginnen Sie Ihre MBTI-Reise',
            subtitle: 'Entdecken Sie Ihren Persönlichkeitstyp und entfesseln Sie Ihr Potenzial',
            startButton: 'Test jetzt starten',
            learnMore: 'Mehr erfahren'
        }
    },

    // Testseite
    test: {
        title: 'MBTI Persönlichkeitstest',
        progress: 'Fortschritt',
        question: 'Frage',
        of: 'von',
        completion: {
            title: 'Test abgeschlossen!',
            description: 'Ihre Antworten werden analysiert, Ihr persönlicher Persönlichkeitsanalysebericht wird erstellt...'
        },
        options: {
            veryDisagree: 'Stimme überhaupt nicht zu',
            disagree: 'Stimme nicht zu',
            slightlyDisagree: 'Stimme eher nicht zu',
            neutral: 'Neutral',
            slightlyAgree: 'Stimme eher zu',
            agree: 'Stimme zu',
            veryAgree: 'Stimme voll zu'
        },
        actions: {
            previous: '← Vorherige Frage',
            hint: 'Klicken Sie auf eine Option, um automatisch zur nächsten Frage zu gelangen'
        }
    },

    // Ergebnisseite
    result: {
        title: 'Ihr Persönlichkeitstyp',
        type: 'Typ',
        description: 'Beschreibung',
        characteristics: 'Eigenschaften',
        strengths: 'Stärken',
        weaknesses: 'Schwächen',
        careers: 'Geeignete Berufe',
        famousPeople: 'Berühmte Persönlichkeiten',
        dimensions: {
            extroversion: 'Extraversion',
            introversion: 'Introversion',
            sensing: 'Empfindung',
            intuition: 'Intuition',
            thinking: 'Denken',
            feeling: 'Fühlen',
            judging: 'Urteilen',
            perceiving: 'Wahrnehmen'
        },
        actions: {
            retake: 'Test wiederholen',
            share: 'Ergebnisse teilen'
        }
    },

    // Über-Seite
    about: {
        title: 'Über MBTI',
        description: 'MBTI (Myers-Briggs Type Indicator) ist ein theoretisches Modell zur Persönlichkeitsklassifikation, das hauptsächlich zur Messung und Beschreibung der psychologischen Präferenzen von Menschen bei der Informationsbeschaffung und Entscheidungsfindung verwendet wird.',
        dimensions: {
            title: 'Die vier MBTI-Dimensionen',
            ei: {
                title: 'Extraversion(E) vs Introversion(I)',
                description: 'Fokus auf die äußere Welt oder die innere Welt, Energie aus der Interaktion mit anderen oder aus einsamer Reflexion'
            },
            sn: {
                title: 'Empfindung(S) vs Intuition(N)',
                description: 'Mehr Fokus auf konkrete Informationen und Details oder auf Möglichkeiten und Gesamtkonzepte'
            },
            tf: {
                title: 'Denken(T) vs Fühlen(F)',
                description: 'Mehr auf logische Analyse oder auf persönliche Werte und emotionale Faktoren bei Entscheidungen angewiesen'
            },
            jp: {
                title: 'Urteilen(J) vs Wahrnehmen(P)',
                description: 'Bevorzugung eines geplanten und geordneten Lebens oder eines flexiblen und spontanen Lebensstils'
            }
        },
        what: {
            title: 'Was ist MBTI?',
            description: 'MBTI basiert auf Carl Jungs psychologischer Typtheorie und beschreibt 16 verschiedene Persönlichkeitstypen durch Kombinationen von vier Dimensionen. Es hilft Menschen, ihre eigenen und die Verhaltensmuster anderer, Entscheidungsstile und Kommunikationspräferenzen besser zu verstehen.'
        },
        types: {
            title: '16 Persönlichkeitstypen',
            description: 'Verschiedene Kombinationen der vier Dimensionen bilden 16 einzigartige Persönlichkeitstypen, von denen jeder seine eigenen Eigenschaften und Vorteile hat.',
            analysts: {
                title: 'Analysten (NT)',
                intj: 'INTJ Architekt',
                intp: 'INTP Logiker',
                entj: 'ENTJ Kommandeur',
                entp: 'ENTP Debattierer'
            },
            diplomats: {
                title: 'Diplomaten (NF)',
                infj: 'INFJ Anwalt',
                infp: 'INFP Vermittler',
                enfj: 'ENFJ Protagonist',
                enfp: 'ENFP Aktivist'
            },
            sentinels: {
                title: 'Wächter (SJ)',
                istj: 'ISTJ Logistiker',
                isfj: 'ISFJ Verteidiger',
                estj: 'ESTJ Exekutive',
                esfj: 'ESFJ Konsul'
            },
            explorers: {
                title: 'Entdecker (SP)',
                istp: 'ISTP Virtuose',
                isfp: 'ISFP Abenteurer',
                estp: 'ESTP Unternehmer',
                esfp: 'ESFP Entertainer'
            }
        },
        value: {
            title: 'Wert von MBTI',
            career: {
                title: 'Karriereentwicklung',
                description: 'Hilft Ihnen, den am besten geeigneten Karriereweg und die Arbeitsumgebung zu finden und Ihre natürlichen Stärken zu nutzen.'
            },
            relationships: {
                title: 'Beziehungen',
                description: 'Verstehen Sie die Kommunikationsstile verschiedener Persönlichkeitstypen, verbessern Sie Beziehungen und Teamarbeit.'
            },
            learning: {
                title: 'Lernen & Wachstum',
                description: 'Verstehen Sie Ihre Lernpräferenzen und Denkmuster, entwickeln Sie effektivere Lernstrategien.'
            },
            growth: {
                title: 'Persönliches Wachstum',
                description: 'Erkennen Sie Ihre Stärken und blinden Flecken, fördern Sie Selbstbewusstsein und persönliche Entwicklung.'
            }
        },
        notice: {
            title: 'Wichtiger Hinweis',
            limitation: 'MBTI ist nur ein Werkzeug und kann nicht alle Eigenschaften und Fähigkeiten einer Person vollständig definieren.',
            change: 'Persönlichkeitstypen können sich mit der Zeit und Erfahrung ändern.',
            equality: 'Kein Persönlichkeitstyp ist besser oder schlechter als andere; jeder Typ hat seinen einzigartigen Wert.',
            reference: 'Dieser Test dient nur als Referenz. Es wird empfohlen, mehrere Methoden zu kombinieren, um Ihre Persönlichkeitsmerkmale zu verstehen.'
        },
        cta: {
            title: 'Beginnen Sie Ihre MBTI-Reise',
            description: 'Entdecken Sie Ihren Persönlichkeitstyp durch unseren sorgfältig entwickelten Test und verstehen Sie Ihr wahres Selbst.',
            button: 'Test starten'
        }
    },

    // Gemeinsam
    common: {
        loading: 'Wird geladen...',
        copyright: 'Erkenne dich selbst, entfalte dein Potenzial'
    },

    // Testfragen
    questions: [
        // E vs I Dimension (Extraversion vs Introversion)
        'Ich mag es, neue Leute kennenzulernen und meinen sozialen Kreis zu erweitern',
        'Nach großen gesellschaftlichen Zusammenkünften fühle ich mich normalerweise energiegeladen statt müde',
        'Ich bevorzuge Gruppenaktivitäten gegenüber der Arbeit allein',
        'Ich mag es, viele Freunde zu haben, anstatt wenige enge Freunde',
        'Ich ziehe es vor, Probleme allein zu durchdenken, anstatt sie mit anderen zu diskutieren',
        'Ich brauche Zeit allein, um meine Energie zu erholen',
        'Ich mag es, ausreichend zu denken, bevor ich handle',
        'Ich ziehe es vor, wenige Themen tief zu verstehen, anstatt viele Themen breit zu kennen',

        // S vs N Dimension (Empfindung vs Intuition)
        'Ich achte auf Details und konkrete Fakten',
        'Ich glaube an direkte Erfahrung und solide Beweise',
        'Ich neige dazu, Dinge auf etablierte Weise zu tun',
        'Ich konzentriere mich auf die aktuelle Situation anstatt auf zukünftige Möglichkeiten',
        'Ich denke oft über die Zukunft und verschiedene Möglichkeiten nach',
        'Ich mag es, Muster und Verbindungen zu finden, über die Beziehungen zwischen Dingen nachzudenken',
        'Ich bevorzuge Innovation und Wandel anstatt der Tradition zu folgen',
        'Ich neige dazu, Intuition und Inspiration zu vertrauen',

        // T vs F Dimension (Denken vs Fühlen)
        'Ich konzentriere mich mehr auf Logik und objektive Analyse bei Entscheidungen',
        'Ich neige dazu, Probleme direkt anzusprechen, auch wenn es die Gefühle anderer verletzen könnte',
        'Ich denke, es ist wichtiger, Fairness und Prinzipien aufrechtzuerhalten als Harmonie zu bewahren',
        'Ich treffe normalerweise rationale Entscheidungen, ohne von Emotionen beeinflusst zu werden',
        'Ich berücksichtige die Gefühle und Werte anderer bei Entscheidungen',
        'Ich mag es, andere zu loben und emotionale Unterstützung zu bieten',
        'Die Aufrechterhaltung der Harmonie in zwischenmenschlichen Beziehungen ist mir wichtig',
        'Ich neige dazu, Empathie für andere zu zeigen und ihre Emotionen zu fühlen',

        // J vs P Dimension (Urteilen vs Wahrnehmen)
        'Ich mag es, klare Pläne und Zeitpläne zu haben',
        'Ich neige dazu, Aufgaben früh zu erledigen, anstatt sie auf den letzten Moment zu verschieben',
        'Ich mag ordentliche und strukturierte Umgebungen',
        'Ich mag es, Entscheidungen zu treffen und Dinge zu bestimmen',
        'Ich mag es, Flexibilität zu bewahren, ohne an strenge Pläne gebunden zu sein',
        'Ich mag es, spontan zu handeln und Pläne je nach aktueller Situation anzupassen',
        'Ich mag es, mehrere Optionen zu erkunden, ohne mich zu beeilen, eine endgültige Entscheidung zu treffen',
        'Ich bevorzuge offene Enden anstatt klarer Schlussfolgerungen',

        // Zweite Runde E vs I Dimension Fragen
        'Auf Partys bin ich normalerweise derjenige, der Gesprächsthemen anstößt',
        'Ich mag es, im Mittelpunkt der Aufmerksamkeit in einer Gruppe zu stehen',
        'Ich neige dazu, beim Sprechen zu denken, meine Gedanken durch Austausch zu klären',
        'Ich finde es einfach, mit Fremden zu sprechen',
        'Ich arbeite lieber in einer ruhigen Umgebung',
        'Ich neige dazu, zu denken, bevor ich spreche',
        'Ich fühle mich in großen Gruppen unwohl',
        'Ich ziehe es vor, meine Gedanken schriftlich statt mündlich auszudrücken',

        // Zweite Runde S vs N Dimension Fragen
        'Ich mag es, praktische und konkrete Probleme zu behandeln',
        'Ich vertraue mehr auf bereits bewährte Methoden',
        'Ich schätze Praktikabilität mehr als Theorie',
        'Ich mag es, neue Fähigkeiten schrittweise zu lernen',
        'Ich stelle mir oft verschiedene hypothetische Situationen vor',
        'Ich mag es, neue Theorien und Konzepte zu erkunden',
        'Ich neige dazu, das Gesamtbild der Dinge zu sehen anstatt Details',
        'Ich mag Brainstorming und kreatives Denken',

        // Zweite Runde T vs F Dimension Fragen
        'Ich werde bei Entscheidungen selten von persönlichen Emotionen beeinflusst',
        'Ich denke, Konsistenz und Logik sind wichtiger als persönliche Beziehungen',
        'Ich mag es, die Grundursachen von Problemen zu analysieren',
        'Ich neige dazu, Dinge mit objektiven Kriterien zu bewerten',
        'Ich verstehe leicht die emotionalen Bedürfnisse anderer',
        'Ich berücksichtige die Auswirkungen auf alle bei Entscheidungen',
        'Ich neige dazu, Bemerkungen zu vermeiden, die andere verletzen könnten',
        'Ich denke, harmonische zwischenmenschliche Beziehungen sind sehr wichtig',

        // Zweite Runde J vs P Dimension Fragen
        'Ich mag es, nach einem festgelegten Zeitplan zu handeln',
        'Ich neige dazu, schnell Entscheidungen zu treffen und dabei zu bleiben',
        'Ich mag es, Dinge ordentlich zu organisieren',
        'Ich bevorzuge klare Regeln und Richtlinien'
    ],

    // MBTI-Typen
    mbtiTypes: {
        INTJ: {
            name: 'Architekt',
            description: 'Fantasievoll und strategisch denkend, alles ist im Plan.',
            strengths: ['Unabhängig', 'Visionär', 'Starke Logik', 'Gut in Planung', 'Entschlossen'],
            weaknesses: ['Zu idealistisch', 'Schwierigkeiten Emotionen auszudrücken', 'Zu kritisch', 'Nicht gesellig'],
            careers: ['Wissenschaftler', 'Ingenieur', 'Architekt', 'Systemanalyst', 'Forscher'],
            famousPeople: ['Elon Musk', 'Steve Jobs', 'Nikola Tesla']
        },
        INTP: {
            name: 'Logiker',
            description: 'Innovative Erfinder mit unstillbarem Wissensdurst.',
            strengths: ['Logische Analyse', 'Unabhängiges Denken', 'Objektivität', 'Theoretisches Denken', 'Problemlösung'],
            weaknesses: ['Ignoriert Emotionen', 'Mangel an Umsetzung', 'Unentschlossenheit', 'Soziale Angst'],
            careers: ['Forscher', 'Philosoph', 'Programmierer', 'Mathematiker', 'Physiker'],
            famousPeople: ['Albert Einstein', 'Charles Darwin', 'Bill Gates']
        },
        ENTJ: {
            name: 'Kommandeur',
            description: 'Mutige, fantasievolle und willensstarke Führungskräfte, die immer einen Weg finden oder schaffen.',
            strengths: ['Führung', 'Strategisches Denken', 'Effizienz', 'Entscheidung', 'Selbstvertrauen'],
            weaknesses: ['Ungeduldig', 'Ignoriert Emotionen', 'Kritisch', 'Hoher Stolz'],
            careers: ['CEO', 'Anwalt', 'Politiker', 'Berater', 'Unternehmer'],
            famousPeople: ['Steve Jobs', 'Napoleon Bonaparte', 'Margaret Thatcher']
        },
        ENTP: {
            name: 'Debattierer',
            description: 'Kluge und neugierige Denker, die einer intellektuellen Herausforderung nicht widerstehen können.',
            strengths: ['Kreativität', 'Anpassungsfähigkeit', 'Enthusiasmus', 'Vielfältige Interessen', 'Gesellig'],
            weaknesses: ['Mangel an Konzentration', 'Vernachlässigt Emotionen', 'Mangel an Planung', 'Nonkonformist'],
            careers: ['Unternehmer', 'Erfinder', 'Journalist', 'Berater', 'Marketing'],
            famousPeople: ['Benjamin Franklin', 'Thomas Edison', 'Mark Twain']
        },
        INFJ: {
            name: 'Anwalt',
            description: 'Still und mystisch, aber sehr inspirierend und idealistisch.',
            strengths: ['Einsicht', 'Idealismus', 'Planung', 'Empathie', 'Kreativität'],
            weaknesses: ['Perfektionismus', 'Zu sensibel', 'Burnout', 'Schwach gegenüber Kritik'],
            careers: ['Berater', 'Schriftsteller', 'Lehrer', 'Künstler', 'Psychologe'],
            famousPeople: ['Mutter Teresa', 'Martin Luther King Jr.', 'Nelson Mandela']
        },
        INFP: {
            name: 'Vermittler',
            description: 'Poetische, freundliche und altruistische Menschen, immer bereit für eine gute Sache zu helfen.',
            strengths: ['Idealismus', 'Empathie', 'Kreativität', 'Anpassungsfähigkeit', 'Neugier'],
            weaknesses: ['Unrealistisch', 'Emotional', 'Mangel an Konzentration', 'Selbstkritik'],
            careers: ['Schriftsteller', 'Künstler', 'Berater', 'Psychologe', 'Lehrer'],
            famousPeople: ['William Shakespeare', 'J.R.R. Tolkien', 'Johnny Depp']
        },
        ENFJ: {
            name: 'Protagonist',
            description: 'Charismatische und inspirierende Führungskräfte, die ihre Zuhörer faszinieren können.',
            strengths: ['Führung', 'Empathie', 'Kommunikation', 'Altruismus', 'Einsicht'],
            weaknesses: ['Zu idealistisch', 'Zu sensibel', 'Entscheidungsschwierigkeiten', 'Selbstaufopferung'],
            careers: ['Lehrer', 'Berater', 'Politiker', 'Religiöser Führer', 'Trainer'],
            famousPeople: ['Oprah Winfrey', 'Barack Obama', 'Maya Angelou']
        },
        ENFP: {
            name: 'Aktivist',
            description: 'Enthusiastische, kreative und gesellige freie Seelen, die immer einen Grund zum Lächeln finden.',
            strengths: ['Enthusiasmus', 'Kreativität', 'Geselligkeit', 'Optimismus', 'Energisch'],
            weaknesses: ['Mangel an Konzentration', 'Emotional', 'Mangel an Praktikabilität', 'Schwach gegenüber Stress'],
            careers: ['Journalist', 'Künstler', 'Berater', 'Marketing', 'Unternehmer'],
            famousPeople: ['Robin Williams', 'Will Smith', 'Ellen DeGeneres']
        },
        ISTJ: {
            name: 'Logistiker',
            description: 'Praktische und sachliche, zuverlässige Menschen.',
            strengths: ['Verantwortung', 'Ehrlichkeit', 'Praktikabilität', 'Organisation', 'Treue'],
            weaknesses: ['Sturheit', 'Urteilend', 'Nicht-emotional', 'Selbstkritik'],
            careers: ['Buchhalter', 'Ingenieur', 'Anwalt', 'Arzt', 'Manager'],
            famousPeople: ['George Washington', 'Warren Buffett', 'Königin Elizabeth II']
        },
        ISFJ: {
            name: 'Verteidiger',
            description: 'Sehr hingebungsvolle und warme Beschützer, immer bereit, ihre Lieben zu verteidigen.',
            strengths: ['Unterstützend', 'Zuverlässig', 'Geduldig', 'Fleißig', 'Enthusiasmus'],
            weaknesses: ['Zu bescheiden', 'Selbstaufopferung', 'Kritikempfindlich', 'Widerstand gegen Veränderung'],
            careers: ['Krankenpfleger', 'Lehrer', 'Sozialarbeiter', 'Berater', 'Arzt'],
            famousPeople: ['Mutter Teresa', 'Königin Elizabeth II', 'Kate Middleton']
        },
        ESTJ: {
            name: 'Exekutive',
            description: 'Ausgezeichnete Administratoren, hervorragend in der Verwaltung von Menschen und Dingen.',
            strengths: ['Organisation', 'Führung', 'Praktikabilität', 'Verantwortung', 'Entscheidung'],
            weaknesses: ['Sturheit', 'Kritisch', 'Vernachlässigt Emotionen', 'Übt Druck aus'],
            careers: ['Manager', 'Anwalt', 'Geschäftsanalyst', 'Politiker', 'Projektmanager'],
            famousPeople: ['Hillary Clinton', 'John D. Rockefeller', 'Frank Sinatra']
        },
        ESFJ: {
            name: 'Konsul',
            description: 'Sehr beliebt, immer bereit, anderen zu helfen.',
            strengths: ['Kooperativ', 'Praktisch', 'Warm', 'Verantwortlich', 'Schätzt Beziehungen'],
            weaknesses: ['Kritikempfindlich', 'Unterschätzt sich selbst', 'Entscheidungsschwierigkeiten', 'Widerstand gegen Veränderung'],
            careers: ['Krankenpfleger', 'Lehrer', 'Eventplaner', 'HR', 'Berater'],
            famousPeople: ['Taylor Swift', 'Bill Clinton', 'Elton John']
        },
        ISTP: {
            name: 'Virtuose',
            description: 'Mutige und praktische Experimentatoren, Meister aller Arten von Werkzeugen.',
            strengths: ['Praktisch', 'Unabhängig', 'Anpassungsfähigkeit', 'Krisenmanagement', 'Technisch'],
            weaknesses: ['Vernachlässigt Emotionen', 'Vermeidet Verpflichtungen', 'Sturheit', 'Zu privat'],
            careers: ['Ingenieur', 'Mechaniker', 'Pilot', 'Chirurg', 'Sportler'],
            famousPeople: ['Clint Eastwood', 'Bruce Lee', 'Michael Jordan']
        },
        ISFP: {
            name: 'Abenteurer',
            description: 'Flexible und charmante Künstler, immer bereit, neue Möglichkeiten zu erkunden.',
            strengths: ['Künstlerisch', 'Flexibilität', 'Warm', 'Neugier', 'Sensibilität'],
            weaknesses: ['Vermeidet Wettbewerb', 'Schwach gegenüber Stress', 'Zu unabhängig', 'Unvorhersagbar'],
            careers: ['Künstler', 'Musiker', 'Designer', 'Berater', 'Fotograf'],
            famousPeople: ['Michael Jackson', 'Bob Dylan', 'Frida Kahlo']
        },
        ESTP: {
            name: 'Unternehmer',
            description: 'Kluge, energische und sehr wahrnehmende Menschen, die das Leben wirklich genießen.',
            strengths: ['Praktisch', 'Gesellig', 'Anpassungsfähigkeit', 'Energisch', 'Optimistisch'],
            weaknesses: ['Ungeduldig', 'Risikofreudig', 'Mangel an Planung', 'Mangel an Konzentration'],
            careers: ['Vertrieb', 'Unternehmer', 'Sportler', 'Entertainer', 'Sanitäter'],
            famousPeople: ['Donald Trump', 'Theodore Roosevelt', 'Ernest Hemingway']
        },
        ESFP: {
            name: 'Entertainer',
            description: 'Spontane Entertainer, enthusiastisch und spontan, die Menschen um sie herum unterhalten.',
            strengths: ['Gesellig', 'Praktisch', 'Enthusiasmus', 'Flexibilität', 'Schätzt Beziehungen'],
            weaknesses: ['Mangel an Planung', 'Mangel an Konzentration', 'Zu sensibel', 'Impulsiv'],
            careers: ['Entertainer', 'Vertrieb', 'Eventplaner', 'Modedesigner', 'Künstler'],
            famousPeople: ['Marilyn Monroe', 'Elvis Presley', 'Ronald Reagan']
        }
    }
}

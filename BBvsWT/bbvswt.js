document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    const data = {
        comparison: [
            {
                category: 'Spielphilosophie',
                icon: '⚖️',
                bb: 'Eine unversöhnliche Söldner-Simulation. Der Fokus liegt auf dem Überleben gegen alle Widrigkeiten in einer prozedural generierten Welt. Scheitern ist ein Kernbestandteil der Lernerfahrung und erzeugt emergente Geschichten.',
                wt: 'Eine Open-World-Sandbox mit Fokus auf Erkundung und Freiheit. Der Spieler soll seine eigene Geschichte in einer riesigen, handgefertigten Welt schreiben, ohne von einer Hauptquest getrieben zu werden.'
            },
            {
                category: 'Kampfsystem',
                icon: '⚔️',
                bb: 'Rundenbasiert auf Hex-Feldern. Hoher Zufallsfaktor (RNG) bei Trefferchancen ist zentral. Positionierung, Moral und Ausnutzung von Fehlern sind entscheidend. Sehr brutal und unvorhersehbar.',
                wt: 'Rundenbasiert auf Grid-Feldern. Kaum RNG bei Trefferchancen; Angriffe treffen fast immer. Der Fokus liegt auf taktischer Positionierung, Rüstungsmanagement (Guard) und dem Einsatz von Fähigkeiten. Berechenbarer und strategischer.'
            },
            {
                category: 'Schwierigkeit',
                icon: '🔥',
                bb: 'Extrem hoch und gnadenlos. Eine steile Lernkurve, bei der kleine Fehler zum Verlust der gesamten Kompanie führen können. "Save-scumming" wird oft als notwendig empfunden, um zu lernen.',
                wt: 'Herausfordernd, aber fairer. Belohnt Planung und Optimierung von Builds. Fehler sind weniger katastrophal. Die Schwierigkeit ergibt sich aus Ressourcenmanagement und der Komplexität der Kämpfe.'
            },
            {
                category: 'Welt & Erkundung',
                icon: '🗺️',
                bb: 'Prozedural generierte Weltkarte, die bei jedem Start neu ist. Die Welt ist eine dynamische Simulation, in der Fraktionen agieren und auf den Spieler reagieren. Ein Gefühl, Teil einer lebendigen Welt zu sein.',
                wt: 'Große, handgefertigte offene Welt, die in Regionen unterteilt ist. Jede Region hat ihr eigenes Szenario. Der Fokus liegt auf dem Entdecken von Orten und dem Abschließen regionaler Quests.'
            },
            {
                category: 'Charakterentwicklung',
                icon: '📈',
                bb: 'Fokus auf Level-Ups, die Attributspunkte und Perks freischalten. Die Herkunft eines Söldners bestimmt sein Potenzial. Sehr tiefe und komplexe Build-Möglichkeiten.',
                wt: 'Neben dem Kampf-Leveling gibt es ein tiefes Berufssystem (Angler, Schmied etc.). Charaktere können in verschiedenen Handwerken gemeistert werden, was für die Kompanie überlebenswichtig ist.'
            },
            {
                category: 'Multiplayer & Mods',
                icon: '👥',
                bb: 'Reines Einzelspieler-Erlebnis. Dafür eine riesige und sehr aktive Modding-Community, die das Spiel seit Jahren mit neuen Inhalten versorgt und erweitert.',
                wt: 'Bietet einen vollwertigen Koop-Multiplayer-Modus, in dem man die Kampagne gemeinsam mit Freunden erleben kann. Die Modding-Szene ist deutlich kleiner und jünger.'
            }
        ],
        bb_deep_dive: [
            {
                title: 'Das Herz des Spiels: Gnadenlose Simulation',
                content: 'Battle Brothers ist mehr als ein Spiel; es ist ein Söldner-Simulator. Der Kern liegt in der prozedural generierten Welt, die bei jedem Durchgang eine einzigartige Herausforderung darstellt. Die Welt reagiert auf deine Taten: Rettet du ein Dorf vor Orks, verbessert sich dessen Wirtschaftslage. Diese Dynamik schafft eine unglaublich immersive, emergente Erzählung, in der die Geschichte nicht geschrieben wird, sondern durch den Überlebenskampf deiner Kompanie entsteht. Es gibt kein festes Ziel – nur den ständigen Kampf ums Überleben, um Ruhm und Reichtum.'
            },
            {
                title: 'Taktischer Kampf: Die Kunst des Krieges',
                content: 'Der Kampf findet auf Hex-Feldern statt und ist rundenbasiert. Positionierung, Moral, Gelände und die richtige Ausrüstung sind entscheidend. Der hohe Zufallsfaktor (RNG) ist berüchtigt: Selbst der beste Plan kann durch Pech scheitern. Dies macht jeden Sieg umso befriedigender. Fähigkeiten wie "Speerwall" oder der gezielte Einsatz von Dolchen, um Rüstungen zu schonen, sind überlebenswichtige Taktiken, die gemeistert werden müssen.'
            },
            {
                title: 'Management: Mehr als nur Kämpfen',
                content: 'Der Erfolg hängt ebenso vom Management ab. Du musst Söldner mit passenden Hintergründen anheuern, ihre Moral hochhalten, Nahrung, Werkzeuge und Medizin verwalten und eine fragile Wirtschaft am Laufen halten. Geld wird nicht gehortet, sondern in bessere Ausrüstung investiert – denn nur eine gut ausgerüstete Truppe überlebt den nächsten Tag. Der Handel mit Waren und der Verkauf von reparierter Beute sind essenzielle Einkommensquellen.'
            },
            {
                title: 'DLCs & Community: Ein Spiel, das lebt',
                content: 'Battle Brothers wird durch zahlreiche DLCs (z.B. Blazing Deserts, Warriors of the North) erweitert, die neue Regionen, Gegner, Ursprünge und Mechaniken hinzufügen. Noch wichtiger ist die riesige Modding-Community. Mods wie "Legends" überarbeiten das Spiel fundamental und sorgen für hunderte Stunden zusätzlichen Spielspaß. Dieses Ökosystem aus offizieller Unterstützung und Community-Inhalten macht das Spiel auch Jahre nach seiner Veröffentlichung extrem langlebig.'
            }
        ],
        wt_deep_dive: [
            {
                title: 'Die offene Welt: Freiheit und Erkundung',
                content: 'Wartales definiert sich über seine riesige, offene Sandbox-Welt. Es gibt bewusst keine Hauptquest, die dich an die Hand nimmt. Stattdessen erkundest du in deinem eigenen Tempo verschiedene Regionen, jede mit eigenen Geschichten, Herausforderungen und Geheimnissen. Du kannst Gräber erforschen, Kopfgelder jagen oder dich als Händler versuchen. Die Freiheit, deinen eigenen Weg zu gehen und die Geschichte deiner Kompanie selbst zu schreiben, steht im Mittelpunkt.'
            },
            {
                title: 'Berechenbarer Kampf: Schach statt Würfel',
                content: 'Im Gegensatz zu Battle Brothers eliminiert Wartales den Treffer-Zufall im Kampf fast vollständig. Wenn du einen Gegner angreifst, triffst du auch. Die taktische Tiefe entsteht durch Positionierung, das Management von "Guard" (eine Art temporärer Rüstung), das Ausnutzen von Angriffsgelegenheiten und kluge Kombinationen von Fähigkeiten. Kämpfe fühlen sich dadurch eher wie ein komplexes Schachspiel an, bei dem gute Planung und nicht Glück über den Sieg entscheidet.'
            },
            {
                title: 'Berufe & Camp: Das Herz der Kompanie',
                content: 'Ein zentrales Element ist das Berufssystem. Deine Söldner sind nicht nur Kämpfer, sondern auch Handwerker. Als Schmied stellst du Rüstungen her, als Alchemist braust du Tränke, und als Angler sorgst du für Nahrung. Das Managen deines Camps, das Herstellen von Ausrüstung und das Sammeln von Ressourcen sind genauso wichtig wie der Kampf selbst. Dieses System verleiht der Kompanie eine zusätzliche Ebene der Tiefe und des Fortschritts.'
            },
            {
                title: 'Koop-Modus: Gemeinsam in die Schlacht',
                content: 'Ein entscheidendes Alleinstellungsmerkmal von Wartales ist der Koop-Multiplayer. Du kannst die gesamte Kampagne mit bis zu drei Freunden bestreiten. Ihr teilt euch die Kontrolle über die Kompanie, trefft gemeinsam Entscheidungen und kämpft Seite an Seite. Dies schafft eine völlig neue soziale Dynamik und macht das Söldnerleben zu einem gemeinsamen Abenteuer.'
            }
        ],
        quiz: [
            {
                question: "Was reizt dich mehr an einem Kampf?",
                answers: [
                    { text: "Die unvorhersehbare Spannung. Jeder Schlag ist ein Risiko, und ein glücklicher Treffer kann alles ändern.", game: "bb" },
                    { text: "Die perfekte Strategie. Ich will meine Züge wie beim Schach planen und den Gegner durch überlegene Taktik besiegen.", game: "wt" }
                ]
            },
            {
                question: "Wie gehst du mit Niederlagen um?",
                answers: [
                    { text: "Scheitern ist Teil des Lernprozesses. Ich beiße mich durch, auch wenn es weh tut und ich von vorne anfangen muss.", game: "bb" },
                    { text: "Ich möchte aus Fehlern lernen, aber nicht meine gesamte Truppe wegen eines einzigen Patzers verlieren.", game: "wt" }
                ]
            },
            {
                question: "Was ist dir außerhalb des Kampfes wichtig?",
                answers: [
                    { text: "Eine dynamische, lebende Welt, die auf meine Taten reagiert und sich ständig verändert.", game: "bb" },
                    { text: "Eine riesige Welt frei zu erkunden, Geheimnisse zu entdecken und meine Gruppe durch Handwerk zu verbessern.", game: "wt" }
                ]
            },
            {
                question: "Wie spielst du am liebsten?",
                answers: [
                    { text: "Alleine. Ich will mich voll auf meine eigene, einzigartige Geschichte konzentrieren.", game: "bb" },
                    { text: "Mit Freunden! Gemeinsame Abenteuer und taktische Absprachen sind das Beste.", game: "wt" }
                ]
            },
            {
                question: "Was bedeutet Wiederspielwert für dich?",
                answers: [
                    { text: "Eine prozedural generierte Welt und unzählige Mods, die jedes Spiel komplett anders machen.", game: "bb" },
                    { text: "Verschiedene Regionen zu erkunden, neue Klassen auszuprobieren und die Welt mit Freunden neu zu erleben.", game: "wt" }
                ]
            }
        ]
    };

    function switchTab(tabName) {
        tabs.forEach(tab => {
            const isActive = tab.dataset.tab === tabName;
            tab.classList.toggle('tab-active', isActive);
            tab.classList.toggle('tab-inactive', !isActive);
        });
        tabContents.forEach(content => {
            content.style.display = content.id === tabName ? 'block' : 'none';
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(tab.dataset.tab);
        });
    });

    function initComparison() {
        const container = document.getElementById('comparison-container');
        const detailsContainer = document.getElementById('comparison-details');
        let html = '';
        data.comparison.forEach((item, index) => {
            html += `
                        <button data-index="${index}" class="comparison-btn p-4 bg-white rounded-lg shadow-sm border border-slate-200 text-left hover:bg-amber-50 hover:border-amber-400 transition duration-200 flex items-center space-x-4">
                            <span class="text-2xl">${item.icon}</span>
                            <span class="font-semibold text-slate-700">${item.category}</span>
                        </button>
                    `;
        });
        container.innerHTML = html;

        container.querySelectorAll('.comparison-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = data.comparison[btn.dataset.index];
                detailsContainer.innerHTML = `
                            <h3 class="text-xl font-bold mb-4 text-slate-800">${item.icon} ${item.category}</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 class="font-bold text-lg mb-2 text-slate-900">Battle Brothers</h4>
                                    <p class="text-slate-600 leading-relaxed">${item.bb}</p>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg mb-2 text-slate-900">Wartales</h4>
                                    <p class="text-slate-600 leading-relaxed">${item.wt}</p>
                                </div>
                            </div>
                        `;
            });
        });
    }

    function initAccordions() {
        const createAccordion = (containerId, items) => {
            const container = document.getElementById(containerId);
            let html = '';
            items.forEach((item, index) => {
                html += `
                <div class="border border-slate-200 rounded-lg">
                    <h2>
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-slate-700 bg-slate-50 hover:bg-slate-100 transition" data-accordion-target="accordion-body-${containerId}-${index}">
                            <span>${item.title}</span>
                            <svg class="w-3 h-3 transition-transform duration-200 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-body-${containerId}-${index}" class="accordion-content" style="max-height:0;overflow:hidden;transition:max-height 0.3s ease;">
                        <div class="p-5 border-t border-slate-200">
                            <p class="text-slate-600 leading-relaxed">${item.content}</p>
                        </div>
                    </div>
                </div>
            `;
            });
            container.innerHTML = html;
        };

        createAccordion('bb-accordion-container', data.bb_deep_dive);
        createAccordion('wt-accordion-container', data.wt_deep_dive);

        document.querySelectorAll('[data-accordion-target]').forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-accordion-target');
                const targetPanel = document.getElementById(targetId);
                const svg = button.querySelector('svg');

                // Toggle
                if (targetPanel.style.maxHeight && targetPanel.style.maxHeight !== "0px") {
                    targetPanel.style.maxHeight = "0px";
                    svg.style.transform = "rotate(180deg)";
                } else {
                    // Close all in this container (optional: only one open at a time)
                    const parent = button.closest('.section-card');
                    parent.querySelectorAll('.accordion-content').forEach(panel => {
                        panel.style.maxHeight = "0px";
                    });
                    parent.querySelectorAll('svg').forEach(icon => {
                        icon.style.transform = "rotate(180deg)";
                    });

                    targetPanel.style.maxHeight = targetPanel.scrollHeight + "px";
                    svg.style.transform = "rotate(0deg)";
                }
            });
        });
    }

    function initQuiz() {
        const container = document.getElementById('quiz-container');
        let html = '';
        data.quiz.forEach((q, index) => {
            html += `
                        <div>
                            <p class="font-semibold mb-3 text-slate-800">${index + 1}. ${q.question}</p>
                            <div class="flex flex-col sm:flex-row gap-4" data-quiz-group="${index}">
                    `;
            q.answers.forEach((a, aIndex) => {
                html += `
                                <label class="flex-1 p-4 bg-white rounded-lg border border-slate-200 cursor-pointer hover:bg-amber-50 hover:border-amber-400 transition has-[:checked]:bg-amber-100 has-[:checked]:border-amber-500">
                                    <input type="radio" name="q${index}" value="${a.game}" class="sr-only">
                                    <span class="text-slate-700">${a.text}</span>
                                </label>
                        `;
            });
            html += `</div></div>`;
        });
        container.innerHTML = html;

        document.getElementById('quiz-submit').addEventListener('click', () => {
            let bbScore = 0;
            let wtScore = 0;
            const totalQuestions = data.quiz.length;
            let answeredQuestions = 0;

            for (let i = 0; i < totalQuestions; i++) {
                const selected = document.querySelector(`input[name="q${i}"]:checked`);
                if (selected) {
                    answeredQuestions++;
                    if (selected.value === 'bb') bbScore++;
                    else wtScore++;
                }
            }

            if (answeredQuestions < totalQuestions) {
                alert("Bitte beantworte alle Fragen.");
                return;
            }

            const resultDiv = document.getElementById('quiz-result');
            const resultTitle = document.getElementById('result-title');
            const resultDesc = document.getElementById('result-description');

            if (bbScore > wtScore) {
                resultTitle.textContent = "Deine Bestimmung: Battle Brothers";
                resultDesc.textContent = "Du suchst die ultimative Herausforderung und fürchtest dich nicht vor dem Zufall. Die brutale, aber zutiefst belohnende Welt von Battle Brothers, in der jede Entscheidung über Leben und Tod entscheidet, wartet auf dich. Schmiede deine Legende im Angesicht der Verzweiflung!";
            } else if (wtScore > bbScore) {
                resultTitle.textContent = "Dein Weg führt nach... Wartales";
                resultDesc.textContent = "Du bist ein Entdecker und ein Stratege, der Freiheit und Planung schätzt. Die riesige Sandbox von Wartales, die du mit Freunden erkunden und durch dein handwerkliches Geschick meistern kannst, ist dein ideales Schlachtfeld. Sammle deine Gefährten und beginne dein Abenteuer!";
            } else {
                resultTitle.textContent = "Ein geborener Söldner für jede Schlacht!";
                resultDesc.textContent = "Du bist vielseitig und siehst in beiden Philosophien einen Reiz. Du könntest sowohl die gnadenlose Herausforderung von Battle Brothers als auch die strategische Freiheit von Wartales genießen. Wirf eine Münze – oder probiere einfach beide aus!";
            }

            resultDiv.classList.remove('hidden');
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }

    function initChart() {
        const ctx = document.getElementById('receptionChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Kritikerbewertung', 'Nutzerbewertung'],
                datasets: [
                    {
                        label: 'Battle Brothers',
                        data: [80, 7.6 * 10], // User score scaled to 100
                        backgroundColor: 'rgba(100, 116, 139, 0.7)', // slate-500
                        borderColor: 'rgba(100, 116, 139, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Wartales',
                        data: [81, 0], // Placeholder as not in provided text, set to a neutral value
                        backgroundColor: 'rgba(245, 158, 11, 0.7)', // amber-500
                        borderColor: 'rgba(245, 158, 11, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#475569' // slate-600
                        },
                        grid: {
                            color: '#e2e8f0' // slate-200
                        }
                    },
                    x: {
                        ticks: {
                            color: '#475569' // slate-600
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#1e293b' // slate-800
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.label === 'Nutzerbewertung') {
                                    label += (context.raw / 10).toFixed(1) + ' / 10';
                                } else {
                                    label += context.raw + ' / 100';
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    initComparison();
    initAccordions();
    initQuiz();
    initChart();
    switchTab('overview');
});
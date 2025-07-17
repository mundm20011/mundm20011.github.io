document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

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

    // Initialize the first tab as active
    switchTab('overview');

    const accordionData = [
        {
            title: "Kampf",
            content: `
        <p>Das Kampfsystem in <strong>Wartales</strong> ist rundenbasiert und verlangt taktisches Denken, geschickte Positionierung und clevere Fähigkeiten-Nutzung. Treffer sind fast immer garantiert - deshalb zählt Taktik mehr als Glück.</p>

        <h3 class="font-semibold mt-4">💡 Grundlagen:</h3>
        <ul class="list-disc list-inside space-y-1">
            <li>Rundenbasiertes Kampfsystem mit dynamischer Zugverteilung: Die Spielmechanik sorgt dafür, dass die Anzahl der Züge fair zwischen deinen Einheiten und den Gegnern verteilt wird. Beispiel: Hat dein Team 24 Einheiten und der Gegner 12, wechseln sich nach jeweils zwei deiner Züge die Gegner ab. Stirbt ein Gegner, verschiebt sich dieses Verhältnis automatisch.</li>
            <li>Jede Einheit hat Bewegungspunkte und eine Hauptaktion pro Zug - in der Regel ein Angriff, der von der ausgerüsteten Waffe abhängt. Waffen können zusätzliche taktische Fähigkeiten mitbringen (z. B. „Abschirmen“ beim Schild, das den nächsten erlittenen Schaden um 70 % reduziert). Je nach Klassenspezialisierung sind zusätzliche Fähigkeiten verfügbar.</li>
            <li>Positionierung ist entscheidend - es gibt keine klassische Deckung, aber taktische Kontrolle: Nahkampfeinheiten können Gegner im Kampf „binden“, sodass diese sie zuerst angreifen müssen. Wenn sich ein gebundener Kämpfer löst, löst das einen Gelegenheitsangriff aus. Wird ein verbündeter Kämpfer von zwei anderen Kameraden flankiert, erhält er 20 % weniger Schaden („Unterstützung“). Umkreisen drei Einheiten einen Feind, erleidet dieser 20 % mehr Schaden durch den Debuff „Umzingelt“.</li>
        </ul>

        <h3 class="font-semibold mt-4">⚔️ Rollenempfehlung für Anfänger:</h3>
        <ul class="list-disc list-inside space-y-1">
            <li><strong>Kontrolle (Tank-Ersatz)</strong>: Einheiten mit hoher Rüstung und Schild binden Gegner im Nahkampf und reduzieren eingehenden Schaden für Verbündete. Sie halten nicht nur aus, sondern formen die Frontlinie.</li>
<li><strong>Trenner & Verschieber</strong>: Speerkämpfer, Bogenschützen oder Waldläufer (z. B. mit Spezialisierung „Stratege“) können Feinde aus Bindungen stoßen, um neue Bindungen oder Angriffe zu ermöglichen.</li>
<li><strong>Schadensverursacher</strong>: Klassen mit starken Waffen wie Zweihändern oder Bögen zielen auf hohe Einzelziel- oder Flächenschäden. Ihr Erfolg hängt stark von Ausrüstung und Positionierung ab.</li>
        </ul>

        <h3 class="font-semibold mt-4">🧠 Taktik-Tipps:</h3>
        <ul class="list-disc list-inside space-y-1">
            <li>Rückenschläge (Backstabs) verursachen 20% Bonus-Schaden. (von der seite 10%)</li>
            <li>Zangenangriffe (von zwei Seiten) verursachen Bonus-Schaden.</li>
            <li>Gegner mit Tanks „binden“, damit sie niemand anderen angreifen.</li>
            <li>Bewegung bewusst einsetzen - manchmal lohnt es sich zu warten.</li>
        </ul>

        <h3 class="font-semibold mt-4">🔥 Weitere Tipps:</h3>
        <ul class="list-disc list-inside space-y-1">
            <li>Rüstung schützt Lebenspunkte - reparieren vor jedem Kampf!</li>
            <li>Nutze AoE-Schaden (Area of Effect flächenangriff).</li>
            <li>Bluten verursacht am meisten Schaden, Brennen kann auf benachbarte Einheiten überspringen, Gift kann sich stapeln - alle sind sehr effektiv.</li>
            <li>Vermeide Überhastung - kontrolliertes Ausschalten ist effektiver als stürmen.</li>
        </ul>

        <h3 class="font-semibold mt-4">🛠️ Vor dem Kampf:</h3>
        <ul class="list-disc list-inside space-y-1">
            <li>Rüstung reparieren: wenn möglich beim Schmied (günstiger), ansonsten vor dem Kampf mit Reparaturset.</li>
            <li>Formation anpassen und Bogenschützen nach hinten stellen.</li>
        </ul>
    `
        },
        {
            title: "Berufe",
            content: `
        <div>
            <strong>Berufe geben deinen Söldnern zusätzliche Fähigkeiten und Vorteile im Lager.</strong>
            <div class="mt-4">
                <strong>Alle Berufe und ihre Boni:</strong>
                <ul class="list-disc ml-6 space-y-1">
                    <li><b>Alchemist:</b> +10 Geschicklichkeit (DEX)</li>
                    <li><b>Angler:</b> +4 Willenskraft (WIL), +6% Kritische Trefferchance</li>
                    <li><b>Schmied:</b> +10 Stärke (STR)</li>
                    <li><b>Koch:</b> +14 Konstitution (CON)</li>
                    <li><b>Bergarbeiter:</b> +7 Konstitution (CON), +5 Stärke (STR)</li>
                    <li><b>Gelehrter:</b> +8 Willenskraft (WIL)</li>
                    <li><b>Dieb:</b> +4 Geschicklichkeit (DEX), +6% Kritische Trefferchance</li>
                    <li><b>Tüftler:</b> +12% Kritische Trefferchance</li>
                    <li><b>Barde:</b> +7 Konstitution (CON), +4 Willenskraft (WIL)</li>
                    <li><b>Holzfäller:</b> +4 Stärke (STR), +6% Kritische Trefferchance</li>
                    <li><b>Brauer:</b> +7 Konstitution (CON), +6% Kritische Trefferchance, <span class="text-red-700">-3 Willenskraft (WIL)</span></li>
                </ul>
            </div>

            <div class="mt-6">
                <strong>🔝 Wichtigste Berufe (Empfehlung für jedes Team):</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li><b>Schmied:</b> Unverzichtbar für Waffen, Rüstungen und starke STR-Boni.</li>
                    <li><b>Tüftler:</b> Produziert Ausrüstung & Verbrauchsgegenstände, sehr hoher Krit-Bonus.</li>
                    <li><b>Koch:</b> Versorgt das Lager mit Buff-Food, enormer CON-Bonus.</li>
                    <li><b>Dieb:</b> Öffnet Truhen, stiehlt Items, wichtig für Ressourcen.</li>
                    <li><b>Alchemist:</b> Stellt Tränke und Bomben her – unverzichtbar für schwere Kämpfe.</li>
                    <li><b>Bergarbeiter:</b> Sammelt Erze für Ausrüstung & Upgrades, solide Werteboni.</li>
                </ul>
            </div>

            <div class="mt-6">
                <strong>📋 Berufe nach Wichtigkeit (Kurz-Rangliste):</strong>
                <ol class="list-decimal ml-6 mt-2">
                    <li>Schmied</li>
                    <li>Tüftler</li>
                    <li>Koch</li>
                    <li>Dieb</li>
                    <li>Alchemist</li>
                    <li>Bergarbeiter</li>
                    <li>Gelehrter</li>
                    <li>Holzfäller</li>
                    <li>Angler</li>
                    <li>Barde</li>
                </ol>
                <p class="text-sm mt-3 text-gray-600">
                    Hinweis: Wenn du nur mit 6 Gefährten spielst, empfehlen sich die ersten sechs Berufe – damit deckst du alle Kernfunktionen im Kampf und Lager ab.
                </p>
                    
                <div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <strong class="block text-yellow-800">💡 Zusatztipp: Weniger wichtige Berufe an Gefangene vergeben</strong>
                    <p class="mt-2 text-gray-800">
                        Einige Berufe wie <b>Angler</b>, <b>Holzfäller</b> oder <b>Barde</b> liefern zwar Ressourcen oder Vorteile, sind aber in der Praxis oft verzichtbar:
                    </p>
                    <ul class="list-disc ml-6 mt-2 text-gray-700">
                        <li><b>Angler</b> und <b>Holzfäller</b> produzieren Ressourcen, die meist in großer Menge verfügbar oder günstig zu kaufen sind.</li>
                        <li><b>Barde</b> funktioniert nur in Städten und bringt im Vergleich zu anderen Berufen relativ geringe Vorteile.</li>
                        <li>Diese Rollen eignen sich ideal für <b>Gefangene</b>, da diese Lagerarbeiten übernehmen können, ohne das Kampf-Balancing zu beeinflussen.</li>
                        <li>Auch <b>Ponys</b> erhöhen nicht die Gegnerstärke – solange sie nicht zu Kampfponys gemacht werden.</li>
                    </ul>
                    <p class="mt-2 text-sm text-gray-600">
                        Hintergrund: Die Gegnerstärke in <i>Wartales</i> skaliert mit der Anzahl aktiver Kämpfer, <b>nicht</b> mit Gefangenen oder passiven Einheiten.
                    </p>
                </div>
            </div>
        </div>
    `
        }
        ,
        {
            title: "Handel",
            content: `
        <p>Handel ist eine der wichtigsten Einnahmequellen in <strong>Wartales</strong>. Kaufe Waren günstig in Produktionszentren und verkaufe sie mit Gewinn in anderen Regionen. Die Entfernung zwischen Einkaufs- und Verkaufsort ist entscheidend: Je weiter der Zielort entfernt ist, desto höher der Verkaufspreis – Angebot und Nachfrage spielen dabei keine Rolle.</p>
        <h3 class="font-semibold mt-4">💡 Tipps für erfolgreichen Handel:</h3>
        <ul class="list-disc list-inside space-y-1">
            <li>Kaufe <b>Handelswaren</b> (Trade Goods) in Städten, die sie produzieren, möglichst günstig ein.</li>
            <li>Verkaufe sie in weit entfernten Regionen, um höhere Preise zu erzielen. Die Distanz ist der wichtigste Faktor für den Gewinn.</li>
            <li>Behalte die Preise im Auge: Je weiter du von der Herkunftsstadt entfernt bist, desto besser der Verkaufspreis.</li>
            <li>Nutze Boni wie <b>Seed Sausage</b> (+10% Verkaufspreis) oder <b>Broker's Table</b> (günstigerer Einkauf).</li>
            <li>Selbst hergestellte Waffen, Rüstungen und Mahlzeiten lassen sich mit bestimmten Boni besonders gewinnbringend verkaufen.</li>
            <li>Reise-Resolutions und Begleiter mit Handelsfähigkeiten erhöhen deinen Profit zusätzlich.</li>
        </ul>
        <h3 class="font-semibold mt-4">📦 Wichtige Handelswaren:</h3>
        <ul class="list-disc list-inside space-y-1">
            <li>Trade Goods (Handelswaren)</li>
            <li>Öle & Medizin</li>
            <li>Waffen & Rüstung</li>
            <li>Antiquitäten</li>
        </ul>
        <p class="mt-4 text-sm text-gray-600">
            Tipp: Handelsrouten und Travel Posts erleichtern den Transport großer Warenmengen und sparen Zeit.
        </p>
    `
        },
        {
            title: "Geld verdienen",
            content: `
            <p>Gold ist in <strong>Wartales</strong> essenziell, um deine Söldner zu bezahlen, Ausrüstung zu kaufen und deine Truppe zu versorgen. Es gibt verschiedene Wege, an Geld zu kommen:</p>
            <ul class="list-disc list-inside space-y-1 mt-4">
                <li><b>Quests & Kopfgelder:</b> Nimm Aufträge in Tavernen an oder jage Banditen für Kopfgelder. Für gefangene Banditen bekommst du Gold und Einfluss.</li>
                <li><b>Handel:</b> Kaufe Waren günstig ein und verkaufe sie in anderen Regionen mit Gewinn (siehe Abschnitt „Handel“).</li>
                <li><b>Plündern & Sammeln:</b> Durchsuche Lager, Ruinen und besiege Gegner, um Beute und Ressourcen zu erhalten. Sammle Rohstoffe wie Eisen oder Holz und verkaufe sie.</li>
                <li><b>Herstellung & Verkauf:</b> Stelle Waffen, Rüstungen oder Tränke her und verkaufe sie mit Gewinn.</li>
                <li><b>Events:</b> Gelegentlich findest du auf Reisen Schatztruhen oder erhältst Belohnungen für besondere Entscheidungen.</li>
            </ul>
            <p class="mt-4 text-sm text-gray-600" style="display: none">
                Tipp: Bezahle deine Söldner immer pünktlich, sonst sinkt ihre Moral und sie könnten die Gruppe verlassen!
            </p>
        `
        }
    ];

    // Accordion erzeugen
    const container = document.getElementById('wt-accordion-container');
    let html = '';
    accordionData.forEach((item, idx) => {
        html += `
            <div class="border border-slate-200 rounded-lg">
                <h2>
                    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-slate-700 bg-slate-50 hover:bg-slate-100 transition" data-accordion-target="accordion-body-${idx}">
                        <span>${item.title}</span>
                        <svg class="w-3 h-3 transition-transform duration-200 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-body-${idx}" class="accordion-content" style="max-height:0;overflow:hidden;transition:max-height 0.3s ease;">
                    <div class="p-5 border-t border-slate-200">${item.content}</div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    // Accordion-Logik
    document.querySelectorAll('[data-accordion-target]').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-accordion-target');
            const targetPanel = document.getElementById(targetId);
            const svg = button.querySelector('svg');
            // Toggle
            if (targetPanel.style.maxHeight && targetPanel.style.maxHeight !== "0px") {
                targetPanel.style.maxHeight = "0px";
                svg.style.transform = "rotate(180deg)";
                // Subaccordion schließen, falls offen
                const sub = targetPanel.querySelector('#sub-kochen');
                if (sub && !sub.classList.contains('hidden')) {
                    sub.classList.add('hidden');
                }
            } else {
                // Optional: Nur ein Panel offen
                container.querySelectorAll('.accordion-content').forEach(panel => {
                    panel.style.maxHeight = "0px";
                    // Subaccordion schließen, falls offen
                    const sub = panel.querySelector('#sub-kochen');
                    if (sub && !sub.classList.contains('hidden')) {
                        sub.classList.add('hidden');
                    }
                });
                container.querySelectorAll('svg').forEach(icon => {
                    icon.style.transform = "rotate(180deg)";
                });
                targetPanel.style.maxHeight = targetPanel.scrollHeight + "px";
                svg.style.transform = "rotate(0deg)";
            }
        });
    });

    // Subaccordion (z.B. Kochen)
    container.addEventListener('click', function (e) {
        if (e.target.matches('[data-subaccordion="kochen"]')) {
            e.preventDefault();
            const sub = document.getElementById('sub-kochen');
            sub.classList.toggle('hidden');
            // Accordion-Panel neu berechnen
            const panel = sub.closest('.accordion-content');
            if (panel && panel.style.maxHeight && panel.style.maxHeight !== "0px") {
                // Höhe neu setzen
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    });

    const specializations = {
        archer: [
            { name: "Recoil Shot", desc: "Stößt Ziel zurück und macht Schaden", type: "AOE" },
            { name: "Confident Aim", desc: "Erhöhte Präzision und Kritische Treffer", type: "Single-DMG" },
            { name: "Valorous Audacity", desc: "Mut durch Nähe zum Feind", type: "Passive" },
        ],
        brute: [
            { name: "Vanguard", desc: "Ansturm auf Gegner mit Verlangsamung", type: "Tank" },
            { name: "Fury", desc: "Bonus-Schaden bei weniger als 50% HP", type: "Glasscannon" },
            { name: "Taunt", desc: "Zwingt Gegner dich anzugreifen", type: "Controller" },
        ],
        ranger: [
            { name: "Poisoned Blade", desc: "Fügt über Zeit Schaden zu", type: "AOE" },
            { name: "Ambush", desc: "Starker Angriff aus dem Hinterhalt", type: "Single-DMG" },
            { name: "Shadow Step", desc: "Bewegung ohne Angriff auszulösen", type: "Passive" },
        ],
        warrior: [
            { name: "Wrath", desc: "Erhöht Angriff für eine Runde", type: "Single-DMG" },
            { name: "Defensive Stance", desc: "Reduziert eingehenden Schaden", type: "Tank" },
            { name: "Oath of Cowards", desc: "+30% Schaden gegen kämpfende Feinde", type: "Passive" },
        ],
        spearman: [
            { name: "Spear Wall", desc: "Kontrolliert Gebiet, verhindert Bewegung", type: "Controller" },
            { name: "Riposte", desc: "Kontert Nahkampfangriffe", type: "Tank" },
            { name: "Brace", desc: "Erhöhte Verteidigung", type: "Passive" },
        ]
    };

    const skilltrees = {
        archer: [
            {
                level: 2,
                skills: [
                    {
                        name: "Valorous Audacity",
                        type: "Passive",
                        bonus: "Jedes Mal, wenn diese Einheit ihren Zug neben einem Feind beendet und nicht im Nahkampf gebunden ist, erhält sie 1 Tapferkeitspunkt.",
                        upgrade: "-"
                    },
                    {
                        name: "Valorous Victory",
                        type: "Passive",
                        bonus: "Jedes Mal, wenn diese Einheit einen Feind tötet, erhält sie 1 Tapferkeitspunkt.",
                        upgrade: "-"
                    },
                    {
                        name: "Valorous Support",
                        type: "Passive",
                        bonus: "Jedes Mal, wenn diese Einheit ihren Zug neben einem Verbündeten beendet und nicht im Nahkampf gebunden ist, erhält sie 1 Tapferkeitspunkt.",
                        upgrade: "-"
                    }
                ]
            },
            {
                level: 3,
                skills: [
                    {
                        name: "Recoil Shot",
                        path: "Hunter",
                        bonus: "9m Schuss, 1 Tapferkeitspunkt: 70-100% Schaden, 2m Rückstoß, Verlangsamung für 1 Runde.",
                        upgrade: "80-120% Schaden, 3m Rückstoß, Verlangsamung für 2 Runden."
                    },
                    {
                        name: "ATTACK!",
                        path: "Beastmaster",
                        bonus: "12m Reichweite, 1 Tapferkeitspunkt: Alle verbündeten Tiere neben dem Ziel greifen es an.",
                        upgrade: "Alle Tiere erhalten Wut und greifen an."
                    },
                    {
                        name: "Barrage",
                        path: "Infantryman",
                        bonus: "9m Fläche, 2 Tapferkeitspunkte: Gelegenheitsangriff auf die ersten 3 Feinde, die den Bereich betreten.",
                        upgrade: "Auf die ersten 4 Feinde."
                    },
                    {
                        name: "Aimed Shot",
                        path: "Marksman",
                        bonus: "8m Schuss, 2 Tapferkeitspunkte: 70% Schaden, +5% Schaden pro Meter Entfernung.",
                        upgrade: "+5% Schaden & Krit pro Meter Entfernung."
                    }
                ]
            },
            {
                level: 5,
                skills: [
                    {
                        name: "Reinforced Arrows",
                        type: "Passive",
                        bonus: "Kritische Treffer verursachen Blutung.",
                        upgrade: "Kritische Treffer verursachen Blutung, Kritischer Schaden +35%."
                    },
                    {
                        name: "Precision",
                        type: "Passive",
                        bonus: "Every 2 attacks apply Vulnerability.",
                        upgrade: "Every 2 attacks apply Vulnerability and gains Fury."
                    },
                    {
                        name: "Beast Mastery",
                        type: "Passive",
                        bonus: "Animals can be controlled in battle.",
                        upgrade: "Animals can be controlled in battle. Heals animals for 5% HP every round."
                    },
                    {
                        name: "Subtlety",
                        type: "Passive",
                        bonus: "If this unit ends their turn while not engaged in combat, they gain Deflection.",
                        upgrade: "If this unit ends their turn while not engaged in combat, they gain Deflection and Deftness."
                    }
                ]
            },
            {
                level: 8,
                skills: [
                    {
                        name: "Taming Arrow 9m shot",
                        type: "Active",
                        bonus: "Applies Fury to the targeted animal.",
                        upgrade: "Applies Fury and Riposte to the targeted animal."
                    },
                    {
                        name: "Thrill of the Hunt",
                        type: "Passive",
                        bonus: "Attacks executed at a range > 8m grants 1 Rage.",
                        upgrade: "Attacks executed at a range > 6m grants 2 Rage."
                    },
                    {
                        name: "Animal Affinity",
                        type: "Passive",
                        bonus: "At the start of the battle, gains 1 allied animal passive skill.",
                        upgrade: "At the start of the battle, gains 2 allied animal passive skills."
                    },
                    {
                        name: "Easy Prey",
                        type: "Passive",
                        bonus: "Damage increased by 15% against targets that are not adjacent to any other unit.",
                        upgrade: "Damage increased by 30% against targets that are not adjacent to any other unit."
                    }
                ]
            },
            {
                level: 10,
                skills: [
                    {
                        name: "Second Weapon",
                        type: "Active",
                        bonus: "Can equip a second bow and swap weapons in combat.",
                        upgrade: "-"
                    },
                    {
                        name: "Anticipation",
                        type: "Passive",
                        bonus: "50% chance to deal attack of opportunity and not become engaged.",
                        upgrade: "-"
                    },
                    {
                        name: "Lone Wolf",
                        type: "Passive",
                        bonus: "While > 5m away from an ally damage increased by 10% and damage reduced by 10%.",
                        upgrade: "-"
                    }
                ]
            },
            {
                level: 12,
                skills: [
                    {
                        name: "Suppressive Fire",
                        type: "Passive",
                        bonus: "Deals 30% damage and applies slowdown to all units in area for 1 round.",
                        upgrade: "-"
                    },
                    {
                        name: "Class Specialisation",
                        type: "Passive",
                        bonus: "Unlocks a skill from a previous level.",
                        upgrade: "-"
                    }
                    // ...weitere Skills wie oben...
                ]
            }
            // ...weitere Level...
        ],
        brute: [
            {
                level: 2,
                skills: [
                    {
                        name: "Valorous Audacity",
                        type: "Passive",
                        bonus: "Jedes Mal, wenn diese Einheit ihren Zug neben einem Feind beendet und nicht im Nahkampf gebunden ist, erhält sie 1 Tapferkeitspunkt.",
                        upgrade: "-"
                    },
                    {
                        name: "Valorous Victory",
                        type: "Passive",
                        bonus: "Jedes Mal, wenn diese Einheit einen Feind tötet, erhält sie 1 Tapferkeitspunkt.",
                        upgrade: "-"
                    },
                    {
                        name: "Valorous Support",
                        type: "Passive",
                        bonus: "Jedes Mal, wenn diese Einheit ihren Zug neben einem Verbündeten beendet und nicht im Nahkampf gebunden ist, erhält sie 1 Tapferkeitspunkt.",
                        upgrade: "-"
                    }
                ]
            },
            {
                level: 3,
                skills: [
                    {
                        name: "Recoil Shot",
                        path: "Hunter",
                        bonus: "9m Schuss, 1 Tapferkeitspunkt: 70-100% Schaden, 2m Rückstoß, Verlangsamung für 1 Runde.",
                        upgrade: "80-120% Schaden, 3m Rückstoß, Verlangsamung für 2 Runden."
                    },
                    {
                        name: "ATTACK!",
                        path: "Beastmaster",
                        bonus: "12m Reichweite, 1 Tapferkeitspunkt: Alle verbündeten Tiere neben dem Ziel greifen es an.",
                        upgrade: "Alle Tiere erhalten Wut und greifen an."
                    },
                    {
                        name: "Barrage",
                        path: "Infantryman",
                        bonus: "9m Fläche, 2 Tapferkeitspunkte: Gelegenheitsangriff auf die ersten 3 Feinde, die den Bereich betreten.",
                        upgrade: "Auf die ersten 4 Feinde."
                    },
                    {
                        name: "Aimed Shot",
                        path: "Marksman",
                        bonus: "8m Schuss, 2 Tapferkeitspunkte: 70% Schaden, +5% Schaden pro Meter Entfernung.",
                        upgrade: "+5% Schaden & Krit pro Meter Entfernung."
                    }
                ]
            },
            {
                level: 5,
                skills: [
                    {
                        name: "Reinforced Arrows",
                        type: "Passive",
                        bonus: "Kritische Treffer verursachen Blutung.",
                        upgrade: "Kritische Treffer verursachen Blutung, Kritischer Schaden +35%."
                    },
                    // ...weitere Skills wie oben...
                ]
            },
            {
                level: 8,
                skills: [
                    {
                        name: "Reinforced Arrows",
                        type: "Passive",
                        bonus: "Kritische Treffer verursachen Blutung.",
                        upgrade: "Kritische Treffer verursachen Blutung, Kritischer Schaden +35%."
                    },
                    // ...weitere Skills wie oben...
                ]
            },
            {
                level: 10,
                skills: [
                    {
                        name: "Reinforced Arrows",
                        type: "Passive",
                        bonus: "Kritische Treffer verursachen Blutung.",
                        upgrade: "Kritische Treffer verursachen Blutung, Kritischer Schaden +35%."
                    },
                    // ...weitere Skills wie oben...
                ]
            },
            {
                level: 12,
                skills: [
                    {
                        name: "Reinforced Arrows",
                        type: "Passive",
                        bonus: "Kritische Treffer verursachen Blutung.",
                        upgrade: "Kritische Treffer verursachen Blutung, Kritischer Schaden +35%."
                    },
                    // ...weitere Skills wie oben...
                ]
            }
            // ...weitere Level...
        ]
        // ...weitere Klassen...
    };

    let currentClass = "";
    let selectedSkill = null;
    const squad = [];

    //     document.getElementById("class-select").addEventListener("change", (e) => {
    //         currentClass = e.target.value;
    //         selectedSkill = null;
    //         const skills = specializations[currentClass] || [];
    //         const skillContainer = document.getElementById("skill-options");

    //         if (skills.length === 0) return;

    //         skillContainer.innerHTML = "";
    //         skills.forEach(skill => {
    //             const div = document.createElement("div");
    //             div.className = "skill-option flex items-center gap-2 p-2 rounded hover:bg-blue-50";
    //             div.innerHTML = `
    //   <input type="radio" name="skill" value="${skill.name}" class="accent-blue-600" />
    //   <span><strong>${skill.name}</strong>: ${skill.desc} <em class="text-xs text-slate-500">(${skill.type})</em></span>
    // `;
    //             skillContainer.appendChild(div);
    //         });

    //         document.getElementById("skilltree-section").classList.remove("hidden");
    //         document.getElementById("create-character-section").classList.remove("hidden");
    //     });

    // document.getElementById("class-select").addEventListener("change", (e) => {
    //     currentClass = e.target.value;
    //     selectedSkill = null;
    //     const tree = skilltrees[currentClass] || [];
    //     const skillContainer = document.getElementById("skill-options");
    //     skillContainer.innerHTML = "";

    //     const selectableLevels = [2, 3, 5, 8, 10, 12];
    //     const relevantLevels = tree.filter(l => selectableLevels.includes(l.level));

    //     if (relevantLevels.length === 0) {
    //         skillContainer.innerHTML = "<p>Keine auswählbaren Skills vorhanden.</p>";
    //         return;
    //     }

    //     relevantLevels.forEach(levelBlock => {
    //         const levelDiv = document.createElement("div");
    //         levelDiv.className = "mb-4";
    //         levelDiv.innerHTML = `<h4 class="font-bold mb-1 text-blue-600">Level ${levelBlock.level}</h4>`;

    //         levelBlock.skills.forEach(skill => {
    //             const id = `level-${levelBlock.level}-${skill.name}`;
    //             const div = document.createElement("div");
    //             div.className = "skill-option flex items-center gap-2 p-1 rounded hover:bg-blue-50";
    //             div.innerHTML = `
    //             <input type="radio" name="skill-${levelBlock.level}" id="${id}" value="${skill.name}" class="accent-blue-600" />
    //             <label for="${id}"><strong>${skill.name}</strong>: ${skill.bonus} 
    //             ${skill.path ? `<em class="text-xs text-slate-500">(${skill.path})</em>` : ""}</label>
    //         `;
    //             levelDiv.appendChild(div);
    //         });

    //         skillContainer.appendChild(levelDiv);
    //     });

    //     renderSkilltree(currentClass);
    //     document.getElementById("skilltree-section").classList.remove("hidden");
    //     document.getElementById("create-character-section").classList.remove("hidden");
    // });

    document.getElementById("class-select").addEventListener("change", (e) => {
        currentClass = e.target.value;
        selectedSkill = null;
        const tree = skilltrees[currentClass] || [];
        const skillContainer = document.getElementById("skill-options");
        skillContainer.innerHTML = "";

        // Skilltree-Tabelle ausblenden/leeren
        document.getElementById("skilltree-table").innerHTML = "";

        const selectableLevels = [2, 3, 5, 8, 10, 12];
        const relevantLevels = tree.filter(l => selectableLevels.includes(l.level));

        if (relevantLevels.length === 0) {
            skillContainer.innerHTML = "<p>Keine auswählbaren Skills vorhanden.</p>";
            return;
        }

        relevantLevels.forEach(levelBlock => {
            const levelDiv = document.createElement("div");
            levelDiv.className = "mb-4";
            levelDiv.innerHTML = `<h4 class="font-bold mb-1 text-blue-600">Level ${levelBlock.level}</h4>`;

            levelBlock.skills.forEach(skill => {
                const id = `level-${levelBlock.level}-${skill.name}`;
                const div = document.createElement("div");
                div.className = "skill-option flex items-center gap-2 p-1 rounded hover:bg-blue-50";
                div.innerHTML = `
                <input type="radio" name="skill-${levelBlock.level}" id="${id}" value="${skill.name}" class="accent-blue-600" />
                <label for="${id}"><strong>${skill.name}</strong>: ${skill.bonus} 
                ${skill.path ? `<em class="text-xs text-slate-500">(${skill.path})</em>` : ""}</label>
            `;
                levelDiv.appendChild(div);
            });

            skillContainer.appendChild(levelDiv);
        });

        document.getElementById("skilltree-section").classList.remove("hidden");
        document.getElementById("create-character-section").classList.remove("hidden");
    });

    // document.getElementById("create-character-btn").addEventListener("click", () => {
    //     const chosen = document.querySelector('input[name="skill"]:checked');
    //     if (!chosen) return alert("Bitte einen Skill auswählen!");

    //     const skill = specializations[currentClass].find(s => s.name === chosen.value);
    //     const character = {
    //         class: currentClass,
    //         skill: skill.name,
    //         role: skill.type
    //     };
    //     squad.push(character);
    //     updateSquadList();
    //     updateSquadAnalysis();
    // });

    // Mapping von Level-3-Pfaden auf Rollen
    const pathToRole = {
        Infantryman: "AOE",
        Hunter: "Controller",
        Marksman: "Single-DMG",
        Beastmaster: "Buff"
        // ggf. weitere Pfade ergänzen
    };

    document.getElementById("create-character-btn").addEventListener("click", () => {
        const selectedSkills = {};
        const requiredLevels = [2, 3, 5, 8, 10, 12];
        const tree = skilltrees[currentClass];

        // Stelle sicher, dass für jedes Level ein Skill gewählt ist
        for (const level of requiredLevels) {
            const input = document.querySelector(`input[name="skill-${level}"]:checked`);
            if (!input) {
                return alert(`Bitte wähle eine Fähigkeit für Level ${level}!`);
            }

            const levelSkills = tree.find(l => l.level === level)?.skills || [];
            const skill = levelSkills.find(s => s.name === input.value);
            if (skill) selectedSkills[level] = skill;
        }

        const level3Skill = selectedSkills[3];
        let role = "Unbekannt";
        if (level3Skill && level3Skill.path && pathToRole[level3Skill.path]) {
            role = pathToRole[level3Skill.path];
        }

        const character = {
            class: currentClass,
            skills: Object.values(selectedSkills).map(s => s.name),
            role: role
        };

        squad.push(character);
        updateSquadList();
        updateSquadAnalysis();
    });

    function updateSquadList() {
        const list = document.getElementById("squad-list");
        list.innerHTML = "";
        squad.forEach((char, i) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <div class="mb-2">
                <strong>${i + 1}. ${char.class}</strong> – <span class="italic text-slate-600">${char.role}</span><br/>
                <ul class="list-disc pl-6 text-sm">
                    ${char.skills.map(s => `<li>${s}</li>`).join("")}
                </ul>
            </div>
        `;
            list.appendChild(li);
        });
    }

    function updateSquadAnalysis() {
        const roles = {};
        squad.forEach(char => {
            roles[char.role] = (roles[char.role] || 0) + 1;
        });

        let html = "<h4>Analyse:</h4><ul>";
        const roleTypes = ["Tank", "Controller", "AOE", "Single-DMG", "Buff"];
        roleTypes.forEach(role => {
            if (roles[role]) {
                html += `<li>${role}: ${roles[role]}</li>`;
            } else {
                html += `<li style="color:red;">${role}: fehlt!</li>`;
            }
        });
        html += "</ul>";
        document.getElementById("squad-analysis").innerHTML = html;
    }

    function renderSkilltree(className) {
        const tree = skilltrees[className];
        const tableContainer = document.getElementById("skilltree-table");
        if (!tree) {
            tableContainer.innerHTML = "<p>Kein Skilltree für diese Klasse vorhanden.</p>";
            return;
        }
        let html = "";
        tree.forEach(levelBlock => {
            html += `<div class="mb-6">
      <h4 class="font-bold text-blue-700 mb-2">Level ${levelBlock.level}</h4>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border">
          <thead>
            <tr class="bg-slate-100">
              <th class="p-2 border">Name</th>
              <th class="p-2 border">Bonus</th>
              <th class="p-2 border">Upgrade</th>
            </tr>
          </thead>
          <tbody>`;
            levelBlock.skills.forEach(skill => {
                html += `<tr>
        <td class="p-2 border">${skill.path ? `<span class="font-semibold">${skill.path}:</span> ` : ""}${skill.name}</td>
        <td class="p-2 border">${skill.bonus}</td>
        <td class="p-2 border">${skill.upgrade}</td>
      </tr>`;
            });
            html += `</tbody></table></div></div>`;
        });
        tableContainer.innerHTML = html;
    }
});
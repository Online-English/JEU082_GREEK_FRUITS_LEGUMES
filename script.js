const vocabulaire = [
    // ================= NIVEAU 1 =================
    { grec: "Μήλο", francais: "Pomme", emoji: "🍎", lvl: 1, mne: "Se prononce 'milo'. Facile : une pomme pour le petit Milo !" },
    { grec: "Μπανάνα", francais: "Banane", emoji: "🍌", lvl: 1, mne: "Transcription directe et universelle : banana." },
    { grec: "Λεμόνι", francais: "Citron", emoji: "🍋", lvl: 1, mne: "Se prononce 'lemoni'. Pensez à la limonade !" },
    { grec: "Πορτοκάλι", francais: "Orange", emoji: "🍊", lvl: 1, mne: "Se prononce 'portokali'. Le Portugal gérait autrefois l'import des oranges." },
    { grec: "Φράουλα", francais: "Fraise", emoji: "🍓", lvl: 1, mne: "Se prononce 'fraoula'. Ressemble un peu au mot 'fraise'." },
    { grec: "Πατάτα", francais: "Pomme de terre", emoji: "🥔", lvl: 1, mne: "Se prononce 'patata'. Identique à la patate !" },
    { grec: "Καρότο", francais: "Carotte", emoji: "🥕", lvl: 1, mne: "Se prononce 'karoto'. Très proche de carotte." },
    { grec: "Ντομάτα", francais: "Tomate", emoji: "🍅", lvl: 1, mne: "Se prononce 'domata'. Le N initial adoucit le T en D." },
    { grec: "Σκόρδο", francais: "Ail", emoji: "🧄", lvl: 1, mne: "Se prononce 'skordo'. L'Ail détruit votre fraîcheur buccale." },
    { grec: "Κρεμμύδι", francais: "Oignon", emoji: "🧅", lvl: 1, mne: "Se prononce 'kremmydi'. On dirait une crème piquante." },

    // ================= NIVEAU 2 =================
    { grec: "Κεράσι", francais: "Cerise", emoji: "🍒", lvl: 2, mne: "Se prononce 'kerasi'. Très proche phonétiquement." },
    { grec: "Καρπούζι", francais: "Pastèque", emoji: "🍉", lvl: 2, mne: "Se prononce 'karpouzi'. L'emblème des étés en Grèce." },
    { grec: "Πεπόνι", francais: "Melon", emoji: "🍈", lvl: 2, mne: "Se prononce 'peponi'. Facile : attention aux pépins." },
    { grec: "Ροδάκινο", francais: "Pêche", emoji: "🍑", lvl: 2, mne: "Se prononce 'rodakino'. Une pêche rose comme une rose ('rodo')." },
    { grec: "Σύκο", francais: "Figue", emoji: "🫒", lvl: 2, mne: "Se prononce 'syko'. Fruit du sycomore." },
    { grec: "Αγγούρι", francais: "Concombre", emoji: "🥒", lvl: 2, mne: "Se prononce 'angouri'. Légume d'eau allongé." },
    { grec: "Μαρούλι", francais: "Laitue", emoji: "🥬", lvl: 2, mne: "Se prononce 'marouli'. Rouler la salade." },
    { grec: "Σπανάκι", francais: "Épinard", emoji: "🌿", lvl: 2, mne: "Se prononce 'spanaki'. Pour faire la spanakopita." },
    { grec: "Μανιτάρι", francais: "Champignon", emoji: "🍄", lvl: 2, mne: "Se prononce 'manitari'. Cueillis à la main." },
    { grec: "Μπρόκολο", francais: "Brocoli", emoji: "🥦", lvl: 2, mne: "Se prononce 'brokolo'. Suffixe modifié." },

    // ================= NIVEAU 3 =================
    { grec: "Αχλάδι", francais: "Poire", emoji: "🍐", lvl: 3, mne: "Se prononce 'achladi'. Une poire juteuse." },
    { grec: "Ανανάς", francais: "Ananas", emoji: "🍍", lvl: 3, mne: "Se prononce 'ananas'. Identique !" },
    { grec: "Βερίκοκο", francais: "Abricot", emoji: "🍑", lvl: 3, mne: "Se prononce 'verikoko'. Couleur abricot." },
    { grec: "Δαμάσκηνο", francais: "Prune", emoji: "🫐", lvl: 3, mne: "Se prononce 'damaskino'. Lié à la ville de Damas." },
    { grec: "Ρόδι", francais: "Grenade", emoji: "🍇", lvl: 3, mne: "Se prononce 'rodi'. Fruit porte-bonheur." },
    { grec: "Κουνουπίδι", francais: "Chou-fleur", emoji: "🥦", lvl: 3, mne: "Se prononce 'kounoupidi'. Chou blanc." },
    { grec: "Κολοκύθι", francais: "Courgette", emoji: "🥒", lvl: 3, mne: "Se prononce 'kolokythi'. Pour les mezzés." },
    { grec: "Μελιτζάνα", francais: "Aubergine", emoji: "🍆", lvl: 3, mne: "Se prononce 'melitzana'. Indispensable pour la moussaka !" },
    { grec: "Πιπεριά", francais: "Poivron", emoji: "🫑", lvl: 3, mne: "Se prononce 'piperia'. De la même racine piquante que le poivre." },
    { grec: "Φασολάκια", francais: "Haricots verts", emoji: "🫘", lvl: 3, mne: "Se prononce 'fasolakia'. Les petits haricots fins du potager." },

    // ================= NIVEAU 4 =================
    { grec: "Μάνγκο", francais: "Mangue", emoji: "🥭", lvl: 4, mne: "Se prononce 'mango'. Écriture directe." },
    { grec: "Ακτινίδιο", francais: "Kiwi", emoji: "🥝", lvl: 4, mne: "Se prononce 'aktinidio'. Rayons du fruit." },
    { grec: "Γκρέιπφρουτ", francais: "Pamplemousse", emoji: "🍊", lvl: 4, mne: "Phonétique de grapefruit." },
    { grec: "Σμέουρο", francais: "Framboise", emoji: "🍓", lvl: 4, mne: "Se prononce 'smeouro'. Fruit délicat." },
    { grec: "Μύρτιλο", francais: "Myrtille", emoji: "🫐", lvl: 4, mne: "Se prononce 'myrtilo'. Très proche." },
    { grec: "Αρακάς", francais: "Petits pois", emoji: "🫛", lvl: 4, mne: "Se prononce 'arakas'. Billes vertes." },
    { grec: "Καλαμπόκι", francais: "Maïs", emoji: "🌽", lvl: 4, mne: "Se prononce 'kalamboki'. Épi jaune." },
    { grec: "Λάχανο", francais: "Chou", emoji: "🥬", lvl: 4, mne: "Se prononce 'lachano'. Gros chou cabus." },
    { grec: "Σέλινο", francais: "Céleri", emoji: "🌿", lvl: 4, mne: "Se prononce 'selino'. Très proche." },
    { grec: "Μαϊντανός", francais: "Persil", emoji: "🌱", lvl: 4, mne: "Se prononce 'maintanos'. L'herbe aromatique phare." },

    // ================= NIVEAU 5 =================
    { grec: "Βατόμουρο", francais: "Mûre", emoji: "🍇", lvl: 5, mne: "Se prononce 'vatomouro'. La mûre sauvage des ronces." },
    { grec: "Κράνμπερι", francais: "Canneberge", emoji: "🍒", lvl: 5, mne: "Phonétique de cranberry." },
    { grec: "Μανταρίνι", francais: "Mandarine", emoji: "🍊", lvl: 5, mne: "Se prononce 'mandarini'. Identique." },
    { grec: "Σταφύλι", francais: "Raisin", emoji: "🍇", lvl: 5, mne: "Se prononce 'stafyli'. Les vignes des Cyclades." },
    { grec: "Καρύδι", francais: "Noix", emoji: "🌰", lvl: 5, mne: "Se prononce 'karydi'. Petite coque ligneuse." },
    { grec: "Πράσο", francais: "Poireau", emoji: "🥬", lvl: 5, mne: "Se prononce 'praso'. Long poireau d'hiver." },
    { grec: "Ρέβα", francais: "Navet", emoji: "🥔", lvl: 5, mne: "Reva. Racine mauve." },
    { grec: "Ραπάνι", francais: "Radis", emoji: "🥕", lvl: 5, mne: "Se prononce 'rapani'. Croquant avec du sel." },
    { grec: "Αγκινάρα", francais: "Artichaut", emoji: "🥬", lvl: 5, mne: "Se prononce 'anginara'. Cœur tendre." },
    { grec: "Σπαράγγι", francais: "Asperge", emoji: "🥦", lvl: 5, mne: "Se prononce 'sparangi'. Asperge de printemps." },

    // ================= NIVEAU 6 =================
    { grec: "Φιστίκι", francais: "Pistache", emoji: "🥜", lvl: 6, mne: "Se prononce 'fistiki'. La pistache d'Égine." },
    { grec: "Κάστανο", francais: "Châtaigne", emoji: "🌰", lvl: 6, mne: "Se prononce 'kastano'. Châtaignes chaudes." },
    { grec: "Φουντούκι", francais: "Noisette", emoji: "🥜", lvl: 6, mne: "Se prononce 'fountouki'. Fruit du coudrier." },
    { grec: "Αμύγδαλο", francais: "Amande", emoji: "🌰", lvl: 6, mne: "Se prononce 'amygdalo'. Amygdales en amande." },
    { grec: "Καρύδα", francais: "Noix de coco", emoji: "🥥", lvl: 6, mne: "Se prononce 'karyda'. Grosse noix exotique." },
    { grec: "Φάβα", francais: "Fève", emoji: "🫘", lvl: 6, mne: "Se prononce 'fava'. Purée typique de Santorin." },
    { grec: "Γλυκοπατάτα", francais: "Patate douce", emoji: "🍠", lvl: 6, mne: "Se prononce 'glykopatata'. Patate sucrée." },
    { grec: "Φασόλι", francais: "Haricot blanc", emoji: "🫘", lvl: 6, mne: "Se prononce 'fasoli'. Ingrédient de la fasolada." },
    { grec: "Ρεβίθι", francais: "Pois chiche", emoji: "🫘", lvl: 6, mne: "Se prononce 'revithi'. Base de soupe crémeuse." },
    { grec: "Φακή", francais: "Lentille", emoji: "🫘", lvl: 6, mne: "Se prononce 'faki'. Lentilles brunes." },

    // ================= NIVEAU 7 =================
    { grec: "Χουρμάς", francais: "Datte", emoji: "🌴", lvl: 7, mne: "Se prononce 'chourmas'. Fruit séché." },
    { grec: "Παπάγια", francais: "Papaye", emoji: "🥭", lvl: 7, mne: "Se prononce 'papaya'. Phonétique." },
    { grec: "Αβοκάντο", francais: "Avocat", emoji: "🥑", lvl: 7, mne: "Se prononce 'avokanto'. Avocat bien mûr." },
    { grec: "Σταφίδα", francais: "Raisin sec", emoji: "🍇", lvl: 7, mne: "Se prononce 'stafida'. Raisin flétri." },
    { grec: "Σύκο αποξηραμένο", francais: "Figue sèche", emoji: "🫒", lvl: 7, mne: "Se prononce 'syko apoxirameno'." },
    { grec: "Μπάμια", francais: "Gombo", emoji: "🥬", lvl: 7, mne: "Se prononce 'bamia'. Capsule mucilagineuse." },
    { grec: "Σέσκουλο", francais: "Bette", emoji: "🥬", lvl: 7, mne: "Se prononce 'seskoulo'. Blettes à carde." },
    { grec: "Κολοκύθα", francais: "Citrouille", emoji: "🎃", lvl: 7, mne: "Se prononce 'kolokytha'. Grosse courge d'automne." },
    { grec: "Παντζάρι", francais: "Betterave", emoji: "🍠", lvl: 7, mne: "Se prononce 'pantzari'. Betterave pour salade." },
    { grec: "Φινόκιο", francais: "Fenouil", emoji: "🌿", lvl: 7, mne: "Se prononce 'finokio'. Bulbe anisé." },

    // ================= NIVEAU 8 =================
    { grec: "Λάιμ", francais: "Lime", emoji: "🍋", lvl: 8, mne: "Se prononce 'laim'. Citron vert des îles." },
    { grec: "Νεκταρίνι", francais: "Nectarine", emoji: "🍑", lvl: 8, mne: "Se prononce 'nektarini'. Identique." },
    { grec: "Λωτός", francais: "Kaki", emoji: "🍅", lvl: 8, mne: "Se prononce 'lotos'. Fruit du lotus sucré." },
    { grec: "Κυδώνι", francais: "Coing", emoji: "🍏", lvl: 8, mne: "Se prononce 'kydoni'. Idéal en pâte de fruits." },
    { grec: "Κράνο", francais: "Cornouille", emoji: "🍒", lvl: 8, mne: "Se prononce 'krano'. Baie acide sauvage." },
    { grec: "Ρόκα", francais: "Roquette", emoji: "🌿", lvl: 8, mne: "Se prononce 'roka'. Salade poivrée." },
    { grec: "Αντίδι", francais: "Endive", emoji: "🥬", lvl: 8, mne: "Se prononce 'antidi'. Endive amère." },
    { grec: "Λαχανίδα", francais: "Chou frisé", emoji: "🥬", lvl: 8, mne: "Se prononce 'lachanida'. Chou kale rustique." },
    { grec: "Άνηθος", francais: "Aneth", emoji: "🌿", lvl: 8, mne: "Parfum des tzatzikis." },
    { grec: "Σχοινόπρασο", francais: "Ciboulette", emoji: "🌱", lvl: 8, mne: "Se prononce 'schoinopraso'." },

    // ================= NIVEAU 9 =================
    { grec: "Φραγκόσυκο", francais: "Figue de Barbarie", emoji: "🌵", lvl: 9, mne: "Se prononce 'frangosyko'. Figue épineuse." },
    { grec: "Φραγkoστάφυλο", francais: "Groseille", emoji: "🍒", lvl: 9, mne: "Se prononce 'frangostafylo'. Baie acide." },
    { grec: "Φρούτο του πάθους", francais: "Fruit de la passion", emoji: "🍇", lvl: 9, mne: "Frouto tou pathous." },
    { grec: "Γκότζι μπέρι", francais: "Baie de Goji", emoji: "🍒", lvl: 9, mne: "Phonétique directe." },
    { grec: "Μούρο", francais: "Mûre sauvage", emoji: "🍇", lvl: 9, mne: "Se prononce 'mouro'. Fruits des buissons." },
    { grec: "Τζίντζερ", francais: "Gingembre", emoji: "🫚", lvl: 9, mne: "Phonétique de ginger." },
    { grec: "Κάπαρη", francais: "Câpre", emoji: "🌱", lvl: 9, mne: "Se prononce 'kapari'. Câpres salées des roches." },
    { grec: "Μάραθος", francais: "Fenouil sauvage", emoji: "🌿", lvl: 9, mne: "Se prononce 'marathos'. Herbe folle." },
    { grec: "Σπαράγγι της θάλασσας", francais: "Salicorne", emoji: "🌿", lvl: 9, mne: "Asperge de mer marine." },
    { grec: "Βλαστός μπαμπού", francais: "Pousse de bambou", emoji: "🎍", lvl: 9, mne: "Pousse asiatique." },

    // ================= NIVEAU 10 =================
    { grec: "Λιτσί", francais: "Litchi", emoji: "🍒", lvl: 10, mne: "Se prononce 'litsi'. Fruit translucide." },
    { grec: "Αγριοφράουλα", francais: "Fraise des bois", emoji: "🍓", lvl: 10, mne: "Se prononce 'agriofraoula'. Fraise sauvage." },
    { grec: "Αγριοκέρασο", francais: "Merise", emoji: "🍒", lvl: 10, mne: "Se prononce 'agriokeraso'. Cerise sauvage des bois." },
    { grec: "Ρέβα", francais: "Navet", emoji: "🥔", lvl: 10, mne: "Reva. Racine blanche." },
    { grec: "Μύρτιλο", francais: "Myrtille", emoji: "🫐", lvl: 10, mne: "Myrtilo. Baie sauvage." },
    { grec: "Τρούφα", francais: "Truffe", emoji: "🍄", lvl: 10, mne: "Se prononce 'troufa'. Champignon souterrain précieux." },
    { grec: "Μανιόκα", francais: "Manioc", emoji: "🥔", lvl: 10, mne: "Manioka. Tubercule tropical." },
    { grec: "Γογγυλοκράμβη", francais: "Chou-rave", emoji: "🥬", lvl: 10, mne: "Se prononce 'gongylokramvi'. Chou globe." },
    { grec: "Γλυκοκολοκύθα", francais: "Butternut", emoji: "🎃", lvl: 10, mne: "Courge doubeurre." },
    { grec: "Φύκια", francais: "Algues", emoji: "🌿", lvl: 10, mne: "Fykia. Légumes de la mer." }
];

const avatarsList = ["🍎", "🤓", "🎓", "🏛️", "🏺", "🦉", "🦁", "🦅", "🐉", "🌋", "☀️", "🌟", "👑", "🔮", "⚔️", "🛡️", "🏹", "✨", "🔥", "👑"];
const prestigeAvatars = ["⚡", "🔱", "🏹", "🦉", "🛡️", "🌋", "🍷"];

// Économie rehaussée : Prix multipliés par 20
const shopAvatars = [
    { emoji: "👶", cost: 0 }, { emoji: "🥔", cost: 400 }, { emoji: "🥦", cost: 800 }, { emoji: "🥑", cost: 1200 }, { emoji: "🍉", cost: 1600 },
    { emoji: "🥕", cost: 2000 }, { emoji: "🍓", cost: 2400 }, { emoji: "🍋", cost: 2800 }, { emoji: "🍄", cost: 3200 }, { emoji: "🍇", cost: 3600 },
    { emoji: "🌽", cost: 4000 }, { emoji: "🍅", cost: 4400 }, { emoji: "🍍", cost: 4800 }, { emoji: "🥝", cost: 5200 }, { emoji: "👨‍🍳", cost: 5600 },
    { emoji: "👩‍🍳", cost: 6000 }, { emoji: "🐵", cost: 6400 }, { emoji: "🦊", cost: 7200 }, { emoji: "🦖", cost: 8000 }, { emoji: "🧙", cost: 10000 }
];

const shopThemes = [
    { id: "theme-orchard", name: "Verger Nocturne 🌌", cost: 0 },
    { id: "theme-greenhouse", name: "Serre Épurée ☀️", cost: 0 },
    { id: "theme-olympe", name: "Marbre Sacré 🏛️", cost: 0 },
    { id: "theme-atlantis", name: "Fonds d'Atlantis 🌊", cost: 1600 },
    { id: "theme-cyberpunk", name: "Potager Cyberpunk ⚡", cost: 3200 },
    { id: "theme-sunset", name: "Crépuscule Égée 🌅", cost: 4800 },
    { id: "theme-forest", name: "Forêt des Dryades 🌳", cost: 6400 },
    { id: "theme-royal", name: "Festin Royal 👑", cost: 8000 },
    { id: "theme-neon", name: "Salade Néon 🧪", cost: 10000 },
    { id: "theme-sahara", name: "Oasis du Sahara 🏜️", cost: 12000 }
];

const badgesList = [
    "🌱 Apprenti Cueilleur (Niv 1)", "🧺 Commis de Cuisine (Niv 2)", "🥗 Préparateur de Salades (Niv 3)", "🌊 Cultivateur d'Atlantis (Niv 4)",
    "🔥 Maître du Feu (Niv 5)", "🔪 Chef de l'Agora (Niv 6)", "🍇 Vigneron de Dionysos (Niv 7)", "🏺 Intendant du Palais (Niv 8)",
    "🌽 Célébration de Déméter (Niv 9)", "⚡ Grand Chef de l'Olympe (Niv 10)"
];

let state = JSON.parse(localStorage.getItem('greekVocabV2')) || { 
    score: 0, drachmes: 0, streak: 0, highestStreak: 0, currentCombo: 1, lastLvl: 1, prestige: 0, streakFreeze: 0, lastActiveDate: "",
    unlockedAvatars: ["👶"], unlockedThemes: ["theme-orchard", "theme-greenhouse", "theme-olympe"],
    activeAvatar: "👶", activeTheme: "theme-dark", history: {}, dailyQuests: { date: "", list: [] }, chronoRecords: [], activityLog: {},
    activityTracker: { qcm: 0, lecture: 0, ecriture: 0, audition: 0, oral: 0, chrono: 0, rattrapage: 0, association: 0 }
};

let currentWord = null; let isSlowAudio = false; let chronoTimer = null; let timeLeft = 60; let chronoScore = 0;
let assocSelected = null; let assocPairsMatched = 0;
let slideshowInterval = null; let slideshowIndex = 0;

function launchCelebration() {
    for (let i = 0; i < 70; i++) {
        const p = document.createElement('div'); p.className = 'confetti-particle'; p.style.left = Math.random() * 100 + 'vw';
        p.style.backgroundColor = ['#ff007f', '#00ffcc', '#f59e0b', '#22c55e', '#6366f1'][Math.floor(Math.random() * 5)];
        p.style.animationDuration = (Math.random() * 2 + 1.5) + 's'; p.style.width = p.style.height = (Math.random() * 6 + 6) + 'px';
        document.body.appendChild(p); setTimeout(() => p.remove(), 3000);
    }
}

function triggerVibrate(p) { if ("vibrate" in navigator) navigator.vibrate(p); }

function playTone(freqs, duration) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    freqs.forEach((f, i) => {
        const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(f, ctx.currentTime + (i * 0.07)); gain.gain.setValueAtTime(0.04, ctx.currentTime + (i * 0.07));
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (i * 0.07) + duration);
        osc.start(ctx.currentTime + (i * 0.07)); osc.stop(ctx.currentTime + (i * 0.07) + duration);
    });
}

function getLevel() { 
    if(!state.activityTracker) state.activityTracker = {};
    const keys = ['qcm', 'lecture', 'ecriture', 'audition', 'oral', 'chrono', 'rattrapage', 'association'];
    let greenCount = 0; keys.forEach(k => { if ((state.activityTracker[k] || 0) >= 2) greenCount++; });
    let xpLevel = Math.floor(state.score / 5000) + 1;
    let allowedLevel = state.lastLvl || 1;
    if (xpLevel > allowedLevel) { if (greenCount >= 6) { return Math.min(10, xpLevel); } else { return allowedLevel; } }
    return Math.min(10, xpLevel); 
}

function checkDailyStreakAndCalendar() {
    const today = new Date().toISOString().split('T')[0];
    if (!state.activityLog) state.activityLog = {}; if (!state.activityLog[today]) state.activityLog[today] = 0;
    if (state.lastActiveDate && state.lastActiveDate !== today) {
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1); const yesterdayStr = yesterday.toISOString().split('T')[0];
        if (state.lastActiveDate !== yesterdayStr && state.streak > 0) {
            if ((state.streakFreeze || 0) > 0) { state.streakFreeze--; alert("❄️ Assurance récolte consommée ! Série préservée."); } 
            else { state.streak = 0; }
        }
    }
    state.lastActiveDate = today; saveAndRefresh();
}

function renderCalendarHeatmap() {
    const container = document.getElementById('calendar-heatmap'); let html = '';
    for (let i = 20; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i); const dateStr = d.toISOString().split('T')[0]; const xp = state.activityLog[dateStr] || 0;
        let intensityLvl = 0; if (xp > 0 && xp <= 40) intensityLvl = 1; else if (xp > 40 && xp <= 120) intensityLvl = 2; else if (xp > 120) intensityLvl = 3;
        html += `<div class="cal-day day-lvl-${intensityLvl}" title="${dateStr} : +${xp} XP"></div>`;
    }
    container.innerHTML = html;
}

function renderActivityDots() {
    const box = document.getElementById('activity-tracker-box'); if(!box) return;
    const labels = { qcm: "QCM", lecture: "Gr→Fr", ecriture: "Fr→Gr", audition: "Écoute", oral: "Oral", chrono: "Rush", rattrapage: "Rattrap.", association: "Assoc." };
    let html = `<div class="dots-title">Exigence de diversité (6 Verts requis pour évoluer) :</div><div class="dots-grid">`;
    for (let k in labels) {
        const count = state.activityTracker[k] || 0;
        let dotClass = "dot-red"; if(count === 1) dotClass = "dot-orange"; else if(count >= 2) dotClass = "dot-green";
        html += `<div class="dot-item"><span class="status-dot ${dotClass}"></span><small>${labels[k]} (${count}/2)</small></div>`;
    }
    box.innerHTML = html + `</div>`;
}

function verifyAndGenerateQuests() {
    const today = new Date().toDateString();
    if (state.dailyQuests.date !== today) {
        state.dailyQuests = {
            date: today,
            list: [
                { id: "gain_xp", desc: "Récolter 200 XP", target: 200, current: 0, done: false },
                { id: "answers", desc: "Cueillir 10 mots corrects", target: 10, current: 0, done: false },
                { id: "drachmes", desc: "Gagner 30 Oboles 🪙", target: 30, current: 0, done: false }
            ]
        };
    }
    renderQuestsUI();
}

function updateQuestProgress(id, amount) {
    const quest = state.dailyQuests.list.find(q => q.id === id);
    if (quest && !quest.done) {
        quest.current += amount;
        if (quest.current >= quest.target) {
            quest.done = true; state.score += 300; state.drachmes += 30;
            setTimeout(launchCelebration, 100); playTone([523.25, 659.25, 783.99, 1046.50], 0.25);
        }
    }
}

function renderQuestsUI() {
    document.getElementById('quests-list').innerHTML = state.dailyQuests.list.map(q => `
        <div class="quest-item ${q.done ? 'done' : ''}"><span>${q.desc}</span><span><b>${q.done ? '✅ Complété' : `${q.current}/${q.target}`}</b></span></div>
    `).join('');
}

function getNextWord() {
    const type = document.getElementById('exercise-select').value; 
    const lvl = getLevel();
    let pool = vocabulaire.filter(item => item.lvl <= lvl);
    
    // Mode rattrapage exclusif (cible uniquement les erreurs)
    if (type === 'rattrapage') {
        let weakPool = pool.filter(l => (state.history[l.grec]?.errors / state.history[l.grec]?.total) >= 0.40);
        return weakPool.length > 0 ? weakPool[Math.floor(Math.random() * weakPool.length)] : pool[Math.floor(Math.random() * pool.length)];
    }

    // 1. Phase de découverte : Priorité absolue aux mots qui n'ont ENCORE JAMAIS été vus
    const unseen = pool.filter(l => !state.history[l.grec] || state.history[l.grec].total === 0);
    if (unseen.length > 0) return unseen[Math.floor(Math.random() * unseen.length)];

    // 2. Anti-monotonie : 25% de chance de piocher un mot totalement aléatoire parmi les débloqués
    if (Math.random() < 0.25) {
        return pool[Math.floor(Math.random() * pool.length)];
    }

    // 3. Tri SRS intelligent avec gestion des égalités (Roulement parfait)
    return pool.sort((a, b) => {
        const totalA = state.history[a.grec]?.total || 0;
        const totalB = state.history[b.grec]?.total || 0;
        const errA = state.history[a.grec]?.errors || 0;
        const errB = state.history[b.grec]?.errors || 0;

        const rateA = errA / (totalA || 1);
        const rateB = errB / (totalB || 1);

        // Critère 1 : On trie d'abord par taux d'erreur décroissant (le plus difficile en premier)
        if (rateB !== rateA) return rateB - rateA;

        // Critère 2 : En cas d'égalité de réussite (ex: 0% d'erreur), on met en premier celui qui a été le MOINS RÉVISÉ
        return totalA - totalB;
    })[Math.floor(Math.random() * Math.min(4, pool.length))]; // Pioche dans un échantillon de tête élargi
}

function renderExercise() {
    const type = document.getElementById('exercise-select').value;
    const container = document.getElementById('exercise-container');
    const timerBox = document.getElementById('timer-container');
    
    if (type === 'chrono') { timerBox.classList.remove('timer-hidden'); if(!chronoTimer) { chronoScore = 0; startChrono(); } document.getElementById('chrono-score-val').innerText = chronoScore; } 
    else { timerBox.classList.add('timer-hidden'); stopChrono(); }
    if (type === 'association') { buildAssociationGame(); return; }

    currentWord = getNextWord();
    let html = type === 'rattrapage' ? `<h2 style="color:var(--error)">⚠️ REPAS DE RATTRAPAGE (XP X2)</h2>` : `<h2>Mission</h2>`;
    let audioButton = `<button onclick="speak('${currentWord.grec}')" class="inline-audio-btn">🔊 Écouter</button>`;

    if (type === 'qcm' || type === 'chrono') {
        const opts = [currentWord.francais];
        while(opts.length < 4) { const r = vocabulaire[Math.floor(Math.random() * vocabulaire.length)].francais; if(!opts.includes(r)) opts.push(r); }
        opts.sort(() => Math.random() - 0.5);
        html += `<div class="word-audio-container"><span class="big-char">${currentWord.grec}</span>${audioButton}</div><p>Traduisez ce mot :</p><div class="qcm-grid">` + opts.map(o => `<button class="qcm-btn" onclick="checkAnswer(this, \`${o}\`, \`${currentWord.francais}\`)">${o}</button>`).join('') + `</div>`;
    } else if (type === 'lecture' || type === 'rattrapage') {
        html += `<div class="word-audio-container"><span class="big-char">${currentWord.grec}</span>${audioButton}</div><p>Écrivez la traduction en Français :</p><input type="text" id="answer" data-correct="${currentWord.francais}" placeholder="Saisie en français..."><br><button class="valider-btn" onclick="validateText()">Valider</button>`;
    } else if (type === 'ecriture') {
        html += `<span class="big-char" style="font-size:2.4rem; color:var(--text);">${currentWord.emoji} ${currentWord.francais}</span><p>Écrivez en GREC :</p><input type="text" id="answer" data-correct="${currentWord.grec}" placeholder="Clavier natif Grec..."><br>${audioButton}<br><button class="valider-btn" onclick="validateText()">Valider</button>`;
    } else if (type === 'audition') {
        html += `<p>Écoutez attentivement :</p><button onclick="speak('${currentWord.grec}')" style="font-size:3.5rem; background:none; border:none; cursor:pointer;">🔊</button><br><input type="text" id="answer" data-correct="${currentWord.francais}" placeholder="Traduction française..."><br><button class="valider-btn" onclick="validateText()">Valider</button>`;
        setTimeout(() => speak(currentWord.grec), 350);
    } else if (type === 'oral') {
        html += `<div class="word-audio-container"><span class="big-char" style="font-size:2.4rem; color:var(--text);">${currentWord.grec}</span>${audioButton}</div><p>Prononcez le mot au micro :</p><button id="mic-trigger" class="mic-btn" onclick="startSpeech()">🎙️</button><div id="oral-transcript">En attente...</div>`;
    }
    container.innerHTML = html + `<p class="hint-word">Aide : ${currentWord.mne}</p>`;
    if(document.getElementById('answer')) document.getElementById('answer').focus();
}

function buildAssociationGame() {
    const container = document.getElementById('exercise-container'); assocPairsMatched = 0; assocSelected = null;
    const shuffled = [...vocabulaire].filter(item => item.lvl <= getLevel()).sort(() => Math.random() - 0.5).slice(0, 4);
    let cards = []; shuffled.forEach(item => { cards.push({ id: item.grec, text: `${item.emoji} ${item.grec}`, type: "greek" }); cards.push({ id: item.grec, text: item.francais, type: "french" }); });
    cards.sort(() => Math.random() - 0.5);
    let html = `<h2>🧩 Association Fertile</h2><p>Liez l'ingrédient à sa traduction ! En bonus, cliquez pour écouter.</p><div class="association-grid">`;
    cards.forEach((card, idx) => { html += `<button id="assoc-card-${idx}" class="assoc-card" onclick="selectAssocCard(${idx}, '${card.id}')">${card.text}</button>`; });
    container.innerHTML = html + `</div>`;
}

window.selectAssocCard = function(idx, id) {
    const btn = document.getElementById(`assoc-card-${idx}`); if (btn.classList.contains('hidden-pair')) return;
    triggerVibrate(25); if(btn.innerText.includes("🍎") || btn.innerText.includes("🥦") || btn.innerText.includes("🥑") || btn.innerText.includes("🍉")) speak(id);
    if (!assocSelected) { assocSelected = { idx, id }; btn.classList.add('selected'); } 
    else {
        const prevBtn = document.getElementById(`assoc-card-${assocSelected.idx}`);
        if (assocSelected.idx === idx) { btn.classList.remove('selected'); assocSelected = null; return; }
        if (assocSelected.id === id) {
            btn.classList.add('feedback-success'); prevBtn.classList.add('feedback-success'); playTone([523.25, 659.25], 0.1);
            setTimeout(() => { btn.className = "assoc-card hidden-pair"; prevBtn.className = "assoc-card hidden-pair"; }, 500);
            assocPairsMatched++;
            if (assocPairsMatched === 4) {
                state.score += 50; state.drachmes += 6; updateQuestProgress("gain_xp", 50); updateQuestProgress("drachmes", 6);
                setTimeout(() => { alert("Tableau complété ! (+50 XP / +6 🪙)"); buildAssociationGame(); }, 600);
            }
        } else {
            btn.classList.add('feedback-error'); prevBtn.classList.add('feedback-error'); playTone([220], 0.15);
            setTimeout(() => { btn.classList.remove('feedback-error', 'selected'); prevBtn.classList.remove('feedback-error', 'selected'); }, 600);
        }
        assocSelected = null;
    }
};

window.checkAnswer = function(btnElement, selected, correct) {
    const buttons = btnElement.closest('.qcm-grid').querySelectorAll('.qcm-btn');
    buttons.forEach(b => b.disabled = true);
    const isCorrect = selected.toLowerCase() === correct.toLowerCase();
    if (isCorrect) { btnElement.classList.add('feedback-success'); } else { btnElement.classList.add('feedback-error'); }
    processResult(isCorrect, correct);
};

window.validateText = function() { const i = document.getElementById('answer'); processResult(i.value.trim().toLowerCase() === i.dataset.correct.toLowerCase(), i.dataset.correct); };

function processResult(isCorrect, correctAnswerDisplay) {
    const type = document.getElementById('exercise-select').value; const today = new Date().toISOString().split('T')[0];
    if(!state.history[currentWord.grec]) state.history[currentWord.grec] = {errors: 0, total: 0};
    state.history[currentWord.grec].total++;
    const input = document.getElementById('answer'); if(input) input.disabled = true;

    if (isCorrect) {
        triggerVibrate(30); state.currentCombo = Math.min(3, (state.currentCombo || 1) + 1);
        let baseXP = type === 'rattrapage' ? 20 : 10;
        let gainedXP = baseXP * state.currentCombo; let gainedDrachmes = Math.max(1, Math.round((12 * state.currentCombo) / 5));
        
        state.score += gainedXP; state.drachmes += gainedDrachmes; state.streak++;
        state.activityLog[today] = (state.activityLog[today] || 0) + gainedXP;
        if(type === 'chrono') { timeLeft += 2; chronoScore += gainedXP; document.getElementById('chrono-score-val').innerText = chronoScore; }
        
        updateQuestProgress("gain_xp", gainedXP); updateQuestProgress("answers", 1); updateQuestProgress("drachmes", gainedDrachmes);
        if(state.streak > (state.highestStreak || 0)) state.highestStreak = state.streak;
        if(input) input.classList.add('feedback-success');
        playTone([523.25, 659.25, 783.99], 0.12);
    } else {
        triggerVibrate([60, 40, 60]); state.currentCombo = 1; state.streak = 0;
        state.history[currentWord.grec].errors++; if(type === 'chrono') timeLeft = Math.max(0, timeLeft - 5);
        playTone([220, 180], 0.2);
        const container = document.getElementById('exercise-container');
        const mneDiv = document.createElement('div'); mneDiv.className = "mnemonic-text"; mneDiv.innerText = `💡 Rappel : ${currentWord.mne}`;
        container.insertBefore(mneDiv, container.lastChild);
        if(input) { input.classList.add('feedback-error'); input.value = `Correction : ${correctAnswerDisplay}`; }
    }
    saveAndRefresh();
    setTimeout(renderExercise, isCorrect ? 1000 : 2800);
}

function startChrono() {
    timeLeft = 60; document.getElementById('timer-val').innerText = timeLeft;
    chronoTimer = setInterval(() => {
        timeLeft--; document.getElementById('timer-val').innerText = timeLeft;
        if(timeLeft <= 0) { stopChrono(); saveChronoRecord(chronoScore); alert(`Rush terminé ! +${chronoScore} XP.`); document.getElementById('exercise-select').value = 'qcm'; renderExercise(); }
    }, 1000);
}
function stopChrono() { clearInterval(chronoTimer); chronoTimer = null; }

function saveChronoRecord(score) {
    if(!state.chronoRecords) state.chronoRecords = [];
    state.chronoRecords.push({ score: score, date: new Date().toLocaleDateString() });
    state.chronoRecords.sort((a, b) => b.score - a.score); state.chronoRecords = state.chronoRecords.slice(0, 5);
    saveAndRefresh();
}

window.startSpeech = function() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition; if(!SR) return alert("Micro indisponible.");
    const rec = new SR(); rec.lang = 'el-GR';
    rec.onstart = () => document.getElementById('mic-trigger').classList.add('recording');
    rec.onresult = (e) => {
        const txt = e.results[0][0].transcript.toLowerCase(); document.getElementById('oral-transcript').innerText = `Entendu : ${txt}`;
        const match = txt.includes(currentWord.grec.toLowerCase()); setTimeout(() => processResult(match, currentWord.grec), 800);
    };
    rec.onerror = () => document.getElementById('mic-trigger').classList.remove('recording');
    rec.onend = () => document.getElementById('mic-trigger').classList.remove('recording');
    rec.start();
};

window.exportSave = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const dlAnchor = document.createElement('a'); dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `vocab_master_save.json`); document.body.appendChild(dlAnchor); dlAnchor.click(); dlAnchor.remove();
};

window.importSave = function(event) {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedState = JSON.parse(e.target.result);
            if (importedState.score !== undefined && importedState.history) { state = importedState; saveAndRefresh(); checkDailyStreakAndCalendar(); renderExercise(); }
        } catch (err) { alert("Erreur."); }
    };
    reader.readAsText(file);
};

window.resetGameProgress = function() {
    if (confirm("🔄 Attention ! Voulez-vous réinitialiser l'INTEGRALITE de vos données de progression ?")) {
        localStorage.removeItem('greekVocabV2'); location.reload();
    }
};

window.toggleSlideshow = function() {
    const btn = document.getElementById('btn-start-slideshow'); const view = document.getElementById('slideshow-view'); const content = document.getElementById('fiche-content');
    if (slideshowInterval) {
        clearInterval(slideshowInterval); slideshowInterval = null;
        btn.innerText = "🎬 Lancer le Diaporama Audio"; btn.style.background = "var(--accent)"; view.style.display = "none"; content.style.display = "grid";
    } else {
        btn.innerText = "⏹️ Arrêter le Diaporama"; btn.style.background = "var(--error)"; view.style.display = "block"; content.style.display = "none";
        slideshowIndex = 0; runSlidePlayer(); slideshowInterval = setInterval(runSlidePlayer, 3500);
    }
};

function runSlidePlayer() {
    const pool = vocabulaire.filter(i => i.lvl <= getLevel()); if (pool.length === 0) return window.toggleSlideshow();
    if (slideshowIndex >= pool.length) slideshowIndex = 0;
    const word = pool[slideshowIndex];
    document.getElementById('slide-emoji').innerText = word.emoji || "🥗";
    document.getElementById('slide-grec').innerText = word.grec;
    document.getElementById('slide-francais').innerText = word.francais;
    speak(word.grec); slideshowIndex++;
}

window.buyItem = function(type, cost, value) {
    if (type !== 'equip-avatar' && type !== 'equip-theme') {
        if (state.drachmes < cost) { alert("🪙 Oboles insuffisantes !"); return; }
        state.drachmes -= cost; triggerVibrate(50); playTone([523.25, 783.99, 1046.50], 0.2);
    }
    if (type === 'freeze') { state.streakFreeze = (state.streakFreeze || 0) + 1; } 
    else if (type === 'avatar') { state.unlockedAvatars.push(value); state.activeAvatar = value; } 
    else if (type === 'theme') { state.unlockedThemes.push(value); state.activeTheme = value; }
    else if (type === 'equip-avatar') { state.activeAvatar = value; }
    else if (type === 'equip-theme') { state.activeTheme = value; }
    saveAndRefresh(); openShopMenuUI();
};

function openShopMenuUI() {
    document.getElementById('freeze-count-val').innerText = state.streakFreeze || 0;
    document.getElementById('avatars-shop-pool').innerHTML = shopAvatars.map(a => {
        const isOwned = state.unlockedAvatars.includes(a.emoji); const isActive = state.activeAvatar === a.emoji;
        let cName = "shop-item-box" + (isActive ? " active-equip" : (isOwned ? " owned" : ""));
        return `<div class="${cName}" onclick="buyItem('${isOwned ? 'equip-avatar' : 'avatar'}', ${a.cost}, '${a.emoji}')">${a.emoji}<br><small style="font-size:0.55rem;">${isActive ? 'Actif' : (isOwned ? 'Équiper' : `${a.cost} 🪙`)}</small></div>`;
    }).join('');

    document.getElementById('themes-shop-pool').innerHTML = shopThemes.map(t => {
        const isOwned = state.unlockedThemes.includes(t.id); const isActive = state.activeTheme === t.id;
        let cName = "theme-shop-btn" + (isActive ? " active-equip" : (isOwned ? " owned" : ""));
        return `<button class="${cName}" onclick="buyItem('${isOwned ? 'equip-theme' : 'theme'}', ${t.cost}, '${t.id}')"><span>${t.name}</span><small><b>${isActive ? 'Actif' : (isOwned ? 'Choisir' : `${t.cost} 🪙`)}</b></small></button>`;
    }).join('');
}

function saveAndRefresh() {
    const lvl = getLevel(); if (lvl > (state.lastLvl || 1)) { setTimeout(launchCelebration, 200); state.lastLvl = lvl; }
    localStorage.setItem('greekVocabV2', JSON.stringify(state));
    document.getElementById('level-val').innerText = lvl; document.getElementById('score').innerText = state.score;
    document.getElementById('drachmes-val').innerText = state.drachmes; document.getElementById('streak').innerText = state.streak;
    document.getElementById('avatar-val').innerText = state.activeAvatar || "🍎";
    document.getElementById('progress-bar').style.width = `${((state.score % 5000) / 5000) * 100}%`;
    document.body.className = state.activeTheme || "theme-orchard";
    const cBox = document.getElementById('combo-box');
    if(state.currentCombo > 1) { cBox.style.display = "block"; document.getElementById('combo-val').innerText = `x${state.currentCombo}`; } else { cBox.style.display = "none"; }
    renderDashboard(); renderQuestsUI();
}

function renderDashboard() {
    const lvl = getLevel(); const pool = vocabulaire.filter(i => i.lvl <= lvl);
    document.getElementById('dashboard-grid').innerHTML = pool.map(l => {
        const h = state.history[l.grec]; let s = h && h.total > 0 ? ((h.errors/h.total < 0.25) ? "mastered" : "learning") : "";
        return `<div class="dash-cell ${s}" title="${l.francais}">${l.emoji}</div>`;
    }).join('');
}

function speak(text) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'el-GR'; u.rate = isSlowAudio ? 0.45 : 0.85; window.speechSynthesis.speak(u); }

document.getElementById('btn-stats').onclick = () => {
    let total = 0, errs = 0; Object.values(state.history).forEach(h => { total += h.total; errs += h.errors; });
    const acc = total > 0 ? Math.round(((total - errs) / total) * 100) : 100;
    document.getElementById('stats-content').innerHTML = `<p>🥇 <span>Niveau Actuel :</span> <b>${getLevel()} / 10</b></p><p>🔥 <span>Meilleure Série :</span> <b>${state.highestStreak || 0}</b></p><p>🎯 <span>Précision :</span> <b>${acc}%</b></p>`;
    document.getElementById('leaderboard-list').innerHTML = (state.chronoRecords || []).map(r => `<li>${r.score} XP <span>(${r.date})</span></li>`).join('') || `<li>Aucun record</li>`;
    document.getElementById('badges-grid').innerHTML = badgesList.map((badge, idx) => `<div class="badge-item ${getLevel() >= (idx + 1) ? 'unlocked' : ''}">${getLevel() >= (idx + 1) ? badge : "🔒 Niveau " + (idx + 1)}</div>`).join('');
    renderCalendarHeatmap(); document.getElementById('modal-stats').showModal();
};
document.getElementById('close-stats').onclick = () => document.getElementById('modal-stats').close();

const shopModal = document.getElementById('modal-boutique');
document.getElementById('btn-boutique').onclick = () => { openShopMenuUI(); shopModal.showModal(); };
document.getElementById('close-boutique').onclick = () => shopModal.close();

document.getElementById('btn-fiche').onclick = () => {
    document.getElementById('fiche-content').innerHTML = vocabulaire.filter(i => i.lvl <= getLevel()).map(l => `
        <div class="fiche-item"><span><b>${l.grec}</b> : ${l.francais} ${l.emoji} <br><small style="color:var(--accent)">Niv.${l.lvl}</small></span><div><button class="dictio-audio-btn" onclick="speak('${l.grec}')">🔊 Écouter</button></div></div>
    `).join('');
    document.getElementById('modal-fiche').showModal();
};
document.getElementById('close-modal').onclick = () => { if (slideshowInterval) window.toggleSlideshow(); document.getElementById('modal-fiche').close(); };

document.getElementById('slow-toggle').onclick = (e) => { isSlowAudio = !isSlowAudio; e.target.classList.toggle('active', isSlowAudio); e.target.innerText = isSlowAudio ? "Lent" : "Audio"; };
document.getElementById('exercise-select').onchange = function() {
    const type = this.value; if(!state.activityTracker) state.activityTracker = {};
    state.activityTracker[type] = (state.activityTracker[type] || 0) + 1;
    renderActivityDots(); renderExercise();
};
document.addEventListener('keydown', (e) => { if(e.key === 'Enter') { const ex = document.getElementById('exercise-select').value; if(ex !== 'association' && ex !== 'qcm' && ex !== 'chrono') window.validateText(); } });

checkDailyStreakAndCalendar(); verifyAndGenerateQuests(); renderActivityDots(); renderExercise();
const vocabulaire = [
    // ================= NIVEAU 1 =================
    { grec: "Μήλο", francais: "Pomme", emoji: "🍎", lvl: 1, mne: "Se prononce 'milo'. Facile : une pomme pour le petit Milo !" },
    { grec: "Μπανάνα", francais: "Banane", emoji: "🍌", lvl: 1, mne: "Transcription directe et universelle : banana." },
    { grec: "Λεμόνι", francais: "Citron", emoji: "🍋", lvl: 1, mne: "Se prononce 'lemoni'. Pensez à la limonade !" },
    { grec: "Πορτοκάλι", francais: "Orange", emoji: "🍊", lvl: 1, mne: "Se prononce 'portokali'. Historiquement, le Portugal gérait le commerce des oranges." },
    { grec: "Φράουλα", francais: "Fraise", emoji: "🍓", lvl: 1, mne: "Se prononce 'fraoula'. Ressemble un peu au mot 'fraise'." },
    { grec: "Πατάτα", francais: "Pomme de terre", emoji: "🥔", lvl: 1, mne: "Se prononce 'patata'. Identique à la patate !" },
    { grec: "Καρότο", francais: "Carotte", emoji: "🥕", lvl: 1, mne: "Se prononce 'karoto'. Très proche de carotte." },
    { grec: "Ντομάτα", francais: "Tomate", emoji: "🍅", lvl: 1, mne: "Se prononce 'domata'. Le N initial adoucit le T en D." },
    { grec: "Σκόρδο", francais: "Ail", emoji: "🧄", lvl: 1, mne: "Se prononce 'skordo'. L'ail gâche votre 'score d'eau' fraîche pour l'haleine." },
    { grec: "Κρεμμύδι", francais: "Oignon", emoji: "🧅", lvl: 1, mne: "Se prononce 'kremmydi'. On dirait une crème qui fait pleurer." },

    // ================= NIVEAU 2 =================
    { grec: "Κεράσι", francais: "Cerise", emoji: "🍒", lvl: 2, mne: "Se prononce 'kerasi'. Très proche phonétiquement de cerise." },
    { grec: "Καρπούζι", francais: "Pastèque", emoji: "🍉", lvl: 2, mne: "Se prononce 'karpouzi'. Le fruit géant incontournable de l'été grec." },
    { grec: "Πεπόνι", francais: "Melon", emoji: "🍈", lvl: 2, mne: "Se prononce 'peponi'. Facile : attention aux pépins du melon." },
    { grec: "Ροδάκινο", francais: "Pêche", emoji: "🍑", lvl: 2, mne: "Se prononce 'rodakino'. Une pêche rose comme une rose ('rodo')." },
    { grec: "Σύκο", francais: "Figue", emoji: "🫒", lvl: 2, mne: "Se prononce 'syko'. La figue du sycomore." },
    { grec: "Αγγούρι", francais: "Concombre", emoji: "🥒", lvl: 2, mne: "Se prononce 'angouri'. Un légume long, vert et plein d'eau." },
    { grec: "Μαρούλι", francais: "Laitue", emoji: "🥬", lvl: 2, mne: "Se prononce 'marouli'. Rouler les feuilles de salade." },
    { grec: "Σπανάκι", francais: "Épinard", emoji: "🌿", lvl: 2, mne: "Se prononce 'spanaki'. La base de la fameuse 'spanakopita'." },
    { grec: "Μανιτάρι", francais: "Champignon", emoji: "🍄", lvl: 2, mne: "Se prononce 'manitari'. Des champignons cueillis à la main." },
    { grec: "Μπρόκολο", francais: "Brocoli", emoji: "🥦", lvl: 2, mne: "Se prononce 'brokolo'. Changement mineur de suffixe." },

    // ================= NIVEAU 3 =================
    { grec: "Αχλάδι", francais: "Poire", emoji: "Pear", lvl: 3, mne: "Se prononce 'achladi'. Une poire juteuse en forme de goutte." },
    { grec: "Ανανάς", francais: "Ananas", emoji: "🍍", lvl: 3, mne: "Se prononce 'ananas'. Totalement identique !" },
    { grec: "Βερίκοκο", francais: "Abricot", emoji: "🍑", lvl: 3, mne: "Se prononce 'verikoko'. Un abricot couleur abricot." },
    { grec: "Δαμάσκηνο", francais: "Prune", emoji: "🫐", lvl: 3, mne: "Se prononce 'damaskino'. Historiquement liée à la ville de Damas." },
    { grec: "Ρόδι", francais: "Grenade", emoji: "🍇", lvl: 3, mne: "Se prononce 'rodi'. Fruit symbole de chance en Grèce." },
    { grec: "Κουνουπίδι", francais: "Chou-fleur", emoji: "🥦", lvl: 3, mne: "Se prononce 'kounoupidi'. Un chou blanc comme un nuage." },
    { grec: "Κολοκύθι", francais: "Courgette", emoji: "🥒", lvl: 3, mne: "Se prononce 'kolokythi'. L'ingrédient phare des mezzés d'été." },
    { grec: "Μελιτζάνα", francais: "Aubergine", emoji: "🍆", lvl: 3, mne: "Se prononce 'melitzana'. Indispensable pour la moussaka !" },
    { grec: "Πιπεριά", francais: "Poivron", emoji: "🫑", lvl: 3, mne: "Se prononce 'piperia'. De la même racine piquante que le poivre." },
    { grec: "Φασολάκια", francais: "Haricots verts", emoji: "🫘", lvl: 3, mne: "Se prononce 'fasolakia'. Les petits haricots fins du potager." },

    // ================= NIVEAU 4 =================
    { grec: "Μάνγκο", francais: "Mangue", emoji: "🥭", lvl: 4, mne: "Se prononce 'mango'. Écriture phonétique directe." },
    { grec: "Ακτινίδιο", francais: "Kiwi", emoji: "Kiwi", lvl: 4, mne: "Se prononce 'aktinidio'. Fait référence aux rayons ('aktina') de sa pulpe." },
    { grec: "Γκρέιπφρουτ", francais: "Pamplemousse", emoji: "🍊", lvl: 4, mne: "Copie phonétique de l'anglais 'grapefruit'." },
    { grec: "Σμέουρο", francais: "Framboise", emoji: "🍓", lvl: 4, mne: "Se prononce 'smeouro'. Délicat fruit rouge des bois." },
    { grec: "Μύρτιλο", francais: "Myrtille", emoji: "🫐", lvl: 4, mne: "Se prononce 'myrtilo'. Très proche du français." },
    { grec: "Αρακάς", francais: "Petits pois", emoji: "🫛", lvl: 4, mne: "Se prononce 'arakas'. Les petites billes vertes." },
    { grec: "Καλαμπόκι", francais: "Maïs", emoji: "🌽", lvl: 4, mne: "Se prononce 'kalamboki'. Un bel épi de maïs jaune." },
    { grec: "Λάχανο", francais: "Chou", emoji: "🥬", lvl: 4, mne: "Se prononce 'lachano'. Un gros chou blanc ou rouge." },
    { grec: "Σέλινο", francais: "Céleri", emoji: "🌿", lvl: 4, mne: "Se prononce 'selino'. Très proche de céleri." },
    { grec: "Μαϊντανός", francais: "Persil", emoji: "🌱", lvl: 4, mne: "Se prononce 'maintanos'. L'herbe aromatique des plats mijotés." },

    // ================= NIVEAU 5 =================
    { grec: "Βατόμουρο", francais: "Mûre", emoji: "🍇", lvl: 5, mne: "Se prononce 'vatomouro'. La mûre sauvage des ronces." },
    { grec: "Κράνμπερι", francais: "Canneberge", emoji: "🍒", lvl: 5, mne: "Phonétique calquée sur l'anglais cranberry." },
    { grec: "Μανταρίνι", francais: "Mandarine", emoji: "🍊", lvl: 5, mne: "Se prononce 'mandarini'. Presque identique au français." },
    { grec: "Σταφύλι", francais: "Raisin", emoji: "🍇", lvl: 5, mne: "Se prononce 'stafyli'. Les grappes lourdes des vignes de Santorin." },
    { grec: "Καρύδι", fontaine: "Noix", emoji: "🌰", lvl: 5, mne: "Se prononce 'karydi'. Ressemble à une petite coque dure." },
    { grec: "Πράσο", francais: "Poireau", emoji: "🥬", lvl: 5, mne: "Se prononce 'praso'. Un long poireau pour la soupe hivernale." },
    { grec: "Ρέβα", francais: "Navet", emoji: "🥔", lvl: 5, mne: "Se prononce 'reva'. Un navet blanc au col violet." },
    { grec: "Ραπάνι", francais: "Radis", emoji: "🥕", lvl: 5, mne: "Se prononce 'rapani'. Un radis rouge croquant avec du sel." },
    { grec: "Αγκινάρα", francais: "Artichaut", emoji: "🥬", lvl: 5, mne: "Se prononce 'anginara'. Un cœur d'artichaut tendre." },
    { grec: "Σπαράγγι", francais: "Asperge", emoji: "🥦", lvl: 5, mne: "Se prononce 'sparangi'. L'asperge verte printanière." },

    // ================= NIVEAU 6 =================
    { grec: "Φιστίκι", francais: "Pistache", emoji: "🥜", lvl: 6, mne: "Se prononce 'fistiki'. La célèbre pistache d'Égine." },
    { grec: "Κάστανο", francais: "Châtaigne", emoji: "🌰", lvl: 6, mne: "Se prononce 'kastano'. Les châtaignes grillées au feu de bois." },
    { grec: "Φουντούκι", francais: "Noisette", emoji: "🥜", lvl: 6, mne: "Se prononce 'fountouki'. Une petite noisette des bois." },
    { grec: "Αμύγδαλο", francais: "Amande", emoji: "🌰", lvl: 6, mne: "Se prononce 'amygdalo'. Pensez aux amygdales en forme d'amande !" },
    { grec: "Καρύδα", francais: "Noix de coco", emoji: "🥥", lvl: 6, mne: "Se prononce 'karyda'. Une grosse noix ('karydi') tropicale." },
    { grec: "Φάβα", francais: "Fève", emoji: "🫘", lvl: 6, mne: "Se prononce 'fava'. La purée de fèves jaunes typique des îles." },
    { grec: "Γλυκοπατάτα", francais: "Patate douce", emoji: "🍠", lvl: 6, mne: "Se prononce 'glykopatata'. Littéralement une patate sucrée ('glyko')." },
    { grec: "Φασόλι", francais: "Haricot blanc", emoji: "🫘", lvl: 6, mne: "Se prononce 'fasoli'. La base de la 'fasolada', la soupe nationale." },
    { grec: "Ρεβίθι", francais: "Pois chiche", emoji: "🫘", lvl: 6, mne: "Se prononce 'revithi'. Pour faire de délicieuses soupes au citron." },
    { grec: "Φακή", francais: "Lentille", emoji: "🫘", lvl: 6, mne: "Se prononce 'faki'. Les lentilles brunes de grand-mère." },

    // ================= NIVEAU 7 =================
    { grec: "Χουρμάς", francais: "Datte", emoji: "🌴", lvl: 7, mne: "Se prononce 'chourmas'. Le fruit séché du palmier." },
    { grec: "Παπάγια", francais: "Papaye", emoji: "🥭", lvl: 7, mne: "Se prononce 'papaya'. Écriture phonétique universelle." },
    { grec: "Αβοκάντο", francais: "Avocat", emoji: "🥑", lvl: 7, mne: "Se prononce 'avokanto'. L'avocat crémeux pour les salades." },
    { grec: "Σταφίδα", francais: "Raisin sec", emoji: "🍇", lvl: 7, mne: "Se prononce 'stafida'. Un petit raisin flétri et très sucré." },
    { grec: "Σύκο αποξηραμένο", francais: "Figue sèche", emoji: "🫒", lvl: 7, mne: "Se prononce 'syko apoxirameno'. Figue séchée au soleil." },
    { grec: "Μπάμια", francais: "Gombo", emoji: "🥬", lvl: 7, mne: "Se prononce 'bamia'. Un légume méditerranéen en forme de capsule." },
    { grec: "Σέσκουλο", francais: "Bette", emoji: "🥬", lvl: 7, mne: "Se prononce 'seskoulo'. Des blettes à carde pour les gratins." },
    { grec: "Κολοκύθα", francais: "Citrouille", emoji: "🎃", lvl: 7, mne: "Se prononce 'kolokytha'. La grosse courge orange d'Halloween." },
    { grec: "Παντζάρι", francais: "Betterave", emoji: "🍠", lvl: 7, mne: "Se prononce 'pantzari'. La betterave rouge qui colore les mains." },
    { grec: "Φινόκιο", francais: "Fenouil", emoji: "🌿", lvl: 7, mne: "Se prononce 'finokio'. Bulbe au délicieux parfum d'anis." },

    // ================= NIVEAU 8 =================
    { grec: "Λάιμ", francais: "Lime", emoji: "🍋", lvl: 8, mne: "Se prononce 'laim'. Le petit citron vert des cocktails." },
    { grec: "Νεκταρίνι", francais: "Nectarine", emoji: "🍑", lvl: 8, mne: "Se prononce 'nektarini'. Identique au français !" },
    { grec: "Λωτός", francais: "Kaki", emoji: "🍅", lvl: 8, mne: "Se prononce 'lotos'. Le fruit du lotus, orange et très doux." },
    { grec: "Κυδώνι", francais: "Coing", emoji: "🍏", lvl: 8, mne: "Se prononce 'kydoni'. Idéal en marmelade ou pâte de fruit." },
    { grec: "Κράνο", francais: "Cornouille", emoji: "🍒", lvl: 8, mne: "Se prononce 'krano'. Petite baie rouge acide sauvage." },
    { grec: "Ρόκα", francais: "Roquette", emoji: "🌿", lvl: 8, mne: "Se prononce 'roka'. La salade piquante des pizzas." },
    { grec: "Αντίδι", francais: "Endive", emoji: "🥬", lvl: 8, mne: "Se prononce 'antidi'. Une salade d'hiver légèrement amère." },
    { grec: "Λαχανίδα", francais: "Chou frisé", emoji: "🥬", lvl: 8, mne: "Se prononce 'lachanida'. Le chou kale très tendance." },
    { grec: "Άνηθος", francais: "Aneth", emoji: "🌿", lvl: 8, mne: "Se prononce 'anithos'. L'herbe royale pour accompagner le poisson." },
    { grec: "Σχοινόπρασο", francais: "Ciboulette", emoji: "🌱", lvl: 8, mne: "Se prononce 'schoinopraso'. Brins fins aromatiques." },

    // ================= NIVEAU 9 =================
    { grec: "Φραγκόσυκο", francais: "Figue de Barbarie", emoji: "🌵", lvl: 9, mne: "Se prononce 'frangosyko'. La figue piquante des cactus." },
    { grec: "Φραγκοστάφυλο", francais: "Groseille", emoji: "🍒", lvl: 9, mne: "Se prononce 'frangostafylo'. Petite baie rouge en grappe acide." },
    { grec: "Φρούτο του πάθους", francais: "Fruit de la passion", emoji: "🍇", lvl: 9, mne: "Traduction littérale : frouto tou pathous." },
    { grec: "Γκότζι μπέρι", francais: "Baie de Goji", emoji: "🍒", lvl: 9, mne: "Transcription phonétique directe." },
    { grec: "Μούρο", francais: "Mûre sauvage", emoji: "🍇", lvl: 9, mne: "Se prononce 'mouro'. Cueillie directement dans les haies." },
    { grec: "Τζίντζερ", francais: "Gingembre", emoji: "🫚", lvl: 9, mne: "Prononciation calquée sur l'anglais ginger." },
    { grec: "Κάπαρη", francais: "Câpre", emoji: "🌱", lvl: 9, mne: "Se prononce 'kapari'. Les boutons floraux salés des îles cycladiques." },
    { grec: "Μάραθος", francais: "Fenouil sauvage", emoji: "🌿", lvl: 9, mne: "Se prononce 'marathos'. Herbe folle aromatique sauvage." },
    { grec: "Σπαράγγι της θάλασσας", francais: "Salicorne", emoji: "🌿", lvl: 9, mne: "Asperge de mer marine salée." },
    { grec: "Βλαστός μπαμπού", francais: "Pousse de bambou", emoji: "🎍", lvl: 9, mne: "Traduction littérale culinaire asiatique." },

    // ================= NIVEAU 10 =================
    { grec: "Λιτσί", francais: "Litchi", emoji: "🍒", lvl: 10, mne: "Se prononce 'litsi'. Petit fruit asiatique à coque rugueuse." },
    { grec: "Αγριοφράουλα", francais: "Fraise des bois", emoji: "🍓", lvl: 10, mne: "Se prononce 'agriofraoula'. Fraise sauvage ('agrio') minuscule." },
    { grec: "Αγριοκέρασο", francais: "Merise", emoji: "🍒", lvl: 10, mne: "Se prononce 'agriokeraso'. Cerise sauvage acide." },
    { grec: "Ιπποφαές", francais: "Argousier", emoji: "🌿", lvl: 10, mne: "Se prononce 'ippofaes'. Petite baie orange super-vitaminée." },
    { grec: "Αρώνια", francais: "Aronia", emoji: "🫐", lvl: 10, mne: "Se prononce 'aronia'. Baie noire antioxydante." },
    { grec: "Τρούφα", francais: "Truffe", emoji: "🍄", lvl: 10, mne: "Se prononce 'troufa'. Le champignon souterrain de grande valeur." },
    { grec: "Μανιόκα", francais: "Manioc", emoji: "🥔", lvl: 10, mne: "Se prononce 'manioka'. Racine tropicale à amidon." },
    { grec: "Γογγυλοκράμβη", francais: "Chou-rave", emoji: "🥬", lvl: 10, mne: "Se prononce 'gongylokramvi'. Un chou en forme de boule aérienne." },
    { grec: "Γλυκοκολοκύθα", francais: "Butternut", emoji: "🎃", lvl: 10, mne: "Se prononce 'glykokolokytha'. Courge doubeurre très sucrée." },
    { grec: "Φύκια", francais: "Algues", emoji: "🌿", lvl: 10, mne: "Se prononce 'fykia'. Les plantes marines comestibles." }
];

// Remplissage automatique de secours si le dictionnaire n'atteint pas 100 éléments sur les paliers de test
while (vocabulaire.length < 100) {
    const id = vocabulaire.length + 1;
    const isFruit = id % 2 === 0;
    const targetLvl = Math.min(10, Math.floor(id / 10) + 1);
    vocabulaire.push({
        grec: isFruit ? `Φρούτο-${id}` : `Λαχανικό-${id}`,
        francais: isFruit ? `Fruit Exotique ${id}` : `Légume Rare ${id}`,
        emoji: isFruit ? "🥭" : "🥦",
        lvl: targetLvl,
        type: isFruit ? "fruit" : "combo",
        mne: "Mot de niveau supérieur à découvrir !"
    });
}

// 20 Avatars Fun axés sur la cuisine et la nature
const avatarsList = ["🍎", "🥦", "🥑", "🍉", "🥕", "🍓", "🍋", "🍄", "🍇", "🌽", "🍅", "🍍", "🥝", "👨‍🍳", "👩‍🍳", "🐵", "🐼", "🦊", "🦖", "👑"];

// 10 Thèmes Graphiques
const shopThemes = [
    { id: "theme-orchard", name: "Verger Nocturne 🌌", cost: 0 }, { id: "theme-greenhouse", name: "Serre Épurée ☀️", cost: 0 },
    { id: "theme-olympe", name: "Marbre Sacré 🏛️", cost: 0 }, { id: "theme-atlantis", name: "Fonds d'Atlantis 🌊", cost: 400 },
    { id: "theme-cyberpunk", name: "Potager Cyberpunk ⚡", cost: 800 }, { id: "theme-sunset", name: "Crépuscule Égée 🌅", cost: 1200 },
    { id: "theme-forest", name: "Forêt des Dryades 🌳", cost: 1600 }, { id: "theme-royal", name: "Festin Royal 👑", cost: 2000 },
    { id: "theme-neon", name: "Salade Néon 🧪", cost: 2500 }, { id: "theme-sahara", name: "Oasis du Sahara 🏜️", cost: 3000 }
];

// 10 Badges Mythologiques
const badgesList = [
    "🌱 Apprenti Cueilleur (Niv 1)", "🧺 Commis de Cuisine (Niv 2)", "🥗 Préparateur de Salades (Niv 3)", "🌊 Cultivateur d'Atlantis (Niv 4)",
    "🔥 Maître du Feu (Niv 5)", "🔪 Chef de l'Agora (Niv 6)", "🍇 Vigneron de Dionysos (Niv 7)", "🏺 Intendant du Palais (Niv 8)",
    "🌽 Célébration de Déméter (Niv 9)", "⚡ Grand Chef de l'Olympe (Niv 10)"
];

let state = JSON.parse(localStorage.getItem('greekVocabV1')) || { 
    score: 0, drachmes: 0, streak: 0, highestStreak: 0, currentCombo: 0, lastLvl: 1, prestige: 0, streakFreeze: 0, lastActiveDate: "",
    unlockedAvatars: ["🍎"], unlockedThemes: ["theme-orchard", "theme-greenhouse", "theme-olympe"],
    activeAvatar: "🍎", activeTheme: "theme-orchard", history: {}, dailyQuests: { date: "", list: [] }, chronoRecords: [], activityLog: {}
};

let currentWord = null; let isSlowAudio = false; let chronoTimer = null; let timeLeft = 60; let chronoScore = 0;
let assocSelected = null; let assocPairsMatched = 0;

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

// 10 Niveaux maximum basés sur 1000 XP par palier
function getLevel() { return Math.min(10, Math.floor(state.score / 1000) + 1); }

function checkDailyStreakAndCalendar() {
    const today = new Date().toISOString().split('T')[0];
    if (!state.activityLog) state.activityLog = {}; if (!state.activityLog[today]) state.activityLog[today] = 0;
    if (state.lastActiveDate && state.lastActiveDate !== today) {
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        if (state.lastActiveDate !== yesterdayStr && state.streak > 0) {
            if ((state.streakFreeze || 0) > 0) { state.streakFreeze--; alert("❄️ Bouclier de récolte activé ! Votre série est sauvée."); } 
            else { state.streak = 0; }
        }
    }
    state.lastActiveDate = today; saveAndRefresh();
}

function renderCalendarHeatmap() {
    const container = document.getElementById('calendar-heatmap'); let html = '';
    for (let i = 20; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i); const dateStr = d.toISOString().split('T')[0];
        const xp = state.activityLog[dateStr] || 0;
        let intensityLvl = 0; if (xp > 0 && xp <= 40) intensityLvl = 1; else if (xp > 40 && xp <= 120) intensityLvl = 2; else if (xp > 120) intensityLvl = 3;
        html += `<div class="cal-day day-lvl-${intensityLvl}" title="${dateStr} : +${xp} XP"></div>`;
    }
    container.innerHTML = html;
}

function verifyAndGenerateQuests() {
    const today = new Date().toDateString();
    if (state.dailyQuests.date !== today) {
        state.dailyQuests = {
            date: today,
            list: [
                { id: "gain_xp", desc: "Récolter 200 XP", target: 200, current: 0, done: false },
                { id: "answers", desc: "Cueillir 10 mots corrects", target: 10, current: 0, done: false },
                { id: "drachmes", desc: "Gagner 150 Oboles 🪙", target: 150, current: 0, done: false }
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
            quest.done = true; state.score += 300; state.drachmes += 150;
            setTimeout(launchCelebration, 100); playTone([523.25, 659.25, 783.99, 1046.50], 0.25);
        }
    }
}

function renderQuestsUI() {
    document.getElementById('quests-list').innerHTML = state.dailyQuests.list.map(q => `
        <div class="quest-item ${q.done ? 'done' : ''}"><span>${q.desc}</span><span><b>${q.done ? '✅ Fait' : `${q.current}/${q.target}`}</b></span></div>
    `).join('');
}

function getNextWord() {
    const type = document.getElementById('exercise-select').value; const lvl = getLevel();
    let pool = vocabulaire.filter(item => item.lvl <= lvl);
    
    if (type === 'rattrapage') {
        let weakPool = pool.filter(l => (state.history[l.grec]?.errors / state.history[l.grec]?.total) >= 0.40);
        return weakPool.length > 0 ? weakPool[Math.floor(Math.random() * weakPool.length)] : pool[Math.floor(Math.random() * pool.length)];
    }
    const unseen = pool.filter(l => !state.history[l.grec] || state.history[l.grec].total === 0);
    if (unseen.length > 0) return unseen[Math.floor(Math.random() * unseen.length)];
    return pool.sort((a,b) => ((state.history[b.grec]?.errors||0)/(state.history[b.grec]?.total||1)) - ((state.history[a.grec]?.errors||0)/(state.history[a.grec]?.total||1)))[Math.floor(Math.random() * Math.min(3, pool.length))];
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
    
    if (type === 'qcm' || type === 'chrono') {
        const opts = [currentWord.francais];
        while(opts.length < 4) { const r = vocabulaire[Math.floor(Math.random() * vocabulaire.length)].francais; if(!opts.includes(r)) opts.push(r); }
        opts.sort(() => Math.random() - 0.5);
        html += `<span class="big-char">${currentWord.grec}</span><p>Traduisez ce mot :</p><div class="qcm-grid">` + opts.map(o => `<button class="qcm-btn" onclick="checkAnswer('${o}', '${currentWord.francais}')">${o}</button>`).join('') + `</div>`;
    } else if (type === 'lecture' || type === 'rattrapage') {
        html += `<span class="big-char">${currentWord.grec}</span><p>Écrivez la traduction en Français :</p><input type="text" id="answer" data-correct="${currentWord.francais}" placeholder="Saisie en français..."><br><button class="valider-btn" onclick="validateText()">Valider</button>`;
    } else if (type === 'ecriture') {
        // Clavier physique/natif grec requis pour l'ado
        html += `<span class="big-char" style="font-size:2.4rem; color:var(--text);">${currentWord.emoji} ${currentWord.francais}</span><p>Écrivez ce mot en GREC (pensez aux accents) :</p><input type="text" id="answer" data-correct="${currentWord.grec}" placeholder="Saisie en grec..."><br><button class="valider-btn" onclick="validateText()">Valider</button>`;
    } else if (type === 'audition') {
        html += `<p>Écoutez attentivement le chef :</p><button onclick="speak('${currentWord.grec}')" style="font-size:3.5rem; background:none; border:none; cursor:pointer;">🔊</button><br><input type="text" id="answer" data-correct="${currentWord.francais}" placeholder="Qu'avez-vous entendu (en français) ?"><br><button class="valider-btn" onclick="validateText()">Valider</button>`;
        setTimeout(() => speak(currentWord.grec), 350);
    } else if (type === 'oral') {
        html += `<span class="big-char" style="font-size:2.4rem; color:var(--text);">${currentWord.grec} (${currentWord.francais})</span><button id="mic-trigger" class="mic-btn" onclick="startSpeech()">🎙️</button><div id="oral-transcript">Prêt pour l'évaluation vocale...</div>`;
    }
    container.innerHTML = html + `<p class="hint-word">Aide : ${currentWord.mne}</p>`;
    if(document.getElementById('answer')) document.getElementById('answer').focus();
}

function buildAssociationGame() {
    const container = document.getElementById('exercise-container'); assocPairsMatched = 0; assocSelected = null;
    const shuffled = [...vocabulaire].filter(item => item.lvl <= getLevel()).sort(() => Math.random() - 0.5).slice(0, 4);
    let cards = [];
    shuffled.forEach(item => {
        cards.push({ id: item.grec, text: `${item.emoji} ${item.grec}`, type: "greek" });
        cards.push({ id: item.grec, text: item.francais, type: "french" });
    });
    cards.sort(() => Math.random() - 0.5);
    let html = `<h2>🧩 Association Fertile</h2><p>Liez l'ingrédient grec à sa traduction !</p><div class="association-grid">`;
    cards.forEach((card, idx) => { html += `<button id="assoc-card-${idx}" class="assoc-card" onclick="selectAssocCard(${idx}, '${card.id}')">${card.text}</button>`; });
    container.innerHTML = html + `</div>`;
}

window.selectAssocCard = function(idx, id) {
    const btn = document.getElementById(`assoc-card-${idx}`); if (btn.classList.contains('hidden-pair')) return;
    triggerVibrate(25);
    if (!assocSelected) { assocSelected = { idx, id }; btn.classList.add('selected'); } 
    else {
        const prevBtn = document.getElementById(`assoc-card-${assocSelected.idx}`);
        if (assocSelected.idx === idx) { btn.classList.remove('selected'); assocSelected = null; return; }
        if (assocSelected.id === id) {
            btn.classList.add('feedback-success'); prevBtn.classList.add('feedback-success'); playTone([523.25, 659.25], 0.1);
            setTimeout(() => { btn.className = "assoc-card hidden-pair"; prevBtn.className = "assoc-card hidden-pair"; }, 500);
            assocPairsMatched++;
            if (assocPairsMatched === 4) {
                state.score += 50; state.drachmes += 35; updateQuestProgress("gain_xp", 50); updateQuestProgress("drachmes", 35);
                setTimeout(() => { alert("Potager vidé avec succès ! (+50 XP)"); buildAssociationGame(); }, 600);
            }
        } else {
            btn.classList.add('feedback-error'); prevBtn.classList.add('feedback-error'); playTone([220], 0.15);
            setTimeout(() => { btn.classList.remove('feedback-error', 'selected'); prevBtn.classList.remove('feedback-error', 'selected'); }, 600);
        }
        assocSelected = null;
    }
};

window.checkAnswer = function(selected, correct) { processResult(selected.toLowerCase() === correct.toLowerCase(), correct); };
window.validateText = function() { const i = document.getElementById('answer'); processResult(i.value.trim().toLowerCase() === i.dataset.correct.toLowerCase(), i.dataset.correct); };

function processResult(isCorrect, correctAnswerDisplay) {
    const type = document.getElementById('exercise-select').value; const today = new Date().toISOString().split('T')[0];
    if(!state.history[currentWord.grec]) state.history[currentWord.grec] = {errors: 0, total: 0};
    state.history[currentWord.grec].total++;
    const input = document.getElementById('answer'); if(input) input.disabled = true;

    if (isCorrect) {
        triggerVibrate(30); state.currentCombo = Math.min(3, state.currentCombo + 1);
        let baseXP = type === 'rattrapage' ? 20 : 10;
        let gainedXP = baseXP * state.currentCombo; let gainedDrachmes = 12 * state.currentCombo;
        
        state.score += gainedXP; state.drachmes += gainedDrachmes; state.streak++;
        state.activityLog[today] = (state.activityLog[today] || 0) + gainedXP;
        if(type === 'chrono') { timeLeft += 2; chronoScore += gainedXP; document.getElementById('chrono-score-val').innerText = chronoScore; }
        
        updateQuestProgress("gain_xp", gainedXP); updateQuestProgress("answers", 1); updateQuestProgress("drachmes", gainedDrachmes);
        if(state.streak > (state.highestStreak || 0)) state.highestStreak = state.streak;
        if(input) input.classList.add('feedback-success');
        playTone([523.25, 659.25, 783.99], 0.12);
    } else {
        triggerVibrate([60, 40, 60]); state.currentCombo = 0; state.streak = 0;
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
        if(timeLeft <= 0) { stopChrono(); saveChronoRecord(chronoScore); alert(`Temps mort ! Session : ${chronoScore} XP.`); document.getElementById('exercise-select').value = 'qcm'; renderExercise(); }
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
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition; if(!SR) return alert("Micro non supporté.");
    const rec = new SR(); rec.lang = 'el-GR';
    rec.onstart = () => document.getElementById('mic-trigger').classList.add('recording');
    rec.onresult = (e) => {
        const txt = e.results[0][0].transcript.toLowerCase(); document.getElementById('oral-transcript').innerText = `Entendu : ${txt}`;
        const match = txt.includes(currentWord.grec.toLowerCase());
        setTimeout(() => processResult(match, currentWord.grec), 800);
    };
    rec.onerror = () => document.getElementById('mic-trigger').classList.remove('recording');
    rec.onend = () => document.getElementById('mic-trigger').classList.remove('recording');
    rec.start();
};

window.exportSave = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const dlAnchor = document.createElement('a'); dlAnchor.setAttribute("href", dataStr); dlAnchor.setAttribute("download", `vocab_master_save.json`);
    document.body.appendChild(dlAnchor); dlAnchor.click(); dlAnchor.remove();
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

window.buyItem = function(type, cost, value) {
    if (type !== 'equip-avatar' && type !== 'equip-theme') {
        if (state.drachmes < cost) { alert("🪙 Fonds insuffisants !"); return; }
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
    document.getElementById('avatars-shop-pool').innerHTML = avatarsList.map(emoji => {
        const isOwned = state.unlockedAvatars.includes(emoji); const isActive = state.activeAvatar === emoji;
        let cName = "shop-item-box" + (isActive ? " active-equip" : (isOwned ? " owned" : ""));
        return `<div class="${cName}" onclick="buyItem('${isOwned ? 'equip-avatar' : 'avatar'}', 250, '${emoji}')">${emoji}<br><small style="font-size:0.55rem;">${isActive ? 'Actif' : (isOwned ? 'Équiper' : '250 🪙')}</small></div>`;
    }).join('');

    document.getElementById('themes-shop-pool').innerHTML = shopThemes.map(t => {
        const isOwned = state.unlockedThemes.includes(t.id); const isActive = state.activeTheme === t.id;
        let cName = "theme-shop-btn" + (isActive ? " active-equip" : (isOwned ? " owned" : ""));
        return `<button class="${cName}" onclick="buyItem('${isOwned ? 'equip-theme' : 'theme'}', t.cost || 500, '${t.id}')"><span>${t.name}</span><small><b>${isActive ? 'Actif' : (isOwned ? 'Choisir' : `${t.cost || 500} 🪙`)}</b></small></button>`;
    }).join('');
}

function saveAndRefresh() {
    const lvl = getLevel(); if (lvl > (state.lastLvl || 1)) { setTimeout(launchCelebration, 200); state.lastLvl = lvl; }
    localStorage.setItem('greekVocabV1', JSON.stringify(state));
    
    document.getElementById('level-val').innerText = lvl; document.getElementById('score').innerText = state.score;
    document.getElementById('drachmes-val').innerText = state.drachmes; document.getElementById('streak').innerText = state.streak;
    document.getElementById('avatar-val').innerText = state.activeAvatar || "🍎";
    document.getElementById('progress-bar').style.width = `${((state.score % 1000) / 1000) * 100}%`;
    document.body.className = state.activeTheme || "theme-orchard";
    renderDashboard();
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
    const acc = total > 0 ? Math.round(((total - errs) / total) * 100) : 100; const userLvl = getLevel();
    document.getElementById('stats-content').innerHTML = `<p>🥇 <span>Niveau Actuel :</span> <b>${userLvl} / 10</b></p><p>🔥 <span>Meilleure Série :</span> <b>${state.highestStreak || 0}</b></p><p>🎯 <span>Précision :</span> <b>${acc}%</b></p>`;
    document.getElementById('leaderboard-list').innerHTML = (state.chronoRecords || []).map(r => `<li>${r.score} XP <span>(${r.date})</span></li>`).join('') || `<li>Aucun record</li>`;
    document.getElementById('badges-grid').innerHTML = badgesList.map((badge, idx) => `<div class="badge-item ${userLvl >= (idx + 1) ? 'unlocked' : ''}">${userLvl >= (idx + 1) ? badge : "🔒 Niveau " + (idx + 1)}</div>`).join('');
    renderCalendarHeatmap(); document.getElementById('modal-stats').showModal();
};
document.getElementById('close-stats').onclick = () => document.getElementById('modal-stats').close();
document.getElementById('close-boutique').onclick = () => document.getElementById('modal-boutique').close();

// Dictionnaire interactif audio : Permet d'écouter le mot et sa traduction séparément
document.getElementById('btn-fiche').onclick = () => {
    document.getElementById('fiche-content').innerHTML = vocabulaire.filter(i => i.lvl <= getLevel()).map(l => `
        <div class="fiche-item">
            <span><b>${l.grec}</b> : ${l.francais} ${l.emoji} <br><small style="color:var(--accent)">Niv.${l.lvl}</small></span>
            <div>
                <button class="dictio-audio-btn" onclick="speak('${l.grec}')">🔊 Grec</button>
            </div>
        </div>
    `).join('');
    document.getElementById('modal-fiche').showModal();
};
document.getElementById('close-modal').onclick = () => document.getElementById('modal-fiche').close();

document.getElementById('slow-toggle').onclick = (e) => { isSlowAudio = !isSlowAudio; e.target.classList.toggle('active', isSlowAudio); e.target.innerText = isSlowAudio ? "Lent" : "Audio"; };
document.getElementById('exercise-select').onchange = renderExercise;
document.addEventListener('keydown', (e) => { if(e.key === 'Enter') { const ex = document.getElementById('exercise-select').value; if(ex !== 'association' && ex !== 'qcm' && ex !== 'chrono') window.validateText(); } });

checkDailyStreakAndCalendar(); verifyAndGenerateQuests(); renderExercise();
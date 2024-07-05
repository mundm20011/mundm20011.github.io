const translations = {
    de: {
        title: "Mediensammlung leichtgemacht",
        shop: "Shop",
        library: "Bibliothek",
        user: "Benutzer",
        langTranslation: "Sprache",
        cart: "Warenkorb",
        search: "Suche",
        release: "Erscheinungsjahr",
        img: "Bild",
        about: "Über",
        support: "Support",
        gift: "Geschenkekarte",
        journal: "Lernjournal",
        journalDesc: "webbasiertes Lernjournal mit Webframework Vue.js, MongoDB",
        journalDetailDesc: "Moderne Web-Applikation für das obligatorische Lernjournal. Ermöglicht Auszubildenden, ihre Fortschritte in Form von Artikeln zu dokumentieren.",
        calcDesc: "einfacher Taschenrechner programmiert mit Python",
        home: "Hauptseite",
        projectTranslation: "Projekte",
        contact: "Kontakt",
        newsletter: "Newsletter",
        databases: "Datenbanken",
        counselling: "Beratung",
        stateProject: "Status des Projektes",
        logout: "Ausloggen",
        cat: "Kategorien",
    },
    en: {
        title: "Media Collection Made Easy",
        shop: "Shop",
        library: "Library",
        user: "User",
        langTranslation: "Language",
        cart: "Cart",
        search: "Search",
        release: "Release Year",
        img: "Image",
        about: "About",
        support: "Support",
        gift: "Gift Card",
        journal: "Learning journal",
        journalDesc: "webbased lernjournal with webframework Vue.js, mongoDB",
        journalDetailDesc: "Modern Web-Application for the mandatory Lernjournal. Allows apprentices to document their progress in article form.",
        calcDesc: "simple Calculator programmed with Python",
        home: "Home",
        projectTranslation: "Project",
        contact: "Contact",
        newsletter: "Newsletter",
        databases: "Databases",
        counselling: "Counselling",
        stateProject: "Status of the project",
        logout: "Logout",
        cat: "Categories",
    },
    fr: {
        title: "Collection de Médias Facile",
        shop: "Boutique",
        library: "Bibliothèque",
        user: "Utilisateur",
        langTranslation: "Langue",
        cart: "Panier",
        search: "Recherche",
        release: "Année de sortie",
        img: "Image",
        about: "À propos",
        support: "Support",
        gift: "Carte cadeau",
        journal: "Journal d'apprentissage",
        journalDesc: "journal de bord basé sur le web avec le cadre web Vue.js, MongoDB",
        journalDetailDesc: "Application Web moderne pour le Lernjournal obligatoire. Elle permet aux apprentis de documenter leurs progrès sous forme d'articles.",
        calcDesc: "Calculatrice simple programmée avec Python",
        home: "Domicile",
        projectTranslation: "Projet",
        contact: "contact",
        newsletter: "Bulletin d'information",
        databases: "Bases de données",
        counselling: "Conseils",
        stateProject: "Statut du projet",
        logout: "Déconnexion",
        cat: "Catégories",
    },
    it: {
        title: "Collezione di Media Semplificata",
        shop: "Negozio",
        library: "Biblioteca",
        user: "Utente",
        langTranslation: "Lingua",
        cart: "Carrello",
        search: "Cerca",
        release: "Anno di uscita",
        img: "Immagine",
        about: "Informazioni",
        support: "Supporto",
        gift: "Carta regalo",
        journal: "Diario di apprendimento",
        journalDesc: "lernjournal basato sul web con il webframework Vue.js, mongoDB",
        journalDetailDesc: "Moderna applicazione web per il Lernjournal obbligatorio. Permette agli apprendisti di documentare i loro progressi sotto forma di articoli.",
        calcDesc: "semplice calcolatrice programmata con Python",
        home: "Casa",
        projectTranslation: "Progetto",
        contact: "contatto",
        newsletter: "Newsletter",
        databases: "Banche dati",
        counselling: "Consulenza",
        stateProject: "Stato del progetto",
        logout: "Logout",
        cat: "Categorie",
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    langSelect.addEventListener('change', updateLanguage);
    updateLanguage();
});

function updateLanguage() {
    const lang = document.getElementById('lang').value;
    const translation = translations[lang];
    
    const elementsToTranslate = [
        'langTranslation', 'home', 'projectTranslation', 'contact', 'newsletter', 
        'journal-label', 'journalDesc', 'title', 'shop', 'library', 
        'user', 'cart', 'search', 'release', 'img', 'about', 
        'support', 'gift', 'calcDesc', 'databases', 'counselling', 'stateProject',
        'cat', 'journalDetailDesc'
    ];
    
    elementsToTranslate.forEach(className => {
        const elements = document.getElementsByClassName(className);
        Array.from(elements).forEach(element => {
            element.innerText = translation[className];
        });
    });
}

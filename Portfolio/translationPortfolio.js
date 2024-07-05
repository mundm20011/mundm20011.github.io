const translations = {
    de: {
        title: "Mediensammlung leichtgemacht",
        shop: "Shop",
        library: "Bibliothek",
        user: "Benutzer",
        lang: "Sprache",
        cart: "Warenkorb",
        search: "Suche",
        release: "Erscheinungsjahr",
        img: "Bild",
        about: "Über",
        support: "Support",
        gift: "Geschenkekarte",
        journal: "Lernjournal",
        journalDesc: "webbasiertes Lernjournal mit Webframework Vue.js, MongoDB",
        home: "Hauptseite",
        project: "Projekte"
    },
    en: {
        title: "Media Collection Made Easy",
        shop: "Shop",
        library: "Library",
        user: "User",
        lang: "Language",
        cart: "Cart",
        search: "Search",
        release: "Release Year",
        img: "Image",
        about: "About",
        support: "Support",
        gift: "Gift Card",
        journal: "Learning journal",
        journalDesc: "webbased lernjournal with webframework Vue.js, mongoDB",
        home: "Home",
        project: "Project"
    },
    fr: {
        title: "Collection de Médias Facile",
        shop: "Boutique",
        library: "Bibliothèque",
        user: "Utilisateur",
        lang: "Langue",
        cart: "Panier",
        search: "Recherche",
        release: "Année de sortie",
        img: "Image",
        about: "À propos",
        support: "Support",
        gift: "Carte cadeau",
        journal: "Journal d'apprentissage",
        journalDesc: "journal de bord basé sur le web avec le cadre web Vue.js, MongoDB",
        home: "Domicile",
        project: "Projet",
    },
    it: {
        title: "Collezione di Media Semplificata",
        shop: "Negozio",
        library: "Biblioteca",
        user: "Utente",
        lang: "Lingua",
        cart: "Carrello",
        search: "Cerca",
        release: "Anno di uscita",
        img: "Immagine",
        about: "Informazioni",
        support: "Supporto",
        gift: "Carta regalo",
        journal: "Diario di apprendimento",
        journalDesc: "lernjournal basato sul web con il webframework Vue.js, mongoDB",
        home: "Casa",
        project: "Progetto",
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    langSelect.addEventListener('change', updateLanguage);
    updateLanguage(); // Update language on initial load
});

function updateLanguage() {
    const lang = document.getElementById('lang').value;
    const translation = translations[lang];

    document.getElementById('lang-label').innerText = translation.lang;
    document.getElementById('home').innerText = translation.home;
    document.getElementById('project').innerText = translation.project;
    document.getElementById('contact').innerText = translation.contact;
    document.getElementById('newsletter').innerText = translation.newsletter;
    document.getElementById('journal').innerText = translation.journal;
    document.getElementById('journalDesc').innerText = translation.journalDesc;
    document.getElementById('home').innerText = translation.home;
    document.getElementById('project').innerText = translation.project;

}

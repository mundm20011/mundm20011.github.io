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

    document.getElementById('page-title').innerText = translation.title;
    document.getElementById('shop').innerText = translation.shop;
    document.getElementById('library').innerText = translation.library;
    document.getElementById('user').innerText = translation.user;
    document.getElementById('Translation').innerText = translation.lang;
    document.getElementById('cart').innerText = translation.cart;
    document.getElementById('search').placeholder = translation.search;

    document.getElementById('img-dota2').alt = translation.img + " Dota2";
    document.getElementById('release-dota2').innerText = translation.release + ": 9. Juli 2013";

    document.getElementById('img-pubg').alt = translation.img + " PUBG";
    document.getElementById('release-pubg').innerText = translation.release + ": 23. März 2017";

    document.getElementById('img-destiny2').alt = translation.img + " Destiny2";
    document.getElementById('release-destiny2').innerText = translation.release + ": 28. August 2017";

    document.getElementById('img-war-thunder').alt = translation.img + " War-Thunder";
    document.getElementById('release-war-thunder').innerText = translation.release + ": 1. November 2012";

    document.getElementById('img-cs2').alt = translation.img + " CS2";
    document.getElementById('release-cs2').innerText = translation.release + ": 27. September 2023";

    document.getElementById('about').innerText = translation.about;
    document.getElementById('support').innerText = translation.support;
    document.getElementById('gift').innerText = translation.gift;
}

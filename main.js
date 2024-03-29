
// En funktion der ændre elementerne i mange af vores tekster (header, nav, main), for at ændre det til dansk
function dansk(){
    // Vi benytter "document.getElementById()" til at finde et bestemt id på vores tekster, så de kan ændres i forhold til vores behov
    document.getElementById('language-changer').src="images/Dansk.png";
    document.getElementById('language-events').innerHTML = "Arrangementer"
    document.getElementById('language-books').innerHTML = "Bøger"
    document.getElementById('language-e-books').innerHTML = "E-bøger & medier"
    document.getElementById('language-news').innerHTML = "Nyheder"
    document.getElementById('language-frontpage').innerHTML = "Forside"
    document.getElementById('language-contact').innerHTML = "Kontakt os "
    document.getElementById('language-opening').innerHTML = "Åbningstider"
    document.getElementById('language-login').innerHTML = "Log ind"
    document.getElementById('searchbar-text').placeholder = "Skriv f.eks. Harry Potter, krimi eller lign."
    document.getElementById('search-category').innerHTML = "Søg i alle                                      ▼"
    document.getElementById('language-search').innerHTML = "Søg"
};


// En funktion der ændre elementerne i mange af vores tekster (header, nav, main), for at ændre det til engelsk
function engelsk(){
    // Her er der gjort det samme som i forrige funktion, dog er det bare ændret til engelsk i stedet for dansk
    document.getElementById('language-changer').src="images/Engelsk.png";
    document.getElementById('language-events').innerHTML = "Events"
    document.getElementById('language-books').innerHTML = "Books"
    document.getElementById('language-e-books').innerHTML = "E-books & media"
    document.getElementById('language-news').innerHTML = "News"
    document.getElementById('language-frontpage').innerHTML = "Front Page"
    document.getElementById('language-contact').innerHTML = "Contact us "
    document.getElementById('language-opening').innerHTML = "Opening hours"
    document.getElementById('language-login').innerHTML = "Login"
    document.getElementById('searchbar-text').placeholder = "Search for example Harry Potter, a genre or etc."
    document.getElementById('search-category').innerHTML = "Search in all                                 ▼"
    document.getElementById('language-search').innerHTML = "Search"
};



// Fået fra https://teamtreehouse.com/community/how-to-add-the-leave-this-page-stay-on-this-page-popup-to-a-website-when-closing
// Benytter en funktion som er tilknyttet en knap (facebook ikonet), så vi kan køre en alert inden folk de forlader siden til at komme til deres facebook
function facebooklink(){
    window.onbeforeunload = function(e) {
        return 'Facebook siden';
}}
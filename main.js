function dansk(){
    document.getElementById('language-changer').src="images/Dansk.png";
    document.getElementById('language-events').innerHTML = "Arrangementer"
    document.getElementById('language-books').innerHTML = "Bøger"
    document.getElementById('language-e-books').innerHTML = "E-bøger & medier"
    document.getElementById('language-news').innerHTML = "Nyheder"
    document.getElementById('language-frontpage').innerHTML = "Forside"
    document.getElementById('language-contact').innerHTML = "Kontakt os "
    document.getElementById('language-find').innerHTML = "Find os "
    document.getElementById('language-opening').innerHTML = "Åbningstider"
    document.getElementById('language-login').innerHTML = "Log ind"
    document.getElementById('searchbar-text').placeholder = "Skriv f.eks. Harry Potter, krimi eller lign."
    document.getElementById('search-category').innerHTML = "Søg i alle                                      ▼"
};

function engelsk(){
    document.getElementById('language-changer').src="images/Engelsk.png";
    document.getElementById('language-events').innerHTML = "Events"
    document.getElementById('language-books').innerHTML = "Books"
    document.getElementById('language-e-books').innerHTML = "E-books & media"
    document.getElementById('language-news').innerHTML = "News"
    document.getElementById('language-frontpage').innerHTML = "Front Page"
    document.getElementById('language-contact').innerHTML = "Contact us "
    document.getElementById('language-find').innerHTML = "Find us "
    document.getElementById('language-opening').innerHTML = "Opening hours"
    document.getElementById('language-login').innerHTML = "Login"
    document.getElementById('searchbar-text').placeholder = "Search for example Harry Potter, a genre or etc."
    document.getElementById('search-category').innerHTML = "Search in all                                 ▼"
};


// https://teamtreehouse.com/community/how-to-add-the-leave-this-page-stay-on-this-page-popup-to-a-website-when-closing

function facebooklink(){
    window.onbeforeunload = function(e) {
        return 'Dialog text here. Iffy functionality.';
}}
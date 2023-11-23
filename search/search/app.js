function mySearch() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("search-box");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("product-list");
    cards = cardContainer.getElementsByClassName("card h-100");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h3.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
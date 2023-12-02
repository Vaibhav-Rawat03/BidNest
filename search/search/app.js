var items = [
    { name: "Product 1", details: "Details 1", minBidPrice: "Price 1", time: "Time 1" },
    { name: "Product 2", details: "Details 2", minBidPrice: "Price 2", time: "Time 2" },
    // ... more products
];
var container = document.querySelector('#product-list'); 
items.forEach(function(product) {
    var cardHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="./imagecap.jpg" class="card-img-top" alt="..." />
                <hr class="m-0" />
                <div class="card-body">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-text">${product.details}</p>
                    <p class="min-bid-price">${product.minBidPrice}</p>
                    <time>Time : ${product.time}</time>
                </div>
                <div class="card-footer">
                    <hr class="m-0" />
                    <button type="button" class="btn">Bid Now</button>
                    <button type="button" class="btn">Freeze</button>
                </div>
            </div>
        </div>
    `;

    container.innerHTML += cardHTML;
});
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
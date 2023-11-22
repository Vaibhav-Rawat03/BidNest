var products = [
    { name: 'Product 1', description: 'This is product 1', biddingStart: '10:00', time: '1 hour', image: 'product1.jpg' },
    { name: 'Product 2', description: 'This is product 2', biddingStart: '10:00', time: '1 hour', image: 'product2.jpg' },
    { name: 'Product 3', description: 'This is product 3', biddingStart: '10:00', time: '1 hour', image: 'product3.jpg' },
    { name: 'Product 4', description: 'This is product 4', biddingStart: '10:00', time: '1 hour', image: 'product4.jpg' },
    { name: 'Product 5', description: 'This is product 5', biddingStart: '10:00', time: '1 hour', image: 'product5.jpg' },
    { name: 'Product 6', description: 'This is product 6', biddingStart: '10:00', time: '1 hour', image: 'product6.jpg' },
    { name: 'Product 7', description: 'This is product 7', biddingStart: '10:00', time: '1 hour', image: 'product7.jpg' },
    { name: 'Product 8', description: 'This is product 8', biddingStart: '10:00', time: '1 hour', image: 'product8.jpg' },
    { name: 'Product 9', description: 'This is product 9', biddingStart: '10:00', time: '1 hour', image: 'product9.jpg' },
    { name: 'Product 10', description: 'This is product 10', biddingStart: '10:00', time: '1 hour', image: 'product10.jpg' },
    { name: 'Product 11', description: 'This is product 11', biddingStart: '10:00', time: '1 hour', image: 'product11.jpg' },
    { name: 'Product 12', description: 'This is product 12', biddingStart: '10:00', time: '1 hour', image: 'product12.jpg' },
    { name: 'Product 13', description: 'This is product 13', biddingStart: '10:00', time: '1 hour', image: 'product13.jpg' },
    { name: 'Product 14', description: 'This is product 14', biddingStart: '10:00', time: '1 hour', image: 'product14.jpg' },
    { name: 'Product 15', description: 'This is product 15', biddingStart: '10:00', time: '1 hour', image: 'product15.jpg' },
    { name: 'Product 16', description: 'This is product 16', biddingStart: '10:00', time: '1 hour', image: 'product16.jpg' },
    { name: 'Product 17', description: 'This is product 17', biddingStart: '10:00', time: '1 hour', image: 'product17.jpg' },
    { name: 'Product 18', description: 'This is product 18', biddingStart: '10:00', time: '1 hour', image: 'product18.jpg' },
    { name: 'Product 19', description: 'This is product 19', biddingStart: '10:00', time: '1 hour', image: 'product19.jpg' },
    { name: 'Product 20', description: 'This is product 20', biddingStart: '10:00', time: '1 hour', image: 'product20.jpg' },
    { name: 'Product 21', description: 'This is product 21', biddingStart: '10:00', time: '1 hour', image: 'product21.jpg' },
    { name: 'Product 22', description: 'This is product 22', biddingStart: '10:00', time: '1 hour', image: 'product22.jpg' },
    { name: 'Product 23', description: 'This is product 23', biddingStart: '10:00', time: '1 hour', image: 'product23.jpg' },
    { name: 'Product 24', description: 'This is product 24', biddingStart: '10:00', time: '1 hour', image: 'product24.jpg' },
    { name: 'Product 25', description: 'This is product 25', biddingStart: '10:00', time: '1 hour', image: 'product25.jpg' },
    { name: 'Product 26', description: 'This is product 26', biddingStart: '10:00', time: '1 hour', image: 'product26.jpg' },
    { name: 'Product 27', description: 'This is product 27', biddingStart: '10:00', time: '1 hour', image: 'product27.jpg' },
    { name: 'Product 28', description: 'This is product 28', biddingStart: '10:00', time: '1 hour', image: 'product28.jpg' },
];

// window.onload = function() {
//     var productList = document.getElementById('product-list');
//     var productDetails = document.getElementById('product-details');

//     products.forEach(function(product, index) {
//         var productElement = document.createElement('div');
//         productElement.className = 'product';
//         productElement.innerHTML = '<h2>' + product.name + '</h2><button>Show Details</button>';
//         productList.appendChild(productElement);

//         productElement.querySelector('button').addEventListener('click', function() {
//             productDetails.style.display = 'block';
//             productDetails.innerHTML = '<h2>' + product.name + '</h2><p>' + product.description + '</p><p>Bidding starts at: ' + product.biddingStart + '</p><p>Time: ' + product.time + '</p><img src="' + product.image + '">';
//         });
//     });
// };
// window.onload = function() {
//     var productList = document.getElementById('product-list');

//     products.forEach(function(product, index) {
//         var productElement = document.createElement('div');
//         productElement.className = 'product';
//         productElement.innerHTML = '<h2>' + product.name + '</h2><button>Show Details</button><div class="product-details" style="display: none;"><h2>' + product.name + '</h2><p>' + product.description + '</p><p>Bidding starts at: ' + product.biddingStart + '</p><p>Time: ' + product.time + '</p><img src="' + product.image + '"></div>';
//         productList.appendChild(productElement);

//         productElement.querySelector('button').addEventListener('click', function() {
//             var details = this.nextElementSibling;
//             if (details.style.display === 'none') {
//                 details.style.display = 'block';
//             } else {
//                 details.style.display = 'none';
//             }
//         });
//     });
// };
// window.onload = function() {
//     var productList = document.getElementById('product-list');

//     products.forEach(function(product, index) {
//         var productElement = document.createElement('div');
//         productElement.className = 'product';
//         productElement.innerHTML = '<h2>' + product.name + '</h2><button>Show Details</button><div class="product-details hidden"><h2>' + product.name + '</h2><p>' + product.description + '</p><p>Bidding starts at: ' + product.biddingStart + '</p><p>Time: ' + product.time + '</p><img src="' + product.image + '"></div>';
//         productList.appendChild(productElement);

//         productElement.querySelector('button').addEventListener('click', function() {
//             var details = this.nextElementSibling;
//             if (details.classList.contains('hidden')) {
//                 details.classList.remove('hidden');
//             } else {
//                 details.classList.add('hidden');
//             }
//         });
//     });
// };
window.onload = function() {
    var productList = document.getElementById('product-list');
    var modal = document.getElementById('modal');
    var modalDetails = document.getElementById('modal-details');
    var span = document.getElementsByClassName('close')[0];

    products.forEach(function(product, index) {
        var productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = '<h2>' + product.name + '</h2><button>Show Details</button>';
        productList.appendChild(productElement);

        productElement.querySelector('button').addEventListener('click', function() {
            modalDetails.innerHTML = '<h2>' + product.name + '</h2><p>' + product.description + '</p><p>Bidding starts at: ' + product.biddingStart + '</p><p>Time: ' + product.time + '</p><img src="' + product.image + '">';
            modal.style.display = 'block';
        });
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
};
function processProducts(products) {
    // Add your processing logic here
    console.log("Processing products:", products);
}

fetch('/getitems')
  .then(response => response.json())
  .then(data => {
    // Loop through the data and create elements for each product
    data.forEach(product => {
      // Create a container for each product
      const productContainer = document.createElement('div');
      productContainer.className = 'product-container'; // You may want to define a CSS class for styling

      // Create an image element
      const imgElement = document.createElement('img');
      imgElement.src = `data:image/jpeg;base64,${product.image}`;
      imgElement.alt = product.productname;

      // Append the image element to the product container
      productContainer.appendChild(imgElement);

      // Create and append other elements (e.g., name, description) as needed
      const nameElement = document.createElement('h3');
      nameElement.textContent = product.productname;
      productContainer.appendChild(nameElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = product.description;
      productContainer.appendChild(descriptionElement);

      // Append the product container to the main image container
      imageContainer.appendChild(productContainer);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to dynamically render products based on the prod array
function renderProducts(prod) {
    var productList = document.getElementById('product-list');

    for (var index = 0; index < prod.length; index++) {
        var product = prod[index];

        var productCard = document.createElement('div');
        productCard.className = 'product-card';

        var container = document.createElement('div');
        container.className = 'container';

        // Convert Buffer to data URL and create an object URL
        var imageBlob = new Blob([product.image.data], { type: 'image/jpeg' }); // Assuming the image type is JPEG
        var imageUrl = URL.createObjectURL(imageBlob);

        var imageCap = document.createElement('img');
        imageCap.src = imageUrl;
        imageCap.alt = product.productname;
        container.appendChild(imageCap);

        var productDetails = document.createElement('div');
        productDetails.innerHTML = `<h2 class="product-name">${product.productname}</h2><button class="details">Show Details</button><button class="bid">Bid Now</button>`;
        container.appendChild(productDetails);

        productCard.appendChild(container);
        productList.appendChild(productCard);

        productCard.querySelector('.details').addEventListener('click', createDetailsHandler(product));
        productCard.querySelector('.bid').addEventListener('click', createBidHandler(product));

		console.log(product.image); // Check if it's a Buffer
console.log(imageBlob); // Check if the Blob is being created correctly
console.log(imageUrl); // Check if the URL is being created correctly
console.log(imageCap.src); // Check the final image source
console.log(product.image); // Check if it's a Buffer
console.log(imageBlob); // Check if the Blob is being created correctly
console.log(imageUrl); // Check if the URL is being created correctly
console.log(imageCap.src); // Check the final image source

    }
}

// Sample prod array (empty initially, will be dynamically populated)
let prod = [];

function createDetailsHandler(product) {
    return function () {
        // Modify this function to handle the details button click
        // Use the 'product' object to populate the modal
        // ...

        // Show the modal
        modal.style.display = 'block';
    };
}

function createBidHandler(product) {
    return function () {
        // Modify this function to handle the bid button click
        // ...
    };
}

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
      productContainer.className = 'product-container';                                                       // Define CSS for this class

      // Create an image element
      const imgElement = document.createElement('img');
      imgElement.src = `data:image/jpeg;base64,${product.image}`;
      imgElement.alt = product.productname;

      productContainer.appendChild(imgElement);

      const nameElement = document.createElement('h3');
      nameElement.textContent = product.productname;
      productContainer.appendChild(nameElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = product.description;
      productContainer.appendChild(descriptionElement);

      const minprice=document.createElement('p');
      minprice.textContent=`INR: ${product.minprice}`;
      productContainer.appendChild(minprice);

      const Time=document.createElement('p');
      Time.textContent=`Time: ${product.hours} : ${product.minutes}`;
      productContainer.appendChild(Time);

      // Append the product container to the main image container
      imageContainer.appendChild(productContainer);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


function renderProducts(prod) {                                               //fn to create prod cards based on result from backend
    var productList = document.getElementById('product-list');

    for (var index = 0; index < prod.length; index++) {
        var product = prod[index];

        var productCard = document.createElement('div');
        productCard.className = 'product-card';

        var container = document.createElement('div');
        container.className = 'container';

                                                                                    // Convert Buffer to data URL and create an object URL
        var imageBlob = new Blob([product.image.data], { type: 'image/jpeg' });                // only works for jpeg
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

    }
}

let prod = [];                                                               //empty array will be populated khudse


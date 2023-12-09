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
  
  function renderProducts(prod) {
    var productList = document.getElementById('product-list');

    for (var index = 0; index < prod.length; index++) {
        var product = prod[index];

        var productCard = document.createElement('div');
        productCard.className = 'product-card';

        var container = document.createElement('div');
        container.className = 'container';

        var imageBlob = new Blob([product.image.data], { type: 'image/jpeg' });
        var imageUrl = URL.createObjectURL(imageBlob);

        var imageCap = document.createElement('img');
        imageCap.src = imageUrl;
        imageCap.alt = product.productname;
        container.appendChild(imageCap);

        var productDetails = document.createElement('div');
        productDetails.innerHTML = `<h2 class="product-name">${product.productname}</h2>`;
        container.appendChild(productDetails);

        var detailsButton = document.createElement('button');
        detailsButton.className = 'details-btn';
        detailsButton.textContent = 'View Details';
        detailsButton.onclick = function() {
            populateModal(product);
            modal.style.display = "block";
        };
        productCard.appendChild(container);
        productCard.appendChild(detailsButton); // Append the button to the product card, not the container

        productList.appendChild(productCard);
    }
}

var modal = document.getElementById('myModal');

function populateModal(product) {
    // Get the modal details container
    var modalDetails = document.getElementById('modal-details');

    // Clear any existing details
    modalDetails.innerHTML = '';

    // Create an image element
    var imgElement = document.createElement('img');
    imgElement.src = `data:image/jpeg;base64,${product.image}`;
    imgElement.alt = product.productname;

    // Create a name element
    var nameElement = document.createElement('h2');
    nameElement.textContent = product.productname;

    // Create a description element
    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;
	
	var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = function() {
        modal.style.display = "none";
    };
    // Append the elements to the modal details container
    modalDetails.appendChild(imgElement);
    modalDetails.appendChild(nameElement);
    modalDetails.appendChild(descriptionElement);
}
// When the user clicks on the button, open the modal and populate it with the product details
var btns = document.getElementsByClassName('details-btn');
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
		modal.style.display = "block";
        populateModal(product); // Pass the corresponding product object to the populateModal function
    }
}

let prod = [];                                                               //empty array will be populated khudse

// Get the close button element
var closeButton = document.getElementsByClassName("close")[0];

// When the user clicks on the close button, close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
}
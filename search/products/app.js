var prod;
window.onload = async function() {
	fetch("/getitems")
    .then(response => {
        response.json().then(result => {

			// console.log(result);
            const prod = result;

			// console.log(JSON.stringify(prod))
            // Further processing based on prod
			for (var key in prod) {
				if (prod.hasOwnProperty(key)) {
				  console.log(key + ': ' + prod[key]);
				}
			  }
            // Call a function for additional processing
            processProducts(prod);
			products = prod;
			var productList = document.getElementById('product-list');
		var modal = document.getElementById('myModal');
		var modalDetails = document.getElementById('modal-details');
		var span = document.getElementsByClassName('close')[0];
		products.forEach(function(items, index) {
			var productCard = document.createElement('div');
			productCard.className = 'product-card';

			var container = document.createElement('div');
			container.className = 'container';

			var imageCap = document.createElement('img');
			imageCap.src = product.image ? product.image : './imagecap.jpg';
			imageCap.alt = product.name;
			container.appendChild(imageCap);

			var productDetails = document.createElement('div');
			productDetails.innerHTML = '<h2 class="product-name">' + product.name + '</h2><button class="details">Show Details</button><button class="freeze">Freeze</button><button class="bid">Bid Now</button>';
			container.appendChild(productDetails);

			productCard.appendChild(container);
			productList.appendChild(productCard);


			productCard.querySelector('.details').addEventListener('click', function() {
				modalDetails.innerHTML = `
					<div class="product-image">
						<img src="${product.image}" alt="Product Image">
					</div>
					<div class="product-info">
						<div class="product-name">
							<h1>${product.name}</h1>
						</div>
						<div class="product-description">
							<h4>Product Description</h2>
							<p>${product.description}</p>
						</div>
						<div class="product-time">
							<h4>Time</h2>
							<p>${product.time}</p>
						</div>
						<div class="product-start-price">
							<h4>Start Price</h2>
							<p>${product.biddingStart}</p>
						</div>
						<div class="product-current-price">
							<h4>Current Price</h2>
							<p>Current Price Placeholder</p>
						</div>
						<div class="product-bidding-price-input">
							<label for="bidding-price">Bidding Price:</label>
							<input type="number" id="bidding-price" name="bidding-price" min="0">
							<select id="currency" name="currency" title="Select Currency">
								<option value="usd">INR</option>
							</select>
						</div>
					</div>
				`;
				modal.style.display = 'block';
			});

			
			productCard.querySelector('.freeze').addEventListener('click', function() {
				// Implement the functionality for the Freeze button
			});

			productCard.querySelector('.bid').addEventListener('click', function() {
				// Implement the functionality for the Bid Now button
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
	});
        })
    }
    .catch(error => console.error('Error fetching products:', error))

  
		



	function mySearch() {
		var input, filter, cards, cardContainer, h2, title, i;
		input = document.getElementById("search-box");
		filter = input.value.toUpperCase();
		cardContainer = document.getElementById("product-list");
		cards = cardContainer.getElementsByClassName("product-card");
		for (i = 0; i < cards.length; i++) {
		  title = cards[i].querySelector(".product-name");
		  if (title.innerText.toUpperCase().indexOf(filter) > -1) {
			cards[i].style.display = "";
		  } else {
			cards[i].style.display = "none";
		  }
		}
	  }
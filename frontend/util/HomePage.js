var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
function scrollToContact() {
    var contactSection = document.getElementById("contactSection");
    contactSection.scrollIntoView({ behavior: "smooth" });
}

//post req to search
function redirect(){
    const search=document.getElementById("search-input").value
    const data={
        search:search
    }
    fetch('/search1', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        'body':JSON.stringify(data)    
    }).then(response =>{
        if(response.status == 200){
        window.location.href='/search'
    }
    else{
        response=>response.text()
    }
}).then(result=>console.log(result))
}

document.getElementById('search-button').addEventListener('click', redirect)

// Get the modal and its elements
var modal = document.getElementById('myModal');
var modalTitle = document.getElementById('modal-title');
var modalImg = document.getElementById('modal-img');
var modalPrice = document.getElementById('modal-price');
var modalDescription = document.getElementById('modal-description');

// Function to show the modal with product details
// Function to show the modal with product details
function showModal(btn) {
    // Get the product details from the box
    var box = btn.parentElement;
    var title = box.getElementsByTagName('h2')[0].textContent;
    var img = box.getElementsByClassName('box-img')[0].style.backgroundImage.slice(5, -2);
    var price = box.getElementsByTagName('h3')[0].textContent;
    var description = 'Product description goes here'; // Replace this with the actual product description
// Function to show the modal with product details
function showModal(btn) {
    // Get the product details from the box
    var box = btn.parentElement;
    console.log(box); // Debugging line
    var title = box.getElementsByTagName('h2')[0].textContent;
    console.log(title); // Debugging line
    var img = box.getElementsByClassName('box-img')[0].style.backgroundImage.slice(5, -2);
    console.log(img); // Debugging line
    var price = box.getElementsByTagName('h3')[0].textContent;
    console.log(price); // Debugging line
    var description = 'Product description goes here'; // Replace this with the actual product description
    console.log(description); // Debugging line

    // Populate the modal with the product details
    modalTitle.textContent = title;
    modalImg.src = img;
    modalPrice.textContent = price;
    modalDescription.textContent = description;

    // Show the modal
    modal.style.display = 'block';
}

// Get all the details buttons
var btns = document.getElementsByClassName('details-btn');

// Add a click event to each button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        showModal(this);
    });
}

// Get the close button inside the modal
var closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks on the close button, close the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
    // Populate the modal with the product details
    modalTitle.textContent = title;
    modalImg.src = img;
    modalPrice.textContent = price;
    modalDescription.textContent = description;

    // Show the modal
    modal.style.display = 'block';
}

// Get all the details buttons
var btns = document.getElementsByClassName('details-btn');

// Add a click event to each button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        showModal(this);
    });
}

// Get the close button inside the modal
var closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks on the close button, close the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Get all the details buttons
var btns = document.getElementsByClassName('details-btn');

// Add a click event to each button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        showModal(this);
    });
}

document.body.addEventListener('click', function(event) {
    window.location.href = 'Signin.html'; // Change this to your desired endpoint
});

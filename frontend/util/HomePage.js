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
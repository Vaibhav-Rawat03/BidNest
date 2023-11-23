const productImagesInput = document.getElementById('product-images');
const imagePreview = document.getElementById('image-preview');

function checkWordCount(textarea) {
    var description = textarea.value;
    var wordCount = description.trim().split(/\s+/).length;
    var minWords = 1;
    var maxWords = 30;

    if (wordCount < minWords) {
        alert("Description must be at least 1 words.");
        textarea.value = '';
    } else if (wordCount > maxWords) {
        alert("Description cannot exceed 30 words.");
        textarea.value = description.split(/\s+/).slice(0, maxWords).join(' ');
    }
}

function convertToINR() {
    const basePrice = parseFloat(document.getElementById('base-price').value);
    const inrLabel = document.getElementById('inr-label');

    // Define the currency of the base price
    const baseCurrency = 'USD';

    if (baseCurrency === 'USD') {
        // Define the exchange rate (1 USD to INR)
        const exchangeRate = 75.19; // Example exchange rate

        // Perform the conversion
        const convertedPrice = basePrice * exchangeRate;

        // Display the converted price with the currency sign
        const currencySign = '₹'; // Indian Rupees sign
        inrLabel.textContent = `${currencySign} ${convertedPrice.toFixed(2)}`;
    } else {
        inrLabel.textContent = 'Please enter the base price in USD for conversion.';
    }
}


function updateTimeLeft() {
    const endTimeInput = document.getElementById("bidding-end-time");
    const hoursDisplay = document.getElementById("hours");
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");

    const timeLeftDisplay = document.getElementById("time-left");

    function updateTimer() {
        const endTime = new Date(endTimeInput.value).getTime();
        const now = new Date().getTime();

        const timeDifference = endTime - now;

        if (timeDifference <= 0) {
            clearInterval(timerInterval);
            timeLeftDisplay.textContent = "Bidding closed.";
        } else {
            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            hoursDisplay.textContent = hours.toString().padStart(2, '0');
            minutesDisplay.textContent = minutes.toString().padStart(2, '0');
            secondsDisplay.textContent = seconds.toString().padStart(2, '0');

            // Set colors based on time left
            if (hours < 24) {
                timeLeftDisplay.style.color = "red";
            } else {
                timeLeftDisplay.style.color = "#007acc"; // Professional color, e.g., blue
            }
        }
    }

    updateTimer(); // Initial call to update the timer
    const timerInterval = setInterval(updateTimer, 1000); // Refresh every 1 second (1000 ms)
}

productImagesInput.addEventListener('change', function () {
    imagePreview.innerHTML = ''; 

    const files = productImagesInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.startsWith('image/')) {
            const imageElement = document.createElement('img');
            imageElement.className = 'preview-image';
            imageElement.src = URL.createObjectURL(file);

            imagePreview.appendChild(imageElement);
        }
    }
});

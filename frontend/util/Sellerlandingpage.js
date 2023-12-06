const productImagesInput = document.getElementById('product-images');
const imagePreview = document.getElementById('image-preview');

// productImagesInput.addEventListener('change', function () {
//     imagePreview.innerHTML = ''; 

//     const files = productImagesInput.files;
//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];

//         if (file.type.startsWith('image/')) {
//             const imageElement = document.createElement('img');
//             imageElement.className = 'preview-image';
//             imageElement.src = URL.createObjectURL(file);

//             imagePreview.appendChild(imageElement);
//         }
//     }
// });



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

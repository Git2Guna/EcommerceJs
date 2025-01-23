
//Data
let slideshow_images = [
    {
        image: "../img/banner/E.jpg",
    },
    {
        image: "../img/banner/G.jpg",
    },
    {
        image: "../img/banner/N.jpg",
    },
    {
        image: "../img/banner/H.jpg",
    },
    {
        image: "../img/banner/U.jpg",
    }
];



function showSlideShow() {
    let img = document.createElement("img");
    let counter = 0;
    img.src = slideshow_images[counter].image;
    counter++;
    let div = document.getElementById("slideshow");
    div.append(img);
    setInterval(() => {

        if (counter == slideshow_images.length) {
            counter = 0;
        }
        img.src = slideshow_images[counter].image;
        div.append(img);
        counter++;
    }, 4000);
}

showSlideShow();



function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.pro');
    let productsFound = false;

    products.forEach(product => {
        const title = product.querySelector('h5').textContent.toLowerCase();
        if (title.includes(query)) {
            product.style.display = 'block'; // Show product
            productsFound = true;
        } else {
            product.style.display = 'none';  // Hide product
        }
    });

    // Show or hide the "No products found" message
    const noProductsMessage = document.getElementById('no-products-message');
    noProductsMessage.style.display = productsFound ? 'none' : 'block';
}






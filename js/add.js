        // Function to show custom alert message
        function showCustomAlert(message) {
            const alertBox = document.getElementById('customAlert');
            const alertMessage = document.getElementById('alertMessage');

            alertMessage.textContent = message;
            alertBox.style.display = 'block';

            // Hide the alert after 3 seconds
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 3000); // 3000ms = 3 seconds
        }

        // Function to add product to cart
        function add(a) {
            console.log(a);

            let register = JSON.parse(localStorage.getItem('userData')) || [];
            if (register.length === 0) {
                showCustomAlert("Please login now");
                window.location.href = "../profile/login.html";
            } else {
                let products = JSON.parse(localStorage.getItem('products'));
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                
                let find = cart.find(item => item.prdname === products[a].name);

                if (find) {
                    showCustomAlert('Item already in cart');
                } else {
                    let item = {
                        prdname: products[a].name,
                        prdrate: products[a].price,
                        prdqty: products[a].quanty,
                        prdimage: products[a].img,
                    };
                    
                    cart.push(item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    showCustomAlert('Item added successfully');
                    window.location.href = "../cart/cart.html";
                }
            }
        }

        // Function to add product to cart (alternative version)
        function addToCart(product) {
            // Check if the user is logged in
            if (!isUserLoggedIn()) {
                showCustomAlert('You must be logged in to add products to the cart.');
                window.location.href = '../profile/login.html'; // Redirect to login page if not logged in
                return;
            }

            // Get the cart from localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            const existingProductIndex = cart.findIndex(item => item.id === product.id);

            if (existingProductIndex > -1) {
                // Product already in the cart
                showCustomAlert('This product is already in your cart.');
                return;
            }

            // Add new product to cart
            cart.push(product);

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Notify the user
            showCustomAlert('Product added to cart successfully!');
        }

        // Function to check if the user is logged in
        function isUserLoggedIn() {
            // Check for user session or authentication status
            // Example: Check if a user token exists in localStorage
            return !!localStorage.getItem('userToken');
        }
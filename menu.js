// ================= CART =================

let cart = [];


// ================= ADD TO CART =================

function addToCart(name, price) {

    let item = cart.find(i => i.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}


// ================= UPDATE CART =================

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty 🛒</h3>
                <p>Add some delicious food to your order.</p>
            </div>
        `;

    }


    cart.forEach((item, index) => {

        let itemTotal = item.price * item.quantity;

        total += itemTotal;
        count += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>
                        ৳${item.price} × ${item.quantity}
                    </p>

                    <div class="quantity-controls">

                        <button onclick="decreaseQuantity(${index})">
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="increaseQuantity(${index})">
                            +
                        </button>

                        <button class="remove-btn"
                                onclick="removeItem(${index})">
                            🗑
                        </button>

                    </div>

                </div>

                <div class="item-total">
                    ৳${itemTotal}
                </div>

            </div>
        `;

    });


    cartCount.textContent = count;
    cartTotal.textContent = "৳" + total;
}


// ================= QUANTITY =================

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    updateCart();
}


// ================= REMOVE =================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// ================= CART OPEN/CLOSE =================

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("active");
}


function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("active");
}


// ================= CHECKOUT =================

function openCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    closeCart();

    document
        .getElementById("checkoutModal")
        .classList.add("active");
}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");
}


// ================= PLACE ORDER =================

function submitOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let name =
        document.getElementById("customerName").value;

    let phone =
        document.getElementById("customerPhone").value;

    let address =
        document.getElementById("customerAddress").value;

    let payment =
        document.getElementById("paymentMethod").value;


    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });


    let orderNumber =
        "NOK" + Date.now().toString().slice(-6);


    alert(
        "🎉 Order Placed Successfully!\n\n" +
        "Order: " + orderNumber + "\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Total: ৳" + total + "\n" +
        "Payment: " + payment
    );


    console.log("Customer:", name);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("Payment:", payment);
    console.log("Order:", cart);
    console.log("Total:", total);


    cart = [];

    updateCart();

    closeCheckout();

    document
        .getElementById("checkoutForm")
        .reset();
}


// ================= SMOOTH SCROLL =================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        let target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================= START =================

document.addEventListener("DOMContentLoaded", () => {

    updateCart();

});

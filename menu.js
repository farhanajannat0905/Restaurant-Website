```javascript
// =====================================================
// NOKSHI RESTAURANT
// ONLINE ORDERING SYSTEM
// =====================================================


// ================= CART DATA =================

let cart = [];


// ================= ADD TO CART =================

function addToCart(name, price) {

    const existingItem = cart.find(
        item => item.name === name
    );


    if (existingItem) {

        existingItem.quantity++;

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

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartItems.innerHTML = "";


    let total = 0;

    let itemCount = 0;


    // Empty cart

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <h3>Your cart is empty 🛒</h3>

                <p>
                    Add some delicious Bengali food
                    to your order.
                </p>

            </div>
        `;

    }


    // Display items

    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;


        total += itemTotal;

        itemCount += item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ৳${item.price} × ${item.quantity}
                </p>


                <div class="quantity-controls">

                    <button
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="increaseQuantity(${index})">
                        +
                    </button>


                    <button
                        class="remove-btn"
                        onclick="removeItem(${index})">

                        🗑

                    </button>

                </div>

            </div>


            <div class="item-total">

                ৳${itemTotal}

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.textContent =
        itemCount;


    cartTotal.textContent =
        "৳" + total;

}


// ================= INCREASE QUANTITY =================

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


// ================= DECREASE QUANTITY =================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    updateCart();

}


// ================= REMOVE ITEM =================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// ================= OPEN CART =================

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("active");

}


// ================= CLOSE CART =================

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("active");

}


// ================= OPEN CHECKOUT =================

function openCheckout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add some food first."
        );

        return;

    }


    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


// ================= CLOSE CHECKOUT =================

function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


// ================= SUBMIT ORDER =================

function submitOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    // Customer information

    const customerName =
        document
            .getElementById("customerName")
            .value;


    const customerPhone =
        document
            .getElementById("customerPhone")
            .value;


    const customerAddress =
        document
            .getElementById("customerAddress")
            .value;


    const paymentMethod =
        document
            .getElementById("paymentMethod")
            .value;


    // Calculate total

    let total = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

    });


    // Generate order number

    const orderNumber =
        "NOK" +
        Date.now()
            .toString()
            .slice(-6);


    // Generate order details

    let orderDetails = "";


    cart.forEach(item => {

        orderDetails +=
            `${item.name} × ${item.quantity} = ৳${item.price * item.quantity}\n`;

    });


    // Order object

    const order = {

        orderNumber: orderNumber,

        customerName: customerName,

        customerPhone: customerPhone,

        customerAddress: customerAddress,

        paymentMethod: paymentMethod,

        items: cart,

        total: total,

        orderTime: new Date().toLocaleString()

    };


    // Save order locally

    localStorage.setItem(
        "latestOrder",
        JSON.stringify(order)
    );


    // Display confirmation

    alert(

        "🎉 Order Placed Successfully!\n\n" +

        "Order Number: " +
        orderNumber +

        "\n\nCustomer: " +
        customerName +

        "\nTotal: ৳" +
        total +

        "\n\nThank you for ordering from NOKSHI!"

    );


    // Console information

    console.log(
        "===== NOKSHI ORDER ====="
    );

    console.log(
        "Order Number:",
        orderNumber
    );

    console.log(
        "Customer:",
        customerName
    );

    console.log(
        "Phone:",
        customerPhone
    );

    console.log(
        "Address:",
        customerAddress
    );

    console.log(
        "Payment:",
        paymentMethod
    );

    console.log(
        "Items:",
        orderDetails
    );

    console.log(
        "Total:",
        total
    );


    // Reset everything

    cart = [];

    updateCart();

    closeCheckout();

    closeCart();


    document
        .getElementById("checkoutForm")
        .reset();

}


// ================= SMOOTH SCROLLING =================

document
    .querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });


// ================= INITIALIZE =================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCart();

    }
);


// ================= GREETING =================

const hour =
    new Date().getHours();


if (hour < 12) {

    console.log(
        "🌞 Good Morning from NOKSHI!"
    );

} else if (hour < 18) {

    console.log(
        "☀️ Good Afternoon from NOKSHI!"
    );

} else {

    console.log(
        "🌙 Good Evening from NOKSHI!"
    );

}
```

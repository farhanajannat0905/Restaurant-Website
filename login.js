// Get the form elements

const loginForm =
    document.getElementById("loginForm");

const email =
    document.getElementById("email");

const password =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const message =
    document.getElementById("message");


// ===============================
// SHOW / HIDE PASSWORD
// ===============================

togglePassword.addEventListener(
    "click",
    function () {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.textContent =
                "Hide";

            togglePassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        }

        else {

            password.type = "password";

            togglePassword.textContent =
                "Show";

            togglePassword.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    }
);


// ===============================
// LOGIN FORM
// ===============================

loginForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh
        event.preventDefault();


        // Remove old message styles
        message.classList.remove(
            "success",
            "error"
        );


        // Get values
        const emailValue =
            email.value.trim();

        const passwordValue =
            password.value.trim();


        // Check email
        if (emailValue === "") {

            message.textContent =
                "Please enter your email address.";

            message.classList.add(
                "error"
            );

            email.focus();

            return;

        }


        // Check password
        if (passwordValue === "") {

            message.textContent =
                "Please enter your password.";

            message.classList.add(
                "error"
            );

            password.focus();

            return;

        }


        // Check password length
        if (passwordValue.length < 6) {

            message.textContent =
                "Password must contain at least 6 characters.";

            message.classList.add(
                "error"
            );

            password.focus();

            return;

        }


        // Demo success message
        message.textContent =
            "Login successful! Welcome to Nokshi.";

        message.classList.add(
            "success"
        );


        // Clear password
        password.value = "";


        // You can redirect later:
        // window.location.href = "index.html";

    }
);
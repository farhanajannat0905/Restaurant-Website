// ===============================
// GET LOGIN ELEMENTS
// ===============================

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
// GET SIGNUP ELEMENTS
// ===============================

const loginSection =
    document.getElementById("loginSection");

const signupSection =
    document.getElementById("signupSection");

const showSignup =
    document.getElementById("showSignup");

const showLogin =
    document.getElementById("showLogin");

const signupForm =
    document.getElementById("signupForm");

const signupName =
    document.getElementById("signupName");

const signupEmail =
    document.getElementById("signupEmail");

const signupPassword =
    document.getElementById("signupPassword");

const confirmPassword =
    document.getElementById("confirmPassword");

const signupMessage =
    document.getElementById("signupMessage");


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
// SHOW SIGNUP FORM
// ===============================

showSignup.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        loginSection.style.display = "none";

        signupSection.classList.add("active");

        signupName.focus();

    }
);


// ===============================
// SHOW LOGIN FORM
// ===============================

showLogin.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        signupSection.classList.remove("active");

        loginSection.style.display = "block";

        email.focus();

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


        // ===============================
        // LOGIN SUCCESS
        // ===============================

        message.textContent =
            "Login successful! Welcome to Nokshi.";

        message.classList.add(
            "success"
        );


        // Redirect to homepage
        setTimeout(function () {

            window.location.href =
                "index.html";

        }, 1000);

    }
);


// ===============================
// SIGNUP FORM
// ===============================

signupForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh
        event.preventDefault();


        // Remove old message styles
        signupMessage.classList.remove(
            "success",
            "error"
        );


        // Get values
        const nameValue =
            signupName.value.trim();

        const emailValue =
            signupEmail.value.trim();

        const passwordValue =
            signupPassword.value.trim();

        const confirmPasswordValue =
            confirmPassword.value.trim();


        // Check name
        if (nameValue === "") {

            signupMessage.textContent =
                "Please enter your full name.";

            signupMessage.classList.add(
                "error"
            );

            signupName.focus();

            return;

        }


        // Check email
        if (emailValue === "") {

            signupMessage.textContent =
                "Please enter your email address.";

            signupMessage.classList.add(
                "error"
            );

            signupEmail.focus();

            return;

        }


        // Check password length
        if (passwordValue.length < 6) {

            signupMessage.textContent =
                "Password must contain at least 6 characters.";

            signupMessage.classList.add(
                "error"
            );

            signupPassword.focus();

            return;

        }


        // Check confirm password
        if (
            passwordValue !==
            confirmPasswordValue
        ) {

            signupMessage.textContent =
                "Passwords do not match.";

            signupMessage.classList.add(
                "error"
            );

            confirmPassword.focus();

            return;

        }


        // ===============================
        // SIGNUP SUCCESS
        // ===============================

        signupMessage.textContent =
            "Account created successfully!";

        signupMessage.classList.add(
            "success"
        );


        // Clear form
        signupForm.reset();

    }
);

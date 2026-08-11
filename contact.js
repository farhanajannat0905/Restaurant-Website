const contactForm =
document.getElementById("contactForm");

const formMessage =
document.getElementById("formMessage");

contactForm.addEventListener(
"submit",
function(event){

event.preventDefault();

formMessage.classList.remove(
"success",
"error"
);

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const subject =
document.getElementById("subject").value.trim();

const message =
document.getElementById("message").value.trim();

if(
name === "" ||
email === "" ||
subject === "" ||
message === ""
){

formMessage.textContent =
"Please fill in all fields.";

formMessage.classList.add(
"error"
);

return;

}

formMessage.textContent =
"Thank you! Your message has been sent successfully.";

formMessage.classList.add(
"success"
);

contactForm.reset();

}
);

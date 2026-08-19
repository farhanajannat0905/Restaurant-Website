const reservationForm =
document.getElementById("reservationForm");

const reservationList =
document.getElementById("reservationList");

const formMessage =
document.getElementById("formMessage");

let reservations =
JSON.parse(localStorage.getItem("reservations")) || [];

displayReservations();

reservationForm.addEventListener(
"submit",
function(event){

event.preventDefault();

const customerName =
document.getElementById("customerName").value.trim();

const phone =
document.getElementById("phone").value.trim();

const email =
document.getElementById("email").value.trim();

const guests =
document.getElementById("guests").value;

const date =
document.getElementById("date").value;

const time =
document.getElementById("time").value;

const specialRequest =
document.getElementById("specialRequest").value.trim();

if(
customerName === "" ||
phone === "" ||
guests === "" ||
date === "" ||
time === ""
){

formMessage.textContent =
"Please fill in all required fields.";

formMessage.classList.remove("success");
formMessage.classList.add("error");

return;
}

const reservation = {

customerName,
phone,
email,
guests,
date,
time,
specialRequest

};

reservations.push(reservation);

localStorage.setItem(
"reservations",
JSON.stringify(reservations)
);

displayReservations();

formMessage.textContent =
"Table booked successfully!";

formMessage.classList.remove("error");
formMessage.classList.add("success");

reservationForm.reset();

}
);

function displayReservations(){

reservationList.innerHTML = "";

reservations.forEach(function(reservation){

const row =
document.createElement("tr");

row.innerHTML = `
<td>${reservation.customerName}</td>
<td>${reservation.phone}</td>
<td>${reservation.guests}</td>
<td>${reservation.date}</td>
<td>${reservation.time}</td>
`;

reservationList.appendChild(row);

});

}

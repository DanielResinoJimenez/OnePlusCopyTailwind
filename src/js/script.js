/* Script js */

let username = document.getElementById("username");

username.textContent = localStorage.getItem("username");

let cart = document.getElementById("cart");
let modal = document.getElementById("modal");
let close = document.getElementById("close");

cart.addEventListener("click", () => {
    modal.style.display = "block";
})

close.addEventListener("click", () => {
    modal.style.display = "none";
})
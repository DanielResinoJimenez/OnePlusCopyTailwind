/* Script js */

let username = document.getElementById("username");

username.textContent = localStorage.getItem("username");

let cart = document.getElementById("cart");
let modal = document.getElementById("modal");
let close = document.getElementById("close");
let total = document.getElementById("total");
let prices = document.getElementsByClassName("price");

cart.addEventListener("click", () => {
    let tot = 0.00;
    for(let price of prices){
        tot += parseFloat(price.textContent);
    }
    modal.classList.remove("animate-modalclose")
    modal.classList.add("animate-modalopen");
    total.textContent = tot + ".00";
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
})

close.addEventListener("click", () => {
    modal.classList.remove("animate-modalopen");
    modal.classList.add("animate-modalclose");
    document.body.style.overflow = "visible";
})
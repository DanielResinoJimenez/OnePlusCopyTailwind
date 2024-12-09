/* Login JS */

let user = document.getElementById("username");
let pass = document.getElementById("password");
let send = document.getElementById("send");
let form = document.getElementById("form");
let error = document.getElementById("error");

let username = ["user", "admin", "daniel"];
let password = ["user", "admin", "1234"];

form.addEventListener("submit", (event) => {

    event.preventDefault();

    for(let i = 0; i <= username.length; i++){
        if(username[i] == user.value && password[i] == pass.value){
            localStorage.setItem("username", user.value);
            localStorage.setItem("password", pass.value);
            form.submit();
        }else{
            if(user.value == "" || pass.value == ""){
                error.textContent = "Debes de rellenar todos los campos";
            }else{
                error.textContent = "El usuario y la contraseña no coinciden";
            }
        }
    }
});

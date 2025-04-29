document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (username === "job" && password === "1234") {
        window.location.href = "exito.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});
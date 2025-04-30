document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault(); 

    let incompleto = document.getElementById("incompleto");
    let error = document.getElementById("error");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        incompleto.style.display = "block";
        return;
    }

    if (username === "jobnunez713@gmail.com" && password === "1234") {
        window.location.href = "exito.html";
        error.style.display = "none"; 
    } else {
        error.style.display = "block";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});
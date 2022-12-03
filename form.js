function captura() {
    var nombre = document.getElementById("Name").value;
    var apodo = document.getElementById("Nickname").value;
    var mail = document.getElementById("G-mail").value;
    var contrasena = document.getElementById("Password").value;
    var genero = document.getElementById("Man")
    var genero2 = document.getElementById("Woman");
    var ciudad = document.getElementById("City")
    var mayorDeEdad = document.getElementById("Yes")


    if (nombre == "") {
        alert("El nombre debe ser ingresado")


        if (apodo == "") {
            alert("El apodo debe ser ingresado")
        }

        if (mail == "") {
            alert("El correo debe ser ingresado")
        }

        if (contrasena == "") {
            alert("La contraseña debe ser ingresado")
        }

        if (genero == "") {
            alert("El genero debe ser ingresado")
        }

        if (ciudad == "") {
            alert("la ciudad debe ser ingresado")
        }

        if (mayorDeEdad == "") {
            alert("La mayoria de edad debe ser ingresada")
        }

        console.log(nombre);
        console.log(apodo);
        console.log(mail);
        console.log(contrasena);
        console.log(genero);
        console.log(genero2);
        console.log(ciudad);
        console.log(mayorDeEdad);

    };
};

function captura2() {
    var apodo = document.getElementById("Nickname").value;
    var mail = document.getElementById("G-mail").value;
    var contrasena = document.getElementById("Password").value;

    if (apodo == "") {
        alert("El apodo debe ser ingresado")
    }

    if (mail == "") {
        alert("El correo debe ser ingresado")
    }

    if (contrasena == "") {
        alert("La contraseña debe ser ingresado")
    }

    console.log(apodo);
    console.log(mail);
    console.log(contrasena);
};

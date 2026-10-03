// MOSTRAR INFORMACIÓN DE UN JUEGO

function mostrarJuego(juego) {

    let juegos = document.querySelectorAll(".informacion-juego");

    for (let i = 0; i < juegos.length; i++) {
        juegos[i].style.display = "none";
    }

    let informacion = document.getElementById(juego);

    informacion.style.display = "block";
}


// CERRAR INFORMACIÓN

function cerrarJuego(juego) {

    let informacion = document.getElementById(juego);

    informacion.style.display = "none";
}


// NOTICIAS

function leerNoticia(noticia) {

    let texto = document.getElementById(noticia);

    if (texto.style.display === "block") {

        texto.style.display = "none";

    } else {

        texto.style.display = "block";
    }
}


// BÚSQUEDA DE JUEGOS

let buscador = document.getElementById("buscador");

buscador.addEventListener("input", function() {

    let texto = buscador.value.toLowerCase();

    let resultado = document.getElementById("resultadoBusqueda");

    if (texto === "") {

        resultado.innerHTML = "";

    } else if (texto.includes("minecraft")) {

        resultado.innerHTML = "<p>Encontramos Minecraft 🎮</p>";

    } else if (texto.includes("gta")) {

        resultado.innerHTML = "<p>Encontramos GTA V 🎮</p>";

    } else if (texto.includes("fortnite")) {

        resultado.innerHTML = "<p>Encontramos Fortnite 🎮</p>";

    } else if (texto.includes("roblox")) {

        resultado.innerHTML = "<p>Encontramos Roblox 🎮</p>";

    } else {

        resultado.innerHTML = "<p>No encontramos ese juego.</p>";
    }

});


// FORMULARIO DE REVENTA

let formulario = document.getElementById("formReventa");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombreJuego").value;

    let precio = document.getElementById("precioJuego").value;

    let razon = document.getElementById("razonReventa").value;

    let resultado = document.getElementById("resultadoReventa");


    if (nombre === "" || precio === "" || razon === "") {

        resultado.style.display = "block";

        resultado.innerHTML =
            "<p>Por favor completa todos los campos.</p>";

    } else {

        resultado.style.display = "block";

        resultado.innerHTML =
            "<h3>Juego publicado</h3>" +
            "<p><b>Juego:</b> " + nombre + "</p>" +
            "<p><b>Precio:</b> $" + precio + "</p>" +
            "<p><b>Razón:</b> " + razon + "</p>";
    }

});


// FORMULARIO DE CONTACTO

function enviarMensaje() {

    let nombre = document.getElementById("nombre").value;

    let correo = document.getElementById("correo").value;

    let mensaje = document.getElementById("mensaje").value;

    let resultado = document.getElementById("mensajeContacto");


    if (nombre === "" || correo === "" || mensaje === "") {

        resultado.innerHTML =
            "Completa todos los campos.";

    } else {

        resultado.innerHTML =
            "¡Mensaje enviado correctamente, " + nombre + "!";
    }

}
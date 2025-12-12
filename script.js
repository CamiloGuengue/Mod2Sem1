document.addEventListener("DOMContentLoaded", () => {

    alert("Bienvenido a mi portafolio");

const btnCambiar = document.getElementById("btnCambiarTexto");
const parrafo = document.getElementById("parrafo");

btnCambiar.addEventListener("click", () => {
    if (parrafo.textContent === "Este es el texto original") {
        parrafo.textContent = "Este es el texto cambiado ✔";
    } else {
        parrafo.textContent = "Este es el texto original";
    }
});


    // Mostrar/ocultar contenido
    const btnToggle = document.getElementById("btnToggle");
    const caja = document.getElementById("caja");

    if (btnToggle && caja) {
        btnToggle.addEventListener("click", () => {
            caja.style.display =
                caja.style.display === "none" ? "block" : "none";
        });
    }
});


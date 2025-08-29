import "bootstrap";
import "./style.css";

window.onload = function () {
    // Arrays con parlabras
    let pronombres = ['mi', 'tu', 'el', 'nuestro'];
    let adjetivos = ['rápido', 'fuerte', 'gran', 'enorme'];
    let sustantivos = ['león', 'águila', 'arbol', 'silla'];
    let extensiones = ['.com', '.net', '.io', '.es']
    let dominiosGenerados = [];

    // Elementos del DOM
    const contenedor = document.getElementById('dominios-lista');
    const boton = document.getElementById('generar-btn')

    function generarDominio() {
        const pronombre = pronombres[Math.floor(Math.random() * pronombres.length)];
        const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
        const sustantivo = sustantivos[Math.floor(Math.random() * sustantivos.length)];
        const extension = extensiones[Math.floor(Math.random() * extensiones.length)];

        return pronombre + adjetivo + sustantivo + extension;
    }

    // Evento click
     boton.addEventListener("click", () => {
        const nuevoDominio = generarDominio();
        dominiosGenerados.push(nuevoDominio);

        // Mostrar solo el último dominio en el div (reemplaza el anterior)
        contenedor.innerHTML = `<h4>${nuevoDominio}</h4>`;

        // Mostrar todos los dominios generados en la consola
        console.clear();
        console.log("Dominios generados hasta ahora:");
        dominiosGenerados.forEach((dominio, index) => {
            console.log(`${index + 1}: ${dominio}`);
        });
    });
};

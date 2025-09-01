import "bootstrap";
import "./style.css";

window.onload = function () {
    // Arrays con parlabras
    let pronombres = ['mi', 'tu', 'el', 'nuestro'];
    let adjetivos = ['rápido', 'fuerte', 'gran', 'enorme'];
    let sustantivos = ['león', 'águila', 'arbol', 'silla'];
    let extensiones = ['.com', '.net', '.io', '.es']
    let dominiosGenerados = [];

    const contenedor = document.getElementById('dominios-lista');


    for (let i = 0; i < pronombres.length; i++) {
        for (let j = 0; j < adjetivos.length; j++) {
            for (let k = 0; k < sustantivos.length; k++) {
                for (let l = 0; l < extensiones.length; l++) {
                    const dominio = pronombres[i] + '-' + adjetivos[j] + '-' + sustantivos[k] + extensiones[l];
                    dominiosGenerados.push(dominio);
                    console.log(dominio);
                }
            }
        }
    }

    let htmlDominios = '<ul>';
    dominiosGenerados.forEach(dominio => {
        htmlDominios += `<li>${dominio}</li>`;
    });
    htmlDominios += '</ul>';

    contenedor.innerHTML = htmlDominios;

};

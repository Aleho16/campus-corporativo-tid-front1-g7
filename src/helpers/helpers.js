import { cursos } from "../models/modelo-cursos.js";

export function renderizarCatalogo(contenedor, categoria = "Todos") {

    contenedor.innerHTML = "";

    for (let i = 0; i < cursos.length; i++) {


        if (categoria !== "Todos" && cursos[i].categoria !== categoria) {
            continue;
        }

        const tarjeta = document.createElement("a");
        tarjeta.classList.add("tarjeta");
        tarjeta.href = cursos[i].pagina;

        tarjeta.innerHTML = `
            <h3>${cursos[i].titulo}</h3>
            <p><strong>Categoría:</strong> ${cursos[i].categoria}</p>
            <p>${cursos[i].descripcion}</p>

            <iframe width="560" height="315"
                src="${cursos[i].video}"
                frameborder="0"
                allowfullscreen>
            </iframe>
        `;

        contenedor.appendChild(tarjeta);
    }
}
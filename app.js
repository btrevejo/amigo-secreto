let amigosArray = []; // Array para almacenar nombres

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigosArray.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista. Por favor ingrese otro");
        return;
    }

    // Agregar el nombre al array
    amigosArray.push(nombreAmigo);

    // Actualizar la lista en el DOM
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de volver a renderizar

    for (let i = 0; i < amigosArray.length; i++) {
        const amigo = amigosArray[i]; // Obtener el nombre del amigo
        const nuevoAmigo = document.createElement("li"); // Crear un nuevo elemento <li>
         nuevoAmigo.textContent = `Amigo ${i+1} : ${amigo}`; // Agregar texto al elemento
        listaAmigos.appendChild(nuevoAmigo); // Agregar el elemento a la lista
    }

    inputAmigo.value = ""; // Limpiar el campo de texto


}

function sortearAmigo() {
    if (amigosArray.length === 0) {
        alert("No hay nombres en la lista. Agrega al menos un amigo.");
        return;
    }


    const indiceAleatorio = Math.floor(Math.random() * amigosArray.length);
    const amigoSecreto = amigosArray[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}
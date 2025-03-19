<h1>Amigo-secreto</h1> 
<h2>Desafío de amigo secreto donde se pone a prueba los conocimientos obtenidos de los cursos de programación de Alura.</h2>

## FUNCIONALIDADES A LOGRAR:

-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

-Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

-Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

-Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

El codigo en Visual Studio Code:
![Image](https://github.com/user-attachments/assets/aefbbdd6-e2ba-410e-beb9-8083526fa208)



## 1. Declaración del Array amigosArray


`let amigosArray = []; // Array para almacenar nombres`
-Explicación:

-amigosArray es un array vacío que se usará para almacenar los nombres de los amigos que el usuario ingrese.

-Este array es esencial para mantener los datos en memoria.

##2. Función agregarAmigo()
2.1. Obtener el valor del campo de texto

`const inputAmigo = document.getElementById("amigo");
const nombreAmigo = inputAmigo.value.trim();`

-document.getElementById("amigo") accede al elemento ID "amigo" (en este caso, un campo de texto <input>).

-inputAmigo.value obtiene el valor ingresado por el usuario en ese campo.

-trim() elimina espacios en blanco al inicio y al final del texto.

## 2.2. Validar la entrada

`if (nombreAmigo === "") {`
    `alert("Por favor, ingresa un nombre válido.");`
    `return;`
`}`

-Si el campo está vacío, se muestra una alerta al usuario. Esto no modifica el DOM, pero es una interacción con el usuario.

## 2.3. Validar nombres duplicados

`if (amigosArray.includes(nombreAmigo)) {`
    `alert("Este nombre ya está en la lista. Por favor ingrese otro");`
    `return;`
`}`

-Verifica si el nombre ya existe en el array amigosArray.

-Si el nombre está duplicado, se muestra una alerta. Tampoco modifica el DOM directamente.

## 2.4. Agregar el nombre al array

`amigosArray.push(nombreAmigo);`


-Agrega el nombre al array amigosArray.


## 2.5. Actualizar la lista 

`const listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML = ""; // Limpiar la lista antes de volver a renderizar`


-`document.getElementById("listaAmigos")` accede al elemento `<ul>` en el DOM que tiene el ID "listaAmigos".

-`listaAmigos.innerHTML` = "" limpia el contenido actual de la lista (<ul>).
-Esto es necesario para evitar duplicados al volver a renderizar la lista.

## 2.6. Recorrer el array y mostrar los nombres en la lista

`for (let i = 0; i < amigosArray.length; i++) {`
    `const amigo = amigosArray[i]; // Obtener el nombre del amigo`
    `const nuevoAmigo = document.createElement("li"); // Crear un nuevo elemento <li>`
    `nuevoAmigo.textContent = `Amigo ${i+1} : ${amigo}`; // Agregar texto al elemento`
    `listaAmigos.appendChild(nuevoAmigo); // Agregar el elemento a la lista`
`}`


-document.createElement("li") crea un nuevo elemento <li> 

-nuevoAmigo.textContent asigna el texto al elemento <li> (en este caso, el nombre del amigo y su número en la lista).

-listaAmigos.appendChild(nuevoAmigo) agrega el nuevo elemento <li> como hijo de la lista (<ul>), actualizandose así

## 2.7. Limpiar el campo de texto
`
inputAmigo.value = ""; // Limpiar el campo de texto
`

-inputAmigo.value = "" vacía el campo de texto (<input>), permitiendo que el usuario ingrese un nuevo nombre.

## 3. Función sortearAmigo()
### 3.1. Validar si hay nombres en la lista
`
if (amigosArray.length === 0){ `
    `alert("No hay nombres en la lista. Agrega al menos un amigo.");`^
    `return;`
`}`

Si no hay nombres en el array, se muestra una alerta al usuario. 

## 3.2. Seleccionar un nombre aleatorio

`const indiceAleatorio = Math.floor(Math.random() * amigosArray.length);`
`^const amigoSecreto = amigosArray[indiceAleatorio];`

-Selecciona un nombre aleatorio del array amigosArray.


## 3.3. Mostrar el resultado
`
const resultado = document.getElementById("resultado");`
`resultado.textContent = El amigo secreto es: ${amigoSecreto};`


-document.getElementById("resultado") accede al elemento en el DOM que tiene el ID "resultado"

-resultado.textContent asigna el texto que muestra el nombre del amigo secreto, actualizando así el DOM.

Resumen de la Interacción con el DOM
Acceso al DOM:

Se usan métodos como document.getElementById() para acceder a elementos específicos del DOM (por ejemplo, el campo de texto, la lista de nombres y el área de resultados).

Modificación del DOM:

-Se crean nuevos elementos (document.createElement()).

-Se agregan elementos al DOM (appendChild()).

-Se actualiza el contenido de elementos existentes (textContent o innerHTML).

Eventos del DOM:

-Las funciones agregarAmigo() y sortearAmigo() se ejecutan en respuesta a eventos del usuario (por ejemplo, hacer clic en un botón).

Manipulación dinámica:

El DOM se actualiza dinámicamente en función de las acciones del usuario (agregar nombres, sortear un amigo).

Ejemplo de Flujo del DOM
Agregar nombres:

El usuario ingresa un nombre en el campo de texto y hace clic en "Añadir".

El nombre se agrega al array amigosArray.

La lista `(<ul>)` en el DOM se actualiza para mostrar el nuevo nombre.

Sortear amigo secreto:

El usuario hace clic en "Sortear amigo".

Se selecciona un nombre aleatorio del array.
**REPASO:**
¿Qué es el DOM?
-El DOM es como un árbol genealógico, pero en forma invertida. El elemento que precede al document es el window, que no es más que la ventana del navegador. En su estructura, document se encuentra en la parte superior como un objeto global y su elemento raíz es la etiqueta html y todos los demás descienden de él a través de sus ramas (branches).
![Image](https://github.com/user-attachments/assets/10885070-9137-4903-9de7-91f2c1b19214)


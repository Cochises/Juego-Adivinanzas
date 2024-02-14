// Se crea un número aleatorio del 1 al 100 y se asigna a numeroAleatorio
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Se obtiene la referencia de los elemento HTML con el id
let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");

// Se inicializa la variable intentos con el valor 0
let intentos = 0;

// Se declara la función verificarNumero
function verificarNumero() {

    // Se convierte el valor ingresado en numeroEntrada a un número entero y se almacena en numeroIngresado
    let numeroIngresado = parseInt(numeroEntrada.value);

    // Si el campo de entrada está vacío, se muestra un mensaje de error
    if (numeroEntrada.value == "") {
        mensaje.textContent = "¡Debes ingresar un número antes de comprobarlo!";
        mensaje.style.color = "red";
        numeroEntrada.focus();
        return;
    }

    // Si el número ingresado está fuera del rango del 1 al 100 o no es un número válido, se muestra un mensaje de error
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Ingresa un número válido del 1 al 100";
        mensaje.style.color = "red";
        numeroEntrada.value = "";
        return;
    }

    // Se incrementa la variable intentos en cada intento
    intentos++;

    // Se actualiza el contenido del elemento con id "intento" para mostrar la cantidad de intentos realizados
    intento.textContent = `Cantidad de Intentos: ${intentos}`;

    // Comparación de números y mensajes correspondientes
    if (numeroIngresado == numeroAleatorio) {
        mensaje.textContent = "¡Felicitaciones, has adivinado el número!";
        mensaje.style.color = "green";
        mensaje.disabled = true;
    } else if (numeroIngresado < numeroAleatorio) {
        mensaje.textContent = "¡Más Alto! El número es mayor al que dijiste";
        mensaje.style.color = "red";
        numeroEntrada.value = "";
    } else {
        mensaje.textContent = "¡Más Bajo! El número es menor al que dijiste";
        mensaje.style.color = "red";
        numeroEntrada.value = "";
    }

    // Se establece el foco en el campo de entrada para facilitar la siguiente conjetura
    numeroEntrada.focus();
}

// Se establece inicialmente el foco en el campo de entrada
numeroEntrada.focus();








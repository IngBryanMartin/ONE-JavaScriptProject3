let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número intentos
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();



/*
Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
function calcularIMC(peso, altura) {
    // Fórmula del IMC: peso / (altura * altura)
    var imc = peso / (altura * altura);
    return imc.toFixed(2); // Redondear el resultado a dos decimales
}

// Ejemplo de uso:
var peso = 70; // Peso en kilogramos
var altura = 1.75; // Altura en metros

var resultadoIMC = calcularIMC(peso, altura);
console.log("El IMC es: " + resultadoIMC);
*/

/*
Crea una función que calcule el valor del factorial de un número 
pasado como parámetro.
function calcularFactorial(numero) {
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    }

    return (numero === 0) ? 1 : numero * calcularFactorial(numero - 1);
}

// Ejemplo de uso:
var numero = 5;
var resultadoFactorial = calcularFactorial(numero);
console.log("El factorial de " + numero + " es: " + resultadoFactorial);
*/


/*
Crea una función que convierta un valor en dólares, pasado como 
parámetro, y devuelva el valor equivalente en reales(moneda 
brasileña,si deseas puedes hacerlo con el valor del dólar en 
tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(valorDolares) {
    const cotizacionDolar = 4.80;
    const valorReales = valorDolares * cotizacionDolar;
    return valorReales.toFixed(2);
}

var valorDolares = 100;
var valorEnReales = convertirDolaresAReales(valorDolares);
console.log("$" + valorDolares + " equivale a R$" + valorEnReales);
*/


/*
Crea una función que muestre en pantalla el área y el perímetro de 
una sala rectangular, utilizando la altura y la anchura que se 
proporcionarán como parámetros.
function calcularAreaYPerimetro(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);

    console.log("Área de la sala: " + area);
    console.log("Perímetro de la sala: " + perimetro);
}

var alturaSala = 5;
var anchuraSala = 8;

calcularAreaYPerimetro(alturaSala, anchuraSala);
*/


/*
Crea una función que muestre en pantalla el área y el perímetro de 
una sala circular, utilizando su radio que se proporcionará como 
parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCirculo(radio) {
    const pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;

    console.log("Área de la sala circular: " + area);
    console.log("Perímetro de la sala circular: " + perimetro);
}

var radioSalaCircular = 4;
calcularAreaYPerimetroCirculo(radioSalaCircular);
*/


/*
Crea una función que muestre en pantalla la tabla de multiplicar de 
un número dado como parámetro.
function mostrarTablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

var numeroTabla = 7;
mostrarTablaMultiplicar(numeroTabla);
*/


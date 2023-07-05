console.log("¡Hola, mundo!");

// Ejercicio 1: Variable numero
var numero = 4;
console.log(numero);
document.write(numero);
// Variable Texto
var perro = "rufo";
console.log(perro);
document.write(perro);
//Boolean
var guapa = true;
console.log(guapa);
document.write(guapa);

//Operaciones
var suma = numero + 2;
console.log(suma);
document.write(suma);

var resta = numero - 2;
console.log(resta);
document.write(resta);

var multi = numero * 2;
console.log(multi);
document.write(multi);

var division = numero / 2;
console.log(division);
document.write(division);

//Ejer Concatenar (unimos cadena de texto)

var frase = perro + " es muy guapo";
console.log(frase);

//función 1

function saludos(nombre) {
    let mensaje = "Hola, " + nombre;
    console.log(mensaje);
    document.write(mensaje + "<br>");
  }
  saludos("Marta")

//Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
//imprimir el resultado por la pantalla del navegador y la consola.
function sumar (a , b) {
    let resultado = a + b;
    console.log (resultado);
    document.write (resultado + "<br>");
  }
   sumar (5, 10);




 //Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
//del navegador y la consola.

 function determinarParidad(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par.");
      document.write(numero + " es un número par.");
    } else {
      console.log(numero + " es un número impar.");
      document.write(numero + " es un número impar.");
    }
 }
  numero = 7;
  determinarParidad(numero);

  //Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
  let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Azul",
    puertas: 4,
    motor: {
    tipo: "Gasolina",
    cilindros: 4,
    potencia: "109 CV"
    }
  };
  
  console.log(coche);
  

  //Crear una función que devuelva la marca del carro
    
function marca() {

  return coche.marca;
   
}
console.log(coche.marca);
document.write(coche.marca + "<br>");

//Crear una función que devuelva la cantidad de puertas que tiene el carro.
function puertas () {
  return coche.puertas;

}

console.log(coche.puertas);
document.write(coche.puertas);

//Crear una función que devuelva un atributo del objeto anidado.
function cocheMotor (){
  return coche.motor.tipo;
}
console.log(cocheMotor());

//Array 

let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Crear una función que añada un número al array
let nuevaLongitud = miArray.push(11)

console.log('miArray: ')
console.log(miArray)

// Crear una función que elimine los números pares de ese array
function pares(miArray) {
  for (let i = 0; i < miArray.length; i++) {
    if (miArray[i] % 2 === 0) {


    }
  } 
}
//Crear una función que devuelva el número mayor y menor de un array.
function encontrarNumeroMayor(miArray) {
  let mayor = miArray[10];

  for (let i = 1; i < miArray.length; i++) {
    if (miArray[i] > mayor) {
      mayor = miArray[i];
    }
  }

  return mayor;
}

let numeroMayor = encontrarNumeroMayor(miArray);
console.log("El número mayor es:", numeroMayor);


// function encontrarNumeroMenor(miArray) {
//   let menor = miArray[0];

//   for (let i = 10; i < miArray.length; i--) {
//     if (miArray[i] < menor ) {
//       menor = miArray[i];
//     }
//   }

//   return menor;
// }

// let numeroMenor = encontrarNumeroMenor(miArray);
// console.log("El número menor es:", numeroMenor);

// minusculas 

const textoEnMayusculas = "QUIERO DORMIR";


// Version larga 

function convertirMinusculas(texto) {
  const textoMinusculas = texto.toLowerCase();
  return textoMinusculas
}
  // Llamada guardando el valor devuelto por la funcion
const valor = convertirMinusculas(textoEnMayusculas);
console.log(valor);

// Version mediana - Llamada sin guardar el valor devuelto por la funcion
console.log(convertirMinusculas(textoEnMayusculas));

// Version corta

console.log(textoEnMayusculas.toLowerCase());


//Mayusculas

const textoMayusculas ='quiero comer gyozas';
function cambiarMayusculas () {
  const textoMayusculas = texto.toUpperCase();
}
console.log(textoMayusculas.toUpperCase());

//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en
//mayúscula
function convertirPrimeraLetraMayuscula(nombres) {
  let nombresConvertidos = [];  // Array para almacenar los nombres convertidos
  
  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let nombreConvertido = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    nombresConvertidos.push(nombreConvertido);
  }
  
  return nombresConvertidos;
}

nombres = ['andrea', 'marta', 'vero' ]
let nombresConvertidos = convertirPrimeraLetraMayuscula(nombres);
console.log(nombresConvertidos);


//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
function mostrarMensaje() {
  alert('¡Hola! Has hecho clic en el botoncito.');
}

//Cambiar el contenido de un elemento HTML mediante JavaScript.
const myElement = document.getElementById("parrafo");
myElement.style.color = "red";

//Ocultar y mostrar elementos HTML utilizando JavaScript.
function ocultar(){
  document.getElementById('ocultar').style.display = 'none';
  }

  ocultar()

//Crear un array de 10 nombres.

losNombres = ["Lau", "Marina", "Maggie", "Miriam", "Andreina", "Anais", "Mire","Lili","Amaia","Yolanda"]

//Crear una función que imprima en pantalla una lista con los nombres del array de nombres
function imprimirNombres(nombres) {
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
  }
}

//const losNombres = ["Lau", "Marina", "Maggie", "Miriam", "Andreina", "Anais", "Mire", "Lili", "Amaia", "Yolanda"];
imprimirNombres(losNombres);

document.write(losNombres)


//Crear un array de números
 const losNumeros = [1,2,3,4,5,6,7,8,9,10]

console.log (losNumeros.length)
document.write(losNumeros.length)

//Crea los nodos necesarios para imprimir un formulario.
const inputText = document.createElement('input');
inputText.type = 'text';

const form = document.createElement('form');
form.id = 'form'; // Asignamos el ID "form" al formulario

form.appendChild(inputText); // Agregamos el elemento inputText al formulario

document.body.appendChild(form); // Agregamos el formulario al body del documento


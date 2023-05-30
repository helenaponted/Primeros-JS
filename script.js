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
    var mensaje = "Hola " + nombre;
    console.log(mensaje);
  }
  
  saludos("Marta");

//funcion 2
function sumar (a, b) {
    return a+b; 
    
  }

 console.log (sumar(7, 5))
 document.write (sumar(7,5))

 //funcion 3

 function determinarParidad(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par.");
      document.write(numero + " es un número par.");
    } else {
      console.log(numero + " es un número impar.");
      document.write(numero + " es un número impar.");
    }
 }
  var numero = 7;
  determinarParidad(numero);

  //Objeto 1
  var coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Azul",
    motor: {
    tipo: "Gasolina",
    cilindros: 4,
    potencia: "109 CV"
    }
  };
  
  console.log(coche);

  // marca
    
function marca() {
    console.log(coche.marca);
}

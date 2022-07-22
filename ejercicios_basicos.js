// Ejercicio 1

// let edad = prompt("Introduce tu Edad");

// if (Number(edad) == edad) {
//     if (edad >= 18) {
//         document.write("Si tienes carnet, puedes conducir");
//     } else {
//         document.write("No tienes edad para sacar el carnet, ni manejar")
//     }
// }

// Ejecicio 2

// let calificacion = prompt("Introduce tu Calificacion en Números");

// if (calificacion >= 0 && calificacion <= 10 )  {
//     if (calificacion >= 0 && calificacion < 3) {
//         document.write ("Muy Deficiente");
//     }
//     else if (calificacion >= 3 && calificacion < 5) {
//         document.write ("Muy Insuficiente");
//     }
//     else if (calificacion >= 5 && calificacion < 6) {
//         document.write ("Muy Suficiente");
//     }
//     else if (calificacion >= 6 && calificacion < 7) {
//         document.write ("Bien");
//     }
//     else if (calificacion >= 7 && calificacion < 9) {
//         document.write ("Notable");
//     }
//     else if (calificacion >= 9 && calificacion <= 10) {
//         document.write ("Sobresaliente");
//     }
// } else {
//     document.write("La nota ingresada es incorrecta, " + calificacion + " (es negativa o mayor a 10)")};

// Ejercicio 3

// let resultado = "";

// do {
//     let cadena = prompt("Introduce una cadena");

//     if(resultado == "") {
//     resultado = resultado + cadena;
// } else {
//     resultado = resultado + "-" + cadena;
// }
// }   while(confirm("Desea seguir?"));
// document.write(resultado);

// Ejerccio 4

// let resultado = 0;

// do {
//     let numeros = Number(prompt ("Introduce un numero"));

//     if (!isNaN(numeros) && numeros != null && numeros != "") {
//         resultado = numeros + resultado;
//     } else {
//         alert("Esto no es un número")
//     }
// }   while (confirm("Desea seguir?"));
// document.write(resultado);

// Ejercicio 5

// let i = 0;
// let rep = 0;

// for (i = 1; i <= 30; i++) {
//     for (rep = 0; rep < i; rep++) {
//         document.write(i);
//     }
//     document.write("<br>");
// }

// Ejercicio 6

// let numeros = Number(prompt("Introduce el numero de inicio a la piramide inversa"));

// let i = numeros;
// let rep = numeros + 1;

// for (i; i >= 0; i--) {
//     numeros = numeros - 1;
//     for (rep = (numeros - 1) ; rep >= - 1; rep--) {
//         document.write(numeros + 1 );
//     }
//     document.write("<br>");
// }

// Ejerccio 7

// let numero = Number(prompt("Introduce un numero"));

// let i = 0;
// let rep = 0;

// if (numero <= 50 && numero >= 1) {
//     for (i = 1; i <= numero; i++) {
//         for (rep = 0; rep < i; rep++) {
//             document.write(rep + 1);
//         }
//         document.write("<br>");
//     }
// } else {
//     document.write("El numero introducido " + numero + " es Negativo, Nulo o Mayor de 50")
// }

// Ejercicio 8

// for (let i = 1; i <= 500; i++) {

//     if (i % 4 == 0 && i % 9 == 0 && i % 5 == 0 ) {
//         document.write(i + " Es multiplo de 4 y de 9");
//         document.write("<br>");
//         document.write("<hr>")
//     } else if (i % 4 == 0 && i % 9 == 0 ) {
//         document.write(i + " Es multiplo de 4 y de 9");
//         document.write("<br>");
//     } else if (i % 4 == 0 && i % 5 == 0) {
//         document.write(i + " Es multiplo de 4");
//         document.write("<br>");
//         document.write("<hr>")
//     } else if (i % 4 == 0) {
//         document.write(i + " Es multiplo de 4");
//         document.write("<br>");
//     } else if (i % 9 == 0) {
//         document.write(i + " Es multiplo de 9");
//         document.write("<br>")
//     } else if (i % 5 == 0) {
//         document.write(i);
//         document.write("<hr>")
//     } else {
//         document.write(i);
//         document.write("<br>");
//     };
// };

// Ejercicio 9  - COPIADO

// let filas = Number(prompt("Cuantas filas desea crear"));
// let columnas = Number(prompt("Cuantas columnas desea crear"));

// let resultado = filas * columnas;

// document.write("<table border>");

// for (let i = 0; i < filas; i++) {
//     document.write("<tr>");

//     for (let j = 0; j < columnas; j++) {
//         document.write("<td>");
//         document.write(resultado);
//         resultado--;
//         document.write("</td>")
//     };
//     document.write("</tr>");
// };
// document.write("</table>");

//  Ejercicio 10  FORMA COMPLEJA no terminada

// function capturar() {
//     function Persona  (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     let nombreCapturado = document.getElementById("name").value;
//     let edadCapturada = document.getElementById("age").value;

//     let nuevoSujeto = new Persona(nombreCapturado, edadCapturada);
//     agregar(nuevoSujeto);

// };

// let baseDatos = [];

// function agregar(nuevoSujetoPUEDEIRCUALQUIERCOSA) {
//     baseDatos.push(nuevoSujetoPUEDEIRCUALQUIERCOSA);
//     recorrerArreglo(baseDatos);

// };

// function recorrerArreglo(baseDatosPUEDEIRCUALQUIERCOSA) {
//     baseDatosPUEDEIRCUALQUIERCOSA.forEach(function(elemento) {
//         if (elemento.age <= 0 && elemento.age >= 120) {
//             document.write("Una o mas edades son inválidas ya que su valor es negativo, 0 o mayor a 120 años")
//         } else {
//             if (elemento[0].age > elemento[1].age && elemento.age[0] > elemento[2].age) {
//                 console.log(elemento.name);
//             } else if (elemento.age[1] > elemento.age[0] && elemento.age[1] > elemento[2].age){
//                 console.log(elemento[1].name);
//             } else if (elemento[2].age > elemento[0].age && elemento[2].age > elemento[1].age) {
//                 console.log(elemento[2].name);
//             } else {
//                 console.log("Una o mas personas tienen la misma")
//             }
//         }
//     });
// };

//  Ejercicio 10 Forma Principiante

// let nombre1 =  (prompt("Inserte su nombre"));
// let edad1 =  Number(prompt("Inserte su edad1"));
// let nombre2 =  (prompt("Inserte su nombre"));
// let edad2 =  Number(prompt("Inserte su edad2"));
// let nombre3 =  (prompt("Inserte su nombre"));
// let edad3 = Number(prompt("Inserte su edad3"));

// let maximo = Math.max(edad1,edad2,edad3);
// if (maximo == edad1) {
//     document.write("El mayor es " + nombre1);
// };
// if(maximo == edad2) {
//     document.write("El mayor es " + nombre2);
// };
// if (maximo == edad3){
//     document.write("El mayor es " + nombre3);
// };

// Ejercicio 11

// let cantidadDeNumeros = 3;
// let resultado = [];

// function randomNumber () {
//     for (let i = 0; i < cantidadDeNumeros; i++) {
//         let numeroAleatorio = Math.ceil(Math.random()*99);
//         resultado.push(numeroAleatorio) ;
//         document.write("<br>");
//     };

//     validacion(resultado);
//     console.log(resultado);
// };

// let ejercicio = randomNumber(resultado);

// function validacion(resultadoCualquierCosa) {
//     if (resultadoCualquierCosa[0] == resultadoCualquierCosa[1] | resultadoCualquierCosa [0] == resultadoCualquierCosa[2] | resultadoCualquierCosa[1] == resultadoCualquierCosa[2]) {
//         function repetir (randomNumber) {
//             randomNumber();
//         };
//     } else {
//         return (resultadoCualquierCosa);
//     }
// };

// Ejercicio 12

// for(let i = 1; i <= 14; i++) {
//     numRandom = Math.ceil((Math.random)()*3);
//     if (numRandom == 3) {
//         numRandom = "X";
//     }
//     console.log("Resultado " + i + ": " + numRandom);
// };

// Ejercicio 13

// for(let i = 1; i <= 14; i++) {
//     numRandom = Math.ceil((Math.random)()*100);
//     if (numRandom <= 60) {
//         numRandom = 1;
//     } else if (numRandom <= 90) {
//         numRandom = "X";
//     } else {
//         numRandom = 2;
//     }
//     console.log("Resultado " + i + ": " + numRandom);
// };

// Ejercicio 14

// let texto = prompt("Escriba un texto en minuscula");
// let mayusculas = texto.toUpperCase();
// document.write(mayusculas );

// Ejercicio 15

// let text = prompt("Escriba un texto");

// for (let i = 0; i < text.length; i++) {
//     let guion = "-";
//     let texto_guionado =  guion + text.charAt(i);
//     document.write(texto_guionado);
// }

// Ejercicio 16

// let string = prompt('Enter a string: ');
// let result = countVowel(string);

// function countVowel(str) {
//     const count = str.match(/[aeiou]/gi).length;

//     return count;
// }
// console.log(result);

// Ejercicio 17

// let string = prompt("Escribe un texto");
// let contadorStrApertura = "(";
// let contadorStrCierre = ")";
// let contadorStrAperturaPosicion = -1;
// let contadorStrCierrePosicion = -1;

// contadorStrAperturaPosicion = string.indexOf("(") + 1;
// console.log(contadorStrAperturaPosicion)

// contadorStrCierrePosicion = string.indexOf(")");
// console.log(contadorStrCierrePosicion)

// for (let i = 0; i <= string.length; i++) {
//     if (string.charAt(i) == contadorStrApertura) {
//         contadorStrAperturaPosicion = i + 1;
//     }
// };

// for (let j = 0; j <= string.length; j++) {
//     if (string.charAt(j) == contadorStrCierre) {
//         contadorStrCierrePosicion = j;
//     }
// };

// let extraer = (parentesis1, parentesis2) => {
//     let newString;
//     if (parentesis1 !== -1 && parentesis2 !== -1) {
//         newString = string.slice(parentesis1,parentesis2);
//     } else if (parentesis1 == -1 && parentesis2 == -1) {
//         newString = document.write("No hay parentesis ingresados");
//     } else if (parentesis1 == -1) {
//         newString = "";
//     } else if (parentesis2 == -1) {
//         newString = string.slice(parentesis1, string.maxlenght);
//     }
//     return newString;
// };
// let result = extraer(contadorStrAperturaPosicion, contadorStrCierrePosicion);
// console.log(result)

// FindIndex Slice ForEach.

// Ejercicio 18

// let cadena = prompt("Escriba un texto");
// let cadenaCorregida = cadena.toLowerCase();
// let cadenaSeparada = cadenaCorregida.split("");
// let arrayAlreves = cadenaSeparada.reverse();
// let nuevaCadena = arrayAlreves.join("");
// if (cadenaCorregida === nuevaCadena) {
//     document.write(cadenaCorregida + " y " + nuevaCadena + " Es un Palíndromo")
// } else {
//     document.write("No lo es.")
// }

// Ejercicio 19

// let cadena = prompt("Escriba un texto");

// let Polindromo = textito => {
// let cadenaCasiCorregida = textito.toLowerCase();
// let cadenaCorregida = cadenaCasiCorregida.replace(/ /g, "");
// let cadenaSeparada = cadenaCorregida.split("");
// let arrayAlreves = cadenaSeparada.reverse();
// let nuevaCadena = arrayAlreves.join("");

//     if (cadenaCorregida === nuevaCadena) {
//         document.write(cadenaCorregida + " y " + nuevaCadena + " Es un Palíndromo")
//     } else {
//         document.write("No lo es.")
//     }
// };

// let hola = Polindromo(cadena);

// Ejercicio 20

// let texto = prompt("Escribe un texto")
// let vowelVariation = ["A", "E", "I", "O", "U", "Á", "É", "Í", "Ó", "Ú", "a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
// let newArray = [];
// let firstVowel = (textoIntroducidoPai) => {
//     let array = textoIntroducidoPai.split("");
//     for(i = 0; i <= array.length; i++) {
//         for (i = 0; i <= vowelVariation.length; i++) {

//             newArray = newArray.push(array[i]);
//         }
//     };
//     return newArray;
// };

// let start = firstVowel(texto)

// console.log(Math.sign(5,7,8,14,4,63,2,-1))

// console.log(Math.min(5,7,8,5,3,2,65));

// let texto = prompt("Escribe un texto")
// let variacionDeVocales = ["A", "E", "I", "O", "U", "Á", "É", "Í", "Ó",
// "Ú", "a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];

// let newArray = [];

// let primeraVocal = (textoIntroducido) => {
//     let array = textoIntroducido.split("");
//     newArray = array.filter(function cicloVocales(vocales) {
//         for (let i = 0; i <= vocales.length; i++) {
//             if (array[i] == vocales[i]) {

//             }
//         }
//     })
//     return newArray;
// };

// let ciclo = cicloVocales (variacionDeVocales);
// let start = primeraVocal(texto);

// Ejercicio 22

// let number = Number(prompt("Introduce un numero"));

// function generateFibonacci(datos) {
//     let fibonacci = [];
//     if (number <= 0 | number > 100) {
//         console.log("Inserte otro numero desde 1 al 100")
//     } else {
//         fibonacci[0] = 0;
//         fibonacci[1] = 1;
//         for (let i = 2; i < datos; i++) {
//             fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//         }
//     };
//     document.write(fibonacci)
// }

// let start = generateFibonacci(number);

// Ejercicio 23 - TA-TE-TI

// // Ejecucion Humana

// // Ingresamos numero
// let miDato = () => {
//     let dato = Number(prompt("Elige donde quieres poner la X (Numero del 1 al 9)"));
//     if (dato == parseInt(dato) && dato >= 1 && dato <= 9) {
//         myTurn(dato - 1);
//     } else {
//         miDato();
//     }
// };

// // Fijarse si hay algun hueco vacio
// let myTurn = (numerito) => {
//     for (let i = 0; i < posiciones.length; i++) {
//         if (Object.values(posiciones[i]).includes("Vacío") == true) {
//            incluyeHumano(posiciones, numerito);
//         } else {
//             document.write("Juego Finalizado");

//         };
//     };
// };

// // Parte del Proceso
// let incluyeHumano = (posicion, numero) => {
//     for (let j = 0; j < posicion.length; j++) {
//         if (Object.values(posicion[numero - 1]).includes("Vacío")) {
//             ponerLaX(posicion, numero);
//         } else {
//             miDato();
//         };
//     }
// };

// // Pushear la X
// let ponerLaX = (array, number) => {
//     array.splice(number - 1, {letter:"X"});
// }

// // Ejecucion maquina

// // Numero random
// let pcTurn = () => {
//     let numeroAleatorio = Math.floor(Math.random()*9) + 1;
//     validarJuego(posiciones, numeroAleatorio);

// };

// // Fijarse si hay algun hueco vacio -ERROR
// let validarJuego = (arraicito, numeritoAleatorio) => {
//     if (arraicito.includes(incluye(arraicito)) == true){
//         return hueco(numeritoAleatorio, arraicito)
//     }
//     else {
//         return document.write ("Finish")
//     }
// };

// // Parte del Proceso -ERROR
// let incluye = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         array.includes("Vacío");
//     }
// }

// // Fijarse si la opcion elegida está vacia
// let hueco = (randomNumber, arraycitoo) => {
//     if (Object.values(arraycitoo[randomNumber - 1]).includes("Vacío")) {
//         ponerLaO(arraycitoo, randomNumber);
//     } else {
//         pcTurn();
//     };
// };

// // Pushear la O
// let ponerLaO = (array, numeritoRandom) => {
//     if (array[numeritoRandom - 1].letter == "Vacío") {
//         console.log(array[numeritoRandom - 1].letter)
//         (array[numeritoRandom -1].letter = "O");
//     } else {
//         pcTurn();
//     };
// };

// Ta te ti creacion de 0

document.getElementById("buttonPlayer2").disabled = true;
let count = 1;

let byTurn = () => {
   count++;
   if (count <= 9) {
    opponentButtonDisabled(count)
   } else {
    document.getElementById("buttonPlayer1").disabled = true;
    document.getElementById("buttonPlayer2").disabled = true;
   }
};

let opponentButtonDisabled = (turno) => {
    if(turno % 2 == 0) {
        document.getElementById("buttonPlayer1").disabled = true;
        document.getElementById("buttonPlayer2").disabled = false;
        gameValidation();
        player1();
    } else{
        turno++;
        document.getElementById("buttonPlayer2").disabled = true;
        document.getElementById("buttonPlayer1").disabled = false;
        gameValidation();
        player2();
    }
};

let gameValidation = () => {
// recorrer para ver si hay minimo un hueco
    // if ( hay espacio ) { verificar si alguien gano }
    // else { verificar si alguien gano sinó es empate}
if (l) {
    winValidation();
} else {
    winValidation();
}
    winValidation();
};

let player1 = () => {
    let numero = Math.floor(Number(prompt("Donde quieres poner la X?")));
    console.log(numero)
    if(numero >= 1 && numero  <= 9) {
        posiciones[numero - 1][0].have(numero, posiciones);
    } else {
        player1();
    }

    // Pedimos un dato, corroboramos que sea un numero y del 1 al 9
    // Validar que la casilla esté vacía, en caso de que no,
    // se llamará esta funcion automaticamente, sin incrementar el contador.
    // push "X" y se desbloquea el boton de p2.
};

let have = (number, arrayOfArray) => {
    if (arrayOfArray[number - 1][0].letter == "Vacío"){
        pushX(number,arrayOfArray);
    } else {
        player1();
    }
};

let pushX = (numerito, arraycito) => {
    arraycito.splice([numerito - 1][0](1,1, {letter:"X"}));
    console.log(arraycito[numerito-1].letter)
};

let player2 = () => {
    let numero = Math.floor(Number(prompt("Donde quieres poner la O?")));
    if(numero >= 1 && numero  <= 9) {
        let array = posiciones[numero - 1].have(numero, posiciones)
    } else {
        player2();
    }
    // Pedimos un dato, corroboramos que sea un numero y del 1 al 9
    // Validar que la casilla esté vacía, en caso de que no,
    // se llamará esta funcion automaticamente, sin incrementar el contador.
    // push "O" y se desbloquea el boton de p1.
};

let winValidation = () => {
    // Se verifican los valores de unas combinaciones, si algunas de estas
    // tienen el mismo valor en su casilla, se considera Ganador,
    // finalizando el juego, sin importar si hay espacios libres.
};

let gameReset = () => {
    // Boton que limpia el tablero y establece el contador en 1.

    for(let i = 0; i < posiciones.length; i++) {
        posiciones[i].letter == "";
    }

};

let posiciones = [
    [{letter: ""}], [{letter: ""}], [{letter: ""}],
    [{letter: ""}], [{letter: ""}], [{letter: ""}],
    [{letter: ""}], [{letter: ""}], [{letter: ""}]
];

let table = document.createElement('table');
let tbody = document.createElement('tbody');

table.appendChild(tbody);
document.getElementById('body').appendChild(table);

let posicion = [
  "pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9"
];

let row1 = document.createElement('tr');
posicion[0] = document.createElement('td');
posicion[0].innerHTML = posiciones[0][0].letter;
posicion[1] = document.createElement('td');
posicion[1].innerHTML = posiciones[1][0].letter;
posicion[2] = document.createElement('td');
posicion[2].innerHTML = posiciones[2][0].letter;

row1.appendChild(posicion[0]);
row1.appendChild(posicion[1]);
row1.appendChild(posicion[2]);
tbody.appendChild(row1);

let row2 = document.createElement('tr');
posicion[3] = document.createElement('td');
posicion[3].innerHTML = posiciones[3][0].letter;
posicion[4] = document.createElement('td');
posicion[4].innerHTML = posiciones[4][0].letter;
posicion[5] = document.createElement('td');
posicion[5].innerHTML = posiciones[5][0].letter;

row2.appendChild(posicion[3]);
row2.appendChild(posicion[4]);
row2.appendChild(posicion[5]);
tbody.appendChild(row2);

let row3 = document.createElement('tr');
posicion[6] = document.createElement('td');
posicion[6].innerHTML = posiciones[6][0].letter;
posicion[7] = document.createElement('td');
posicion[7].innerHTML = posiciones[7][0].letter;
posicion[8] = document.createElement('td');
posicion[8].innerHTML = posiciones[8][0].letter;

row3.appendChild(posicion[6]);
row3.appendChild(posicion[7]);
row3.appendChild(posicion[8]);
tbody.appendChild(row3);

// Ejercicio 24

// let piReducido = () => {
//     let piConDosDecimales = Math.PI.toFixed(2);
//     console.log(piConDosDecimales);
// }

// piReducido();

// Ejercicio 25

// let dato = () =>  {
//     Number(prompt("Escriba su Dni"));
//     dniToArray(dato);
// }

// let dniToArray = (arraySeparado) => {
//     let array = arraySeparado.split("");

//     dniFake(array)
// }

// let dniFake = (onlyNumeros) => {
//     for (let i = 0; i < onlyNumeros.length; i++) {
//         if (onlyNumeros[i] == Number) {
//             dniALetras(onlyNumeros);
//         } else {
//             dato();
//         }
//     }
// }

// let dniALetras = (dni) => {
//     let letras = [];
//     for (let i = 0; i < dni.length; i++) {
//         switch(dni[i]) {
//             case 0:
//               letras.push("Cero ")
//               break;
//             case 1:
//               letras.push("Uno ")
//               break;
//             case 2:
//               letras.push("Dos ")
//               break;
//             case 3:
//               letras.push("Tres ")
//               break;
//             case 4:
//               letras.push("Cuatro ")
//               break;
//             case 5:
//               letras.push("Cinco ")
//               break;
//             case 6:
//               letras.push("Seis ")
//               break;
//             case 7:
//               letras.push("Siete ")
//               break;
//             case 8:
//               letras.push("Ocho ")
//               break;
//             case 9:
//               letras.push("Nueve ")
//               break;
//             default:
//               console.log("Deberia ser imposible a menos que los numeros sean un String");
//         }
//     }
//     console.log(letras)
// };

// dato();

// Ejercicio 26

// let newProduct = () => {
//     let product = {
//         cost: Number(prompt("Valor del Producto")),
//         IVA: prompt("Incluye IVA, si/no"),
//     }
//     tieneIVA(product);
// };

// let tieneIVA = (producto) => {
//     if (producto.IVA == "si") {
//         producto.IVA = (producto.cost * 21) / 100;
//         producto.cost = producto.cost - producto.IVA;
//         let precioTotal = producto.cost + producto.IVA;
//         console.log(precioTotal)
//     } else {
//         producto.IVA = (21 * producto.cost) / 100;
//         let precioTotal = (producto.cost + producto.IVA);
//         console.log(precioTotal)
//     }
// };

// Ejercicio 27

// let text = () => {
//     let texto = prompt("Escribe tu texto");
//     let textToArray = texto.split("");
//     let reverseArray = textToArray.reverse();
//     let reverseText = reverseArray.join("");
//     document.write(reverseText);
// };

// text();

// Ejercicio 28

// let minMax = () => {
//     let min = prompt("Numero minimo del aleatorio");
//     let max = prompt("Numero maximo del aleatorio");
//     min = parseFloat(min);
//     max = parseFloat(max);
//     // verificacion(min, max);
//     console.log(indexOf(min))
// };

// // let verificacion = (minimo, maximo) => {
// //     if (minimo !== Number | maximo !== Number) {
// //         document.write("Solo aceptamos valores numericos.");
// //         minMax();
// //     } else if (minimo && maximo !== Number) {
// //         document.write("Solo aceptamos valores numericos.");
// //         minMax();
// //     } else {
// //         numeroAleatorio(minimo, maximo);
// //     }
// //     console.log(minimo, maximo);
// // }

// let numeroAleatorio = (mi, ma) => {
// console.log(Math.random() * (ma - mi) + mi);
// console.log(mi, ma)
// };

// minMax();

// Ejercicio 29
// Piedra paple tijera


// let scorer = [0,0];

// let playGame = () => {
  
//     document.getElementById("score").textContent = scorer[0] + " - " + scorer[1];
//     document.getElementById("_"+"0").style.display="none";
//     document.getElementById("__"+"0").style.display="none";
//     document.getElementById("_"+"1").style.display="none";
//     document.getElementById("__"+"1").style.display="none";
//     document.getElementById("_"+"2").style.display="none";
//     document.getElementById("__"+"2").style.display="none";
    
//     let p1 = Math.floor(Math.random()*3);
//     let p2 = Math.floor(Math.random()*3);
    
//     console.log(p1,p2)
//     document.getElementById("_"+p1.toString()).style.display="initial";
//     document.getElementById("__"+p2.toString()).style.display="initial";
 
//   if (p1 > p2 && !(p1 == 3 && p2 == 1)) {
//     document.getElementById("wins").textContent ="Gana P1";
//     scorer[0] = scorer[0] + 1;
//   } else if (p2 > p1 && !(p2 == 3 && p1 == 1)) {
//     document.getElementById("wins").textContent ="Gana P2";
//     scorer[1] = scorer[1] + 1;
//   } else if (p1 == p2) {
//     document.getElementById("wins").textContent ="Empate";

//   } else if (p1 == 3 && p2 == 1) {
//     document.getElementById("wins").textContent ="Gana P2";
//     scorer[1] = scorer[1] + 1;
//   } else {
//     document.getElementById("wins").textContent ="Gana P1";
//     scorer[0] = scorer[0] + 1;
//   }
// };

// let reset = () => {
//   console.log(scorer)
//   scorer = [0,0];
//   document.getElementById("score").textContent = scorer[0] + " - " + scorer[1];
//   document.getElementById("_"+"0").style.display="none";
//   document.getElementById("__"+"0").style.display="none";
//   document.getElementById("_"+"1").style.display="none";
//   document.getElementById("__"+"1").style.display="none";
//   document.getElementById("_"+"2").style.display="none";
//   document.getElementById("__"+"2").style.display="none";
//   document.getElementById("wins").textContent = "";

//   console.log(scorer)
// };



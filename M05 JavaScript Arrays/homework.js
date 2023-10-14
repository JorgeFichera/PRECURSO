/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var primerintento = array [0];
   return primerintento
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var segundointento = array.at (-1);
   return segundointento;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var tercerintento = array.length;
   return tercerintento;
}


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
var cuartointento = array.map (function (incrementando){
   incrementando = incrementando + 1;
   return incrementando;
})
return cuartointento;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push (elemento);
   var quintointento = array;
   return quintointento;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento) ;
   var sextointento = array ;
   return sextointento ;
   }

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var septimointento = palabras.join (" ");
   return septimointento;

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
var octavointento = array.includes (elemento);
return octavointento;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
var novenointento = arrayOfNums.reduce (function (sumando, sumando2){
   sumando = sumando + sumando2
   return sumando
})
return novenointento
}
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
var suma = agregarNumeros (resultadosTest)
var divisorio = resultadosTest.length
var promedio = suma / divisorio
return promedio
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var probandomasgrande = arrayOfNums[0]
   arrayOfNums.forEach (function (element) {
      if (element > probandomasgrande ) probandomasgrande = element;
   })
          return probandomasgrande ;
         }
      

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var producto = 1
   if (arguments.length === 0) {
      return 0;
   }

   var producto = 1;
   for (var i = 0; i < arguments.length; i++) {
      producto = producto * arguments[i];
   }

   return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var elementos = []
   var probando2 = 0
   for (var i=0; i < array.length; i++){
      if (array[i] > 18) {
         elementos.push (array[i]);
         probando2++;
      }
      
   }
   return elementos, probando2
   
}



function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   
   switch (numeroDeDia){
      case 1:
         return "Es fin de semana";
      case 2:
         return "Es dia laboral";
      case 3: 
         return "Es dia laboral";
      case 4:
         return "Es dia laboral";
      case 5:
         return "Es dia laboral";
      case 6:
         return "Es dia laboral";
      case 7: 
         return "Es fin de semana"; 
      default:
         return "Dia no valido";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if (num.toString()[0] == 9) {
   return true;
   } else {
return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var probando6 = array[0];
   var sonIguales = true;

   array.forEach(function (igualesasi) {
       if (igualesasi !== probando6) {
           sonIguales = false;
       }
   });

   return sonIguales;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoarreglo = [];

   array.forEach(function (mes) {
      if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
         nuevoarreglo.push(mes);
      }
   });

   if (nuevoarreglo.length === 3) {
      return nuevoarreglo;
   } else {
      return "No se encontraron los meses pedidos";
   }
}



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = []
   for (var i = 0; i <= 10; i++) {
        var multiplico6 = i * 6;
        tabla.push (multiplico6)
   }
   return tabla
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   console.log (array)
   var probando = 101
   var losdelcien = [];
   for (var i=0; i < array.length; i++ ) {
      if (array [i] >= probando) 
      losdelcien.push (array [i]);
   }
   return losdelcien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let conteo = false;
   const arr = [];
   do {
      conteo++;
      if (conteo === num) {
         return 'Se interrumpió la ejecución'
      }
      num = num + 2;
      arr.push(num);
   } while (conteo < 10);
   if (conteo === true) {
      return ['Se interrumpió la ejecución'];
   }
   return arr;
}

   




function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let conteo=0;
   const arr = [];
   do{
      conteo++
      if ( conteo === 5) {
         continue;
      }
      num = num +2
      arr.push(num);
   }while( conteo < 10){
      return arr
   }
   

}
console.log (continueStatement (-4))



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

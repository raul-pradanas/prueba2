console.log (ordenar([5,4,3,2,1,0]));

function ordenar(numeros){

   /* Extraemos los numeros */

   let impares = [];

   numeros.forEach(function(numero) {

     if ((numero % 2) == 1) {

       impares.push(numero);

     }

   });

   /* Ordenamos los números impares*/

   impares = impares.sort();

   /* Recorremos el array reemplazado los números

      impares por el impar ordenado que corresponda,

      dejando los pares en su misma posición*/

   let salida = [];

   numeros.forEach(function(numero) {

     if ((numero % 2) == 1) {

       salida.push(impares.shift());

     } else {

       salida.push(numero);

     }

   }); 

   return salida;

}
var array1 = [4,1,2,1,1,3,45,13,42];
var repetidos = {};
/* 
recorrer cada uno de los números del array mediante un bucle y sumarle, para cada uno de los números,
el contador que tuvieran anteriormente (o 0 si no había aparecido aparecido ese número todavía) más uno.
Al ser un array asociativo puedes saber cual es el contador que tenía cada número anteriormente debido
a que la clave dentro del array repetidos va a ser igual al número en cuestión. */
array1.forEach(function(numero){
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});
console.log(repetidos);

let nmayor = Object.entries(repetidos).reduce((a ,b)=> {
    return a[1] >= b[1] ? a : b 
});
console.log(nmayor);
let nm = nmayor[1];
let numerosMayores = [];

for (let i in repetidos) {
    if (repetidos[1] == nm[1]) {
        numerosMayores.push (i);
        }
}
console.log(numerosMayores);

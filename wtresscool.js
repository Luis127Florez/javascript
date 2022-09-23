const array =[2,2,2,2,4,6,4,3,,4,4,3,4,4,4,7,7,7,7,7,7,7].sort();
let numerosr = [];
let repeticion = [];
let contador = 0 ;
let cantidad = [];
for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    if (array[i + 1] === array [i]) {
        contador++
    }else{
        numerosr.push(array[i]);
        repeticion.push(contador);
        contador=1;
    }
}
console.log(numerosr);
console.log(repeticion);
let miRefran ;

miRefran = "vale mas un pajaro en mano que mil pajaros en el aire";
console.log(miRefran);

let longitudRefran = miRefran.length
console.log('la longitud es '+longitudRefran);
let novenaLetra;
let nuevoRefran= "";

for (let i = 0; i < miRefran.length; i++) {

    if (miRefran[i] !== ' ') {
        nuevoRefran += miRefran[i]
    }
     
}

for (let i = 1; i < nuevoRefran.length; i++) {
    if (i == 8) {
        novenaLetra = nuevoRefran[i]
        break;
    }
    
}
console.log('la novena letra es '+ novenaLetra);

let ultimaLetra = nuevoRefran[nuevoRefran.length - 1]

console.log('la ultima letra es '+ultimaLetra)

let índicePalabra = 0;
let espacios = 0;
let refranConX = "";

for (let i = 0; i < miRefran.length; i++) {

    if(miRefran[i] == ' '){
        espacios++
    }

    
    if(miRefran[i] == 'q' && miRefran[i + 1] == 'u' && miRefran[i + 2] == 'e'){
         
        refranConX += 'x';
        
        

        índicePalabra = espacios + 1;
    }else if(miRefran[i -1] == 'q' && miRefran[i] == 'u' && miRefran[i + 1] == 'e'){
        refranConX += 'x';

    }else if (miRefran[i - 2] == 'q' && miRefran[i - 1] == 'u' && miRefran[i] == 'e') {
        refranConX += 'x';
    }else{
        refranConX += miRefran[i]
    }
    //console.log(miRefran[i]);
}
if (índicePalabra == 0) {
    refranConX = "";
    let espacios = 0;
    for (let i = 0; i < miRefran.length; i++) {

        if(miRefran[i] == ' '){
            espacios++
        }
        if(miRefran[i] == 'u' && miRefran[i + 1] == 'n'){
            refranConX += 'x';
            índicePalabra = espacios + 1
        }else if(miRefran[i - 1] == 'u' && miRefran[i] == 'n') {
            refranConX += 'x';
            
        }else{
        refranConX += miRefran[i]
        }
        //console.log(miRefran[i]);
    }
}
 
/* let ultimaLetra = miRefran.charAt(miRefran.length -1 );

let índicePalabra =
console.log(ultimaLetra) */
console.log(índicePalabra);
console.log(refranConX);
console.log(miRefran.toLocaleUpperCase());
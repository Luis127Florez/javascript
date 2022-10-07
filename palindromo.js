let palabra = "A'n'a";

palimdromo = palabra.toLowerCase();

let contrario ='' ;

for (var i = palimdromo.length; i >= 0; i--) {
    let letra = palimdromo.charAt(i);

    if( palimdromo.charAt(i) != ''){
        contrario += letra;
    }
    //contrario += palabra.charAt(i)
}

if (palimdromo == contrario) {
    console.log("es un palimdromo")
} else {
    console.log("no es un palimdromo")
    
}
let Noletras = true ;
let edad = 0;

do {
    if (Noletras == false) {
        alert('ingrese solo valores numericos');
    }
    edad = prompt("Ingrese su edad", "");
    if (isNaN(edad)) {
        Noletras = false
    }else{
        Noletras = true
    }
} while (!Noletras);

if (edad >= 18) {
    alert('Usted Puede comprar');
    const div = document.querySelector("#info"); 
    div.innerHTML = "<h2>Usted Puede comprar</h2>"; 
} else {
    alert('No Usted No Puede comprar');
    const div = document.querySelector("#info"); 
    div.innerHTML = "<h2>!No¡ Usted No Puede comprar</h2>";
}


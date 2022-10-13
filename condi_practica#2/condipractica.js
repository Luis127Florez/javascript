let fin = "";
do {
let N1="";
let N2="";
let opera = 0;
let Noletras = true ;
let rango = true ;
do {
    if (Noletras == false) {
        alert('ingrese solo valores numericos');
    }
    N1 = prompt("Ingresa el primer numero", "");
    if (isNaN(N1)) {
        Noletras = false
    }else{
        Noletras = true
    }
} while (!Noletras);

do {
    if (Noletras == false) {
        alert('ingrese solo valores numericos');
    }
    N2 = prompt("Ingresa el segundo numero", "");
    if (isNaN(N2)) {
        Noletras = false
    }else{
        Noletras = true
    }
} while (!Noletras);

do {
    if (rango == false) {
        alert ('ingrese una opcion valida');
    }

    opera = (prompt("operacion,\ningrese el numero 1 para suma,\ningrese el numero 2 para resta,\ningrese el numero 3 para Multiplicacion,\ningrese el numero 4 para division", ""));

    if (isNaN(opera)) {
        rango = false;
    }else if (opera < 1 || opera > 4 ) {
        rango = false;
    }else{
        rango = true;
    }
} while ( rango == false );
let num1 = parseInt(N1);
let num2 = parseInt(N1);

switch (opera) {
    case '1':
        let suma = 0;
        suma = num1 + num2;
        alert('la suma de los valores es '+ suma );
        break;
    case '2':
        let resta = 0
        resta = num1 - num2;
        alert('la resta de los valores es '+  resta);

        break;    
    case '3':
        let mult = 0;
        mult = num1 * num2
        alert('la multiplicacion de los valores es '+ mult);

        break;    
    case '4':
        let div = 0;
        div = num1 / num2 ;
        alert('la division de los valores es '+ div);
        break;
}

  fin = prompt("desea terminar,\n 1 para si,", "");

} while (fin != '1' );
alert('adios')
/*let numero = '2'+ 2;

numero *= 2;


const resultado = String(numero);

console.log(resultado);
 */

/* 
let area =  (base, altura)=> base* altura;
console.log(area(6,3)); */

const articulo = {
    precio: 20000,
    cantida: 5,
    total1: function () {
       return this.precio * this.cantida 
    }

}

const articulo2 ={
    precio: 30000,
    cantida: 2,
    total2: function () {
        return this.precio * this.cantida
    }
}

const total ={
    articulo,
    articulo2,
    calcular:  function (descuento) {
      let mostrar = (this.articulo.total1() + this.articulo2.total2()) * descuento;
      return mostrar;
    }
}

console.log("el total a pagar es "+total.calcular(0.5));



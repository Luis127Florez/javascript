const factura =[
    {
        precio: 20,
        cantida:2
    },{
        precio: 30,
        cantida:5
    },{
        precio: 10,
        cantida:4
    }
]
const iva = 1.10

let total = factura.map(i => i.precio * i.cantida * iva)

console.log(total)

let totalfactura = total.reduce((a , b)=> a + b, 200)
console.log(totalfactura);


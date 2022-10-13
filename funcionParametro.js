function saludar (fun , x) {
 console.log(fun(x))   
}

function mensaje (nombre) {
    return "hola "+nombre 
}

console.log(saludar(mensaje, "luis"));
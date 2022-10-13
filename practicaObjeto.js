const perro = {
    nombre: "firulais",
    edad: 2,
    raza: "chanda",
    vacunas: true,
    sexo: "macho",
    saludar:function (orden) {
        console.log("el perro "+orden)
    }
}

console.log(perro.nombre);
console.log(perro.edad);
console.log(perro.vacunas);

perro.saludar("da la patita");
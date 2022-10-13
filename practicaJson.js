const jsonNombre  = '{"nomre":"Chailo"}';
const jsonEdad = '{"edad": 2}';
const jsonVacunas = '{"vacunas": true }';
const jsonColor = '{ }'; 
const jsonDatos = '{"datos": [ {"nombre":"Chailo"}, {"edad": 2 }, {"vacunas": true}, { } ]}';

console.log(jsonNombre);
console.log(jsonEdad);
console.log(jsonVacunas);
console.log(jsonColor);
console.log(jsonDatos);


const objNombre  = JSON.parse(jsonNombre);
const objEdad = JSON.parse(jsonEdad);
const objVacunas = JSON.parse(jsonVacunas);
const objColor = JSON.parse(jsonColor);
const objDatos = JSON.parse(jsonDatos);

console.log()
console.log()
console.log(objNombre);
console.log(objEdad);
console.log(objVacunas);
console.log(objColor);
console.log(objDatos);


const jsonNombre1  = JSON.stringify(objNombre);
const jsonEdad1 = JSON.stringify(objEdad);
const jsonVacunas1 = JSON.stringify(objVacunas);;
const jsonColor1 = JSON.stringify(objColor);
const jsonDatos1 = JSON.stringify(objDatos);

console.log()
console.log()
console.log(jsonNombre1);
console.log(jsonEdad1);
console.log(jsonVacunas1);
console.log(jsonColor1);
console.log(jsonDatos1);
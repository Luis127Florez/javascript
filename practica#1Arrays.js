let myArray =[ "pizza","gineo maduro","galleta","muslo de mosquito"];

myArray[0] = "lechuga";
myArray[1] = "broccoli";
let comidas = "";

myArray.forEach(element => {
    if (element != myArray[myArray.length - 1 ]) {
      comidas += element+'-'  
    }else{
        comidas += element
    }
});

console.log(comidas);
console.log(myArray)

let array2 = ["String",1,undefined,true];

array2.forEach(element=>{
    console.log(typeof(element))
});
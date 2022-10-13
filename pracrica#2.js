let myString = 'Javascript+es+super+cool' ;

let myArray = myString.split('+');
let arrayLength = myArray.length;
let lastItem = myArray[arrayLength - 1]
let myInverseArray = [];

for (let i = arrayLength - 1 ; i > (-1) ; i--) {
    myInverseArray.push(myArray [i])

    if (i == 0) {
        myInverseArray.push('PhP')
    }
    
}

console.log(arrayLength);
console.log(myArray);
console.log(lastItem);
console.log(myInverseArray);

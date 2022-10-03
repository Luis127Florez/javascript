let array =[1,4,65,8,8,9,67,6,] ;
array.splice(2, 0, 5);

/* array.forEach((element)=>{
    console.log(element)
});
 */
console.log(array)

let Narray = array.map(i => i + 3 );
console.log(Narray);



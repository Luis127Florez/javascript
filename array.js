let arr = [1,2,2,4,4,4,4,4,3,3]

let resultado = {}
let mas=0;

for (const i of arr){
resultado[i] + 1 || 1
} 
console.log(resultado);

let max = Object.entries(resultado).reduce(function(prev, curr){
    return prev[1] >= curr[1] ? prev : curr;
  });
  
  console.log(max); 


  let x=max[1];
  let y=[];
  
  for (const i in resultado) {
    if ( resultado[i] == x) {
      
      y.push(i)
    }
    
  }
  console.log("el numero/s que mas se repite es ---->",y);
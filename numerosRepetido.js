// muestra los numero repetidos de un array
array = [1,1,3,3,4,5,6,7,8,8,9,10];

rep = [];
 for (let i = 0; i < array.length; i++) {
    
    for (let j = i + 1; j < array.length; j++) {
        
        if (array[j] === array [i]) {

            let cont = 0
            for (let k = 0; k < array.length; k++) {
                
                if (rep[k] == array[i] ) {
                    cont++
                }
                         
            }
            if (cont == 0) {
                rep.push(array[i]);
            }   
            
            
        }
        
    }
    
 }
 console.log(rep);

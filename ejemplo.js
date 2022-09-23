//muestra solo los string de un array
function soloString (array){
    
    for (let i = 0; i < array.length; i++) {
        var C = array[i]

        if ( isNaN(C) ) {
            console.log( array[i])
        }        
    }   
}

const array = [1, "Henry", 2,"Tony"]

soloString(array)
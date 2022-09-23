const array =[2,4,6,4,4,4,4,4,4,7,7,7].sort();

var j = 0

var Nrepe = [];
var po = 0;
for (let i = 0; i < array.length; i++) {
    var veces = 0
    
    for (let c = 0; c < array.length; c++) {
        if (array [i] == array [c]) {
            j++;

            if (j > veces) {
                veces = j
                console.log(veces)
            }
        }     
    }
    j-=j
}


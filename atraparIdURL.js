

let id = (url) => {
    let numero = 0;
    let id ;

    for (let i = 0; i < url.length; i++) {
        if (url.charAt(i) == "/") {
            numero += 1
            if (numero == 4 && numero < 5 ) {
                id = url.charAt(i + 1)
            }
        } 
        
    }
    return id
} 


let url = 'https:/jh/lv45455uisbi/cdc/blio/bibl/hedfef//iofefet//eefefca/dsdsd/536'
let Obtenerid = url =>{

    let id;

    url.split('/').forEach( element => {
        //console.log ( Number(element))
        if ( Number(element) != NaN && element >= 1 ) {
            id = element;
        } 
   });  

   return id ;
}
console.log(Obtenerid(url));



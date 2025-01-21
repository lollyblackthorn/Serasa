//sua planta esta recebendo luz?
//sua planta esta recebendo agua
//sua planta esta 


const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {
        console.log("\nSua planta está recebendo luz?")
        let luz = (await input()).toLowerCase()//vai esperar o usuário digitar 
        
        console.log("\nSua planta está recebendo água?")
        let agua = (await input()).toLowerCase()//vai esperar o usuário digitar 
        
        if(agua != "sim" || luz != "sim"){
            console.log("ATENÇÃO: sua planta não está fazendo fotossíntese\n")
        }
        

    }
)()
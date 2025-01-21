const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {

        let resposta 
        
        while(resposta != "sim"){     
            console.log("\nDeseja sair do programa?")       
            resposta = (await input()).toLowerCase()

        }
                

    }
)()
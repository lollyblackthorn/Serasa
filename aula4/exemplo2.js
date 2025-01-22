const input = require('../input');

(
    async () => {

                       
        do{   //faça isso  
            console.log("Digite 10 para sair")       
            var contador = await input()

        }while(contador > 10) // enquanto isso for verdade
                

    }
)()
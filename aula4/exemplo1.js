const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {

        let contador = 1
        
        while(contador < 10){
            console.log("\nDigite 10 para sair do programa.")
            contador = await input()

        }
                

    }
)()
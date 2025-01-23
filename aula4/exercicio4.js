// peça um núero ao usuário e exiba o fatorial
//n! = n*(n-1)*(n-2)

const input = require('../input');

(
    async () => {

        console.log("\nDigite um número: ")   
        let numberIniti = await input()
        let num = numberIniti


        //let resultFatorial = num
        
        if( num == 0 || num == 1){
            console.log("\nFatorial = 1")
        }else{

            for(i = num - 1; i >= 1; i--){
                num = num*i
            }
            console.log(`\nO fatorial de ${numberIniti} é igual a ${num}\n`)

        }        


    }
)()
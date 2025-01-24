//função que recebe 2 numeros e retorna a soma deles

function soma(num1, num2){
    return num1 + num2
    
}



const input = require('../input');
(
    async () => {

        console.log("Insira o primeiro número: ")
        var num1 = parseInt(await input())

        console.log("Insira o segundo número: ")
        var num2 = parseInt(await input())

        
       console.log(`\nA soma de ${num1} + ${num2} é ${soma(num1, num2)}\n`)


    }
)()
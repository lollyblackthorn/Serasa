//função que recebe 2 numeros e retorna a multiplicação deles

import input from "../input.js";

//funçao async declarada
async function multiplicacao(){

    console.log("Insira o primeiro número: ")
    var num1 = await input()

    console.log("Insira o segundo número: ")
    var num2 = await input()

    return num1 * num2    
}

console.log(await multiplicacao())



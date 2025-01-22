/*
Exercício: Escreva uma lista com os 5 primeiros elementos quimicos da tabela periódica. Após isso faça 
um programa que pergunta ao usuário quantos ele quer listar, caso ele digite um número não listado,
exiba uma mensagem de erro
*/

const input = require('../input');

(
    async () => {

        const lista = ["Hidrogênio","Hélio","Lítio","Berílio","Boro"]

        console.log("\nQuantos elementos químicos você quer visualizar?")
        let qtdElementos = await input()

        let index = 0

        while (index < qtdElementos) {
            
            if (index < lista.length){
                
                console.log(lista[index] )    
                                            
            }else{
                console.log("Número de elemento inválido!")
            }
            index += 1            
            
        }       


    }
)()
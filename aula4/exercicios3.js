/*
Exercício: Escreva uma lista com os 5 primeiros elementos quimicos da tabela periódica. Após isso faça 
um programa que pergunta ao usuário quantos ele quer listar, caso ele digite um número não listado,
exiba uma mensagem de erro
*/

const input = require('../input');

(
    async () => {

        var lista = ["Hidrogênio","Hélio","Lítio","Berílio", "Boro"]

        console.log("\nQuantos gramas do elemento radioativo você possui?")
        let qtdMassaGramas = (await input()).toLowerCase()


        while (qtdMassaGramas > 0.000001) {
            console.log(qtdMassaGramas)
            qtdMassaGramas /= 2   //qtdMassaGramas = qtdMassaGramas/2

        }


    }
)()
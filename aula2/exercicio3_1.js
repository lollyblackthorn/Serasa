const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {
        console.log("\nEscreva um verso de poema para mim!")
        let poema = await input()//vai esperar o usuário digitar algo e vai armazenar na variável poema 
        
        console.log("\nQual o nome do autor?")// deve ser formatado KING,Stephen
        let author = await input()//vai esperar o usuário digitar algo e vai armazenar na variável author   
        const arrayAuthor = author.split(" ")//vai separar o nome do autor em um array a partir do espaço
        
        console.log(`${arrayAuthor[1].toUpperCase()}, ${author.charAt(0).toUpperCase()}${arrayAuthor[0].slice(1).toLowerCase()} escreveu ${poema}`)

        //${arrayAuthor[1].toUpperCase()} vai pegar o sobrenome do autor e transformar em maiúsculo
        //${author.charAt(0).toUpperCase()} vai pegar a primeira letra do nome do autor e transformar em maiúsculo
        //


    }
)()


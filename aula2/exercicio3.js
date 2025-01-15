const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {
        console.log("\nEscreva um verso de poema para mim!")
        let poema = await input()
        
        console.log("\nQual o nome do autor?")// deve ser formatado KING,Stephen
        let author = await input()
        const arrayAuthor = author.split(" ");
        let word = arrayAuthor[1].toUpperCase();
        //arrayAuthor[1] = arrayAuthor[1].toUpperCase();
        //let word = arrayAuthor[].

        console.log(word)


        //console.log(`\nVerso:\n ${poema}.\n\nAutor:\n ${author}.\n`)
        //split vai separar o meu vetor a partir do espaço e ai eu consigo trabalhar com os indices

    }
)()


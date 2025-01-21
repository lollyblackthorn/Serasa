const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {
        console.log("\nEscreva um verso de poema para mim!")
        let poema = await input()
        
        console.log("\nQual o nome do autor?")
        let author = await input()


        console.log(`\nVerso:\n ${poema}.\n\nAutor:\n ${author}.\n`)

    }
)()
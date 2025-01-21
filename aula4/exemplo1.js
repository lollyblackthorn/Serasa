const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {
        
        console.log("\nQual o nome do autor?")
        let author = await input()


        console.log(`\nVerso:\n ${poema}.\n\nAutor:\n ${author}.\n`)

    }
)()
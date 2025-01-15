const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {
        console.log("\nEscreva um verso de poema para mim!")
        let poema = await input()

        console.log(`\nQue lindo verso:\n${poema}\n`)

    }
)()
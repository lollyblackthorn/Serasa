const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {
        console.log("\nQuantos livros você leu em 2024?: ")
        let qtdBooks = await input()

        console.log(`\nVocê leu ${qtdBooks} livros em 2024, parabéns!\n`)

    }
)()
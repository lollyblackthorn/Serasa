
# TRANSFORME-SE -- Serasa + Gerando Falcões ![transforme-se](https://github.com/user-attachments/assets/3dc8e11a-3ce5-4a47-84d4-ef1c1944bdb1)



### Aula 1 - Lógica de programação 

A aula 1 abordou o "console.log()" e o conceito de interpolação `${}`que deve ser feito como o exemplo abaixo: 
console.log(`\nVocê leu ${qtdBooks} livros em 2024, parabéns!\n`)

Esta é a maneira correta de fazer interpolação. Lembrando que **console.log(`\n"Você leu " +qtdBooks+ " livros em 2024, parabéns!\n`)**
é na verdade uma gambiarra. Isso está caracterizado como concatenação e esse conceito está compreendido dentro de interpolação.

Quando você deseja executar um codigo via terminal pela barra de comando você deve digitar:
node "nomedoArquivo" e pressionar enter



### Aula 2 - Lógica de programação 

Abordou como pesquisar um arquivo ***('../input')*** --> você usa uma determinada quantidade de pastas, de acordo com o nível que vc quer acessar.

Como mudar a pasta no terminal: ***cd (nome da pasta)***

Explicou que se eu criar uma várivel dentro de chaves {}, você deve criar como **let** e não como **var** .
**let** é para variáveis locais e **var** para variáveis globais.
Outra maneira é criar como **const**, essa seria apenas para leitura, tem uma valor fixo e não pode/deve ser alterado.
Ex:
**var** identificacao 
**let** nome = "Frederica"
**const** PI = 3,14159

O **require** em Javascript funciona como se fosse o import de JAVA, sua função é importar uma biblioteca.

    const input = require('../input');

    /* () => {} isso é uma função anônima*/
    (
        async () => { //Essa função fará com que o programa leia a entrada do teclado
            console.log("\nQuantos livros você leu em 2024?: ")
            let qtdBooks = await input() //essa função fará com que o programa aguarde o usuário digitar algo

            console.log(`\nVocê leu ${qtdBooks} livros em 2024, parabéns!\n`) //imprimirá a saída através de interpolação

        }
    )()

*Atividade:* Vamos aprender a formatar uma saída de texto a partir do input do usuário. Para isso, faça pesquisas em fóruns e na documentação do javascript.

    -split vai transformar meu input em um vetor a partir dos espaços que o usuário inserir enquanto digita. A partir disso, eu consigo trabalhar com os indices que permitirá que eu manipule a formatação de saída.

    - toUpperCase() - função para deixar letras maiusculas
    - toLowerCase() - função para deixar letras minuculas
    - split(" ") - vai separar o nome do autor em um array/vetor a partir do espaço
    - charAt(0) - vai pegar a primeira letra de uma String. (Você consegue escolher o número do índice).
    - length  - vai retornar o tamanho/quantidade de algo. 
    - slice() - retorna um novo array contendo um subconjunto dos elementos do array original. Ex.: ${arrayAuthor[0].slice(1).toLowerCase()}

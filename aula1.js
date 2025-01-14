/* ## CONSOLE LOG, VAR
console.log("Hello World!\n")
console.log("Lorrany :)\n")

//Isso é um comentário longo: Javascript é uma linguagem é não tipada 


//Variável goblal
var cidade = "São Carlos" 
console.log(cidade)

cidade = 53
console.log(cidade)

cidade = 16
console.log(cidade)*/

/* ## Iterpolação: é um conceito maior do que o de concatenação, devemos interpretar que a concatenação está contida em interpolação já que ele abange string e número.
var numero = 993596013
var ddd = 16
console.log("DDD: ("+ ddd + ") " + numero)

//Jeito certo de fazer interpolação

console.log(`Tel: (${ddd}) ${numero} do Marcius`)*/

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//##Exercício 1: A população de Sanka em 2022 era de 254857 e em 2024 foi para 265294. A diferença de 2024 (265294) com 2022(254857) é de X. 

var pop2022 = 254857
var pop2024 = 265294

//var total = pop2024 - pop2022 ----> jeito 1 de fazer
var total  // é o jeito de deixar o valor da variavel em branco e atribuir depois
total = pop2024 - pop2022

console.log(`A diferença de 2024 para 2022 é de:  ${total}\n`)
console.log(`A diferença de 2024 para 2022 é de:  ${pop2024-pop2022}\n`)

console.log(`A diferença de 2024${pop2024} para 2022${pop2022} é de:  ${pop2024-pop2022}\n`)//resposta do professor*/


//## VETOR

var demografia = [
    "População", 254857,
    "Área", 11136907
]
//console.log("\n",demografia,"\n")
demografia[1] = 265294
//console.log(demografia)

//#Exercicio 2 - Calcular a densidade populacional e insiram no mesmo vetor(demografia) "Densidade",vDensidadePopulacional ----> DenPop = NumHabit/area
//vDensidadePopulacional = demografia[1] / demografia[3] //não preciso usar a váriavel auxiliar para isso
//console.log(vDensidadePopulacional)
demografia[4] = "Densidade"
demografia[5] = demografia[1] / demografia[3] //posso fazer o cálculo e salvar direto dentro do indice que eu quero
console.log(demografia)



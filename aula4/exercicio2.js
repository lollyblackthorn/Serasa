//O usuário deve digitar quanto em gramas ele tem do elemento radioativo. Depois você deve usar o while para simular no terminal o decaimento pela 
//meia vida. Até ter uma quantidade segura para interação humana
//100
//50
//25
//...

const input = require('../input');

/* () => {} isso é uma função anônima*/
(
    async () => {

        console.log("\nQuantos gramas do elemento radioativo você possui?")
        let qtdMassaGramas = (await input()).toLowerCase()

               
        while(qtdMassaGramas > 0.000001){     
            console.log(qtdMassaGramas)       
            qtdMassaGramas /=2   //qtdMassaGramas = qtdMassaGramas/2

        }
                

    }
)()

// Medidor de glicose pelo suor - conectividade com celular e relógio fit

import input from "../input.js";

//variaveis


//funçao async declarada
async function registerUser(){
    console.log("Insira o seu nome: ")
    var name = await input() //usar a func toUpperCase ou tratar para ficar no formato camelCase

    console.log("Insira o seu telefone: ")
    var telephone = await input()

    console.log("Insira o seu email: ")
    var email = await input()

    console.log("Insira o seu contato: ")
    var contatoEmergencia = await input()

    console.log("Insira a sua data de nascimento: ")
    var dataNascimento = await input()

    var user = {
        "Nome": name, //chave: valor
        "Telefone": telephone,  
        "Data de Nascimento": dataNascimento, 
        "Email": email,
        "Contato Emergência": contatoEmergencia     
    }
           
    return registerUser
}

async function niveisGlicose(){

    if(leituraHoraHora >= 70 || leituraHoraHora <= 100){
        console.log("Indice Normal.")
    }else{
        console.log("Indice com alteração!")
    }          
      
}

async function avisoBateria(){
    if (nivelBateria <= 15){
        console.log("Bateria Fraca!")
    }     
      
}

/*
async function leituraHoraHora(){
    
           
      
}



async function niveisGlicose(){
    
           
      
}

async function vincularConta(){
    
           
      
}

async function vincularConta(){
    
           
      
}

async function vincularConta(){
    
           
      
}

async function vincularConta(){
    
           
      
}






var register = []

do{
    //falta aqui
    register[0] = await registerUser()
    console.log("Deseja registrar mais um usuário?: ")
    var respostaUser = (await input()).toLowerCase()  

} while(respostaUser == "sim") //enquanto isso for verdade

console.log(register) 








contatosEmergencia()
  

leituraHoraHora()
niveisGlicose()
gerarRelatório()
localizador()


envioNotificacao()
solicitarSOS(msg, ligação - quando atingir indices que levem ao coma)
criarBackup()
avisoBateria()

apagarConta()
apagarHistorico()




leituraHoraHora >= 70 || leituraHoraHora <= 100

*/
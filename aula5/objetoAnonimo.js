// Faça uma agenda telefônica que vai ter uma funçõa que registre o nome e telefone de usuário enquanto o usuário digitar sim

import input from "../input.js";

//funçao async declarada
async function registerUser(){
    
    console.log("Insira o nome do usuário: ")
    var name = await input()

    console.log("Insira o telefone do usuário: ")
    var telephone = await input()       
   
    var user = {
        "Nome": name, //chave: valor
        "Telefone": telephone        
    } 
    return user
}

var register = []

do{
    //console.log(await registerUser()) //falta aqui
    //register = await registerUser()
    //for(i = 0; i .lenght )
    register.push(await registerUser())


    console.log("Deseja registrar mais um usuário?: ")
    var respostaUser = (await input()).toLowerCase()  


} while(respostaUser == "sim") //enquanto isso for verdade

console.log(register) 

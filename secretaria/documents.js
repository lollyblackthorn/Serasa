//Atributos = campos de um formulário
/*documentos - prontuário/dadosalunos, informações de ocorrencias, histórico, 
declaração de matricula, boletim, diploma, atestado, RELATÓRIO - */

var documents = []

function setDocuments(req){
    let d = {//lista, registro, objAnonimo
        id: req.id,
        descripition: req.descripition,
        url: req.url,                       //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
        createAt: req.createAt,             //data que foi criado
        userId: req.userId,
        type: req.type,                     //tipo de documento boletim, diploma, atestado, etc.


    }

    documents.push(d)                       //empurra o obj d na lista documents
}

setDocuments({
    id: 0,
    descripition: "Esse é meu primeiro post",
    url: "http://caminhodomeuarquivo.com",    //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
    createAt: "2000-01-31",                  //data que foi criado
    userId: 0,
    //type: req.type,                         //tipo de documento boletim, diploma, atestado, etc.
})

setDocuments({
    id: 1,
    descripition: "Esse é meu primeiro post",
    url: "http://caminhodomeuarquivo.com",    //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
    createAt: "2000-01-31",                  //data que foi criado
    userId: 0,
    //type: req.type,                         //tipo de documento boletim, diploma, atestado, etc.
})

console.log(documents)
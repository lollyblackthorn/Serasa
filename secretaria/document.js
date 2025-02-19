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

function getDocuments(req){
    return documents.find( p => p.descripition == req.search)
}

setDocuments({
    id: 0,
    descripition: "primeiro",
    url: "http://caminhodomeuarquivo.com",    //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
    createAt: "2000-01-31",                  //data que foi criado
    //userId: 0,
    //type: req.type,                         //tipo de documento boletim, diploma, atestado, etc.
})

setDocuments({
    id: 1,
    descripition: "primeiro",
    url: "http://caminhodomeuarquivo.com",    //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
    createAt: "2001-01-31",                  //data que foi criado
    //userId: 0,
    //type: req.type,                         //tipo de documento boletim, diploma, atestado, etc.
})

setDocuments({
    id: 2,
    descripition: "terceiro",
    url: "http://caminhodomeuarquivo.com",    //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
    createAt: "2002-01-31",                  //data que foi criado
    //userId: 0,
    //type: req.type,                         //tipo de documento boletim, diploma, atestado, etc.
})

let result = getDocuments({
    search: "primeiro"
})

console.log(documents)
console.log(result)
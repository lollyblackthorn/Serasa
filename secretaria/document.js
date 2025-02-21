//Atributos = campos de um formulário
/*documentos - prontuário/dadosalunos, informações de ocorrencias, histórico, 
declaração de matricula, boletim, diploma, atestado, RELATÓRIO - */

var documents = []

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(req.createAt)) {
        console.error('Data inválida. O formato correto é YYYY-MM-DD');
        return;
    }

function setDocuments(req){
    let d = {//lista, registro, objAnonimo
        id: req.id,
        description: req.description,
        url: req.url,                       //http:qualquercoisa. ou https-- caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
        createAt: req.createAt             //data que foi criado - YYYY-MM-DD
        //userId: req.userId,
        //type: req.type,                     //tipo de documento boletim, diploma, atestado, etc.
    }

    documents.push(d)                       //empurra o obj d na lista documents
}

function getDocuments(req){
    if(req == null || req == {}) return documents
    if(req.clausule == "and"){
        return documents.filter(d =>
            req.search != undefined && d.description.includes(req.search) &&  req.createAt != undefined && d.createAt > req.createAt
        )
    }else {req.clausule == "or"
        return documents.filter( d => (d.description.includes(req.search) || d.createAt > req.createAt ))
    }
    //return documents.filter( d => (d.description == req.search && d.createAt > req.createAt))
    //return documents.filter( d => (d.description.includes(req.search)||d.createAt > req.createAt ))
}

/*function showDocuments(req){ //função que se chama showDocuments ela vai pesquisar dentro do vetor o ID (ou uma coisa só usando o .find)
    return documents.find( d => (d.id == req.id))//vai retornar o id solicitado no console log caso ele exista
}*/

function showDocuments(id){ //função que se chama showDocuments ela vai pesquisar dentro do vetor o ID (ou uma coisa só usando o .find)
    return documents.find( d => (d.id == id))//vai retornar o id solicitado no console log caso ele exista
}

function putDocuments(req,id){
    let index = documents.findIndex(d => d.id == id)

    if(index == -1) return "Não encontrado"
    if(req.description != undefined) documents[index].description = req.description
    if(req.url != undefined) documents[index].url = req.url
    if(req.createAt != undefined) documents[index].createAt = req.createAt

    return documents[index]
    
}

setDocuments({
    id: 0,
    description: "primeiro ano de maracá",
    url: "http://caminhodomeuarquivo.com",    //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
    createAt: "2000-01-31",                  //data que foi criado
    //userId: 0,
    //type: req.type,                         //tipo de documento boletim, diploma, atestado, etc.
})

setDocuments({
    id: 1,
    description: "primeiro caristia",
    url: "http://caminhodomeuarquivo.com",    //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
    createAt: "2001-02-31",                  //data que foi criado
    //userId: 0,
    //type: req.type,                         //tipo de documento boletim, diploma, atestado, etc.
})

setDocuments({
    id: 2,
    description: "terceiro",
    url: "http://caminhodomeuarquivo.com",    //caso o usuário tenha q enviar algum arquivo/midia, pegar caminho de um arquivo
    createAt: "2002-03-30",                  //data que foi criado
    //userId: 0,
    //type: req.type,                         //tipo de documento boletim, diploma, atestado, etc.
})

let result = getDocuments({
    search: "primeiro",
    description: "terceiro",
    createAt: "2000-01-31",
    clausule: "or",
    //id: 3
})

let documentAtual = putDocuments({
    description: "terceiro lua",
    
},1)

//let show = showPost(1)
//console.log(showDocuments({id:1}))
console.log(result)
//console.log(show)
//console.log(documentAtual)


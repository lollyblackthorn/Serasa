var documents = [];

function setDocuments(req) {
    // Expressões Regulares
    const idRegex = /^[0-9]+$/; // Apenas números positivos
    const descriptionRegex = /^.{3,}$/; // Pelo menos 3 caracteres
    const urlRegex = /^(https?:\/\/[^\s]+)$/; // Começa com http:// ou https:// e não contém espaços
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD

    // Validações
    if (!idRegex.test(req.id)) {
        console.error("Erro: ID inválido. Deve ser um número positivo.");
        return;
    }
    if (!descriptionRegex.test(req.description)) {
        console.error("Erro: Descrição inválida. Deve ter pelo menos 3 caracteres.");
        return;
    }
    if (!urlRegex.test(req.url)) {
        console.error("Erro: URL inválida. Deve começar com http:// ou https://");
        return;
    }
    if (!dateRegex.test(req.createAt) || isNaN(Date.parse(req.createAt))) {
        console.error("Erro: Data inválida. Deve estar no formato YYYY-MM-DD e ser uma data válida.");
        return;
    }

    let d = {
        id: req.id,
        description: req.description,
        url: req.url,
        createAt: req.createAt
    };

    documents.push(d);
    console.log("Documento adicionado com sucesso:", d);
}

// Testando entradas válidas e inválidas
setDocuments({
    id: 0,
    description: "Primeiro ano de Maracá",
    url: "http://caminhodomeuarquivo.com",
    createAt: "2000-01-31"
});

setDocuments({
    id: "abc", // Inválido
    description: "Teste",
    url: "http://exemplo.com",
    createAt: "2024-02-21"
});

setDocuments({
    id: 1,
    description: "Ok",
    url: "exemplo.com", // Inválido
    createAt: "2024-02-21"
});

setDocuments({
    id: 2,
    description: "Outro teste",
    url: "https://validourl.com",
    createAt: "2024-13-01" // Mês inválido
});

console.log("Lista final de documentos:", documents);

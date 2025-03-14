const produtos = [
    {"codigo": 1, "nome": "Camiseta", "preco": 100.00, "categoria": "masculino"},
    {"codigo": 2, "nome": "Jaqueta", "preco": 200.00, "categoria": "masculino"},
    {"codigo": 3, "nome": "Calça", "preco": 150.00, "categoria": "masculino"},
    {"codigo": 4, "nome": "Saia", "preco": 80.00, "categoria": "feminino"},
    {"codigo": 5, "nome": "Vestido", "preco": 120.00, "categoria": "feminino"}
]

const getNome = (produtos) => {
    return produtos.map(produto => [
        produto.codigo,
        produto.nome
    ]);
}

const getPreco = (produtos) => {
    return produtos.map(produto => [
        produto.codigo,
        produto.preco
    ]);
}

const getCategoria = (produtos) => {
    return produtos.map(produto => [
        produto.codigo,
        produto.categoria
    ]);
}

const filterMasculino = (produtos) => {
    return produtos.filter(produtos => produtos.categoria === "masculino");
}

const filterFeminino = (produtos) => {
    return produtos.filter(produtos => produtos.categoria === "feminino");
}

const somaTotal = (produtos) => {
    return produtos.reduce((total, produtos) => total + produtos.preco, 0);
}

export default {
    produtos,
    getNome,
    getPreco,
    getCategoria,
    filterMasculino,
    filterFeminino,
    somaTotal
}
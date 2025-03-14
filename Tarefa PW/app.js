import produtos from './produtos.js';

console.log('GERENCIADOR DE PRODUTOS');

console.log('Nome dos produtos:');
console.log(produtos.getNome(produtos.produtos));

console.log('Preço dos produtos:');
console.log(produtos.getPreco(produtos.produtos));

console.log('Categoria dos produtos:');
console.log(produtos.getCategoria(produtos.produtos));

console.log('Produtos masculinos:');
console.log(produtos.filterMasculino(produtos.produtos));

console.log('Produtos femininos:');
console.log(produtos.filterFeminino(produtos.produtos));

console.log('Soma total dos preços dos produtos: ' + 'R$' + produtos.somaTotal(produtos.produtos));
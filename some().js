//exercicio 1 
const produtos = [
{ id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
{ id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
{ id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
{ id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const maior = produtos.some((valor) => valor.preco > 3000);
console.log(maior);

//exercicio 2

const produtos1 = [
{ id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
{ id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
{ id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
{ id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const teminativo = produtos.some((item) => item.ativo == false);
console.log(teminativo);                                                
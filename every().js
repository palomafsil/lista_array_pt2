//exercico 1 

const produtos1 = [
{ id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
{ id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
{ id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
{ id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const todos1 = produtos1.every((item) => item.preco >= 50);
console.log(todos1);

//exercico 2 

const produtos = [
{ id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
{ id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
{ id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
{ id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const todos = produtos.every((item) => item.estoque > 0);
console.log(todos);
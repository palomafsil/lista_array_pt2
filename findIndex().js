//exercicio 1

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

function deletarProdutoPorId(id) {
    const index = estoque.findIndex((item) => item.id === id);
    if (index === -1) {
        return { status: 404, message: "Produto não localizado para exclusão." }
    }
};

//exercicio 2 

const produtos1 = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const indiceInativo = produtos1.findIndex(
  produto1 => produto1.ativo === false
);

console.log("8.", indiceInativo);

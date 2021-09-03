let pedidos = [
  { id: 420, none: 'Dani', alimento: 'Sandubão de Bacon', bebida: 'Suco Limão', preco: 230 },
  { id: 157, none: 'Clara', alimento: 'Sandunbão Vegano', bebida: 'Suco de Laranja', preco: 59 },
  { id: 29, none: 'Pedro', alimento: 'Coxinha', bebida: 'Suco Uva', preco: 33 },
  { id: 30, none: 'Larissa', alimento: 'Sandunbão de Picanha', bebida: 'Refrigerante', preco: 49 },
  { id: 55, none: 'Zé', alimento: 'Pizza', bebida: 'Refrigerante', preco: 47 }

];

//Ele pega todos os valores e condensalo em um só. Exemplo: valor total do carrinho de compra. 

let pedido = pedidos.reduce((total, pedido) => {
  let { preco } = pedido;
  return total + preco;


}, 0);

console.log(pedido);

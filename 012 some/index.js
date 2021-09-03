let pedidos = [
  { id: 420, none: 'Dani', alimento: 'Sandubão de Bacon', bebida: 'Suco Limão' },
  { id: 157, none: 'Clara', alimento: 'Sandunbão Vegano', bebida: 'Suco de Laranja' },
  { id: 29, none: 'Pedro', alimento: 'Coxinha', bebida: 'Suco Uva' },
  { id: 30, none: 'Larissa', alimento: 'Sandunbão de Picanha', bebida: 'Refrigerante' },
  { id: 55, none: 'Zé', alimento: 'Pizza', bebida: 'Refrigerante' },

];


//Ele retorna um booleano 

let pedido = pedidos.some(pedido => {
  let { alimento } = pedido;
  return alimento == 'Pizza';
});

console.log(pedido);
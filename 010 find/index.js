let pedidos = [
  { id: 420, none: 'Dani', alimento: 'Sandubão de Bacon', bebida: 'Suco Limão' },
  { id: 157, none: 'Clara', alimento: 'Sandunbão Vegano', bebida: 'Suco de Laranja' },
  { id: 29, none: 'Pedro', alimento: 'Coxinha', bebida: 'Suco Uva' },
  { id: 30, none: 'Larissa', alimento: 'Sandunbão de Picanha', bebida: 'Refrigerante' },
  { id: 55, none: 'Zé', alimento: 'Pizza', bebida: 'Refrigerante' },

];

//obs: o Find retorna só um valor. Exemplo: CPF e Id tem valor unico.

let find = pedidos.find(pedido => {
  return pedido.id == 420;
});

console.log(pedidos);
//Com o New Set () a gente consegue tirar repetições 

const number = [1, 5, 4, 8, 5, 6, 4, 6, 5, 8, 9, 3, 1, 2, 2, 4, 8, 8, 7];

const string = ['Banana', 'Pera', 'Banana', 'Maça', 'Pera', 'Pitaia', 'Pitaia']

const uniqueNum = [... new Set(number)];
const uniqueStr = [... new Set(string)];


console.log(uniqueNum.sort);
console.log(uniqueStr.sort);

// .sort = começa a ordenar em forma crescente e alfabetica. 
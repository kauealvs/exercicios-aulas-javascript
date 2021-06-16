//array methods
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array);

// Gerando um array com valores triplicados
const tripled = array.map((item) => item * 3);
// console.log(tripled);

// Gerando um array com os números pares;
const evenNumbers = array.filter((item) => item % 2 === 0);
// console.log(evenNumbers);

// Percorrendo o array e mostrando cada um dos seus valores
// Perceba que há um segundo parâmetro opcional que é o
// índice do array
array.forEach((item, index) => {
	// console.log(`O valor de índice ${index} pertence ao item ${item}`);
});

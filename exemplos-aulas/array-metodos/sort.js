const array1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const array2 = ["banana", "maçã", "pera", "melancia", "ameixa"];

// Sem função de ordenação - problemas
// console.log(array1.sort());

// Sem função de ordenação - com texto funciona
// console.log(array2.sort());

// Resolvendo a questão com números
// console.log(
// 	array1.sort((a, b) => {
// 		return a - b;
// 	})
// );

// Boa prática para strings
// console.log(
// 	array2.sort((a, b) => {
// 		return a.localeCompare(b);
// 	})
// );

const array3 = [
	{
		id: 1,
		name: "Neil Peart",
		instrument: "Drums",
	},
	{
		id: 2,
		name: "Alex Lifeson",
		instrument: "Guitar",
	},
	{
		id: 3,
		name: "Geddy Lee",
		instrument: "Bass",
	},
];

// Ordenando objetos por "instrumento"
// console.log(
// 	array3.sort((a, b) => {
// 		return a.instrument.localeCompare(b.instrument);
// 	})
// );

//Funções nomeadas são aquelas que recebem um nome
//para que possam ser chamadas
//escritas como function nome(){} ou const nome = () => {}

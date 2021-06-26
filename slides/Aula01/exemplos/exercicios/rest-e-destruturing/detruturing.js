//cria uma função de evento que receba como parametro a key já desestruturada

//cria uma função que caputre um input Html
//e que armazene o value e o placeholder em uma variavel por meio de desestruturação

//exemplos
const carro = {
	marca: "fiat",
	ano: 2020,
	portas: 4,
	rodas: 6,
	consumo: {
		estrada: {
			consumoMedio: "29 litos/km",
		},
		cidade: {
			consumoMedio: "32 litros/km",
		},
		rural: {
			consumoMedio: "34 litros/km",
		},
	},
};
// const marca = carro.marca;
// const ano = carro.ano;

const { marca, portas, ano = 1990, rodas = 4 } = carro;
// const {
// 	consumo: {
// 		cidade: { consumoMedio: consumoCidade },
// 		estrada: { consumoMedio: consumoEstrada },
// 	},
// } = carro;

const frutas = ["banana", "uva", "abacaxi"];

// const banana = frutas[0];
// const uva = frutas[1];
// const abacaxi = frutas[2];

const [banana, uva, abacaxi] = frutas;

const nome = "francisco";
const sobrenome = "nicomedes";

const [nome2, sobrenome2, idade] = ["kaue", "sena", 23];

console.log(nome2, sobrenome2, idade);

const input = document.querySelector(".input");

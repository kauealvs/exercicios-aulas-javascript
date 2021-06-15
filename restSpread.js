// window.addEventListener("load", start);
let arrayNumeros = [1, 2, 3, 4, 5, 6];
const start = () => {
	console.log("garanti que carregou");
};
//add com push
const adiciona = (valor, valor2) => {
	arrayNumeros.push(valor, valor2);
	console.log(arrayNumeros);
};
// adiciona(10, 11, 12);
//add com spread
const adicionaSpread = (...valor) => {
	array = [...arrayNumeros, ...valor];
	console.log(array);
};

adicionaSpread(20, 23, 28, 30, 40, 46, 56);

//soma infinia com rest

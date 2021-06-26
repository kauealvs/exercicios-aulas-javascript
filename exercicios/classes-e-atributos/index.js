//crie uma função que adiciona a todos elementos do menu uma  classe de ativo.
let lista = document.querySelectorAll("li");
let botao = document.querySelector("button");
let elementoa = document.querySelector("a");

lista = Array.from(lista);
const adicionaClasseAtivo = (lista) => {
	const percorreArray = lista.map((novoArray) => {
		novoArray.classList.remove("inativo");
		novoArray.classList.add("ativo");
	});
	return percorreArray;
};

//crie uma função que adiciona a todos elementos do menu uma  classe de inativo.
const adicionaClasseInativo = (lista) => {
	const percorreArray = lista.map((novoArray) => {
		novoArray.classList.add("inativo");
		novoArray.classList.remove("ativo");
	});
	return percorreArray;
};
//crie uma função que remova todas as classes ativas do menu menos a primeira.
const resetaClasses = (lista) => {
	const percorreArray = lista.map((novoArray, index) => {
		if (index != 0) {
			novoArray.classList.remove("inativo", "ativo");
		}
	});
	return percorreArray;
};
//crie uma função que é acionada ao clique do botão e faça um toggle da classe ativo pra inativo
const toggleClases = (lista) => {
	const percorreArray = lista.map((novoArray) => {
		novoArray.classList.add("ativo");
		if (novoArray.classList.contains("inativo")) {
			novoArray.classList.replace("inativo", "ativo");
		} else {
			novoArray.classList.replace("ativo", "inativo");
		}
	});
	return percorreArray;
};
//crie uma função que modifique o href dos elemtos do menu
console.log(elementoa.getAttribute("href"));

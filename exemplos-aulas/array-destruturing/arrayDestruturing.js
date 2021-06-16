//Extrair o background color, color, width e heigth do botão
const btn = document.querySelector(".btn");
const btnStyles = getComputedStyle(btn);

//troque o valor das variavés abaixo

let cursoAtivo = "Html";
let cursoInativo = "Javascript";

//corigir a desestruturação abaixo

const gato = {
	nome: "Charlie",
	cor: "malhado",
};

const { charlieCor: cor } = gato;

const viacepAPI = `https://viacep.com.br/ws/04190000/json/`;
const requisicao = fetch("./ex.json");

// requisicao.then((r) => {
// 	r.json().then((viacep) => {
// 		console.log(viacep);
// 		const div = document.querySelector("div");
// 		const ibge = viacep.ibge;
// 		const bairro = viacep.bairro;
// 		const uf = viacep.uf;
// 		const cidade = viacep.cep;
// 		div.textContent = bairro;
// 	});
// });

// const requisisaoAssincrona = async () => {
// 	const requisicao = await fetch(viacepAPI);
// 	const dadosTranformados = await requisicao.json();
// 	appendElements(dadosTranformados);
// };

// const appendElements = (dados) => {
// 	console.log("função append", dados);
// };
// requisisaoAssincrona();

// requisicao.then((r) => {
// 	r.json().then((apiDevs) => {
// 		apiDevs.forEach((devAtual) => console.log(devAtual));
// 	});
// });

const objeto = `[
	{
	"id": 1,
	"nome": "kaue",
	"dev": true
	},
	{
		"id": 2,
		"nome": "farancisco",
		"dev": true
	}
]`;

const convertidoParaObjeto = JSON.parse(objeto);
const convertidoParaString = JSON.stringify(convertidoParaObjeto);

console.log(localStorage.setItem("ArrayDeDevs", convertidoParaString));
console.log(JSON.parse(localStorage.ArrayDeDevs));

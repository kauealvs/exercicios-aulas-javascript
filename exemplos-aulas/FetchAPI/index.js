const viacepAPI = `https://viacep.com.br/ws/04190000/json/`;

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

const requisisaoAssincrona = async () => {
	const requisicao = await fetch(viacepAPI);
	const dadosTranformados = await requisicao.json();
	appendElements(dadosTranformados);
};

const appendElements = (dados) => {
	console.log("função append", dados);
};
requisisaoAssincrona();

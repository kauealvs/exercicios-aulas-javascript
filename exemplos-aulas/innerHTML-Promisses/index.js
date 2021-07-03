//innerHTM, innerText e outerHTML

const p = document.querySelector("p");

p.innerHTML = "<a>troquei pra um link</a>";
p.innerText = "<a>troquei pra um link</a>";
p.outerHTML = "<a>troquei pra um link</a>";

//resolve e reject
const condicao = true;

const aquiTemUmaPromise = new Promise((resolve, rejeita) => {
	if (condicao == true) {
		setTimeout(() => {
			resolve({ nome: "francisco", idade: 30 });
		}, 3000);
	} else {
		setTimeout(() => {
			rejeita("sua promisse foi rejeitada pq o tempo do servidor expirou");
		}, 2000);
	}
});

aquiTemUmaPromise
	.then((valorPromessa) => {
		const dados = valorPromessa.idade;
		return dados;
	})
	.then((qualquerCoisa) => {
		console.log(qualquerCoisa);
	});

const capturaNome = (respostaDaPromisse) => {
	const nome = respostaDaPromisse.nome;
	console.log(nome);
	return nome;
};

aquiTemUmaPromise.catch(() => {
	console.log(
		"infelizmente sua promisse não foi resolvida por problemas técnicos entre em contato com o adm!"
	);
});

aquiTemUmaPromise.finally(() => {
	console.log("A promisse acabaou e eu entrei no finaly");
});

//mostrar o then

const data = {
	title: "javascript",
	body: "teste",
	userId: 85,
};
const url = "https://jsonplaceholder.typicode.com/posts";
const option = {
	method: "GET",
	headers: {
		"content-type": "application/json; charset=utf-8",
	},
};

fetch(url, option).then((r) => console.log(r.headers.get("")));

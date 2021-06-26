window.addEventListener("load", start);

function start() {
	var form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
	// Evitando o refresh
	event.preventDefault();
	console.log(event);
	var input = document.querySelector("#text");
	var text = input.value;

	var result = document.querySelector("#result");
	result.textContent = "O texto acima possui " + +text.length + " caracteres";
}

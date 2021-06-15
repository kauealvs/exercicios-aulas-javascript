window.addEventListener("load", start);

function start() {
	var square = document.querySelector("input");
	// square.addEventListener("keydown", handleKeyDown);
	square.addEventListener("keyup", handleKeyUp);
	// square.addEventListener("keypress", handleKeyPress);
	// square.addEventListener("change", handleChange);
	// square.addEventListener("input", handleInput);
}

function handleKeyDown(event) {
	var message = "Evento keydown com a tecla " + event.key;
	console.log(message);
}

function handleKeyPress(event) {
	var message = "Evento keypress com a tecla " + event.key;
	console.log(message);
}

function handleKeyUp({ key, keyCode }) {
	var message = "Evento keyup com a tecla " + key + keyCode;
	console.log(message);
}

function handleChange(event) {
	var message =
		"o input está sendo monitorado pelo evento change e agora tem o valor de: " +
		event.target.value;
	console.log(message);
}

function handleInput(event) {
	var message =
		"o input está sendo monitorado pelo evento input e agora tem o valor de: " +
		event.target.value;
	console.log(message);
}

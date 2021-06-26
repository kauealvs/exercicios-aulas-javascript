//exemplo do  texto
const helloP = document.querySelector(".hello");
const javacriptP = document.querySelector(".javascript");

const hello = (event) => {
	console.log(event.target);
};
helloP.style.cursor = "pointer";

helloP.addEventListener("click", hello);

const removeHello = () => {
	helloP.removeEventListener("click", hello);
	alert("removi o evento!");
};

// javacriptP.addEventListener("mouseover", removeHello);

// const print = () => {
// 	console.log("1 segundo");
// };
const cliquei = ({ target }) => {
	target.classList.toggle("active");
};

const btn = document.querySelector("a");
btn.addEventListener("click", cliquei);

// for (let i = 0; i <= 20; i++) {
// 	setTimeout(() => {
// 		console.log(i + "s");
// 	}, 1000 * i);
// }
// let incremento = 0;

// const intervalo = setInterval(() => {
// 	incremento += 1;
// 	console.log(incremento);
// 	if (incremento > 20) {
// 		clearInterval(intervalo);
// 	}
// }, 1000);

let teste = setTimeout(() => {
	let soma = 1 + 1;
	return soma;
}, 2000);

console.log(teste);

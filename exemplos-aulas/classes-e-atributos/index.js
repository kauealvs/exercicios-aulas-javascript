const menu = document.querySelector(".menu");

menu.classList.add("nova-classe");
menu.classList.remove("p");
menu.classList.toggle("p");
menu.classList.toggle("p");
const contemClasse = menu.classList.contains("nova-clas");

if (menu.classList.contains("nova-clase")) {
	menu.classList.add("adicionei-uma-nova-classe-com-contains");
	console.log(menu.classList.value);
} else {
	menu.classList.remove("vtex");
}

menu.classList = `class="ativo"`;

// console.log(menu.classList.value);

console.log(menu.attributes["class"]);

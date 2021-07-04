// Crie as seguintes variáveis:
// – titulo : conterá a primeira tag h1;
let titulo = document.querySelector("h1")
console.log(titulo)
// – subtitulo : conterá a primeira tag p;
let subtitulo = document.querySelector("p")
console.log(subtitulo)
// – descricao : conterá a tag com id = descricao;
let descricao = document.querySelector("#descricao")
console.log(descricao)
// – listaItens : conterá todas as tags com classe = itens;
let listaItens = document.querySelectorAll(".itens")
console.log(listaItens)
listaItens = Array.from(listaItens)
console.log(listaItens)

// Dicas importantes:
// Use a conotação (“.elemento”) para capturar por classe;
// Use a conotação (“#elemento”) para capturar por ID;
// Use a conotação (“elemento”) para capturar por elemento;

//troque o titulo de H1 para "Lista de compras".
titulo.textContent = "Lista de compras"
//troque o subtitulo para "Aqui está anotado minha lista de compras"
subtitulo.textContent = "Aqui está anotado minha lista de compras"
//altere os itens da lista
listaItens[0].textContent = "Caderno";
listaItens[1].textContent = "Lapiz"
listaItens[2].textContent = "Celular"
listaItens[3].textContent = "Mochila"

//adicione mais itens de compras a lista

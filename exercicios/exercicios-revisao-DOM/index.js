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
titulo.innerHTML = "Lista de compras"
//troque o subtitulo para "Aqui está anotado minha lista de compras"
subtitulo.innerHTML = "Aqui está anotado minha lista de compras"
//altere os itens da lista
const newArray = ["Caderno", "Lapiz", "Celular", "Mochila"]

const alteraItens = () => {
    newArray.map((item) => {
        const newItem = document.createElement("li");
        newItem.textContent = item;
        // listaItens.appendChild(newItem)
    })
}

alteraItens()


//adicione mais itens de compras a lista

const arrayItens = ["Lapiseira", "Borracha", "Tablet", "Notebook"]
const ol = document.querySelector(".others")


const additens = () => {
    arrayItens.map((item) => {
        const newItem = document.createElement("li");
        newItem.textContent = item;
        ol.appendChild(newItem)
    })

}

additens();




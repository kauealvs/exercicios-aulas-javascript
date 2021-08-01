// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s


const blockchain = () => {
    let apiBc = `https://blockchain.info/ticker`
    fetch(apiBc).then(r => r.json()).then(response => {
        showinfos(response)
    });
}

const showinfos = (item) => {
    const symbol = document.querySelector(".symbol");
    symbol.textContent = item.BRL.symbol

    const buy = document.querySelector(".valorCompra");
    buy.textContent = item.BRL.buy
}



window.addEventListener("load", blockchain());

// Como usar setTimeout
// usar map
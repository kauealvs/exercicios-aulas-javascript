// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

        // response.map((item) => {
        //     const novoItem = document.querySelector(".cep");
        //     novoItem.textContent = item.cep;
        //     novoItem.appendChild(novoItem);

        // });





const buscaCep = () => {
    
    let digitaCep = document.querySelector(".buscaCep").value 
    let apiCorreios = `https://viacep.com.br/ws/${digitaCep}/json/`;
    fetch(apiCorreios).then(r => r.json()).then(response => {
        console.log(response)

        showInfos(response);


    });
    
}


const showInfos = (item) => {
    const cep = document.querySelector(".cep");
    cep.textContent = item.cep

    const log = document.querySelector(".logradouro");
    log.textContent = item.logradouro

    const bairro = document.querySelector(".bairro");
    bairro.textContent = item.bairro

    const local = document.querySelector(".localidade");
    local.textContent = item.localidade

    const uf = document.querySelector(".uf");
    uf.textContent = item.uf

    const number = document.querySelector(".numero");
    number.textContent = item.numero   
}

document.querySelector(".buscaCep").addEventListener("focusout", buscaCep);


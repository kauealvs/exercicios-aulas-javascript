// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

//    let bntRandom = document.querySelector(".button") 

   const chuckNorrisApi = () => {

        let url = "https://api.chucknorris.io/jokes/random";

        fetch(url).then(r => r.json()).then(response => {
            console.log(response)
            showinfos(response)
        });
        
    }

    // console.log(bntRandom)

    const showinfos = (item) => {
        const icon = document.querySelector(".icon");
        icon.innerHTML = item.icon_url
    
        const joke = document.querySelector(".joke");
        joke.innerHTML = item.value
    }

    // bntRandom.addEventListener("click", chuckNorrisApi())

    document.querySelector(".button").addEventListener("click", chuckNorrisApi());




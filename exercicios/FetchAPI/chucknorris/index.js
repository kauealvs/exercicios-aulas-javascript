// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima


const chuckNorrisApi = () => {

        let url = "https://api.chucknorris.io/jokes/random";

        fetch(url).then(r => r.json()).then(response => {
            console.log(response)
            showinfos(response)
        });
        
    }

    const showinfos = (item) => {
        const icon = document.querySelector(".icon");
        icon.innerHTML = item.icon_url
    
        const joke = document.querySelector(".joke");
        joke.innerHTML = item.value

        icon.setAttribute("src", `${item.icon_url}`)
    }

    let msg = document.querySelector(".icon")

    
    let bntRandom = document.querySelector(".button")
    
    bntRandom.addEventListener("click", chuckNorrisApi)
    
    bntRandom.addEventListener('click', ()=>{
        msg.classList.add('reveal');
      })


    // document.querySelector(".button").addEventListener("click", chuckNorrisApi());




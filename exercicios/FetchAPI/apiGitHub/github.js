//criar um pesquisa de usuários do github

//precisa ter uma barra que busque pelo usuário e faça a requisição

//deve trazer o avatar_url, login, followers, following, public_repos, name



let icon = document.querySelector(".avatar")

const gitHubApi = () => {
    let searchUser = document.querySelector(".search").value;
    let urlGit = `https://api.github.com/users/${searchUser}`;

    fetch(urlGit).then(r => r.json()).then(response => {
        console.log(response)
        console.log(urlGit)
        

        document.querySelector(".avatar").innerHTML = response.avatar_url

        icon.setAttribute("src", `${response.avatar_url}`)

        document.querySelector(".login").innerHTML = response.login

        document.querySelector(".location").innerHTML = response.location
       
        document.querySelector(".followers").innerHTML = response.followers

        document.querySelector(".following").innerHTML = response.following

        document.querySelector(".public_reps").innerHTML = response.public_repos


    })
}

document.querySelector(".search").addEventListener("focusout", gitHubApi);



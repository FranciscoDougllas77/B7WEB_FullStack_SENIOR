function cliclou(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        alert("Titulos dos Posts: " + json[0].title);
    })
}

document.querySelector("#botao").addEventListener("click", cliclou);
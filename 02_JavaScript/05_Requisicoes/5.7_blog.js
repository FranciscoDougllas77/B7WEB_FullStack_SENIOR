async function readPosts(){
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = '';
        for(let i in json){
            let postHTML = `<div>
            <h2>${json[i].title}</h2>
            <p>${json[i].body}</p>
            </div>`;
            postArea.innerHTML += postHTML;
        }

    }else{
        postArea.innerHTML = 'Nenhum post encontrado';
    }
}

async function addNewPost(title, body){
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    });
}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if(title && body){
        addNewPost(title, body);
    }else{
        alert('Preencha todos os campos');
    }
});

readPosts();
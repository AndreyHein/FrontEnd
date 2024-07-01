

const url = 'https://api.github.com/users/facebook'

function promise(u) {
    return fetch(u).then(response => response.json())
}

promise(url).then(data => console.log(data))
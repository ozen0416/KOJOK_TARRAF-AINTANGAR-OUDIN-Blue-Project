const url= "http://localhost:3000"

let meal = []

function loadData() {
    fetch(`${url}/bouffe`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            meal = data
            // displayContent()
        })
}

// function displayContent() {

// }

function Player(nickname, starter, height) {
    this.nickname = nickname;
    this.starter = starter;
    this.height = height;
}
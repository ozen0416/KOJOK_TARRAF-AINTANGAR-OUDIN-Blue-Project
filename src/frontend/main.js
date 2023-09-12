const url= "http://localhost:3000"

let meal = []

function loadData() {
    fetch(`${url}/aliments`)
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
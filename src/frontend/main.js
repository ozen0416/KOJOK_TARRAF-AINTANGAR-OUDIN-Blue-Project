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

class Player {
    constructor(nickname, gold, height, inventory) {
        this.nickname = nickname
        this.gold = gold
        this.height = height
        this.inventory = inventory
    }
}

class Item {
    constructor(name, description, price, bonus) {
        this.name = name
        this.description = description
        this.price = price
        this.bonus = bonus
    }
}

let test = {
    pseudo : Player.nickname,
    gold : 500,
    height : Player.height,
    inventory : Item.name
}
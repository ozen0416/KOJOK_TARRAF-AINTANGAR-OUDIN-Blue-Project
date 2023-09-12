const url= "http://localhost:3000"
const btn =document.getElementById("jouer")
const ctn = document.querySelector('.main-container')

let meal = []

function loadData() {
    fetch(`${url}/bouffe`)
        .then(resp => {
            return resp.json()
           
        })
        .then(data => {
            meal = data
        })
}

function displayContent() {
    btn.addEventListener("click", function() {
        ctn.style.display = 'none';
    })
}

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

loadData()
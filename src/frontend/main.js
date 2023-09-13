const url = "http://localhost:3000"
const btn = document.getElementById("jouer")
const ctn = document.querySelector(".main-container")
const ttl = document.querySelector("#titre")
let argent = 100;
let poids = 75;
let nom = document.getElementById("nom");
let meal = []

function loadData() {
    fetch(`${url}/`)
        .then(resp => {
            return resp.json()

        })
        .then(data => {
            meal = data
        })
}

function displayContent() {

    btn.addEventListener("click", function () {
        ctn.style.display = 'none';
        ctn.innerHTML = ""
        let playerCtn = document.createElement("div")   
        let questionCtn = document.createElement("div")
        playerCtn.innerHTML = `<div class="golds"> <p>${player.name}</p> <p>${player.poid}kg <p>${player.money}$</p> </p></div>`
        meal.forEach(meals => {
            questionCtn.innerHTML `<div> <p>${meals.id}</p>  </div>`
            console.log("hey")
        })
        ctn.style.display = 'flex'
        ctn.appendChild(playerCtn)
        ctn.appendChild(questionCtn)
    })
}


class Player {
    constructor(nickname, gold, height, inventory) {
        this.name = nickname
        this.money = gold
        this.poid = height
        this.inventory = inventory
    }
}

let player;


class Item {
    constructor(name, description, price, bonus) {
        this.name = name
        this.description = description
        this.price = price
        this.bonus = bonus
    }
}

function verifierCaracteres(input) {
    let regex = /^[a-zA-Z]*$/; // Autorise uniquement les lettres
    if (!regex.test(input.value)) {
        alert("Certains caractères ne sont pas autorisés. Veuillez utiliser uniquement des lettres.");
        input.value = input.value.replace(/[^a-zA-Z]/g, ''); // Supprime les caractères non autorisés
    } else {
        input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1); // Met en majuscule la première lettre
    }
}

function calculerCaracteristiques() {
    let objet = document.querySelector('input[name="objet"]:checked').value;
    let questions = document.querySelectorAll('.question input:checked');
    verifierCaracteres(document.getElementById("nom"));
    player = new Player(nom.value , argent, poids, [])

    questions.forEach(function (question) {
        if (question.value === 'positif') {
            player.poid -= 2;
        } else if (question.value === 'negatif') {
            player.poid += 3;
        }
    });

    if (objet === 'Altères') {
        player.money -= 15;
        player.poid -= 7;
    } else if (objet === 'Carte Bancaire') {
        player.money += 50;
        player.poid += 13;
    } else if (objet === 'Coach') {
        player.money -= 30;
        player.poid -= 10;
    }

    console.log(player);

}

displayContent()
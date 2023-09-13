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
        playerCtn.innerHTML = `<div class="golds"> <p>${argent}$</p> <p>${poids}kg <p>${nom.value}</p> </p></div>`
        ctn.style.display = 'flex'
        ctn.appendChild(playerCtn)
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

    questions.forEach(function (question) {
        if (question.value === 'positif') {
            poids -= 2;
        } else if (question.value === 'negatif') {
            poids += 3;
        }
    });

    if (objet === 'Altères') {
        argent -= 15;
        poids -= 7;
    } else if (objet === 'Carte Bancaire') {
        argent += 50;
        poids += 13;
    } else if (objet === 'Coach') {
        argent -= 30;
        poids -= 10;
    }

}

displayContent()
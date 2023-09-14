const url = "http://localhost:3000"
const btn = document.getElementById("jouer")
const ctn = document.querySelector(".main-container")
const ttl = document.querySelector("#titre")
let argent = 100;
let poids = 75;
let nom = document.getElementById("nom");
let bouffe = [];

function loadData() {
    return fetch(`${url}/`)
        .then(resp => resp.json())
        .then(data => {
            bouffe = data;
        })
        .catch(err => console.log(err))
}

function displayContent() {
    btn.addEventListener("click", function () {
        ctn.style.display = 'flex'

        let info = document.querySelector(".navbar");
        info.innerHTML = `
        <div>
            <p style="color:white">${player.name} ${player.poid}kg ${player.money}$</p>
        </div>
        `;

        let form = document.querySelector(".formulaire");
        form.innerHTML = ""
        bouffe.forEach(_ => {
            form.innerHTML = `
            <div>
                <p>Voici la description de la situation.</p>
                <p>Choisissez entre les deux possibilités :</p>
                <label>
                    <img src="${bouffe[0].url}" alt="image">
                    <input type="radio" name="choix" value="choix1"> ${bouffe[0].nom}
                </label>
                <label>
                    <img src="${bouffe[1].url}" alt="image">
                    <input type="radio" name="choix" value="choix2"> ${bouffe[1].nom}
                </label>
                <button type="button" onclick="traiterChoix()">Valider</button>
            </div>`
                ;

        });
    });

}
loadData()

function MarketMan() {
    for (let i = 1; i <= 8; i++) {
        if (i == 4) {
            
        }
    }
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


class Meal {
    constructor(name, description, price, bonus) {
        this.name = name
        this.description = description
        this.price = price
        this.bonus = bonus
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
    player = new Player(nom.value, argent, poids, [])

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
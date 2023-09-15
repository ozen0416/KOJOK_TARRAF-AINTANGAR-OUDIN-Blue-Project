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
            console.log(bouffe); // Placer ici pour s'assurer que les données sont chargées
        })
        .catch(err => console.log(err))
}

function displayContent() {
    btn.addEventListener("click", function () {
        ctn.style.display = 'flex'

        let info = document.querySelector(".navbar");
        info.innerHTML = `
        <div class="">
            <p style="color:white">${player.name} ${player.poid}kg ${player.money}$</p>
        </div>
        `;

        let form = document.querySelector(".formulaire");
        form.innerHTML = ""
        bouffe.forEach(_ => {
            let n = numerosDejaUtilises[numerosDejaUtilises.length - 1];
            form.innerHTML = `
            <div>
                <p>Voici la description de la situation.</p>
                <p>Choisissez entre les deux possibilités :</p>
                <div class="label">
                    <label class="label1">
                        <img class ="img1" src="${bouffe[n].url}" alt="image">
                        <input type="radio" name="choix" value="choix1"> ${bouffe[n].nom}
                        <p> ${bouffe[n].description}</p>
                        <p> ${bouffe[n].prix}$</p>
                    </label>
                    <label class="label2">
                        <img class ="img2" src="${bouffe[n + 1].url}" alt="image">
                        <input type="radio" name="choix" value="choix2"> ${bouffe[n + 1].nom}
                        <p> ${bouffe[n + 1].description}</p>
                        <p> ${bouffe[n + 1].prix}$</p>
                    </label>
                </div>
                <button class="valider" type="button" onclick="traiterChoix()">Valider</button>
            </div>`
        });
        const valider = document.querySelector(".valider")

        randomInt();

        valider.addEventListener("click", function () {
            console.log(numerosDejaUtilises);
            traiterChoix();
            randomInt();
            console.log(player);
        });
    });
}

loadData()



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
    player = new Player(nom.value, argent, poids, []);

    // Convertir le poids et l'argent en nombre
    player.poid = Number(player.poid);
    player.money = Number(player.money);

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

function traiterChoix() {
    let radioChoix = document.querySelector('input[name="choix"]:checked');
    if (radioChoix) {
        let n = numerosDejaUtilises[numerosDejaUtilises.length - 1];
        bouffe[n].prix = Number(bouffe[n].prix);
        bouffe[n].poids = Number(bouffe[n].poids);
        bouffe[n + 1].prix = Number(bouffe[n + 1].prix);
        bouffe[n + 1].poids = Number(bouffe[n + 1].poids);

        if (radioChoix.value === 'choix1') {
            player.money -= bouffe[n].prix;
            player.poid -= bouffe[n].poids;
        } else if (radioChoix.value === 'choix2') {
            player.money -= bouffe[n + 1].prix;
            player.poid += bouffe[n + 1].poids;
        }

        // Mettre à jour l'affichage du joueur
        let info = document.querySelector(".navbar");
        info.innerHTML = `
        <div>
            <p style="color:white">${player.name} ${player.poid}kg ${player.money}$</p>
        </div>
        `;

        let form = document.querySelector(".formulaire");
        form.innerHTML = "";
        bouffe.forEach(_ => {
            form.innerHTML = `
            <div>
                <p>Voici la description de la situation.</p>
                <p>Choisissez entre les deux possibilités :</p>
                <div class="label">
                    <label class="label1">
                        <img class ="img1" src="${bouffe[n].url}" alt="image">
                        <input type="radio" name="choix" value="choix1"> ${bouffe[n].nom}
                        <p> ${bouffe[n].description}</p>
                        <p> ${bouffe[n].prix}$</p>
                    </label>
                    <label class="label2">
                        <img class ="img2" src="${bouffe[n + 1].url}" alt="image">
                        <input type="radio" name="choix" value="choix2"> ${bouffe[n + 1].nom}
                        <p> ${bouffe[n + 1].description}</p>
                        <p> ${bouffe[n + 1].prix}$</p>
                    </label>
                </div>
                <button class="valider" type="button" onclick="traiterChoix()">Valider</button>
            </div>`
        });
    } else {
        console.error("Aucune option choisie.");
    }
}

let numerosDejaUtilises = [];

function randomInt() {
    if (numerosDejaUtilises.length === 15) {
        console.error("Tous les numéros ont été utilisés !");
        return null; // Vous pouvez choisir de retourner quelque chose de spécial pour indiquer cette condition.
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 8) * 2;
    } while (numerosDejaUtilises.includes(randomNumber));

    numerosDejaUtilises.push(randomNumber);
    return randomNumber;
}

let nombreAleatoire = randomInt();
console.log(nombreAleatoire);

displayContent()
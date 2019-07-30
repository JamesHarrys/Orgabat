const output = document.getElementById('output');
let active = false;

let elements = document.getElementsByClassName('categories');

function approGameWindow() {
    console.log('Changed');
    output.innerHTML = `
        <div class="category_games col-sm-10">
            <h3>Approvisionnement</h3>
            <div class="category_games_game col-sm-3"><h4>Charger le camion</h4></div>
            <div class="category_games_game col-sm-3"><h4>Vérifier la conformité d’une livraison</h4></div>
            <div class="category_games_game col-sm-3"><h4>Organiser son poste de travail</h4></div>
        </div>
    `;
}

function circuGameWindow() {
    console.log('Changed');
    output.innerHTML = `
        <div class="category_games">Circulation</div>
    
    `
}

function commGameWindow() {
    console.log('Changed');
    output.innerHTML = `
        <div class="category_games">Communication</div>
    
    `
}

function deplaceGameWindow() {
    console.log('Changed');
    output.innerHTML = `
        <div class="category_games">Déplacements</div>
    
    `
}

function gestionGameWindow() {
    console.log('Changed');
    output.innerHTML = `
        <div class="category_games">Gestion de l’espace de travail</div>
    
    `
}

function gestesGameWindow() {
    console.log('Changed');
    output.innerHTML = `
        <div class="category_games">Gestes et postures au travail</div>
    
    `
}

function protecGameWindow() {
    console.log('Changed');
    output.innerHTML = `
        <div class="category_games">Protection</div>
    
    `
}

function prepGameWIndow() {
    console.log('Changed');
    output.innerHTML = `
        <div class="category_games">Préparation du chantier</div>
    
    `
}

function ifActive() {

}
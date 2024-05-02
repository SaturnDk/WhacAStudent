let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let moleImages = [
    "Assets/Oli.png",
    "Assets/Benny.png",
    "Assets/Albert.png",
    "Assets/Freja.png",
    "Assets/emma.png",
    "Assets/miller1.png",
    "Assets/alberte.png"
];

window.onload = function () {
    setGame() 
}

function setGame() {
    for (let i=0; i < 9; i++ ) {
        
        let tile =document.createElement ("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile);
    } 

    setInterval(setMole, 1000); //1000ms = 1s
    setInterval(setPlant, 2000); //2000ms = 2s
}

function getRandomTile(){
    //math.random --> (0-1) *9 = (0-9)
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    
    let mole = document.createElement("img");

    // Randomly select an image path from the moleImages array
    let randomIndex = Math.floor(Math.random() * moleImages.length);
    mole.src = moleImages[randomIndex];

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant () {

    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "" ;
    }

    let plant = document.createElement ("img");
    plant.src = "Assets/ansat_Karsten_Vestergaard_048.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}


function selectTile () { 

    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //opdaterer scoren
    } 
    else if (this == currPlantTile) {
         document.getElementById("score").innerText = "GAME OVER: " + score.toString();
         gameOver = true;
    }
}
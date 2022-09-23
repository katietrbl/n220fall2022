let PokeBall = {
    x: 200,
    y: 200,
    width: 300,
    height: 250,
    color: "red",
    shape: "circle",
    colorRed: "#FF0000",
    colorWhite: "white"
}

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(250);
    drawPokeBall(PokeBall)
}

function drawPokeBall(Pokeball) {
    fill(PokeBall.colorRed);
    circle(PokeBall.x, PokeBall.y, PokeBall.width, PokeBall.height);
    fill(PokeBall.colorWhite);
    circle(PokeBall.x + 0, PokeBall.y , PokeBall.height - 180, PokeBall.width - 50);
    circle(PokeBall.x + 0, PokeBall.y , PokeBall.height - 200, PokeBall.width - 50);
}
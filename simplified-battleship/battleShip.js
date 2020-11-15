
const Player = require('./player.js');
const validationFuncs = require('./validation.js');
const readline = require('readline');

const playerOne = new Player("Player_1");
const playerTwo = new Player("Player_2");
const players = [playerOne, playerTwo];


//Create user input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

// Async func for getting user input
const ask = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (input) => {
            resolve(input)
        })
    })

};

async function asyncAsk(question, validationFunction, player = {}, shipNumber = NaN) {
    let check = false;
    let result = '';

    while (!check) {
        result = await ask(question);
        check = validationFunction(result, player, shipNumber)
    }
    return result;
}


async function asyncCall() {

    let input = await asyncAsk(`Please enter the battle ground size: `, validationFuncs.battleGround);
    players.forEach(player => player.battleGroundMaker(Number(input)));

    input = await asyncAsk(`Please enter number of ships for players: `, validationFuncs.shipNumber);
    const shipCount = Number(input);
    players.forEach(player => player.shipCount(shipCount));

    for (let i = 1; i <= shipCount; i++) {
        input = await asyncAsk(`Enter the size of the ${i}th ship: `, validationFuncs.shipSize, players[0]);
        players.forEach(player => player.shipSpecGet(i, "size", Number(input)));
    }

    for (const player of players) {
        for (let i = 1; i <= shipCount; i++) {
            input = await asyncAsk(`${player.name}: Enter the direction of ${i}th ship (v for vertical, h for horizontal): `, validationFuncs.direction);
            player.shipSpecGet(i, "direction", input);
        }
    }


    for (const player of players) {
        for (let i = 1; i <= shipCount; i++) {
            input = await asyncAsk(`${player.name}: Enter the position of ${i}th ship: `, validationFuncs.battleshipPosition, player, i);
            player.shipSpecGet(i, "position", input);
            player.shipLocator(`${i}`)
        }
    }

    

    rl.close()
}


asyncCall()




// // Please enter the battle ground size (it can be any dimension)
// // Please enter number of ships for each player
// // 'Player 1': Enter the ship size of your '1'th ship
// // 'Player 1': Enter the ship location of '1'th ship
// // 'Player 1': Enter the ship direction of '1'th ship (enter v for h for horizontal, this ship will be extended to bottom and right)
// // Repeat till all ships are entered
// // Repeat for player two

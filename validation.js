const helperFunctions = require('./helperFunctions')
const cartesianPosition = helperFunctions.cartesianPosition;

//Collections of functions for validating user input
const validationFuncs = {

    //Check battle groud dimension input is valid
    battleGround: function (text) {
        const value = Number(text);
        if (value < 3 || value > 26 || !Number.isInteger(value)) {
            console.log('Please enter a valid integer higher than 2 and lower than 27');
            return false;
        }
        return true;
    },

    //Check if number of ship is int and higher than 0
    shipNumber: function (text) {
        const value = Number(text);
        if (value < 1 || !Number.isInteger(value)) {
            console.log('Please enter a valid integer higher than 0');
            return false;
        }
        return true;
    },

    //Check if number of ship is int and higher than 0 and fits the board
    shipSize: function (text, player) {
        const value = Number(text);
        if (value < 1 || !Number.isInteger(value)) {
            console.log('Please enter a valid integer higher than 0');
            return false;
        }
        if (value > player.battleGround.length) {
            console.log('The ship size is bigger than the battle ground!');
            return false;
        }
        return true;
    },

    //Check if the positin is valid 
    direction: function (text) {
        const value = Number(text);
        if (text.toLowerCase() === 'v' || text.toLowerCase() === 'h') {
            return true;
        }
        console.log(`Please enter a valid direction (it should be 'v' & 'h'): `);
        return false;
    },

    //Check if battleship position is valid
    battleshipPosition: function (text, player, shipNumber) {
        //Check if it is correct format
        const [row, column] = cartesianPosition(text);

        if (row < 0 || !row || column < 0 || column > 26) {
            console.log(`The position you entered is not valid (first letter need to be Alphabet and the rest integer e.g 'A1')!!`);
            return false;
        }

        //Check if row number is integer
        if (!Number.isInteger(row)) {
            console.log(`The row value should be an integer`);
            return false;
        }

        //Check if the position is inside the board
        if (row > player.battleGround.length || column > player.battleGround.length) {
            console.log(`You placed the ship outside the board. Please enter valid position agian!`);
            return false;
        }

        //Check if it fits the board
        const shipSpec = player.shipSpec[shipNumber];
        if (shipSpec.direction === 'h' && column + shipSpec.size - 1 > player.battleGround.length) {
            console.log(`The ship does not fit the board, horizontally!`);
            return false;
        }
        if (shipSpec.direction === 'v' && row + shipSpec.size - 1 > player.battleGround.length) {
            console.log(`The ship does not fit the board, vertically!`);
            return false;
        }

        //Check if is not the same grid as another ship
        for (let i = 0; i < shipSpec.size; i++) {

            if (shipSpec.direction.toLowerCase() === 'h' && player.battleGround[row - 1][column - 1 + i] === 'S') {
                // player.battleGround[row - 1][column - 1 + i] = 'S';
                console.log(`Oops!! There is already a ship in one or more of these cells. Pick another position`);
                return false;

            }
            if (shipSpec.direction.toLowerCase() === 'v' && player.battleGround[row - 1 + i][column - 1] === 'S') {
                console.log(`Oops!! There is already a ship in one or more of these cells. Pick another position`);
                return false;
            }
        }
        return true;

    },

    //Check if shot position is valid
    shootPosition: function (text, player) {
        //Check if it is correct format
        const [row, column] = cartesianPosition(text);

        if (row < 0 || !row || column < 0 || column > 26) {
            console.log(`The position you entered is not valid (first letter need to be Alphabet and the rest integer e.g 'A1')!!`);
            return false;
        }

        //Check if row number is integer
        if (!Number.isInteger(row)) {
            console.log(`The row value should be an integer`);
            return false;
        }

        if (row > player.battleGround.length || column > player.battleGround.length) {
            console.log(`You hit outside the board. Please enter valid position agian!`);
            return false;
        }

        return true;

    },

}

module.exports = validationFuncs;
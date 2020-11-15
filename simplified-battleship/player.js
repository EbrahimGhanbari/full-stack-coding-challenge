const cartesianPosition = require('./helperFunctions')

class Player {
    constructor(name) {
        this.name = name;
        this.shipSpec = {};
    }

    //Get the dimention and create empty battle ground
    battleGroundMaker(dimention) {
        const battleGround = [];
        for (let i = 0; i < dimention; i++) {
            battleGround.push([]);
            for (let j = 0; j < dimention; j++) {
                battleGround[i].push('-');
            }
        }
        this.battleGround = battleGround;
    }

    //Store the number of ships for each palyer
    shipCount(count) {
        for (let i = 1; i <= count; i++) {
            this.shipSpec[i] = {};
        }
    }

    //Get the ship specification and store it
    shipSpecGet(shipNumber, spec, value) {
        this.shipSpec[shipNumber][spec] = value;
    }

    //Locate the ship on the map when user enter all the info
    shipLocator() {

        for (const index in this.shipSpec) {

            const ship = this.shipSpec[index];
            const [row, column] = cartesianPosition(ship.position);

            for (let i = 0; i < ship.size; i++) {

                if (ship.direction.toLowerCase() === 'h') {
                    this.battleGround[row - 1][column - 1 + i] = 'S';

                } else if (ship.direction.toLowerCase() === 'v') {
                    this.battleGround[row - 1 + i][column - 1] = 'S';
                }
            }
        }

    }

    //
    hit(position) {
        const [row, column] = cartesianPosition(position);
        this.battleGround[row - 1][column - 1] = 'X';
        console.log(this.battleGround)
    }

    //Count the lives of the palyer
    countLives() {
        let count = 0;
        for (let row of this.battleGround) {
            count += row.filter(element => element === 'S').length;
        }
        return count;
    }



}

module.exports = Player;

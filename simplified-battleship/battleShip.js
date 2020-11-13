

const cartesianPosition = (position) => {

    const row = Number(position.slice(1, 3));
    const column = position.toUpperCase().charCodeAt(0) - 64;

    return [row, column];

}


class Player {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        const battleGround = [];

        for (let i = 0; i < this.height; i++) {
            battleGround.push([]);
            for (let j = 0; j < this.width; j++) {
                battleGround[i].push('-');
            }
        }

        this.battleGround = battleGround;
    }

    shipLocator(position, direction, shipLength) {
        const [row, column] = cartesianPosition(position);

        //validate direction
        if (direction.toLowerCase() === 'h' && (column + shipLength - 1) > this.width) {
            return false;
        }
        if (direction.toLowerCase() === 'v' && (row + shipLength - 1) > this.height) {
            return false;
        }

        for (let i = 0; i < shipLength; i++) {

            if (direction.toLowerCase() === 'h') {
                this.battleGround[row - 1][column - 1 + i] = 'S';

            } else if (direction.toLowerCase() === 'v') {
                this.battleGround[row - 1 + i][column - 1] = 'S';
            }

        }

    }

    shoot(position) {
        const [row, column] = cartesianPosition(position);
        this.battleGround[row - 1][column - 1] = 'X';
        console.log(this.battleGround)

    }

    countLives() {
        let count = 0;
        for (let row of this.battleGround) {
            count += row.filter(element => element === 'S').length;
        }
        return count;
    }

}

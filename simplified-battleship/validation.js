//Collections of functions for validating user input
const validationFuncs = {

    //Check battle groud dimention input is valid
    battleGround: function (text) {
        const value = Number(text);
        if (value < 3 || !Number.isInteger(value)) {
            console.log('Please enter a valid integer higher than 2');
            return false;
        }
        return true;
    },

    //General function to check value is int and higher than 0
    validInteger: function (text) {
        const value = Number(text);
        if (value < 1 || !Number.isInteger(value)) {
            console.log('Please enter a valid integer higher than 0');
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
    battleshipPosition: function(text, player){
        //Check if it is correct format

        //Check if it fits the board

        //Check if is not the same grid as another ship

        return true;
    }


}

module.exports = validationFuncs;
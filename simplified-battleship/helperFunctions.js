//This helper func convert the position to cartesian
const cartesianPosition = (position) => {
    const row = Number(position.slice(1, 3));
    const column = position.toUpperCase().charCodeAt(0) - 64;
    return [row, column];
}


module.exports = cartesianPosition;

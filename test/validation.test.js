const validationFuncs = require('../validation');
const Player = require('../player.js');

//Create player class
const player = new Player("Player_1");
player.battleGroundMaker('20');
player.shipCount('3');
player.ship(1, "size", 3);
player.ship(2, "size", 3);
player.ship(3, "size", 3);
player.ship(1, "direction", 'h');
player.ship(2, "direction", 'v');
player.ship(3, "direction", 'h');
player.ship(1, "position", 'E5');
player.ship(2, "position", 'T5');
player.shipLocator('1');
player.shipLocator('2');

// console.log(player)

test('test validation func for ship position - user enter invalid input', () => {
  expect(validationFuncs.battleshipPosition('0', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('-1', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('asd', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('3.3', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('hh', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('H', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('H', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('v', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('V', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('AA', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('1A', player, 3)).toBe(false);
  expect(validationFuncs.battleshipPosition('/{}', player, 3)).toBe(false);
});

test('test validation func for ship position - user place ship outside of board', () => {

  // expect(validationFuncs.battleshipPosition('e5', player, 3)).toBe(false);
  // expect(validationFuncs.battleshipPosition('b2', player, 3)).toBe(true);
  // expect(validationFuncs.battleshipPosition('e11', player, 3)).toBe(false);
  // expect(validationFuncs.battleshipPosition('k1', player, 3)).toBe(false);
  // expect(validationFuncs.battleshipPosition('a-1', player, 3)).toBe(false);
  // // expect(validationFuncs.battleshipPosition('a1.1', player, 3)).toBe(false);
  // expect(validationFuncs.battleshipPosition('j5', player, 3)).toBe(false);
  // expect(validationFuncs.battleshipPosition('j', player, 3)).toBe(false);
});

test('test validation func for ship position - user place ship in valid position', () => {
  expect(validationFuncs.battleshipPosition('a2', player, 3)).toBe(true);
  expect(validationFuncs.battleshipPosition('R20', player, 3)).toBe(true);
  expect(validationFuncs.battleshipPosition('I19', player, 3)).toBe(true);
  expect(validationFuncs.battleshipPosition('h10', player, 3)).toBe(true);
  expect(validationFuncs.battleshipPosition('A10', player, 3)).toBe(true);
  expect(validationFuncs.battleshipPosition('b2', player, 3)).toBe(true);

});

player.print()
// test('test validation func for battle ground dimension', () => {
//   expect(validationFuncs.battleGround('0')).toBe(false);
//   expect(validationFuncs.battleGround('2')).toBe(false);
//   expect(validationFuncs.battleGround('-1')).toBe(false);
//   expect(validationFuncs.battleGround('asd')).toBe(false);
//   expect(validationFuncs.battleGround('a2')).toBe(false);
//   expect(validationFuncs.battleGround('3.1')).toBe(false);
//   expect(validationFuncs.battleGround('3')).toBe(true);
//   expect(validationFuncs.battleGround('26')).toBe(true);
//   expect(validationFuncs.battleGround('27')).toBe(false);
// });  

// test('test validation func for number of ship per player', () => {
//   expect(validationFuncs.shipNumber('0')).toBe(false);
//   expect(validationFuncs.shipNumber('-1')).toBe(false);
//   expect(validationFuncs.shipNumber('asd')).toBe(false);
//   expect(validationFuncs.shipNumber('a2')).toBe(false);
//   expect(validationFuncs.shipNumber('3.1')).toBe(false);
//   expect(validationFuncs.shipNumber('1')).toBe(true);
//   expect(validationFuncs.shipNumber('2')).toBe(true);
//   expect(validationFuncs.shipNumber('100')).toBe(true);
// });  

// test('test validation func for ship size', () => {
//   expect(validationFuncs.shipSize('0', player)).toBe(false);
//   expect(validationFuncs.shipSize('-1', player)).toBe(false);
//   expect(validationFuncs.shipSize('asd', player)).toBe(false);
//   expect(validationFuncs.shipSize('a2', player)).toBe(false);
//   expect(validationFuncs.shipSize('3.1', player)).toBe(false);
//   expect(validationFuncs.shipSize('1', player)).toBe(true);
//   expect(validationFuncs.shipSize('2', player)).toBe(true);
//   expect(validationFuncs.shipSize('20', player)).toBe(true);
//   expect(validationFuncs.shipSize('27', player)).toBe(false);
//   expect(validationFuncs.shipSize('100', player)).toBe(false);
// });  


// test('test validation func for ship direction', () => {
//   expect(validationFuncs.direction('0', player)).toBe(false);
//   expect(validationFuncs.direction('-1', player)).toBe(false);
//   expect(validationFuncs.direction('asd', player)).toBe(false);
//   expect(validationFuncs.direction('a2', player)).toBe(false);
//   expect(validationFuncs.direction('3.1', player)).toBe(false);
//   expect(validationFuncs.direction('hh', player)).toBe(false);
//   expect(validationFuncs.direction('H', player)).toBe(true);
//   expect(validationFuncs.direction('H', player)).toBe(true);
//   expect(validationFuncs.direction('v', player)).toBe(true);
//   expect(validationFuncs.direction('V', player)).toBe(true);
// });  

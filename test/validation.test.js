const validationFuncs = require('../validation');


test('test validation func for battle ground dimension user input', () => {
  expect(validationFuncs.battleGround('0')).toBe(false);
  expect(validationFuncs.battleGround('2')).toBe(false);
  expect(validationFuncs.battleGround('-1')).toBe(false);
  expect(validationFuncs.battleGround('asd')).toBe(false);
  expect(validationFuncs.battleGround('a2')).toBe(false);
  expect(validationFuncs.battleGround('3.1')).toBe(false);
  expect(validationFuncs.battleGround('3')).toBe(true);
  expect(validationFuncs.battleGround('100')).toBe(true);
});

test('test validation func for number of ship per player user input', () => {
  expect(validationFuncs.shipNumber('0')).toBe(false);
  expect(validationFuncs.shipNumber('-1')).toBe(false);
  expect(validationFuncs.shipNumber('asd')).toBe(false);
  expect(validationFuncs.shipNumber('a2')).toBe(false);
  expect(validationFuncs.shipNumber('3.1')).toBe(false);
  expect(validationFuncs.shipNumber('1')).toBe(true);
  expect(validationFuncs.shipNumber('2')).toBe(true);
  expect(validationFuncs.shipNumber('100')).toBe(true);
});

test('test validation func for number of ship per player user input', () => {
  expect(validationFuncs.shipNumber('0')).toBe(false);
  expect(validationFuncs.shipNumber('-1')).toBe(false);
  expect(validationFuncs.shipNumber('asd')).toBe(false);
  expect(validationFuncs.shipNumber('a2')).toBe(false);
  expect(validationFuncs.shipNumber('3.1')).toBe(false);
  expect(validationFuncs.shipNumber('1')).toBe(true);
  expect(validationFuncs.shipNumber('2')).toBe(true);
  expect(validationFuncs.shipNumber('100')).toBe(true);
});





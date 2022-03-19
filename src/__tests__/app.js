/* eslint-disable no-new */
import Character from '../js/app';
import Bowerman from '../js/Bowerman';

test('should show error name if not in 2&10', () => {
  expect(() => {
    new Character('Gl', 'Magician', 0, 0);
  }).toThrow();
});

test('should show error name if not String ', () => {
  expect(() => {
    new Character(10, 'Magician', 0, 0);
  }).toThrow();
});

test('should show error type if not String ', () => {
  expect(() => {
    new Character('Gleb', 10, 0, 0);
  }).toThrow();
});

test('should show error type if not access type ', () => {
  expect(() => {
    new Character('Gleb', 'Sword', 0, 0);
  }).toThrow();
});

test('should setted this.name', () => {
  const expected = 'Gleb';
  const character = new Character('Gleb', 'Swordsman', 0, 0);
  expect(character.name).toEqual(expected);
});

test('should setted this.type', () => {
  const expected = 'Swordsman';
  const character = new Character('Gleb', 'Swordsman', 0, 0);
  expect(character.type).toEqual(expected);
});

test('should setted this.type in class Bowerman', () => {
  const expected = 'Bowman';
  const character = new Bowerman('Gleb', 'Bowman', 25, 25);
  expect(character.type).toEqual(expected);
});

test('should setted this.attack in class Bowerman', () => {
  const expected = 25;
  const character = new Bowerman('Gleb', 'Bowman', 25, 20);
  expect(character.attack).toEqual(expected);
});

test('should setted this.defence in class Bowerman', () => {
  const expected = 20;
  const character = new Bowerman('Gleb', 'Bowman', 25, 20);
  expect(character.defence).toEqual(expected);
});

test('should up attact by levelUp method', () => {
  const expected = 12;
  const character = new Bowerman('Gleb', 'Swordsman', 10, 10);
  character.levelUp();
  expect(character.attack).toEqual(expected);
});

test('should up defence by levelUp method', () => {
  const expected = 12;
  const character = new Bowerman('Gleb', 'Swordsman', 10, 10);
  character.levelUp();
  expect(character.defence).toEqual(expected);
});

test('should up health to 100 by levelUp method', () => {
  const expected = 100;
  const character = new Bowerman('Gleb', 'Swordsman', 10, 10);
  character.health = 90;
  character.levelUp();
  expect(character.health).toEqual(expected);
});

test('should throw error when levelUp worked when this.health = 0 ', () => {
  expect(() => {
    const character = new Bowerman('Gleb', 'Swordsman', 10, 10);
    character.health = 0;
    character.levelUp();
  }).toThrow();
});

test('should lower this.health when works damage(points)', () => {
  const expected = 55;
  const character = new Bowerman('Gleb', 'Swordsman', 10, 10);
  character.damage(50);
  expect(character.health).toEqual(expected);
});

test('should when works damage(points) if already was this.health = 0 ', () => {
  expect(() => {
    const character = new Bowerman('Gleb', 'Swordsman', 10, 10);
    character.health = 0;
    character.damage(50);
  }).toThrow();
});

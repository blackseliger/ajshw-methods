import Character from './app';

class Swordsman extends Character {
  show() {
    console.log(this);
  }
}

const swordsman = new Swordsman('John', 'Swordsman', 20, 20);
swordsman.show();

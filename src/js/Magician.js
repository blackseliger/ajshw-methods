import Character from './app';

class Magician extends Character {
  show() {
    console.log(this);
  }
}

const magician = new Magician('John', 'Bowman', 25, 25);
magician.show();

import Character from './app';

class Undead extends Character {
  show() {
    console.log(this);
  }
}

const undead = new Undead('John', 'Undead', 25, 25);
undead.show();

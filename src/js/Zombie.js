import Character from './app';

class Zombie extends Character {
  show() {
    console.log(this);
  }
}

const zombie = new Zombie('John', 'Zombie', 20, 20);
zombie.show();

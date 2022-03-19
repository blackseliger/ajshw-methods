/* eslint-disable no-underscore-dangle */

export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  static listTypes = [
    'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
  ];

  levelUp() {
    if (this.health <= 0) throw new Error('нельзя повысить уровень умершего');
    this.level += 1;
    this.attack += (this.attack * 0.2);
    this.defence += (this.defence * 0.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Он уже мертв');
    }
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string' || value.length <= 2 || value.length >= 10) {
      throw new Error(` name : ${value} должно быть строкой от 2 до 10 символов включительно.`);
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (typeof value !== 'string' || !Character.listTypes.includes(value)) {
      throw new Error(`type :${value} должно быть строкой или известным типом`);
    }
    this._type = value;
  }
}

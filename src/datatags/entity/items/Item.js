import ItemXPOrbs from 'itemXPOrbs';

module.exports = class Item extends ItemXPOrbs {

  constructor() {
    super();
    this.Health = Number;
    this.PickupDelay = Number;
    this.Owner = Number;
    this.Thrower = Number;
    this.Item = {};
  }

};
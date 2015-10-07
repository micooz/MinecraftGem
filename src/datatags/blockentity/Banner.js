import BlockEntityDataTag from './base';

module.exports = class BannerDataTag extends BlockEntityDataTag {

  constructor() {
    super();
    this.Base = Number;
    this.Patterns = [
      {Color: Number, Pattern: Array}
    ];
  }

};
import _ from 'lodash';
import Helper from '../../helpers';

module.exports = class BlockEntityDataTag {

  constructor() {
    this.id = String;
    this.x = Number;
    this.y = Number;
    this.z = Number;
  }

  toString() {
    return Helper.toDataTag(this);
  }

};
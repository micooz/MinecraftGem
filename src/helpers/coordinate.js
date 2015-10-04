/**
 * Coordinate
 *
 * const coordinate = new Coordinate(); // ''
 * const coordinate = new Coordinate(10, 20, 30); // '10 20 30'
 */
export default class Coordinate {

  constructor(...args) {
    if (typeof args == 'undefined') {
      this._str = '';
      return;
    }

    if (args.length !== 3) {
      throw new Error('invalid coordinate');
    }

    const x = args[0], y = args[1], z = args[2];

    this._str = `${x} ${y} ${z}`;
  }

  toString() {
    return this._str;
  }

}
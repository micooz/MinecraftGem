/**
 * The base class of all Commands
 *
 * Syntax
 *   /command options
 */
export default class Command {

  constructor() {
    this._name = undefined;
    this._options = undefined;
  }

  toString() {
    const name = this._name, options = this._options;
    if (typeof name == 'string' && typeof options == 'string') {
      return '/' + [name, options].join(' ');
    } else {
      throw new TypeError('when assemble command.');
    }
  }

}

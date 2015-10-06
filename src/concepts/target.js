/**
 * The target selector
 *
 * let target = new Target('p');
 * target.toString(); // @p
 *
 * let targetWithArgs = new Target('p', {
 *   coordinate: [x, y, z],
 *   radius: [min, max],
 *   gamemode: Gamemode.ALL,
 *   count: 3,
 *   level: [min, max],
 *   score: [min, max],
 *   team: 'Red',
 *   name: 'name',
 *   volume: [dx, dy, dz],
 *   vertical: [min, max],
 *   horizontal: [min, max],
 *   type: 'Creeper'
 * });
 * http://minecraft.gamepedia.com/Commands#Target_selector_arguments
 */
module.exports = class TargetSelector {

  constructor(variable, args) {
    this._variable = {
      'p': '@p', // nearest player
      'r': '@r', // random player
      'a': '@a', // all players
      'e': '@e' // all entities
    }[variable || 'p'];
    this._arguments = this._getArgsString(args);
  }

  _getArgsString(args) {
    if (typeof args == 'undefined') {
      return '';
    }
    let str = '';
    for (let key in args) {
      let value = args[key], arr = [];
      switch (key) {
        case 'coordinate':
          if (value instanceof Array) {
            let x = value[0], y = value[1], z = value[2];
            if (x) arr.push(`x=${x}`);
            if (y) arr.push(`y=${y}`);
            if (z) arr.push(`z=${z}`);
          }
          break;
        case 'radius':
          if (value instanceof Array) {
            let rmin = value[0], rmax = value[1];
            if (rmin) arr.push(`rm=${rmin}`);
            if (rmax) arr.push(`r=${rmax}`);
          }
          break;
        case 'gamemode':
          if (value instanceof Number) {
            arr.push(`m=${value}`);
          }
          break;
        case 'count':
          if (value instanceof Number) {
            arr.push(`c=${value}`);
          }
          break;
        // TODO: resolve the rest arguments.
        default:
          throw new Error(`unresolved argument: ${key}`);
          break;
      }
      str += str ? ',' : '';
      str += arr.join(',');
    }
    return `[${str}]`;
  }

  toString() {
    return [this._variable, this._arguments].join('');
  }

};

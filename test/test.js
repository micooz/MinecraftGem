import assert from 'assert';
import should from 'should';

import TargetSelector from '../src/helpers/target';
import Coordinate from '../src/helpers/coordinate';
import Player from '../src/helpers/player';
import Item from '../src/helpers/item';

import Commands from '../src/commands';

const {
  Say,
  Tell,
  Spawnpoint,
  Give
  } = Commands;

const testCases = [
  {
    title: 'Target Selector',
    methods: [{
      title: '#new(variable)',
      real: () => {
        const target_selector = new TargetSelector('p', {
          coordinate: [100, undefined, 300]
        });
        return target_selector.toString();
      },
      actual: '@p[x=100,z=300]'
    }, {
      title: '#new(variable, args)',
      err: () => {
        new TargetSelector('p', {
          unknown: null
        });
      }
    }]
  }, {
    title: 'Say Command',
    methods: [{
      title: '#new(msg)',
      real: () => {
        const say = new Say('hi there');
        return say.toString();
      },
      actual: '/say hi there'
    }, {
      title: '#new(null)',
      err: () => {
        new Say(null);
      }
    }]
  }, {
    title: 'Tell Command',
    methods: [{
      title: '#new(player, msg)',
      real: () => {
        const tell = new Tell(new Player('Mike'), 'hi Mike');
        return tell.toString();
      },
      actual: '/tell Mike hi Mike'
    }, {
      title: '#new(player, msg)',
      real: () => {
        const tell = new Tell(
          new Player(new TargetSelector('a', {radius: [10, 40]})),
          'hi friends'
        );
        return tell.toString();
      },
      actual: '/tell @a[rm=10,r=40] hi friends'
    }]
  }, {
    title: 'Spawnpoint Command',
    methods: [{
      title: '#new(player, coordinate)',
      real: () => {
        const spawn = new Spawnpoint(
          new Player(new TargetSelector('p', {
            coordinate: [100, undefined, 300]
          })),
          new Coordinate(10, 20, 30)
        );
        return spawn.toString();
      },
      actual: '/spawnpoint @p[x=100,z=300] 10 20 30'
    }]
  }, {
    title: 'Give Command',
    methods: [{
      title: '#new(player, item, amount, data, dataTag)',
      real: () => {
        const give = new Give(
          new Player('Mike'),
          new Item('apple'),
          64,
          1,
          {display: {Lore: ["Apple here"]}}
        );
        return give.toString();
      },
      actual: '/give Mike minecraft:apple 64 1 {display:{Lore:["Apple here"]}}'
    }]
  }
];

for (let i = 0, len = testCases.length; i < len; ++i) {
  const test = testCases[i];
  const methods = test.methods;
  describe(test.title, () => {
    for (let k = 0, len = methods.length; k < len; ++k) {
      const method = methods[k];
      describe(method.title, () => {
        if (method.hasOwnProperty('actual') && method.hasOwnProperty('real')) {
          it(`should return ${method.actual}`, () => {
            assert.equal(method.real(), method.actual);
          })
        } else if (method.hasOwnProperty('err')) {
          it('should throw an error', () => {
            method.err.should.throw();
          });
        } else {
          throw new Error('unresolved form of test method');
        }
      });
    } // for
  });
}

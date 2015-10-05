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

const target_selector = new TargetSelector('p', {
  coordinate: [100, undefined, 300]
});

describe('Target Selector', function () {

  describe('#new(variable)', function () {
    let target = new TargetSelector('p');
    it('should return @p', function () {
      assert.equal(target.toString(), '@p');
    });
  });

  describe('#new(variable, args)', function () {
    let target = new TargetSelector('p', {
      coordinate: [1, undefined, 3]
    });
    it('should return @p[x=1,z=3]', function () {
      assert.equal(target.toString(), '@p[x=1,z=3]');
    });

    it('should throw an error', function () {
      (function () {
        new TargetSelector('p', {
          unknown: null
        });
      }).should.throw();
    });
  });

});

describe('Say Command', function () {

  describe('#new(msg)', function () {
    let say = new Say('hi there');
    it('should return /say hi there', function () {
      assert.equal(say.toString(), '/say hi there');
    });

    it('should throw an error', function () {
      (function () {
        new Say(null);
      }).should.throw();
    });
  });

});

describe('Tell Command', function () {

  describe('#new(player, msg)', function () {
    let player = new Player('Jake');
    let tell = new Tell(player, 'hi Jake');
    it('should return /tell Jake hi Jake', function () {
      assert.equal(tell.toString(), '/tell Jake hi Jake');
    });

    let ts = new TargetSelector('p', {
      coordinate: [10, 20, 30],
      radius: [10, 40]
    });
    let player2 = new Player(ts);
    let tell2 = new Tell(player2, 'hi Mike');
    it('should return /tell @p[x=10,y=20,z=30,rm=10,r=40] hi Mike', function () {
      assert.equal(tell2.toString(), '/tell @p[x=10,y=20,z=30,rm=10,r=40] hi Mike');
    });
  });

});

describe('Spawnpoint Command', function () {

  describe('#new(player, coordinate)', function () {
    let spawn = new Spawnpoint(
      new Player(target_selector),
      new Coordinate(10, 20, 30)
    );
    it('should return /spawnpoint @p[x=100,z=300] 10 20 30', function () {
      assert.equal(spawn.toString(), '/spawnpoint @p[x=100,z=300] 10 20 30');
    });
  });

});

describe('Give', function () {

  describe('#new(player, item, amount, data, dataTag)', function () {
    let give = new Give(
      new Player('Mike'),
      new Item('apple'),
      64,
      1,
      {display: {Lore: ["Apple here"]}}
    );

    it('should return /give Mike minecraft:apple 64 1 {display:{Lore:["Apple here"]}}', function () {
      assert.equal(give.toString(), '/give Mike minecraft:apple 64 1 {display:{Lore:["Apple here"]}}');
    });

  });

});
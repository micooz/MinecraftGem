# MinecraftGem

A javascript library spawns commands for Command-Block of Minecraft.

## Aim

The aim of the library is to simplify Minecraft Map Makers' work. However, it just a javascript library, that is to say, coding before using.

I hope that someone can use this library to make a web app, providing GUI features for map makers.

## Installation

    $ npm install

## Features

*Concepts:*

- [x] Item
- [x] TargetSelector
- [x] Coordinate
- [x] Player

*Commands:*

- [x] give
- [x] tell / msg / w
- [x] say
- [x] spawnpoint

## APIs

Generally, every API provides a `toString()` method to get a plain string.

### Concepts

**TargetSelector**

> A target selector variable identifies the broad category of targets to select.
> see [HERE](http://minecraft.gamepedia.com/Commands#Target_selectors).

To create a `TargetSelector` and then get string, you can:

    const {TargetSelector} = require('./src/concepts');
    const ts = new TargetSelector('p');
    ts.toString(); // '@p'

more complex example:

    const ts = new TargetSelector('a', {
      coordinate: [100, undefined, 300],
      count: 3,
      team: 'red'
    });
    ts.toString(); // '@a[x=100,z=300,c=3,team=red]'

**Item**

which can be found at:
http://minecraft.gamepedia.com/Data_values#Item_IDs

To create an item:

    const {
      Item
    } = require('../src/concepts');

    const item = new Item('bow');
    item.toString(); // 'minecraft:bow'

**Player**

You can use a plain string or a TargetSelector to create a player:

    const {
      Player,
      TargetSelector
    } = require('../src/concepts');
    
    const playerMike = new Player('Mike');
    const playerClosest = new Player(
      new TargetSelector('p')
    );

### Commands

**Say Command**

http://minecraft.gamepedia.com/Commands#say

    const {Say} = require(./src/commands);
    
    const say = new Say('Hi everybody!');
    say.toString(); // '/say Hi everybody'

**Tell Command**

http://minecraft.gamepedia.com/Commands#tell

    const {Tell} = require('.src/commands');
    
    const tell = new Tell(new Player('Mike'), 'Hi Mike');
    tell.toString(); // '/tell Mike Hi Mike'

**Give Command**

http://minecraft.gamepedia.com/Commands#give

> Gives an item to a player.

To give 64 apples to Mike:

    const {
      Item,
      Player
    } = require('../src/concepts');
    const {Give} = require(./src/commands);
    
    const give = new Give(
      new Player('Mike'),
      new Item('apple'),
      64,
      1,
      {display: {Lore: ["Apple here"]}}
    );
    give.toString(); // '/give Mike minecraft:apple 64 1 {display:{Lore:["Apple here"]}}'

Some other commands are not listed above, I will put them in the specific document.

## Test

I use `mocha` to do tests, simply run:

    $ npm test
    
## Documentation

All documentation resides here:

https://micooz.github.io/MinecraftGem/docs/index.html

## Todos / Progress

- [ ] [Particles](http://minecraft.gamepedia.com/Particles#Particles)
- [ ] [Potions](http://minecraft.gamepedia.com/Potions)
- [ ] [Data Values](http://minecraft.gamepedia.com/Data_Values)
- [ ] [Status Effect](http://minecraft.gamepedia.com/Status_effect)
- [ ] [DataTags](http://minecraft.gamepedia.com/Commands#Data_tags)
- [ ] ...

The project just getting started, and I think it will become very huge. I just try to make a simple **Framework**.

For a long period to come, I will fill in the framework with a lot of data and simple logic. I finished a little data as well as logic at present, and I really need your help.

I'll be glad if you send me some PullRequests :)

## License

MIT
import NBT from '../lib/player/nbt';

module.exports = [{
  title: 'NBT',
  methods: [{
    title: '#new().id',
    real: () => {
      const nbt = new NBT();
      return nbt.id;
    },
    actual: undefined
  }]
}];

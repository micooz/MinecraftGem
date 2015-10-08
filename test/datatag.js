const {
  BannerDataTag
  } = require('../lib/datatags/blockentity');

module.exports = [{
  title: 'Block Entity DataTag',
  methods: [{
    title: 'BannerDataTag.Patterns[0].Color',
    real: () => {
      const tag = new BannerDataTag();
      return tag.Patterns[0].Color;
    },
    actual: () => {
      return Number;
    }
  }, {
    title: 'BannerDataTag#toString',
    real: () => {
      const tag = new BannerDataTag();
      return tag.toString();
    },
    actual: () => {
      return '{Patterns:[{}]}';
    }
  }]
}];

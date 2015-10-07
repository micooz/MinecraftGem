const {
  TargetSelector
  } = require('../src/concepts');

module.exports = [{
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
}];

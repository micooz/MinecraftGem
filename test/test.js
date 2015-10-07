import testRunner from './helper';

testRunner(
  [].concat(
    require('./concepts'),
    require('./commands'),
    require('./datatag')
  ));

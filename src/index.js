/**
 * export core parts
 * @type {{concepts: (*|exports|module.exports), commands: (*|exports|module.exports), constants: (Object|*), datatags: (Object|*)}}
 */
module.exports = {
  concepts: require('./concepts'),
  commands: require('./commands')
  //constants: require('./constants'),
  //datatags: require('./datatags')
};

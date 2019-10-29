var EventEmitter = require('events');

global.bus = global.bus || new EventEmitter();

module.exports = {
  bus: global.bus,
  makeEmitter: function() {
    return new EventEmitter();
  }
};

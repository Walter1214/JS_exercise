const EventEmitter = require('events').EventEmitter;
export default class Person extends EventEmitter {
  constructor(name,gender) {
    super();
    this.name = name
    this.gender = gender
  }
  getName() {
    return this.name
  }
  reset(){
    this.emit('reset')
  }
}
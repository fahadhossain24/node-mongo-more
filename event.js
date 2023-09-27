const events = require('events')

const eventEmitter = new events.EventEmitter()

// create an event handler
const doSome = () => {
    console.log('this function do some. but I dont know');
}

// asign the handlar into an event
eventEmitter.on('print', doSome)

// firing the event
eventEmitter.emit('print')
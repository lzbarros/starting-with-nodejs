const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
const eventName = 'user:onchange';

myEmitter.on(eventName, (event) => {
    console.log(`user has been changed ${event}`);
});

myEmitter.emit(eventName, 'Name');
myEmitter.emit(eventName, 'Address');

let count = 1;
setInterval(() => {
    myEmitter.emit(eventName, `Changed ${count++}`);
}, 2000);

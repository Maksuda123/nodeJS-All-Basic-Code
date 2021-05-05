const EventEmitter = require('events');

class School extends EventEmitter {
    school() {
        console.log('hello');
        setTimeout(() => {
            this.emit('belling', {
                period: 'First',
                text: 'period ended',
            });
        }, 2000);
    }
}
module.exports = School;

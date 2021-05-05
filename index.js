// title: practice
// Description: All code

const School = require('./school');
const school = new School();
school.on('belling', ({ period, text }) => {
    console.log(` Start ${period} and ${text}`);
});
// raise an event
school.school();
// title: practice
// Description: All code

const School = require('./school');
const school = new School();
school.on('belling', ({ period, text }) => {
    console.log(` Start ${period} and ${text}`);
});
// raise an event
school.school();








setTimeout(() => {
    console.log('hi test');
}, 1000);//ata global er modda ase
console.log(global);
console.log(__dirname);//aita global er modda nai
console.log(__filename);//aita global er modda nai


//module system
//people.js
const people = ['aff', 'sdff'];
module.exports = people;

//index.js
const people = ['chinki', 'minki'];
console.log(module);
module.exports = people;



//module export require ai gula to global er modda nai to kotha heke ashlo?











// Event emitter = event rase kora/event hoiyase
const EventEmiter = require('events');
// EventEmiter=class
const emitter = new EventEmitter();
// raise an event or event hoilo or gotlo
emitter.emit('bellRing');

// ai tuko diya run korle  kisu hobe na ..karon event gotlo goter por k hobe boli nai










const EventEmitter = require('events');
// EventEmiter=class
const emitter = new EventEmitter();

//register a listener for bellRing event
// listen koralam
emitter.on('bellRing', ()=>{
    console.log('we need to run');
});
// raise an event or event hoilo or gotlo
emitter.emit('bellRing');












//ai code kaj korbe na

const EventEmitter = require('events');

const emitter = new EventEmitter();

//2 second por run korate chile
setTimeout(() => {
    emitter.emit('bellRing');
}, 2000);
emitter.on('bellRing', () => {
    console.log('we need to run');
});





const EventEmitter = require('events');

const emitter = new EventEmitter();
//register listener for belling event
emitter.on('bellRing', (period) => {
    console.log(` we need to run because ${period}`);
});
//rase an event
setTimeout(() => {
    emitter.emit('bellRing', 'second period ended');
}, 2000);











//event parametter pase

const EventEmitter = require('events');

const emitter = new EventEmitter();
//register listener for belling event
emitter.on('bellRing', ({period, text}) => {//obeject pelam distucture kore
    console.log(` we need to run because ${period}${text}`);
});
//rase an event
setTimeout(() => {
    emitter.emit('bellRing', {//object akare pase kortasi karon multiple parametter
        period: 'first',
        text: 'period ended',
    });
}, 2000);







//Extending event
//school.js
const EventEmitter = require('events');
class School extends EventEmitter {//EventEmitter er shomoshto property ai khane chole ashce
    startPeriod() {
        console.log('class started');    
        // rase an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000);
    }
}
module.exports = School;
//schoo.js purata ekta structure or blue print

//index.js
const School = require('./school');

const school = new School();
// register listener for belling event
school.on('bellRing', ({ period, text }) => {
    // obeject pelam distucture kore
    console.log(` we need to run because ${period}${text}`);
});
// rase an event
school.startPeriod();













//http module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello');
        res.end();
    } else if (req.url === '/about') {
        res.write('hellofgf');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});
server.listen(33333);
console.log('listening on port 33333');








//path module

const path = require('path');
const myPath = 'G:All Nodejspraticeindex.js';
console.log(path.dirname(myPath));

//or
const path = require('path');
const myPath = path.dirname('G:\All Nodejs\pratice\index.js');
console.log(myPath);

const path = require('path');
const myPath = path.parse('G:\All Nodejs\pratice\index.js');
console.log(myPath);



/os module
const os = require('os');
console.log(os.freemem());
console.log(os.homedir());
console.log(os.cpus());




//fs module

const fs = require('fs');

fs.writeFileSync('myFile.txt', 'hello');
fs.appendFileSync('myFile.txt', 'hello');
const data = fs.readFileSync('myfile.txt');
console.log(data);
console.log(data.toString());

// callback
fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString());
});
console.log('what are you doing');


const fs = require('fs');
fs.writeFile('myFile', 'Hello', (err) => {
   if(err){
       console.log('Error');
   }else{
    console.log('Data Save');
   }
})













//read strem
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message"/></form></body>',
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk.toString());
        });
        res.write('Thank you');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});
server.listen(33000);
console.log('listening on port 33000');




//Read strem (strem way te data dicce)
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message"/></form></body>',
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = []; //ekta ekta chunk ashtase 
        req.on('data', (chunk) => {
            body.push(chunk);//er ashter por  body the chunk duktase
        });
        req.on('end', () => {
            console.log('strem finished');
            const parsedBody = Buffer.concat(body).toString();// body er modda ja pura  data ta ase shetake shob gula ke jug korlam buffer er modda raklam
            console.log(parsedBody);
            res.write('Thank you');
            res.end();
        });
     
    } else {
        res.write('Not found');
        res.end();
    }
});
server.listen(33000);
console.log('listening on port 33000');










//write strem
const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
}); //2 line er bodole nicher aita o kora jai mane pipe

//ourWriteStream.pipe(ourWriteStream);






//pipe
//write strem
const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
ourWriteStream.pipe(ourWriteStream);




//pipe
// strem event ar shohoj upai pipeline
// read write er jamela korte hoitase na
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStrem = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
    myReadStrem.pipe(res);
});
server.listen(3000);
console.log('Listem on port 3000')
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
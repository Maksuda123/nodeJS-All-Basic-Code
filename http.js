const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello');
        res.end();
    } else if (req.url === '/about') {
        res.write('helll');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});
server.listen(1234);
console.log('listen on port');

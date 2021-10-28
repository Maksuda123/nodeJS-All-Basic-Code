const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const myValues= `Hi`
const myWriteFile = fs.writeFileSync('./txt/out.txt', myValues)
console.log('File Written!');

///////////////////////////////

const pathName = req.url;
FileSystem
    .readFile('./dev-data/data.json', 'utf-8',
    (err, data) => {
        const productData
            = JSON.parse(data);
    resizeBy.writeHead(200,
        { 'content-type': 'application/json' });
});



const http = require('http');

// const http = require('http');

const fs = require('fs');

const fileContent = fs.readFileSync('Css_Grid_Templete_area_Property.html', 'utf-8');

const server = http.createServer((req, res)=>{
// console.log("Your Request is sucssesfully responed");
    res.writeHead(200, {'Constants-type' : 'text/html'});
    res.end(fileContent);
});

server.listen(80, '127.0.0.1', ()=>{
    console.log("Listing ......");
});


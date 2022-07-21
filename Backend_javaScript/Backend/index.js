const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    const Home = fs.readFileSync('./index.html');
    const Edit= fs.readFileSync('./Edit.html');
    const File = fs.readFileSync('./File.html');
    const Run = fs.readFileSync('./Run.html');
    const Selection = fs.readFileSync('./Selection.html');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(Home);

    }
    else if(url == '/File' ){
        res.end(File);
    }
    else if(url == '/Edit'){
        res.end(Edit);
    }
    else if(url == '/Run'){
        res.end(Run);
    }
    else if(url == '/Selection'){
        res.end(Selection);
    }
    else{
        res.end("Error : 404 not found");
    }



})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
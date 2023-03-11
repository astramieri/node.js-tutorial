const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    if (req.url === '/') {
        res.end("Welcome to the home page!");
    } else if (req.url === '/about') {
        res.end("Welcome to the about page!");
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We cannot find the page you are looking for</p>
        <a href="/">back home</a>`);
    }

    //res.write("Welcome to the home page!");
    //res.end();
});

server.listen(3000);
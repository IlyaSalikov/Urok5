const http = require('http');
const path = require('path');
http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'error.html'), (err, data) => {
            console.log(path.join(__dirname, 'error.html'));
            if(err) throw err.message;
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        });
    }
}).listen(3000);
http.createServer().listen(3000);
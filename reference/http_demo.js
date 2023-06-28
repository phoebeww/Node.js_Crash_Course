const http = require('http');

// Create server object
http.createServer((req, res) => {
        // write response
        res.write('Hello World');
        res.end();
}).listen(1000, () => console.log('Server running...'));
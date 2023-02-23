const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`server is successfully running on PORT ${PORT}`);
})
const http = require('http');
const { rest } = require('lodash');

const server = http.createServer((req, res)=>{
    console.log('request event');
    rest.end('Hello World')
})

server.listen(5000, ()=>{
    console.log('Server listing on port : 5000.....');
})
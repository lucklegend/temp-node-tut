const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to our home page')
        res.end()
    }
    if(req.url === '/about'){
        res.write('This is our small history')
        res.end()
    }
    res.write('<h1>Error 404</h1><p>We cannot seem to find the page you are looking for</p><a href="/">Back to home</a>')
    res.end()
})

server.listen(5000)
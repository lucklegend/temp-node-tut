const http = require('http')


const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Home Page');
        res.end();
    }
    else if(req.url === '/about'){
        // Blocking code!!!
        for(let i = 0; i<1000; i++){
            for(let j = 0; j<1000; j++){
                console.log(`${i} ${j}`);
            } 
        }
        res.write('About Page');
        res.end();
    }
    else{
        res.write('Error Page');
        res.end();
    }
    
})

server.listen(5000, ()=>{
    console.log('Server listening on port : 5000...');
})
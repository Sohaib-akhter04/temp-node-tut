const http=require('http');

const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to my server!')
    }
    if(req.url==='/about'){
        res.end('here is our short history');
    }
    res.end(`
    <h1>Oopss!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Home</a>`)
})
server.listen(5000);
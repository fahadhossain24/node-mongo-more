const http = require('http');
// const url = require('url')

// const parseData = url.parse('http://localhost:5001/about?name=fahad&country=Bangladesh', true);
// console.log(parseData.pathname)

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.writeHead(200, {'content-type' : 'application/json'})
        res.write(JSON.stringify({name: 'fahad Hossain'}))
        res.end()
    }else if(req.url === '/about'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<p>this is about page</p>')
        res.end()
    }

})


server.listen(5001, () => {
    console.log('server is running')
})




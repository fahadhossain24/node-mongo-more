const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/read') {
        fs.readFile('./data.txt', (data, err) => {
            if (!err) {
                res.write(data);
                res.end()
            } else {
                res.write(err);
                res.end()
            }
        })
    }else if(req.url === '/write'){
        fs.readFile('./data.txt', (data, err) => {
            if (!err) {
                res.write(data);
                res.end()
            } else {
                res.write(err);
                res.end()
            }
        })

        fs.writeFile('./second.txt', 'Yes I can write second.txt file', (err) => {
            if(!err){
                res.write('data written successfull');
                res.end()
            }else{
                res.write('error');
                res.end()
            }
        })
    }else if(req.url === '/append'){
        fs.appendFile('./second.txt', ' append another hello world', (err) => {
            if(!err){
                res.write('file append successfull');
                res.end()
            }else{
                res.write('file append failed');
                res.end();
            }
        })
    }else if(req.url === '/delete'){
        fs.unlink('./other.txt', (err) => {
            if(!err){
                res.write('file deleted');
                res.end()
            }else{
                res.write('delete failed')
                res.end()
            }
        })
    }
})

server.listen(5002, () => {
    console.log('server is running')
})




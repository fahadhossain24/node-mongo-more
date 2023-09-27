
const fs = require('fs')

const readSteam = fs.createReadStream('./data.txt')

readSteam.on('data', (chunk) => {
    console.log('............')
    console.log(chunk)
})

readSteam.on('open', () => {
    console.log('steam is open')
})

setTimeout(() => {
    readSteam.pause()
    console.log('steam is pause')
}, 10)

setTimeout(() => {
    readSteam.resume()
    console.log('steam is resume')
}, 5000)
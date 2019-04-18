const http = require('http')
const app = http.createServer((req, res) => {
res.end('hello, zhizi')
})

app.listen('80', () => {

console.log('the serve is running 80 port')
})
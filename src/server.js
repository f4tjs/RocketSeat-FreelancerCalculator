const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, './views'));

server.use(express.static('public'))

server.use(express.urlencoded({extended: true}))
server.use(routes)

const port = 3000;

server.listen(port, () => console.log(`SERVER RUNNING ON PORT: ${port}`))
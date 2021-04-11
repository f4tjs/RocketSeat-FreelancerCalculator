const express = require('express')
const routes = express.Router()

const profile = {
    name: "Matheus",
    avatar: "https://avatars.githubusercontent.com/u/36131994?v=4",
    'monthly-budget': 3000,
    'days-per-week': 5,
    'hours-per-day': 5,
    'vacation-per-year': 4
}

routes.get('/', (req, res) => res.render('index'))
routes.get('/job', (req, res) => res.render('job'))
routes.get('/job/edit', (req, res) => res.render('job-edit'))
routes.get('/profile', (req, res) => res.render('profile', {
    profile
}))


module.exports = routes
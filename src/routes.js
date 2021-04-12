const express = require('express')
const routes = express.Router()

const profile = {
    name: "Matheus",
    avatar: "https://github.com/f4tjs.png",
    'monthly-budget': 3000,
    'days-per-week': 5,
    'hours-per-day': 5,
    'vacation-per-year': 4
}

const jobs = []

console.log(jobs)

routes.get('/', (req, res) => res.render('index'))
routes.get('/job', (req, res) => res.render('job'))
routes.post('/job', (req, res) => {
    
    const lastID = jobs[jobs.length - 1]?.id || 1

    jobs.push({
        id: lastID + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now()
    })

    console.log(jobs)

    return res.status(200).redirect('/')
})
routes.get('/job/edit', (req, res) => res.render('job-edit'))
routes.get('/profile', (req, res) => res.render('profile', {
    profile
}))

module.exports = routes
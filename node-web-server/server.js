const express = require('express')
const hbs = require('hbs')

let app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/',(req, res) => {
   res.render('home.hbs', {
       pageTitle: 'Homepage',
       welcomeMessage: 'Hello world, welcome to this random site/route!',
       currentYear: new Date().getFullYear()
   })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Da done botched it son'
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
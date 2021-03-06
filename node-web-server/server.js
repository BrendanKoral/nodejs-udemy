const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 3000
let app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use((req, res, next) => {

    let now = new Date().toString()

    let log = `${now}: ${req.method} | ${req.url}`

    console.log(log)

    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server log.')
        }
    })

    //MUST call this or else the rest of the code won't fire
    next()
})

//Can show a maintenance page using middleware and just prevent the server from routing anywhere else

// app.use((req, res, next) => {
//     res.render('maintenance.hbs')
// })

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.get('/',(req, res) => {
   res.render('home.hbs', {
       pageTitle: 'Homepage',
       welcomeMessage: 'Hello world, welcome to this random site/route!'
   })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Da done botched it son'
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
const express = require('express')

let app = express()

app.get('/',(req, res) => {
    // res.send('<h1>Hello Express!</h1>')
    res.send({
        name: 'Brendan',
        likes: [
            'motorcycles',
            'bass',
            'Traveling'
        ]
    })
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Da done botched it son'
    })
})

app.listen(3000)

console.log('Listening on port 3000...')
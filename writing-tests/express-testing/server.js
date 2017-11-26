const express = require('express')

let app = express()

app.get('/', (req,res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    })
})

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Brendan',
            age: 28
        },
        {
            name: 'Wes',
            age: 25
        }
    ])
})

app.listen(3000, () => {
    console.log('App now listening on port 3000')
})

module.exports.app = app
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error(`Unable to connect to database server: ${err}`)
    }

    console.log('Connected to MongoDB server')

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, res)=> {
        if (err) {
            return console.error(`Unable to insert todo: ${err}`)
        }

        console.log(JSON.stringify(res.ops, undefined, 2))
    })

    db.close()
})
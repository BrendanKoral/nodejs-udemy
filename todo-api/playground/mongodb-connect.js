// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

//ObjectID lets you make IDs on the fly

let obj = new ObjectID()

console.log(obj)



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error(`Unable to connect to database server: ${err}`)
    }

    console.log('Connected to MongoDB server')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res)=> {
    //     if (err) {
    //         return console.error(`Unable to insert todo: ${err}`)
    //     }

    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2))
    // })

    db.close()
})
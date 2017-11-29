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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a1f1ed777c7118414313404')
    // }).toArray().then((docs) => {
    //     console.log(`Todos:`)
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.error(`Unable to fetch todos. ${err}`)
    // })


db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`)
        
    }, (err) => {
        console.error(`Unable to fetch todos. ${err}`)
    })

   
    // db.close()
})
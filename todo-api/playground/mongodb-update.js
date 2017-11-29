// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error(`Unable to connect to database server: ${err}`)
    }

    console.log('Connected to MongoDB server')

   
   
    // db.close()
})
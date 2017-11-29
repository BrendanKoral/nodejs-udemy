// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error(`Unable to connect to database server: ${err}`)
    }

    console.log('Connected to MongoDB server')

   db.collection('Todos').findOneAndUpdate( {
        _id: new ObjectID('5a1f1827b1de6e1dd8d14fa9')
   }, {
       $set: {
           completed: true
       }
   }, {
       returnOriginal: false
   })
   .then((result) => {
       console.log(result)
   })
   
    // db.close()
})
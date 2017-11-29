// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error(`Unable to connect to database server: ${err}`)
    }

    console.log('Connected to MongoDB server')

    // Three methods to delete data:
    // deleteMany, deleteOne, findOneAndDelete

    //deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(`Result: ${result}`)
    // })


    //Removes the first occurence it finds
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(`Result: ${result}`)
    // })
   
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result)
    })
   
   
    // db.close()
})
const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')

let id = '5a26f97eaf4a8a236e85d54f'

if (!ObjectID.isValid(id)) {
    console.error('ID not valid')
}

// Returns array
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

Todo.findById(id).then((todo) => {
    if (!todo) {
        console.error(`Todo not found`)
    }

    console.log('Todo by ID', todo)
}).catch((e) => console.error(e))
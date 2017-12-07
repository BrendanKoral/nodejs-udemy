const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

//Todo.remove({}) - removes all of them. Can't pass in empty argument, this will delete everything
// Todo.remove({}).then((res) => {
//     console.log(res)
// })

//findOneAndRemove() Deletes and returns the object that got removed


//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5a2881e1e858b48d0a95b8b4').then((res) => console.log(res))
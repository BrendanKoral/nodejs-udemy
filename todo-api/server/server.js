let mongoose = require('mongoose');
/*
    Have to CD on Windows to C:\Program Files\MongoDB\Server\3.4\bin

    ./mongod.exe --dbpath /Users/Koral/mongo-data
*/
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017');

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

let newTodo = new Todo({
    text: 'Pick up pizza'
})

newTodo.save().then((doc) => {
    console.log(`Successfully saved todo! ${doc}`);
}, (err) => {
    console.error('Unable to save todo');
})

let otherTodo = new Todo({
    text: 'Walk the dog',
    completed: true,
    completedAt: 123
})

otherTodo.save().then((doc) => {
    console.log(`Successfully saved todo! ${doc}`);
}, (err) => {
    console.error('Unable to save todo');
})
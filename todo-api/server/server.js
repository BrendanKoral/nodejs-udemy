let mongoose = require('mongoose');

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
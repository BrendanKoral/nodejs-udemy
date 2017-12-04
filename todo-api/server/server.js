let { mongoose } = require('./db/mongoose')
/*
    Have to CD on Windows to C:\Program Files\MongoDB\Server\3.4\bin

    ./mongod.exe --dbpath /Users/Koral/mongo-data
*/

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


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

let User = mongoose.model('User', {
  email : {
      type: String,
      required: true,
      trim: true,
      minlength: 1
  }  
})

let user = new User({
    email: 'bkoral@dealerinspire.com'
})

user.save().then((res) => {
    console.log(`User saved successfully! ${res}`)
}, (err) => {
    console.error(`Some error occurred. ${err}`)
})
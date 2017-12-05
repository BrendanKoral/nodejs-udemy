let express = require('express');
let bodyParser = require('body-parser');

let { mongoose } = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

/*
    Have to CD on Windows to C:\Program Files\MongoDB\Server\3.4\bin

    ./mongod.exe --dbpath /Users/Koral/mongo-data
*/

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (err) => res.status(400).send(err))
});

app.listen(3000, () => {
    console.log(`Todo API started on port 3000`);
});

module.exports = {
    app
};
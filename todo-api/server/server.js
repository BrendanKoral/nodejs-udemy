const {ObjectID} = require('mongodb')
const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

/*
    Have to CD on Windows to C:\Program Files\MongoDB\Server\3.4\bin

    ./mongod.exe --dbpath /Users/Koral/mongo-data
*/

let app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (err) => res.status(400).send(err))
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id

    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send()
        }
    
        res.status(200).send({todo})

    }).catch((e) => res.status(404).send())


    //Else query DB and find by ID. Include success and error
    //On E - send 400 and send empty body back .send()
    
    //On S - send it back
    //On No Todo - send 404 with empty body
})

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id
    
        if (!ObjectID.isValid(id)) {
            return res.status(404).send()
        }

        Todo.findByIdAndRemove(id).then((todo) => {
            if (!todo) {
                return res.status(404).send()
            }

            res.status(200).send({todo})
        }).catch((e) => res.status(404).send())
})

app.listen(port, () => {
    console.log(`Todo API started on port ${port}`);
});

module.exports = {
    app
};
const expect = require('expect')
const request = require('supertest')
const {ObjectID} = require('mongodb')

const {app} = require('../server')
const {Todo} = require('./../models/todo')
const {User} = require('../models/user')
const {todos, populateTodos, users, populateUsers} = require('./seed/seed')

beforeEach(populateUsers)
beforeEach(populateTodos)

describe('POST / todos', () => {
    it('should create a new todo', (done) => {
        let text = 'test todo text'

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text)
        })
        .end((err, res) => {
            if (err) {
                return done(err)
            }

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1)
                expect(todos[0].text).toBe(text)
                done()
            }).catch((e) => done(3)
            )
        })
    })

    it('should not create todo with invalid body data', (done) => {
        request(app)
        .post('/todos')
        .send({
            text: ''
        })
        .expect(400)
        .end((err, res) => {
            if(err) {
                return done(err)
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(1)
                done()
            }).catch((e) => done(e))
        })
    })

    describe('/GET todos', () => {
        it('should get all todos', (done) => {
            request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(1)
            })
            .end(done)
        })
    })

    describe('/GET/todos/:id', () => {
        it('should return todo doc', (done) => {
            request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done)
        })

        it('should return 404 if todo is not found', (done) => {
            let newId = new ObjectID()

            request(app)
            .get(`/todos/${newId.toHexString()}`)
            .expect(404)
            .end(done)
        })

        it('should return an error for non-object IDs', (done) => {
            request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done)
        })
    })

    describe('Delete /todos/:id', () => {
        it('should remove a todo', (done) => {
            let hexId = todos[0]._id.toHexString()
            
            request(app)
            .delete(`/todos/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId)
            })
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                Todo.findById(hexId).then((todo) => {
                    expect(todo).toNotExist()
                    done()
                }).catch((err) => done(err))
            })

        })

        it('should return 404 if todo not found', (done) => {
            request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done)
        })

        it('should return 404 if object id is invalid', (done) => {
            request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done)
        })
    })

    describe('PATCH /todos/:id', () => {
        it('should update the todo', (done) => {
            let hexId = todos[0]._id.toHexString()

            let dummyText = 'This is the dummy text'

            request(app)
            .patch(`/todos/${hexId}`)
            .send({
                completed: true,
                text: dummyText
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(dummyText)
                expect(res.body.todo.completed).toBe(true)
                expect(res.body.todo.completedAt).toBeA('number')
            })
            .end(done)
        })

        it('should clear completedAt when todo is not completed', (done) => {
            let hexId = todos[0]._id.toHexString()

            let dummyText = 'This is newer text'

            request(app)
            .patch(`/todos/${hexId}`)
            .send({
                completed: false,
                text: dummyText
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(dummyText)
                expect(res.body.todo.completed).toBe(false)
                expect(res.body.todo.completedAt).toNotExist()
            })
            .end(done)
        })
    })
})

describe('GET /users/me', () => {
    it('should return user if authenticated', (done) => {
        request(app)
        .get('/users/me')
        .set('x-auth', users[0].tokens[0].token)
        .expect(200)
        .expect((res) => {
            expect(res.body._id).toBe(users[0]._id.toHexString())
            expect(res.body.email).toBe(users[0].email)
        })
        .end(done)
    })

    it('should return 401 if not authenticated', (done) => {
        request(app)
        .get('/users/me')
        .set('x-auth', 'test')
        .expect(401)
        .expect((res) => {
            expect(res.body).toEqual({})
        })
        .end(done)
        
    })
})

describe('POST /users', () => {
    it('should create a user', (done) => {
        let email = 'example@example.com'
        let password = 'password123'
        request(app)
        .post('/users')
        .send({email, password})
        .expect(200)
        .expect((res) => {
            expect(res.headers['x-auth']).toExist()
            expect(res.body._id).toExist()
            expect(res.body.email).toBe(email)
        })
        .end((err) => {
            if(err) {
                return done(err)
            }

            User.findOne({email}).then((user) => {
                expect(user).toExist()
                expect(user.password).toNotBe(password)
                done()
            })
        })
    })

    it('should return validation errors if request is invalid', (done) => {
        request(app)
        .post('/users')
        .send({
            email: 'e',
            password: 'pw'
        })
        .expect(400)
        .end(done)        
    })

    it('should not create user if email in use', (done) => {
        request(app)
        .post('/users')
        .send({
            email: users[0].email,
            password: '123456'
        })
        .expect(400)
        .end(done)  
    })
})
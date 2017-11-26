const request = require('supertest')
const expect = require('expect')

const app = require('./server').app

it('should return hello world as a string for a response', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
        expect(res.body).toInclude({
            error: 'Page not found.'
        })
    })
    .end(done)
})

it('should return some dummy data that contains my name and age', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({
            name: 'Brendan',
            age: 28
        })
    })
    .end(done)
})
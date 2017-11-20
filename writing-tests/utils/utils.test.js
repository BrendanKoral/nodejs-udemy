const utils = require('./utils')

it('should add two numbers together', () => {
    let res = utils.add(5, 10)

    if ( res !== 15 ) {
        throw new Error(`Result was not correct. Expected 15, was: ${res}`)
    }
})

it('should square a number', () => {
    let result = utils.square(5)

    if (result !== 25) {
        throw new Error(`Result was incorrect. Expected 25, was: ${result}`)
    }
})
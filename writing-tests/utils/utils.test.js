//Add watcher for tests: nodemon --exec "npm test"

const expect = require('expect')

const utils = require('./utils')

it('should add two numbers together', () => {
    let res = utils.add(5, 10)

    expect(res).toBe(15).toBeA('number')

})

it('should square a number', () => {
    let result = utils.square(5)

    expect(result).toBe(25).toBeA('number')

    //If you want to compare objects, you can't use toBe because triple equals is going to check for two of the same object
    //We won't get that because they're 2 objects at 2 different memory locations with the same properties, therefor different
    //Instead, use toEqual or notToEqual

    //Other example:

    /*
    expect({
        name: "Brendan",
        age: 28,
        location: "Chicago"
    }).toInclude({
        age: 28
    })
    */

})

it('should return my full name', () => {

    let user = {location: 'Chicago', age: 25}
    let res = utils.setName(user, 'Brendan Koral')

    expect(user).toEqual(res)

    expect(res).toInclude({
        firstName: 'Brendan',
        lastName: 'Koral'
    })
})
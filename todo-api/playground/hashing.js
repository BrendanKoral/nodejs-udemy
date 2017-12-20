const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//bcrypt testing

let password = '123abc!'

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash)
//     })
// })

let hashedPassword = '$2a$10$D4B.LmDn2p1I4qRT9b2yNu74YLoV0ZqzQmtzqNrheL7HXosMr92eW'

bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result)
})



// let message = 'Some message'
// let has = SHA256(message).toString()

// let data = {
//     id: 10
// }

// let token = jwt.sign(data, '123abc')

// console.log(token)

// let decoded = jwt.verify(token, '123abc')

// console.log(decoded)

//Salt hash - add something onto a hash that changes the value

// let data = {
//     id: 4
// }

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if (resultHash === token.hash) {
//     console.log(`Data was not tampered`)
// } else {
//     console.log(`Data was changed. Don't trust`)
// }
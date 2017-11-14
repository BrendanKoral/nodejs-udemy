// const yargs = require('yargs')

// const geocode = require('./geocode/geocode')

// const argv = yargs
// .options({
//     a: {
//         demand: true,
//         alias: 'address',
//         describe: 'Address for which to fetch weather',
//         string: true
//     }
// })
// .help()
// .alias('help', 'h')
// .argv

// geocode.geocodeAddress(argv.address, (errorMessage, result) => {
//     if (errorMessage) {
//         console.log(errorMessage)
//     } else {
//         console.log(JSON.stringify(result, undefined, 2))
//     }
// })

// console.log(argv)

const request = require('request')

request({
    url: 'https://api.darksky.net/forecast/f23d4945b45097d502e2b90dab4719bb/41.6840406,-88.19843019999999',
    json: true
}, (error, response, body) => {
    
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature)   
    } else {
        console.error('Unable to fetch weather whatsoever.')
    }

})
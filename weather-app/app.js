const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require ('./weather/weather')

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address for which to fetch weather',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv

// geocode.geocodeAddress(argv.address, (errorMessage, result) => {
//     if (errorMessage) {
//         console.log(errorMessage)
//     } else {
//         console.log(JSON.stringify(result, undefined, 2))
//     }
// })

weather.getWeather()
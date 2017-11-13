const request = require('request')
const yargs = require('yargs')

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

let encodedAddress = encodeURIComponent(argv.a)

console.log(argv)


request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2))
})
const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=10%20E%20Main%20Street,%20Roselle,%20IL%2060172',
    json: true
}, (error, response, body) => {
    console.log(body)
})
const request = require('request')

let getWeather = () => {
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
}

module.exports.getWeather = getWeather
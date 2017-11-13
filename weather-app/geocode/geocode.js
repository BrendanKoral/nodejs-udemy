const request = require('request')

let geocodeAddress = (address) => {
    
    let encodedAddress = encodeURIComponent(address)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
    
        if (error) {
            console.log('Unable to connect to Google services.')
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('There were no matches for that address.')
        } else if (body.status === 'OK') {
            console.log(`Address: ${body.results[0].formatted_address}`)
            console.log(`Latitude: ${body.results[0].geometry.location.lng}`)
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
        }
    
        console.log(JSON.stringify(body, undefined, 2))
    })
}

module.exports.geocodeAddress = geocodeAddress
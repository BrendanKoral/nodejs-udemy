const request = require('request')

let geocodeAddress = (address, callback) => {
    
    let encodedAddress = encodeURIComponent(address)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
    
        if (error) {
            callback('Unable to connect to Google services.')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('There were no matches for that address.')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
            console.log(`Address: ${body.results[0].formatted_address}`)
            console.log(`Latitude: ${body.results[0].geometry.location.lng}`)
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
        }
    
        console.log(JSON.stringify(body, undefined, 2))
    })
}

module.exports.geocodeAddress = geocodeAddress
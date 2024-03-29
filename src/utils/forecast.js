const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/93ba0591fa2d51667063eba13818fc25/'+ latitude+','+longitude + '?units=si'

    request({ url, json:true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to wether service!', undefined)
        }else if(body.error){
            callback('Unable to find location!', undefined)
        }else{
             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature+' degress out .This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance for rain.')
        }
    })
}


module.exports = forecast
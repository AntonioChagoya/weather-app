const fetch = require('node-fetch')

const handler = async function () {
  try {
    const response = await fetch('https://www.metaweather.com/api/location/search/?query=44418', {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { 
        statusCode: response.status, 
        body: response.statusText,
        testing: false
      }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      testing: true,
      body: JSON.stringify( data.consolidated_weather ),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }

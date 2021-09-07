const fetch = require('node-fetch')
const url = require('url');

const current_url = new URL('https://www.metaweather.com/api/location/preview?id=123&type=article');
const search_params = current_url.searchParams;

const handler = async function () {
  try {
    const response = await fetch('https://www.metaweather.com/api/location/44418', {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify( data ),
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

const axios = require("axios")

async function ticker() {
    return call('ticker')
}

async function meta() {
    return call('meta')
}

async function call(endpoint) {
    const headers = { "Content-TYpe": "aplication/json" }

    const url = `https://api.biscoint.io/v1/${endpoint}`

    const method = "GET"

    const config = {
        url,
        method,
        headers,
        data: {},
        timeout: 5000
    }

    const result = await axios(config)
    return result.data
}

module.exports = {
    meta,
    ticker
}
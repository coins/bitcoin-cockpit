// Endpoint
const ENDPOINT_MAINNET = 'http://localhost:8332'
const ENDPOINT_TESTNET = 'http://localhost:18332'
const ENDPOINT_SIGNET = 'http://localhost:38332'
const ENDPOINT = ENDPOINT_SIGNET

// Credentials 
const username = 'robin'
const password = 'password'

async function bitcoinRPC(method, params = [], wallet = '') {
    // Compose endpoint
    const url = `${ENDPOINT}/${wallet}`

    // Compose headers
    const authString = `${username}:${password}`
    const headers = { 'Authorization': 'Basic ' + btoa(authString) }

    // Compose body
    let body = { id: 't0', method: method, params: params}
    body = JSON.stringify(body)

    // Make request
    let response
    try {
        response = await fetch(url, { method: 'POST', headers, body })
    } catch (error) {
        // Handle fetch error
        throw `Failed to execute bitcoin RPC.\nMake sure bitcoind is running on ${url}`
    }

    const responseJSON = await response.json()

    // Handle response
    if (response.ok)
        return responseJSON.result
    else
        throw responseJSON.error.message
}
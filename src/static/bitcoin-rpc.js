async function bitcoinRPC(method, params = [], wallet = '') {
    // Endpoint
    const endpointUrl = `http://localhost:8332/${wallet}`

    // Credentials 
    const username = 'robin'
    const password = 'password'

    // Compose headers
    const authString = `${username}:${password}`
    const headers = { 'Authorization': 'Basic ' + btoa(authString) }

    // Compose body
    let body = { id: 't0', 'method': method, 'params': params }
    body = JSON.stringify(body)

    // Make request
    let response
    try {
        response = await fetch(endpointUrl, { method: 'POST', headers, body })
    } catch (error) {
        // Handle fetch error
        throw `Failed to execute bitcoin RPC.\nMake sure bitcoind is running on ${endpointUrl}`
    }

    const responseJSON = await response.json()

    // Handle response
    if (response.ok)
        return responseJSON.result
    else
        throw responseJSON.error.message

}
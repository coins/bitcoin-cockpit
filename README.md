# Bitcoin Cockpit
A simple GUI for bitcoin RPCs.

## Installation 

Bitcoin Cockpit uses Bitcoin's RPC interface. Make sure you read the [security section](https://github.com/bitcoin/bitcoin/blob/master/doc/JSON-RPC-interface.md#security) of the documentation before you proceed.

### Option A: Patching Bitcoin Core 
- Merge [this pull request](https://github.com/bitcoin/bitcoin/pull/12040)
- Edit your `bitcoin.conf`
- Restart bitcoind

### Option B: Proxy Bitcoin Core
- Run a [proxy adding CORS headers](https://github.com/unchained-capital/caravan#adding-cors-headers) (e.g. [nginx](https://www.nginx.com/))
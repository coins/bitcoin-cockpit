class WalletSelector extends HTMLElement {
    
    constructor() {
        super();
        this.innerHTML = '<select></select>'
        this.getWallets()
        this.className = 'item'
        this.setAttribute('label', 'Wallet')
    }


    get value(){
    	return this.querySelector('select').value
    }

    async getWallets() {

        let wallets
        let $wallet = this.querySelector('select')

        try {
            wallets = await bitcoinRPC('listwallets', [])
        } catch (e) {
            $error.textContent = e
            return
        }
        console.log(wallets)

        if (wallets.length == 1) {
            $wallet.value = wallets[0]
            $wallet.disabled = true
        } else {
            $wallet.innerHTML = '<option value="null" selected disabled>Select a wallet</option>'
        }

        wallets.forEach((walletname) => {
            const $item = document.createElement('option')
            $item.textContent = walletname ? walletname : '(unnamed wallet)'
            $item.value = walletname
            $wallet.append($item)
        })

    }
}

customElements.define('wallet-selector', WalletSelector);


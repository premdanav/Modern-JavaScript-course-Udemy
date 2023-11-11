//private property convention 
class Wallet {
    // constructor() {
    //     this._balance = 0;
    //     this._transactions = []
    // }

    //ES22 private class fields
    #balance = 0
    #transactions = []

    deposit(amount) {
        this.#processDeposit(amount)
        this.#balance += amount
    }

    withdraw(amount) {
        this.#processWithdraw(amount)
        if (amount > this.#balance) {
            console.log('not enough money');
            return;
        }
        this.#balance -= amount
    }

    #processDeposit(amount) {
        console.log(`Depostiting ${amount}`)
        this.#transactions.push({
            type: 'deposit',
            amount
        });
    }

    #processWithdraw(amount) {
        console.log(`Withdrawing ${amount}`)
        this.#transactions.push({
            type: 'withdraw',
            amount
        });
    }

    get balance() {
        return this.#balance;
    }

    get transactions() {
        return this.#transactions;
    }
}

const wallet = new Wallet();
// wallet.deposit(300);
// wallet.withdraw(50);
// console.log(wallet.balance);
// console.log(wallet.transactions)



//ES22
wallet.deposit(500)
wallet.withdraw(100)
console.log(wallet.transactions)
console.log(wallet.balance)
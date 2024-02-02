class Bankist {
    constructor(balance) {
        this.balance = balance;
        this.transactions = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.transactions.push({ type: 'deposit', amount });
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
            return;
        }
        this.balance -= amount;
        this.transactions.push({ type: 'withdrawal', amount });
    }

    getBalance() {
        return this.balance;
    }

    getTransactions() {
        return this.transactions;
    }
}

class App {
    constructor() {
        this.bankist = new Bankist(4000);
        this.container = document.querySelector('.app');
        this.init();
    }

    init() {
        this.displayBalance();
        this.displayTransactions();
        this.addEventListeners();
    }

    displayBalance() {
        const balanceOutput = document.createElement('div');
        balanceOutput.classList.add('output');
        balanceOutput.textContent = `Current balance: ${this.bankist.getBalance()} €`;
        this.container.appendChild(balanceOutput);
    }

    displayTransactions() {
        const transactionsOutput = document.createElement('div');
        transactionsOutput.classList.add('transactions');
        this.bankist.getTransactions().forEach(transaction => {
            const transactionDiv = document.createElement('div');
            transactionDiv.classList.add('transaction');
            const typeSpan = document.createElement('span');
            typeSpan.textContent = transaction.type;
            transactionDiv.appendChild(typeSpan);
            const amountSpan = document.createElement('span');
            amountSpan.textContent = `${transaction.amount} €`;
            transactionDiv.appendChild(amountSpan);
            transactionsOutput.appendChild(transactionDiv);
        });
        this.container.appendChild(transactionsOutput);
    }

    addEventListeners() {
        const depositButton = document.createElement('button');
        depositButton.textContent = 'Deposit';
        depositButton.addEventListener('click', () => {
            const amountInput = document.createElement('input');
            amountInput.type = 'number';
            amountInput.addEventListener('change', () => {
                this.bankist.deposit(parseFloat(amountInput.value));
                this.container.innerHTML = '';
                this.init();
            });
            this.container.appendChild(amountInput);
        });
        this.container.appendChild(depositButton);

        const withdrawButton = document.createElement('button');
        withdrawButton.textContent = 'Withdraw';
        withdrawButton.addEventListener('click', () => {
            const amountInput = document.createElement('input');
            amountInput.type = 'number';
            amountInput.addEventListener('change', () => {
                this.bankist.withdraw(parseFloat(amountInput.value));
                this.container.innerHTML = '';
                this.init();
            });
            this.container.appendChild(amountInput);
        });
        this.container.appendChild(withdrawButton);
    }
}

new App();

// Initial balance
let balance = 0;

function deposit() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited $${amount}.`);
        amountInput.value = ''; 
    } else {
        console.log("Invalid deposit amount.");
    }
}


function withdraw() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn $${amount}.`);
        amountInput.value = ''; 
    } else {
        console.log("Invalid withdrawal amount.");
    }
}

function checkBalance() {
    updateBalanceInfo(); 
}

function updateBalanceInfo() {
    const balanceInfoDiv = document.getElementById('balanceInfo');
    balanceInfoDiv.textContent = `Current balance: $${balance}`;
}

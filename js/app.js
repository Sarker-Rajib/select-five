// onclick event for calculate the payment for players in the list
document.getElementById('calulate-player-fee-btn').addEventListener('click', function () {
    // get the players number and payment amount
    const playerNumber = countItemsFromList('player-list');
    const paymentPerPlayer = getValueFromInput('payment-per-player');

    // input validation (payment for a player)
    if (isNaN(paymentPerPlayer) || paymentPerPlayer < 0) {
        alert('Please enter only number (negative numbers are not acceptable)')
        return;
    }

    // calculate the player payment
    const totalPlayerCost = playerNumber * paymentPerPlayer;
    // set the payment
    setResult('total-player-cost', totalPlayerCost);
});


// onclick event for calculate the total payment
document.getElementById('calculate-total-button').addEventListener('click', function () {
    // get the payment amount for manager coach and players
    const playerCostTotal = getValueFromText('total-player-cost');
    const managerPayment = getValueFromInput('manager-payment');
    const coachPayment = getValueFromInput('coach-payment');

    // input validation for payments
    if (isNaN(managerPayment) || managerPayment < 0 || isNaN(coachPayment) || coachPayment < 0) {
        alert('Please enter only number (negative numbers are not acceptable)')
        return;
    }

    // calculate the total payment
    const totalCost = playerCostTotal + managerPayment + coachPayment;

    // set the total amout
    setResult('total-payment', totalCost);
});


// adding names to selected list
const buttons = document.querySelectorAll('#select-button');
for (const button of buttons) {
    button.addEventListener('click', function () {
        // get name from card
        const parent = this.parentNode;
        const playerName = parent.children[0].innerText;


        // create name for selected list
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = playerName;

        const listNumber = countItemsFromList('player-list');
        if (listNumber === 5) {
            alert('You can not Choose more than 5 Player')
            return;
        }

        // push/add name to list
        playerList.appendChild(li);

        // disable the button and make visual
        button.disabled = true;
        this.classList.add('disabled');
    });
}
// codes are ended here
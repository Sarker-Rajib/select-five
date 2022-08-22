// function for getting number of item from a list
function countItemsFromList(listID) {
    const ul = document.getElementById(listID);
    let i = 0, itemCount = 0;
    while (ul.getElementsByTagName('li')[i++])
        itemCount++;
    return itemCount;
}

// function for getting value from a input element
function getValueFromInput(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValuestring = inputField.value;
    const inputValue = parseFloat(inputValuestring);
    // inputField.value = '';

    return inputValue;
}

// function for getting value from a text element
function getValueFromText(elementId) {
    const textElement = document.getElementById(elementId);
    const inputValueString = textElement.innerText;
    const inputValue = parseFloat(inputValueString);

    return inputValue;
}

// function for setting result to a text element
function setResult(elementId, result) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = result;
}


import isEven from './is-even.js';

function testNumber() {
    const numberInput = document.getElementById('number-input');
    const resultParagraph = document.getElementById('result');

    //changing string to number
    const number = parseInt(numberInput.value);

    //console.log(number);

    const result = isEven(number);

    if(result) {
        resultParagraph.textContent = 'even';

    }   

    else {
        resultParagraph.textContent = 'odd';
    }
}

window.testNumber = testNumber;
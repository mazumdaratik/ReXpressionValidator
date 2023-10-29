function validateExpression() {
    const option = document.getElementById('option').value;
    const input = document.getElementById('input').value;
    let regEx;

    switch (option) {
        case 'email':
            regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
        case 'phone':
            regEx = /^01\d{9}$/;
            break;
        case 'postcode':
            regEx = /^\d{4}$/;
            break;
    }

    const isValid = regEx.test(input);

    const resultElement = document.getElementById('result');
    resultElement.textContent = isValid ? 'Great!! Valid Expression' : 'It is an Invalid Expression';
}

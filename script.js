function slider() {
    var value = document.getElementById("amount").value;
    document.getElementById("value").innerHTML = parse_value(value);
    document.getElementById("eco").innerHTML = parse_value(value * 0.06 - 1700)
}

function parse_value(value) {
    return first(value) + second(value) + third(value);
}

function first(value) {
    var calc = this.quotient(value, 1000000);
    var result = '';

    if (calc != 0) {
        result = calc + ' ';
    }

    return result;
}

function second(value) {
    var calc = this.quotient(value % 1000000, 1000);
    var result = '';

    if (calc >= 0 && value >= 1000000) {
        if (calc > 99) {
            result = calc + ' ';
        }
        else if (calc > 9) {
            result = '0' + calc + ' ';
        }
        else {
            result = '00' + calc + ' ';
        }
    } else if (calc >= 0) {
        result = calc + ' ';
    }

    return result;
}

function third(value) {
    var calc = this.quotient(value % 1000, 1);
    var result = '000';

    if (calc != 0) {
        result = calc + ' ';
    }

    return result;
}

function quotient(dividend, dividers) {
    return (dividend - dividend % dividers) / dividers;
}
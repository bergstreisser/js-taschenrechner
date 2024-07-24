function eingabe(zahl) {
    document.getElementById('display').innerHTML += zahl;
}

function cl() {
    let empty = " ";
    document.getElementById('display').innerHTML = empty;
}

function del() {
    let ausdruck = document.getElementById('display');
    // let delErg = ausdruck.substring(0, ausdruck.length - 1);
    // document.getElementById('display').innerHTML = delErg;

    if(ausdruck.innerHTML.endsWith(' ')) {
        ausdruck.innerHTML = ausdruck.innerHTML.slice(0, -3);
    } else {
        ausdruck.innerHTML = ausdruck.innerHTML.slice(0, -1);
    }
}

function berechnung() {
    let ausdruck = document.getElementById('display').innerText;
    // let splitString = ausdruck.split(' ');

    // let operand1 = splitString[0];
    // let operand2 = splitString[2];
    // let operator = splitString[1];
    // let ergebnis;

    // switch (operator) {
    //     case "/":
    //         ergebnis = operand1 / operand2;
    //         break;
    //     case "x":
    //         ergebnis = operand1 * operand2;
    //         break;
    //     case "+":
    //         ergebnis = operand1 + operand2;
    //         break;
    //     case "-":
    //         ergebnis = operand1 - operand2;
    //         break;
    //     default:
    //         break;
    // }

    let ergebnis = eval(ausdruck);

    document.getElementById('display').innerHTML = ergebnis;
    
}

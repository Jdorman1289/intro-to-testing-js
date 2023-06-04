// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(userName) {
    if (userName === undefined) {
        return "Hello, World!";
    } else if (typeof (userName) === "boolean") {
        return "Hello, World!";
    } else {
        return `Hello, ${userName}!`;
    }
}

function isFive(input) {
    return parseFloat(input) === 5;
}

function isEven(input) {
    if (typeof input === "boolean") {
        return false;
    } else if (input < 0) {
        input = Math.abs(input);
    }
    if (input === 2) {
        return true;
    } else return input % 2 === 0;
}
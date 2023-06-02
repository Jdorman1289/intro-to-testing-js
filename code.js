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
// import sayMessage
const sayMessage = require("../messages/say-message")

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

// export sayHelloTo
module.exports = sayHelloTo;

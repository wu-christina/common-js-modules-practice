// import hello-message.js
const helloMessage = require("./hello-message");

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

// export say-message
module.exports = sayMessage;

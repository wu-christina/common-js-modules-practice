// import sayHelloTo
const sayHelloTo = require("./say-hello-to")

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

// export giveMessageToMrsPotato
module.exports = giveMessageToMrsPotato;


// Your code here
// import giveMessageToMrsPotato, index in messages directory, & sayHelloTo
const giveMessageToMrsPotato = require("./send-messages/give-message-to-mrs-potato");
const { msg1, msg2, msg3 } = require("./messages/index");
const sayHelloTo = require("./send-messages/say-hello-to")
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);

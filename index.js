require('./server')();
const {logic} = require('./logic');
const {client} = require('./client/client');
logic(client);

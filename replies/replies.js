const {getGildLang} = require('./langs/language');
const replies = require('./config')

function getReply(parameter) {
  switch(parameter) {
    case 'mjmd': return getRand(replies.mjmd);
    case 'ma3moul': return getRand(replies.ma3moul);
    default: throw ('the parameter was not found');
  }
}

function getRand(arr) {
  return arr[Math.floor(Math.random()* arr.length)];
}

module.exports = { getReply };

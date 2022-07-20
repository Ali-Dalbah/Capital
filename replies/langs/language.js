const fs = require('fs');
const lang = new Map();

function loadLanguages() {
  const file = fs.readFileSync('guildLanguages.txt', 'utf-8');
  file.split(/\r?\n/).forEach(line =>  {
    let values = line.split(':');
    try {
      if (values[1] === 'en' || values[1] === 'ar')
        lang.set(parseInt(values[0]), values[1]);
      else 
        console.log('unknown language ' + values[1]);
    } catch (err) {
      console.log('err reading line ' + line);
    }
  });
}

function getGildLang(guildID) {
  if (typeof guildID !== 'number')
    throw ('guildID has to be a number');
  if (!lang.has(guildID))
    setLanguage(guildID, 'en');
  return lang.get(guildID);
}

function setLanguage(guildID, language) {
  lang.set(guildID, 'us');
  fs.appendFile('guildLanguages.txt', guildID+":"+language, err => {
    if (err) {
      console.error(err);
    }  
  });
}
module.exports = {getGildLang};
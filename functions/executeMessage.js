const messageFunctions = require('./messages/messageFunctions');
const { getReply } = require('../replies/replies');
const {refresh} = require('../refreshCommands');
const { getVoiceConnection } = require('@discordjs/voice');
module.exports.executeMsg = async (msg, player) => {
  switch(msg.author.tag) {
    case "WizardKestrel#7873":msg.channel.send(getReply('mjmd'));break;
    case "Sha777#1134": {
      if (msg.content.includes("تعبان يا شيخي"))
        msg.channel.send("نفسي انيك بس مش قادر");
      break;
    }
    case "makjjcmoud#2683": {
      msg.reply({
      files: [{attachment: getReply('ma3moul'),
      name: 'pepe.gif'}],
      content: `معمول`}
      );
      break;
    }
    case 'Dalbah#6190': {
      if (msg.content.trim() === '$refresh')
        return void refresh(msg.guild);
      break;
    }
    default:break;
  }

  if (msg.content.includes("يخوان"))
    msg.channel.send('يخوان نفسي انيك بس مش قادر');
  
  const msgCommand = msg.content.split(' ')[0].trim().toLowerCase();
  switch(msgCommand) {
    case "play":
    case "get":
    case "p":
    case "هات":
    case "شغل":
    case "جيب":
    case "جيبلي":
    case "هتلك":
    case 'soundcloud': messageFunctions.play(msg, player);break;
    case 'صوت':
    case 'الصوت':
    case 'volume': messageFunctions.volume(msg, player);break;
    case "مشي":
    case 'skip': messageFunctions.skip(msg, player);break;
    case 'queue': messageFunctions.queue(msg, player);break;
    case "وقف":
    case 'pause': messageFunctions.pause(msg, player);break;
    case 'كمل':
    case 'resume': messageFunctions.resume(msg, player);break;
    case "اغليها":
    case 'اطلع':
    case 'stop': messageFunctions.stop(msg, player);break;
    case 'حاليا':
    case 'حاليا؟':
    case 'np': messageFunctions.np(msg, player);break;
    case 'loop': messageFunctions.loop(msg, player);break;
    case 'baseboost': messageFunctions.bassboost(msg, player);break;
    case '$help': messageFunctions.help(msg);
    default: break;
  }
}
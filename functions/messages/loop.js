const { loopOptions } = require('../../client/config')
module.exports.loop = (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing)
    return void msg.reply("❌ | No music is being played!" );
  const requestedMode = msg.content.substring(msg.content.indexOf(' ')+1).trim().toLowerCase();
  let loopMode = undefined;
  switch (requestedMode) {
    case 'track': loopMode = loopOptions[0];break;
    case 'queue': loopMode = loopOptions[1];break;
    case 'off': loopMode = loopOptions[2];break;
    case 'autoplay': loopMode = loopOptions[3];break;
    default: msg.reply('No such mode as '+ requestedMode);return ;
  }
  const success = queue.setRepeatMode(loopMode);
  return void msg.reply(success ? `${mode} | Updated loop mode!` : "❌ | Could not update loop mode!" );
}
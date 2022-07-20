module.exports.help = (msg) => {
  const split = msg.content.trim().split(' ');
  if (split.length > 1) {
    const command = split[1].trim();
    switch(command) {
      case 'bassboost': msg.reply('Toggles bassboost filter');break;
      case 'play': msg.reply('play \' song Name \' \nthe song you want to play from youtube');break;
      case 'soundcloud': msg.reply('soundcloud \' song Name \' \nthe song you want to play from soundcloud');break;
      case 'volume': msg.reply('volume \' 0-100 \' \nadjusts the volume');break;
      case 'loop': msg.reply('loop \' loopMode \' \nloopMode can be queue, track, off, autoplay');break;
      case 'skip': msg.reply('skips the current song');break;
      case 'pause': msg.reply('pauses the song');break;
      case 'queue': msg.reply('prints the songs queue');break;
      case 'resume': msg.reply('resumes the song');break;
      case 'stop': msg.reply('stops the stream');break;
      case 'np': msg.reply('shows the current song');break;
      case 'ping': msg.reply('shows the bots ping');break;
      default: msg.reply('no command is nammed '+command+' was found')
    }
    return ;
  }
  msg.channel.send('for slash commands type / and select Capital\n' + 
                   'message commands:\n' +
                   'play \' song Name \'\n' +
                   'soundcloud \' song Name \'\n' +
                   'volume \' 0-100 \'\n' +
                   'loop \' loopMode \'\n' +
                   'skip\n' +
                   'pause\n' +
                   'resume\n' +
                   'stop\n' +
                   'np\n' +
                   'ping\n' +
                   'bassboost');
}
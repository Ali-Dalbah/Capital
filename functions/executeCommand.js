const commands = require('./commands/commands');
module.exports.execute = async (interaction, player) => {
  await interaction.deferReply();
  switch(interaction.commandName) {
    case 'play':
    case 'soundcloud': commands.play(interaction, player);break;
    case 'volume': commands.volume(interaction, player);break;
    case 'skip': commands.skip(interaction, player);break;
    case 'queue': commands.queue(interaction, player);break;
    case 'pause': commands.pause(interaction, player);break;
    case 'resume': commands.resume(interaction, player);break;
    case 'stop': commands.stop(interaction, player);break;
    case 'np': commands.np(interaction, player);break;
    case 'loop': commands.loop(interaction, player);break;
    case 'baseboost': commands.bassboost(interaction, player);break;
    default: interaction.reply({content: "Unknown command!", ephemeral: true});break;
  }
}
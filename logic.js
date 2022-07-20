const { execute } = require('./functions/executeCommand');
const { refresh } = require('./refreshCommands');
const { executeMsg } = require('./functions/executeMessage');
const {reminders} = require('./functions/dailyReminders');

module.exports.logic = (client) => {
  const player = client.player;
  client.on('guildCreate', (guild) => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send("Capital is here 🚬");
    refresh(guild);
  });
  client.on("messageCreate", async (msg) => {
    if (msg.author.bot || !msg.guild)
      return;
    executeMsg(msg, player);
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand() || !interaction.guildId)
      return;
    if (interaction.commandName === "ping") {
      commands.ping(client, interaction, player);
      return;
    }
    if (!interaction.member.voice.channel) {
      return void interaction.reply({ content: "You are not in a voice channel!",   ephemeral: true });
    }
    if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) {
      return void interaction.reply({ content: "You are not in my voice channel!", ephemeral: true });
  }
    execute(interaction, player);
  });
}
const { Client, GuildMember, Intents } = require("discord.js");
const client = new Client({intents: [Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});
const {token} = require('./config');
const {reminders} = require('../functions/dailyReminders');
const {Player}  = require('../player/player');
client.login(token);
client.on("ready", () => {
  console.log(`${client.user.tag} is online`);
  client.user.setActivity({
        name: " Music 🚬 | $help",
        type: "PLAYING"
  });
  reminders(client.channels.cache.get('779015218851610637'));
});
client.on("error", console.error);
client.on("warn", console.warn);
client.player = Player(client);
module.exports = {client , GuildMember};

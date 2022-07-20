const { QueueRepeatMode } = require("discord-player");
module.exports.loop = (interaction, player) => {
  const queue = player.getQueue(interaction.guildId);
  if (!queue || !queue.playing)
    return void interaction.followUp({ content: "❌ | No music is being played!" });
  const loopMode = interaction.options.get("mode").value;
  const success = queue.setRepeatMode(loopMode);
  const mode = loopMode === QueueRepeatMode.TRACK ? "🔂" : loopMode === QueueRepeatMode.QUEUE ? "🔁" : "▶";
  return void interaction.followUp({ content: success ? `${mode} | Updated loop mode!` : "❌ | Could not update loop mode!" });
}
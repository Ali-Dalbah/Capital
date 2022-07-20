module.exports.stop = (interaction, player) => {
  const queue = player.getQueue(interaction.guildId);
  if (!queue || !queue.playing)
    return void interaction.followUp({ content: "❌ | No music is being played!" });
  queue.destroy();
  return void interaction.followUp({ content: "🛑 | Stopped the player!" });
}
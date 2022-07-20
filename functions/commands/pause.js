module.exports.pause = (interaction, player) => {
  const queue = player.getQueue(interaction.guildId);
  if (!queue || !queue.playing)
    return void interaction.followUp({ content: "❌ | No music is being played!" });
  const paused = queue.setPaused(true);
  return void interaction.followUp({ content: paused ? "⏸ | Paused!" : "❌ | Something went wrong!" });
}
module.exports.resume =  (interaction, player) => {
  const queue = player.getQueue(interaction.guildId);
  if (!queue || !queue.playing) 
    return void interaction.followUp({ content: "❌ | No music is being played!" });
  const paused = queue.setPaused(false);
  return void interaction.followUp({ content: !paused ? "❌ | Something went wrong!" : "▶ | Resumed!" });
}
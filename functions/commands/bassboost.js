module.exports.bassboost = async (interaction, player) => {
  const queue = player.getQueue(interaction.guildId);
  if (!queue || !queue.playing)
    return void interaction.followUp({ content: "❌ | No music is being played!" });
  await queue.setFilters({
            bassboost: !queue.getFiltersEnabled().includes("bassboost"),
            normalizer2: !queue.getFiltersEnabled().includes("bassboost")
  });
  return void interaction.followUp({ content: `🎵 | Bassboost ${queue.getFiltersEnabled().includes("bassboost") ? "Enabled" : "Disabled"}!` });
}
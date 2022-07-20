module.exports.bassboost = async (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing)
    return void msg.reply("❌ | No music is being played!" );
  await queue.setFilters({
            bassboost: !queue.getFiltersEnabled().includes("bassboost"),
            normalizer2: !queue.getFiltersEnabled().includes("bassboost")
  });
  return void msg.reply(`🎵 | Bassboost ${queue.getFiltersEnabled().includes("bassboost") ? "Enabled" : "Disabled"}!`);
}
module.exports.pause = (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing)
    return void msg.reply("❌ | No music is being played!" );
  const paused = queue.setPaused(true);
  return void msg.reply(paused ? "⏸ | Paused!" : "❌ | Something went wrong!");
}
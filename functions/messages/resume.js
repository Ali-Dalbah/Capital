module.exports.resume =  (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing) 
    return void msg.reply("❌ | No music is being played!");
  const paused = queue.setPaused(false);
  return void msg.reply(!paused ? "❌ | Something went wrong!" : "▶ | Resumed!");
}
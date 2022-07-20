module.exports.stop = (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing)
    return void msg.reply("❌ | No music is being played!" );
  queue.destroy();
  return void msg.reply( "🛑 | Stopped the player!" );
}
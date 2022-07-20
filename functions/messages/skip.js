module.exports.skip = (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing)
    return void msg.reply("❌ | No music is being played!" );
  const currentTrack = queue.current;
  const success = queue.skip();
  return void msg.reply(success ? `✅ | Skipped **${currentTrack}**!` : "❌ | Something went wrong!");
}
module.exports.volume = (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing)
    return void msg.reply( "❌ | No music is being played!" );
  let vol = -1;
  try {
    vol = parseInt(msg.content.split(" ")[1].trim());
  } catch {
    vol = -1;
  }
  if (vol == -1)
    return void msg.reply( `🎧 | Current volume is **${queue.volume}**%!`);
  if (vol < 0 || vol > 100)
    return void msg.reply("❌ | Volume range must be 0-100" );
  const success = queue.setVolume(vol);
  return void msg.reply(success ? `✅ | Volume set to **${vol}%**!` : "❌ | Something went wrong!");
  
}
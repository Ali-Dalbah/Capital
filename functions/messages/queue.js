module.exports.queue = (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing)
    return void msg.reply( "❌ | No music is being played!");
  const currentTrack = queue.current;
  const tracks = queue.tracks.slice(0, 10).map((m, i) => {
    return `${i + 1}. **${m.title}** ([link](${m.url}))`;
  });
  return void msg.reply({
    embeds: [{title: "Server Queue",
              description: `${tracks.join("\n")}${queue.tracks.length > tracks.length ? `\n...${queue.tracks.length - tracks.length === 1 ? `${queue.tracks.length - tracks.length} more track` : `${queue.tracks.length - tracks.length} more tracks`}`
                            : ""}`,
              color: 0xff0000,
              fields: [{ name: "Now Playing", value: `🎶 | **${currentTrack.title}** ([link](${currentTrack.url}))` }]}]
  });
}
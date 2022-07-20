module.exports.np = (msg, player) => {
  const queue = player.getQueue(msg.guildId);
  if (!queue || !queue.playing)
    return void msg.reply("❌ | No music is being played!");
  const progress = queue.createProgressBar();
  const perc = queue.getPlayerTimestamp();
  return void msg.reply({embeds: [{
            title: "Now Playing",
            description: `🎶 | **${queue.current.title}**! (\`${perc.progress}%\`)`,
            fields: [{ name: "\u200b",
                       value: progress}],
            color: 0xffffff}]
  });
}
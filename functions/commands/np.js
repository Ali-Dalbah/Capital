module.exports.np = (interaction, player) => {
  const queue = player.getQueue(interaction.guildId);
  if (!queue || !queue.playing)
    return void interaction.followUp({ content: "❌ | No music is being played!" });
  const progress = queue.createProgressBar();
  const perc = queue.getPlayerTimestamp();
  return void interaction.followUp({embeds: [{
            title: "Now Playing",
            description: `🎶 | **${queue.current.title}**! (\`${perc.progress}%\`)`,
            fields: [{ name: "\u200b",
                       value: progress}],
            color: 0xffffff}]
  });
}
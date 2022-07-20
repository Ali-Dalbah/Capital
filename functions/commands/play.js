const { QueryType } = require('discord-player');

module.exports.play = async (interaction, player) => {
  const query = interaction.options.get("query").value;
  
  const searchResult = await player.search(query, {
    requestedBy: interaction.user,
    searchEngine: interaction.commandName === "soundcloud" ? QueryType.SOUNDCLOUD_SEARCH : QueryType.AUTO
    }).catch(() => {});
  
  if (!searchResult || !searchResult.tracks.length)
    return void interaction.followUp({ content: "No results were found!" });
  const queue = await player.createQueue(interaction.guild, {metadata: interaction.channel});
  try {
    if (!queue.connection) await queue.connect(interaction.member.voice.channel);
  } catch {
    void player.deleteQueue(interaction.guildId);
    return void interaction.followUp({ content: "Could not join your voice channel!" });
    }
  await interaction.followUp({ content: `⏱ | Loading your ${searchResult.playlist ? "playlist" : "track"}...` });
  searchResult.playlist ? queue.addTracks(searchResult.tracks) : queue.addTrack(searchResult.tracks[0]);
  if (!queue.playing)
    await queue.play();
}

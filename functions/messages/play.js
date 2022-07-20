const { QueryType } = require('discord-player');
module.exports.play = async (msg, player) => {
  const query = msg.content.substring(msg.content.indexOf(' ')+1);
  const searchResult = await player.search(query, {
    requestedBy: msg.user,
    searchEngine: msg.content.split(" ")[0].trim() === "soundcloud" ? QueryType.SOUNDCLOUD_SEARCH : QueryType.AUTO
    }).catch(() => {});
  
  if (!searchResult || !searchResult.tracks.length)
    return void msg.reply( "No results were found!" );
  const queue = await player.createQueue(msg.guild, {metadata: msg.channel});
  try {
    if (!queue.connection) await queue.connect(msg.member.voice.channel);
  } catch {
    void player.deleteQueue(msg.guildId);
    return void msg.reply("Could not join your voice channel!" );
    }
  await msg.reply(`⏱ | Loading your ${searchResult.playlist ? "playlist" : "track"}...` );
  searchResult.playlist ? queue.addTracks(searchResult.tracks) : queue.addTrack(searchResult.tracks[0]);
  if (!queue.playing)
    await queue.play();
}
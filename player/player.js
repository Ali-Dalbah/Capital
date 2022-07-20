const { playerEventsHandlers } = require('./playerEventsHandlers');
const { Player } = require("discord-player");
module.exports.Player = (client) => {
  const player = new Player(client);
  playerEventsHandlers(player);
  return player;
}
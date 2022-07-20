const { QueueRepeatMode } = require("discord-player");
module.exports = {
  token: process.env['TOKEN'],
  loopOptions: [QueueRepeatMode.TRACK, QueueRepeatMode.QUEUE, QueueRepeatMode.OFF, QueueRepeatMode.AUTOPLAY],
};
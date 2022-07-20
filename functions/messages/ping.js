module.exports.ping = (client, msg, player) => {
  const queue = player.getQueue(msg.guild);
  return void msg.reply({
    embeds: [{title: "⏱️ | Latency",
              fields: [{ name: "Bot Latency", value: `\`${Math.round(client.ws.ping)}ms\`` },
                       { name: "Voice Latency", value: !queue ? "N/A" : `UDP: \`${queue.connection.voiceConnection.ping.udp ?? "N/A"}\`ms\nWebSocket: \`${queue.connection.voiceConnection.ping.ws ?? "N/A"}\`ms` }],
              color: 0xFFFFFF }]
  });
}
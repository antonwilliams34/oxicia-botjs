module.exports = (client, message) => {
  message.channel.send("Ping en cours...").then(m => {
    const ping = m.createdTimestamp - message.createdTimestamp;
    m.edit(`**Ping : **${ping} ms`);
  });
};

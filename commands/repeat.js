module.exports = (client, message, args) => {
  message.channel.send(args.join(" "));
  console.log(`Message supprimé : ${message.content}`);
  message.delete({ timeout: 3000 });
};

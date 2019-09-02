module.exports = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send({
      embed: {
        color: 3447003,
        description:
          "Vous n'avez pas la permission requise pour utiliser cette commande !"
      }
    });
  // eslint-disable-next-line no-undef
  if (!args[0])
    return message.channel.send({
      embed: {
        color: 3447003,
        description:
          "Veuillez préciser le nombre de message à supprimer !\nSyntax : !clear <nombre de msg à supprimer>"
      }
    });

  // eslint-disable-next-line no-undef
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send({
        embed: {
          color: 3447003,
          // eslint-disable-next-line no-undef
          description: `${args[0]} messages supprimé`
        }
      })
      .then(msg => msg.delete(1000));
  });
};

const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const embed = new MessageEmbed()
    .setDescription(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .addField("Membres", message.guild.memberCount, true)
    .addField("Owner", message.guild.owner.user.tag, true)
    .setFooter("Réalisé par eSphere RazE#8896")
    .setTimestamp();
  message.channel.send(embed);
};

const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ dissableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("Pong !");
});

client.login(TOKEN);

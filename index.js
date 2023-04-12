const discord = require("discord.js");
const client = new discord.Client({
  intents: [32767],
});
const config = require("./config.json");
const {
  createAll,
} = require("./functions/createDb");

if (!config.token)
  throw new Error("Please provide a token in the config.json file");
if (!config.private_key)
  throw new Error("Please provide a private key in the config.json file");
if (!config.public_key)
  throw new Error("Please provide a public key in the config.json file");
if (!config.org_Id)
  throw new Error("Please provide a orgId in the config.json file");

module.exports = client;

client.on("ready", () => {
  //create the slash cmd
  createSlash();
  console.log("Bot is ready!");
});

//make a slash command
client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    if (interaction.commandName === "gen") {
      if (!config.owners.includes(interaction.member.user.id))
        return interaction.reply("You are not allowed to use this command");
      let random_username = Math.random().toString(36).substring(7);
      let random_password = Math.random().toString(36).substring(7);
      interaction.reply({
        ephemeral: true,
        content: "Generating a mongodb url... (this can take a while)",
      });
      let embed = {
        title: "MongoDB URL Generator",
        description: "",
        color: 0x2f3136,
      };
      const authToken = config.private_key;
      const public_key = config.public_key;
      const ipWhitelist = "0.0.0.0";

      //create the db
      let mongo = await createAll(
        random_username,
        authToken,
        public_key,
        ipWhitelist,
        random_username,
        random_password
      );

      embed.description = "Your mongodb url is: " + mongo;
      interaction.editReply({ embeds: [embed] });
    }
  }
});

//simple slash function create cause i'm lazy

function createSlash() {
  client.application.commands.create({
    name: "gen",
    description: "Generate a mongodb url",
  });
}

client.login(config.token);

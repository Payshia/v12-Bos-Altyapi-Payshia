// MODÜLLER \\
const Discord = require("discord.js");
const fs = require("fs");
// MODÜLLER FİNAL \\

// CLİENT \\
const client = new Discord.Client();
// CLİENT FİNAL \\

// FOLDERS \\
const Settings = require("./Settings.json");
require("./EventLoader")(client);
// FOLDERS FİNAL \\

// COMMANDS LOAD \\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Commands", (ERROR, files) => {
  if (ERROR) console.error(ERROR);
  console.log(`Client başlatılıyor... ${files.length} Adet komut yüklenecek!`);
  files.forEach(f => {
    let props = require(`./Commands/${f}`);
    client.commands.set(props.help.name, props);
    props.confing.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
// COMMANDS LOAD FİNAL \\

// PERM LEVELLER \\
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (!message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if (!message.member.permissions.has("KICK_MEMBERS")) permlvl = 2;
  if (!message.member.permissions.has("BAN_MEMBERS")) permlvl = 3;
  if (!message.member.permissions.has("ADMINISTRATOR")) permlvl = 4;
  return permlvl;
};
// PERM LEVELLER FİNAL \\

// LOGİN \\
client.login(Settings.Token).then(
  function() {
    console.log(`${client.user.username}`, "Discord'a Başarıyla Bağlandı!");
  },
  function() {
    console.log("Token Hatalı. Bot Başlatılamadı!");
  }
);
// LOGİN FİNAL \\

//Modules
const Discord = require("discord.js");
const fs = require("fs");
const data = require("quick.db");
//Modules Final

//Folders
const Settings = require("../Settings.json");
//Folders Final

//let
let Onay = Settings.Onay;
let Bekleyin = Settings.Bekleyin;
let Hata = Settings.Hata;
let Join = Settings.Join;
let Leave = Settings.Leave;
let Prefix = Settings.Prefix;
//let Final

exports.run = async (client, message, args) => {
message.delete()
if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          `${client.user.username} Version: Beta ${Settings.Sürüm}`,
          `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
        )
        .setTimestamp()
        .setColor(`#fc7c01`)
        .setTitle(`Hata!`)
        .setColor("#fc7c01")
        .setFooter(
          `Reklam-engel komutu ${message.author.username} tarafından kullanıldı.`,
          message.author.avatarURL({ dynamic: true })
        )
        .setThumbnail(
          `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
        )

        .setDescription(
          "**Görünüşe göre yetkin yetersiz! Gerekli yetki: __Mesajları yönet__**"
        )
    ).then(message => message.delete({timeout: 8000}));
  if (isNaN(args[0]))
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .setAuthor(
            `${client.user.username} Version: Beta ${Settings.Sürüm}`,
            `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
          )
          .setTimestamp()
          .setColor(`#fc7c01`)
          .setTitle(`Hata!`)
          .setColor("#fc7c01")
          .setFooter(
            `Sil komutu ${message.author.username} tarafından kullanıldı.`,
            message.author.avatarURL({ dynamic: true })
          )
          .setThumbnail(
            `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
          )

          .setDescription(
            `**Bir sayı belirtmelisin! Örnek kullanım:/Sil 1-1000**`
          )
      )
      .then(message => message.delete({ timeout: 8000 }));

  if (args[0] > 100) {
    if (args[0].split("")[1] === "0" && args[0].split("")[2] === "0") {
      var kaçkere = 0;
      var i = 0;
      let d = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      for (i; i <= Number(args[0]); i++) {
        if (args[0] > 1000) {
          kaçkere =
            i.toString().split("")[0] +
            i.toString().split("")[1] +
            i.toString().split("")[2];
        } else if (args[0] > 999) {
          kaçkere = i.toString().split("")[0] + i.toString().split("")[1];
        } else {
          kaçkere = i.toString().split("")[0];
        }
      }

      let nbr = [];
      var l = 0;
      message.delete();
      if (kaçkere > 0) {
        var msg_size = 100;
        while (msg_size == 100) {
          if (l == kaçkere) return;
          l++;
          const sd = await message.channel.messages.fetch({ limit: 100 });
          let shp = [];
          sd.forEach(a => {
            data.add(`size.${message.id}.${a.author.id}`, 1);
            data.set(`ok.${message.id}.${a.author.id}`, "tm");
            data.add(`sizee.${message.id}`, 1);
          });
          let sayı = 0;
          sd.forEach(a => {
            if (a.createdAt < Date.now() - 1209600000) return sayı--;
            sayı++;
          });
          if (sayı <= 0)
            return message.channel
              .send(
                new Discord.MessageEmbed()
                  .setAuthor(
                    `${client.user.username} Version: Beta ${Settings.Sürüm}`,
                    `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
                  )
                  .setTimestamp()
                  .setColor(`#fc7c01`)
                  .setTitle(`Hata!`)
                  .setColor("#fc7c01")
                  .setFooter(
                    `Sil komutu ${message.author.username} tarafından kullanıldı.`,
                    message.author.avatarURL({ dynamic: true })
                  )
                  .setThumbnail(
                    `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
                  )

                  .setDescription(
                    `**14 günden eski mesajlar var gibi gözüküyor! 14 günden önceki mesajlar silinemez!**`
                  )
              )
              .then(message => message.delete({ timeout: 8000 }));

          message.channel.bulkDelete(100);

          msg_size == 100;

          if (l == kaçkere) {
            setTimeout(async () => {
              message.guild.members.cache.forEach(async n => {
                if (data.fetch(`ok.${message.id}.${n.user.id}`)) {
                  nbr.push(
                    `**${n.user.tag}:** ${data.fetch(
                      `size.${message.id}.${n.user.id}`
                    )}`
                  );
                }
              });
             
              message.guild.members.cache.forEach(n => {
                if (data.fetch(`ok.${message.id}.${n.user.id}`)) {
                  data.delete(`size.${message.id}.${n.user.id}`);
                  data.delete(`ok.${message.id}.${n.user.id}`);
                }
              });
 message.channel
                .send(
                  new Discord.MessageEmbed()
                    .setAuthor(
                      `${client.user.username} Version: Beta ${Settings.Sürüm}`,
                      `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
                    )
                    .setTimestamp()
                    .setColor(`#fc7c01`)
                    .setTitle(`İşlem Başarılı!`)
                    .setColor("#fc7c01")
                    .setFooter(
                      `Sil komutu ${message.author.username} tarafından kullanıldı.`,
                      message.author.avatarURL({ dynamic: true })
                    )
                    .setThumbnail(
                      `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
                    )

                    .setDescription(
                      `> **${await data.fetch(`sizee.${message.id}`)} Mesaj başarıyla silindi!**`
                    )
                )
                .then(message => message.delete({ timeout: 8000 }));
              data.delete(`sizee.${message.id}`);
            }, 2000);
          }
        }
      }
    }
  } else {
    message.channel.bulkDelete(args[0]);
message.channel
                .send(
                  new Discord.MessageEmbed()
                    .setAuthor(
                      `${client.user.username} Version: Beta ${Settings.Sürüm}`,
                      `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
                    )
                    .setTimestamp()
                    .setColor(`#fc7c01`)
                    .setTitle(`İşlem Başarılı!`)
                    .setColor("#fc7c01")
                    .setFooter(
                      `Sil komutu ${message.author.username} tarafından kullanıldı.`,
                      message.author.avatarURL({ dynamic: true })
                    )
                    .setThumbnail(
                      `https://media.discordapp.net/attachments/695339020623937667/775336170355818496/Bot-PP.png?width=443&height=443`
                    )

                    .setDescription(
                      `> **${args[0]} Mesaj başarıyla silindi!**`
                    )
                )
                .then(message => message.delete({ timeout: 8000 }));
  }

};
exports.confing = {
  enabled: true,
  guildOnly: true,
  aliases: [`Sil`,`sil`,`Purge`,`Clear`,`clear`],
  permLevel: 0
};

exports.help = {
  name: "purge"
};
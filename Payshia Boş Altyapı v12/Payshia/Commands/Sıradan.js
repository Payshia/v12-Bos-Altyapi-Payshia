const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    
const payshia = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`Boş Kalıp Error Vermesin Diye Ekledim!`)
.setFooter('Payshia...')
message.channel.send(payshia);
}

exports.conf = {
aliases: ['sıradan']
}

exports.help = {
name: ['sıradans']
}

const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login('NTM3MzE2MzAyMzg2MTAyMjky.Dy878A.I10mZT3isN-yjvYs0qroJaFwem8');

client.on('message',message =>{
    if(message.content === "salut"){
        message.reply('salut ca va?');
        console.log('repond a slt');
    }
})    

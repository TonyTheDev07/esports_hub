
const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjgwNDE4NzQ3MDU5NTM1ODk4.Xk_8QQ.-YbVcEqQyoUNJgtE76HvuimqQ4E);//where BOT_TOKEN is the

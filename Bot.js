
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

client.login(process.env.NjY4MzM1Mzk1OTEzODU5MDcz.XiPzMQ.36XH8zBSNYhsRpj4c2fpX4jMli0);//where BOT_TOKEN is the

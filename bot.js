const Discord = require('discord.js');
const client = new Discord.Client();
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515944328921874432");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`𝐖elcome 𝐓o , **Universe.**`), 4000)        
}
});
client.login(process.env.WE);

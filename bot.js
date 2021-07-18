const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
const Bot_TOKEN = "ODMxMjM2ODk1Mjk5MjA3MTg5.YHSTrw.xT5KEyR2tqtO2fkZg35huICu7gg"

client.on('ready', () => {

  client.user.setActivity("Rowy Badges Finder v2.0")

});

client.on('message', async (msg) => {

if (msg.content.toLowerCase().startsWith(prefix + 'check')) {

  var rowyDevNumber = 1
  var rowyEarlyNumber = 1
  var rowyEventsNumber = 1
  var rowyHunterNumber = 1
  var rowyPartnerNumber = 1

let rowyPartnered = [];
let rowyHypeEvents = [];
let rowyBugHunter = [];
let rowyEarlySupporter = [];
let rowyBotDeveloper = [];
let members = await msg.guild.members.fetch()
let filtered = await members.filter(member=>{
let flags = member.user.flags
if (!flags) return;
flags = flags.toArray()
      
      if (flags.includes("VERIFIED_DEVELOPER")){
      rowyBotDeveloper.push(`${member} - ${member.user.tag}`)
      }

      if (flags.includes("EARLY_SUPPORTER")){
      rowyEarlySupporter.push(`${member} - ${member.user.tag}`)
      }
      
      if (flags.includes("HYPESQUAD_EVENTS")){
      rowyHypeEvents.push(`${member} - ${member.user.tag}\n`)
      }

      if (flags.includes("BUGHUNTER_LEVEL_1") || flags.includes("BUGHUNTER_LEVEL_2")){
      rowyBugHunter.push(`${member} - ${member.user.tag}\n`)
      }

})

let asdas = new Discord.MessageEmbed()
.setColor("BLUE")
.addFields(
  { name: "Early Supporter (**" + rowyEarlySupporter.length + "**)", value: rowyEarlySupporter.length === 0 ? '**No `Early Supporter` badge users in this server.**' : rowyEarlySupporter.map(m => "`" + rowyEarlyNumber++ + ".` " + m.toString()).join('\n') },
  { name: "Bot Developer (**" + rowyBotDeveloper.length + "**)", value: rowyBotDeveloper.length === 0 ? '**No `Verified Bot Developer` badge users in this server.**' : rowyBotDeveloper.map(m => "`" + rowyDevNumber++ + ".` " + m.toString()).join('\n')},
  { name: "Bug Hunter (**" + rowyBugHunter.length + "**)", value: rowyBugHunter.length === 0 ? '**No `Bug Hunter` badge users in this server.**' : rowyBugHunter.map(m => "`" + rowyHunterNumber++ + ".` " + m.toString()).join('\n') },
  { name: "Hype Squad Events (**" + rowyHypeEvents.length + "**)", value: rowyHypeEvents.length === 0 ? '**No `Hypesquad Events` badge users in this server.**' : rowyHypeEvents.map(m => "`" + rowyEventsNumber++ + ".` " + m.toString()).join('\n') },
  )

let rowyMessage = await msg.channel.send(asdas)

  }
});


client.login(Bot_TOKEN)
.then(logged => { console.log("Logged in as " + client.user.tag + "!") })
.catch(err => { console.log("Please check bot token!") })
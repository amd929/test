const Discord = require('discord.js')
const client = new Discord.Client()
let prefix = "?"

 Rabie∞™©🌹#3253

client.login('NTk2Nzc2MDM0NDczNDc2MDk3.XY3vnQ.izc76jMw2lUqvoFqPWTnLSqfNE4')

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**mymknch lk al9lawi**")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("**ch7al biti mn msg nsupprimer**")
        if (isNaN(count)) return message.channel.send("**wa ch7al mn 1 tal 100 ai **")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**mymknch lk al9lawi**")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("**Mt3ssbnich al9lawi montionner**")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("**Mymknch lk al9lawi** :( ")
        if (!member.manageable) return message.channel.send("**Mymknch tmuter had i**")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' **zayzone** :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' :white_check_mark: **muted from the text!** :zipper_mouth: :white_check_mark:')
            })
        }
    }
})
/*Kick*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("**montionner azebi** :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** 5roj t9awd :white_check_mark:')
    }
})

/*Ban*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(" **Ma3ndkch l7a9 azebi ;(** ")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("**mentionner azebi** :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Mymknch al9lawi :x:")
       if (!member.bannable) return message.channel.send("**Mymknch lia** :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** 5roj t9awd :white_check_mark:')
    }
})
client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** **Mr7ba bik** :heart: :v: ' + member.guild.name)
        .setFooter('Kyn fhad server db ' + member.guild.memberCount)
    member.guild.channels.get('621093220369039378').send(embed)
    member.addRole('ID DU ROLE A AJOUTER AUTOMATIQUEMENT')
})

client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** **5roj T9wd** ' + member.guild.name)
        .setFooter('Ba9i fhad server ' + member.guild.memberCount)
    member.guild.channels.get('621093220369039378').send(embed)
})

 

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    //unmute
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**3andek permission ya wld l97ba.** :point_up: :thinking: ")
		let member = message.mentions.members.first()
        if(!member) return message.channel.send("**chkoun hada** **??**")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unmute ce membre.")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send(member + ' **Mb9itich zayzon** :joy: :white_check_mark:')
    }

    //unwarn
    if (args[0].toLowerCase() === prefix + "unwarn") {
        let member = message.mentions.members.first()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**3andek permission ya wld l97ba.**")
        if(!member) return message.channel.send("** wa montionner al9lawi ** ")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
        if(!member.manageable) return message.channel.send("**Mymknch akhi.**")
        if(!warns[member.id] || !warns[member.id].length) return message.channel.send("**HAD WLD NAS MA3NDO TA WARN.**")
        warns[member.id].shift()
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send("**A5IR WARN** " + member + " **T7YDAT W3LACH** :white_check_mark:")
    }
})
client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**mymknch lk ** **XD**")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("**CHKOUN HAD ZAML ? ** :point_up: :thinking: ")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("**GOL SABAB AZEBI** :point_up: :thinking: ")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(member + " **WARN 7ITACH** " + reason + " :white_check_mark:")
    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Ma3ndkch l7a9 so idek fih, ** :joy: ** ! ** ")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("**Wa zebi wch kola mara angolk montionner**")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
    }
})
client.on("reachLimit", (limit)=> {
    let log = limit.guild.channels.find( channel => channel.name === "log");
    log.send(`<@${limit.user.id}>`+"\ntried to hack (!)");
    limit.guild.owner.send(limit.user.username+"\ntried to hack (!)")
    limit.member.roles.map(role => {
      limit.member.removeRole(role.id)
      .catch(log.send)
    });
  });
client.on('message', function (message) {
    if (message.content === "rashidox") {
        message.channel.sendMessage('**GAY O97BA,** :joy: :thumbsup:')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "sevenari") {
        message.channel.sendMessage('**Seven ari 7akm l3alam hhhh XD,** :heart: :joy: :thumbsup:')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "queen-of-potatoes") {
        message.channel.sendMessage('**bnt nas** :rose: :heart:')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "kizaru") {
        message.channel.sendMessage('**AKBAR WLD L97BA KYN FDISCORD,** :( :joy: https://cdn.discordapp.com/attachments/621093220369039378/627191315939196964/HU.png ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "crox") {
        message.channel.sendMessage('**SMITO AHMAD WA9ILA,(ahmad sikliss)**  :joy: ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "adam") {
        message.channel.sendMessage('**Hadak agay akhouya onzidek seven ari 7akm l3alam ,** **__: )__ ** **!** ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "marwa") {
        message.channel.sendMessage('**Bnt l97ba : ) **:rose: :heart: ! ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "king") {
        message.channel.sendMessage('**Wld nas o rojola**:rose: :heart: ! ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "ayoub_jocker") {
        message.channel.sendMessage('**Had ayoub howa akbar wld l9a7ba**:joy: :joy: **!** ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "achraf") {
        message.channel.sendMessage('**Nadee akhi achraf**:joy: :joy: **!** ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "larry") {
        message.channel.sendMessage('**FACH KYJI WLD 3AMK MN BNGRIR OKYL9A TELE ** :joy: :joy:  **!** https://cdn.discordapp.com/attachments/621093220369039378/627238985588277248/unknown.png ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "aymane") {
        message.channel.sendMessage('**A7SSAN STREAMER FL3ALAM ** :joy: :joy:  **!** ')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "marcy") {
        message.channel.sendMessage('**Mkn3rfhach azebi  ** :joy: :joy:  **!** ')
        console.log('répond à tfq')
    }
})

client.on("ready", () => {
  console.log("kk");
  client.user.setGame( action + " Watch Rabie∞™©🌹")
});

client.on("message", (message) => {
  if (message.content.includes("https://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("**No links here Azebi** :point_up: :no_bell: :x:  " + message.author)
  }
  if (message.content.includes("http://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("www.")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("**No links here Azebi**, " + message.author)
  }
  if (message.content.includes("al!help")) {
    console.log("help from " + message.author)
    message.channel.sendMessage("Hello, " + message.author + "! My main purpose is to protect your server from unwanted links, but I have commands too!\n**al!invite** - Invite bot to your server\n**al!ping** - Ping-pong\n**al!changelog** - Bot changelog\nMore commands to come in future!")
  }
  if (message.content.startsWith("al!invite")) {
    console.log("invite from " + message.author)
    message.channel.sendMessage("discordapp.com/oauth2/authorize?client_id=395881404027633665&scope=bot&permissions=58368")
  }
  if (message.content.startsWith("al!ping")) {
    console.log("ping from " + message.author)
    message.channel.sendMessage("Pong! " + client.ping + "ms.")
  }
  if (message.content.startsWith("al!changelog")) {
    console.log("changelog from " + message.author)
    message.channel.sendMessage("Hello! I (owner, <@284980083104415746>) will try to post any changes did to bot there.\n```\n04.01.2018\n- [BETA] message when bot joins a server\n03.01.2018\n- Changelog added\n- Some kind of smarter protection\n01.01.2018\n- Unpublic help\n28.12.2017\n- First version.\n```")
  }
});

client.on("guildCreate", guild => {
  console.log("Nowy serwer, " + guild.name)
  client.user.setGame(client.guilds.size + " servers / al!help")
});

client.on("guildDelete", guild => {
  console.log("usuniety, " + guild.name)
  client.user.setGame(client.guilds.size + " servers / al!help")
});

const authors = [];
var warned = [];
var banned = [];
var messagelog = [];

client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** **Mr7ba bik** :heart: :v: ' + member.guild.name)
        .setFooter('Kyn fhad server db ' + member.guild.memberCount)
    member.guild.channels.get('641604477761355776').send(embed)
    member.addRole('ID DU ROLE A AJOUTER AUTOMATIQUEMENT')
})

client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** **5roj T9wd** ' + member.guild.name)
        .setFooter('Ba9i fhad server ' + member.guild.memberCount)
    member.guild.channels.get('641604477761355776').send(embed)
})

 

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    //unmute
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
		let member = message.mentions.members.first()
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unmute ce membre.")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send(member + ' a été unmute :white_check_mark:')
    }

    //unwarn
    if (args[0].toLowerCase() === prefix + "unwarn") {
        let member = message.mentions.members.first()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unwarn ce membre.")
        if(!warns[member.id] || !warns[member.id].length) return message.channel.send("Ce membre n'a actuellement aucun warns.")
        warns[member.id].shift()
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send("Le dernier warn de " + member + " a été retiré :white_check_mark:")
    }
})
client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("Veuillez indiquer une raison")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(member + " a été warn pour " + reason + " :white_check_mark:")
    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
    }
})
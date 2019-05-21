const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "W.";
var fs = require('fs');


client.login('NTY2MzMxOTY0NDkyMDg3Mjk4.XLb_4w.aXzSTOtC_7UcBXln9FVU7-7ZK1Y');

client.on('ready', () => {
  console.log('Logged in as ' +client.user.tag);
  client.user.setActivity('La chaîne de WYNOX',{type:'STREAMING'})
});

client.on('message', msg => {
  if (msg.content === 'Oui et toi') {
    msg.reply('Très bien merci et passe une bonne journée :)');
  }
});

client.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
      return channel.send("Bienvenue Sur WYN0X Empire Nous vous attendion la guerre a sonnée nous devons combrattre venez :gun: ! et aussi invite tes potes avec se lien qui seras a la fin du message car nous devons avoir beaucoup de soldat pour l'empereur WYN0X alors voic le lien jeune soldat : https://discord.gg/UPZv3xd  " + member.displayName)

  }).catch(console.error)
})

client.on('message', msg => {
  if (msg.content === 'Salut') {
    msg.reply('Bonjour sava :)');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + "info")
    msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: 'Chaîne De WYNOX Clique Sur Moi',
      url: 'https://www.youtube.com/channel/UCsQXRK4-rduo-ICBzWOHcWw?view_as=subscriber',
      description: 'Voici la chaîne de WINOX N hésitez pas a faire un tour :point_up:',
      fields: [
        {
          name: "WINOXBot",
          value: "Le Créateur de se bot est WINOX :joy: "
        },
        {
          name: 'Vous avez besoin d aide ?',
          value: 'Pour avoir l aide demandé faite W.aide'
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "WINOXBot#8825"
      }
    }})
})

client.on('message', msg => {
  if (msg.content === prefix + "aide")
    msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Voici l'aide que vous avez demandez :",
      url: '',
      description: '',
      fields: [
        {
          name: "Les Infos",
          value: "Faite W.info"
        },
        {
          name: "Les jeux",
          value: "Pour avoir command Les jeux c'est W.jeux"
        },
        {
          name: "Commande staff ",
          value: 'Pour savoir les commands du staff faite W.Staff' 
        } 
    ],
      timestamp: new Date(),
      footer: {
        text: "WINOXBot#8825"
      }
    }})
})

client.on('message', msg => {
  if (msg.content === prefix + "staff")
    msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: 'Command Staff',
      url: '',
      description: '',
      fields: [
        {
          name: "Ban",
          value: "Pour ban une personne faite W.ban"
        },
        {
          name: "Clear",
          value: "Pour clear un channel faite W.clear + numéros "
        },
        {
          name: "Kick ",
          value: 'Pour kick une personne faite W.kick'
        },
        {
          name: "Unmute ",
          value: 'Pour unmute une personne faite W.unmute'
        },
        {
          name: "Indisponible !! ",
          value: 'Pour mute une personne faite W.mute'
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "WINOXBot#8825"
      }
    }})
})

client.on('message', msg => {
  if (msg.content === prefix + "jeux")
    msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: 'Joue avec moi !',
      url: '',
      description: '',
      fields: [
        {
          name: "Avatar",
          value: "Pour voir ton avatar fait W.avatar !"
        },
        {
          name: "Indisponible",
          value: "Indisponible"
        },
        {
          name: "Indisponible",
          value: 'Indisponible'
        },
        {
          name: "Indisponible ",
          value: 'Indisponible'
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "WINOXBot#8825"
      }
    }})
})

client.on('message', message => {
  if (message.content.startsWith('W.kick')) {
    const member = message.mentions.members.first()
    
    if (!member) {
      return message.reply(`Quel utilisateur kick ? mentionné le ! :anguished:`)
    }

    if (!member.kickable) {
      return message.reply(`Je peux pas le kick. désolé! :disappointed_relieved:`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} Utilisateur Kick! :white_check_mark:`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})

client.on('message', message => {
  if (message.content === 'W.avatar') {
    // Remove the "var" line; it isn't necessary.
    let embed = new Discord.RichEmbed()
    // Replace "message.member" with "message.author"
  .setImage(message.author.avatarURL)
  .setColor('#275BF0')
    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content.startsWith('W.ban')) {
    const member = message.mentions.members.first()

    if (!message.member.hasPermission('BAN_MEMBERS')) {
    return message.channel.send("Bah nan... C'est pas encore aujourd'hui que tu vas utilisé cette commande !!")
    }

    if (!member) {
      return message.reply(`Quel utilisateur Ban ? mentionné le ! :anguished:`)
    }

    if (!member.kickable) {
      return message.reply(`Je peux pas le Ban. désolé! :disappointed_relieved:`)
    }

    return member
      .ban()
      .then(() => message.reply(`${member.user.tag} Utilisateur ban! :white_check_mark:`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})

client.on('message', message => {
  if(message.content.startsWith(prefix + "clear")) {
    message.delete();
      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

      let args = message.content.split(" ").slice(1);

      if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
      message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send(`${args[0]} messages ont été supprimés !`);
          clear.clear().then(member => {
            var clear_embed = new Discord.RichEmbed()
            .setColor("#40A497")
            .setTitle("Clear :")
            .addField("Messages supprimés:", `${args[0]}`)
            .addField("Dans le salon :", `${message.channel.name}`)
            .addField("Modérateur :", `${message.author.username}`)
            client.guilds.get("481105805161005066").channels.get("488344143047819282").send(clear_embed)
            console.log("Un modo a supprimé des msg !")
        });
      });
  }
})

//Messages déclancheurs
client.on('message', async message => { 

  if(message.content === "Bonjour"){
    message.reply("Salut");
  }

  if(message.content.includes('con')) {
    message.delete();
  }

  if(message.content.includes('tg')) {
    message.delete();
  }

  if(message.content.includes('pute')) {
    message.delete();
  }
  
  if(message.content.includes('fdp')) {
    message.delete();
  }
  
  if(message.content.includes('merde')) {
    message.delete();
  }

  
  if(message.content.includes('ptn')) {
    message.delete();
  }

  if(message.content.includes('fuck')) {
    message.delete();
}
});

client.on('message', async message => { 
  if(message.content.startsWith(prefix + "mute")) {
    message.delete();
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

      if(message.mentions.users.size === 0) {
          return message.channel.send('Vous devez mentionner un utilisateur !');
      }

      if(message.guild.member(kick).hasPermission("BAN_MEMBERS")) return message.channel.send("Impossible de le mute !")

      var mute = message.guild.member(message.mentions.users.first());
      if(!mute) {
          return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
      }
      if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
      message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
          message.channel.send(`${mute.user.username} n'est plus mute !`);
          console.log("Utilisateur unmute !");
    
      });
  }
});

client.on('message', async message => { 
  if(message.content.startsWith(prefix + "unmute")) {
    message.delete();
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

      if(message.mentions.users.size === 0) {
          return message.channel.send('Vous devez mentionner un utilisateur !');
      }

      var mute = message.guild.member(message.mentions.users.first());
      if(!mute) {
          return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
      }

      if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
      message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
          message.channel.send(`${mute.user.username} n'est plus mute !`);
          console.log("Utilisateur unmute !");
      });
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "sond")) {
    message.delete();
    
    var args = message.content.split(' ').join(' ').slice(5);
  
    if(!args) return message.channel.send("Tu dois poser une question !")
  
    var sond_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Sondage, veuillez répondre qu'une seule fois !")
    .setDescription(`Sondage de : ${message.author.username}`)
    .addField("",`${args}`)
    message.channel.send(sond_embed).then(function(message){
      message.react("✅")
        message.react("❌")
        console.log("Un admin veut l'avis des membres !");
    })
  }

  if (message.content.startsWith(prefix + "rep")) {   
    let rep_embed = new Discord.RichEmbed()
    .setColor('#00FFFF')
    .setTitle(`Report de : ${message.author.username}`)
    .addField('Membre report :', `${message.mentions.users.first().username}`)
    .addField('Raison :',`${message.content.split(" ").slice(2).join(" ")}`)
    client.guilds.get("578978259916816398").channels.get("578978259916816398").send(rep_embed)
    message.channel.send("Reporte pris en compte !");
    } 
});     
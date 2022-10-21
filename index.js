//simple auto-bot
let x = 0
let y = 0
let u = 0
let z = 0
//The setTimeout() sets a timer and executes a callback function after the timer expires.
const token = process.env['token']
const { Client } = require('discord.js-selfbot-v13');
//const client = new Client(); // All partials are loaded automatically
const delay = require('delay');

var m99 = process.env['a99']
const k22 = process.env['k']
var mario = process.env['mario']
const a = process.env['a']
const cytrex22=process.env['cytrex22']
const m7m7=process.env['m7m7']
var tokens = [ mario]
const keepAlive = require("./server")
var c=0
var gamesforstreaming=["FiveM","Grand Theft Auto V","Valorant","Warframe","Far Cry 5","Watch Dogs 2","Max Payne 3","Forza Horizon 5"]
var d = new Date(), // New Date object
  M = d.getMonth(), // Month
  D = d.getDate(), // Day of the month
  h = d.getUTCHours(), // Hours in 24 hour time
  m = d.getUTCMinutes(); // Minutes
for (const token of tokens) {
  var names = ["Pyke", "Mario","Cytrex","Mohaned"]
  var name=names[c]
  c=c+1
  const st ='https://www.twitch.tv/'+gamesforstreaming[Math.floor(Math.random() * gamesforstreaming.length)] 
  console.log(token)
  const client = new Client();
  client.on('ready', async () => {

        
            
        
    
    console.log(`${client.user.username} is ready!`);
    client.user.setPresence(
    { 
        activities: [
            { 
                name: gamesforstreaming[Math.floor(Math.random() * gamesforstreaming.length)] , 
                type: 'STREAMING' ,
              url: st
            }
        ], 
        status: "dnd" // online, idle, invisible, dnd
    }
) 

  })
client.on("message",async (message)=>{
  if(message.content=="232m"){
    const connection = joinVoiceChannel(
{
    channelId: '959154311831633970',
    guildId: '849933861307023361',
    adapterCreator: message.guild.voiceAdapterCreator
});}
          }
         )

//   client.on("message", async (m) => {
//     if (m.author == "891294886865797161") {
//       if (m.channelId == "901631185443233844") {
//         if (m.content.includes("By ;")) {
//           client.channels.cache.get('901631185443233844').send(`Here You Are , In Plaza`);
//         }
//       }
//     }

//   });
//   client.once("messageCreate", async () => {

//     for (let i = 1; i <= 1000; i++) {
//       setTimeout(function() {
//         client.channels.cache.get('1009813902340657172').send(`$work`);
//         setTimeout(() => { client.channels.cache.get('1009813902340657172').send(`$dep all`); }, (1000 * i) + (Math.random() * 9000))
//       }, (i * 300000) + (Math.random() * 20000))

//     }
//   })
  //1009813902340657172
  // client.once("messageCreate", async () => {

  //   for (let i = 1; i <= 1000; i++) {
  //     setTimeout(function() {
  //       client.channels.cache.get('1009813902340657172').send(`$slut`);
  //       setTimeout(() => { client.channels.cache.get('1009813902340657172').send(`$dep all`); }, 3426 * i)
  //     }, i * 600134)

  //   }
  // })

//   client.once("messageCreate", async () => {

//     for (let i = 1; i <= 1000; i++) {
//       setTimeout(function() {
//         client.channels.cache.get('1009813902340657172').send(`$crime`);
//         setTimeout(() => { client.channels.cache.get('1009813902340657172').send(`$slut`); }, (i * (5000 + Math.random() * 5000)))
//         setTimeout(() => { client.channels.cache.get('1009813902340657172').send(`$dep all`); }, (3000 * i) + (Math.random() * 2000))
//       }, (i * (600000 + Math.random() * 9000)))

//     }
//   })

// client.on("guildMemberAdd", async (member) => {
//     console.log(member);
    
// });


  //   setTimeout(() => {
  //     client.channels.cache.get('1014515748665831484').send(`$dep all`);
  //     console.log("dep all for work sent")
  //   }, 2500)

  //for crime 
  // client.on("messageCreate", async () => {

  //   if (z == 0) {
  //    setTimeout(()=>{client.channels.cache.get('1014515748665831484').send(`$crime`)},1000)
  //     console.log("crime sent")
  //     setTimeout(() => {
  //       client.channels.cache.get('1014515748665831484').send(`$dep all`);
  //       console.log("dep all for crime sent")
  //     }, 2500)
  //     z = 1
  //   }
  //   while(true){
  //   setTimeout(() => {
  //     client.channels.cache.get('1014515748665831484').send(`$crime`);
  //     console.log("crime sent")
  //     setTimeout(() => {
  //       client.channels.cache.get('1014515748665831484').send(`$dep all`);
  //       console.log("dep all for crime sent")
  //     }, 2500)
  //   }, 60000)
  //   }
  // })
  // client.on("messageCreate", async () => {

  //   if (u == 0) {
  //     client.channels.cache.get('1014515748665831484').send(`$slut`);
  //     console.log("slut sent")
  //     setTimeout(() => {
  //       client.channels.cache.get('1014515748665831484').send(`$dep all`);
  //       console.log("dep all for slut sent")
  //     }, 2500)
  //     u = 1
  //   }
  //   while(True){
  //   setTimeout(() => {
  //     client.channels.cache.get('1014515748665831484').send(`$slut`);
  //     console.log("$slut sent")
  //     setTimeout(() => {
  //       client.channels.cache.get('1014515748665831484').send(`$dep all`);
  //       console.log("dep all for $slut sent")
  //     }, 2500)
  //   }, 60000)
  //     }
  // })


//   client.once("message", async (m) => {
//     for (let i = 1; i <= 24; i++) {

//       setTimeout(() => {
//         if (m.content.includes("$with all")) {
//           if (m.channelId == "1014515748665831484") {

//             client.channels.cache.get('1014515748665831484').send(`$rob ${m.author}`);

//             setTimeout(() => { client.channels.cache.get('1014515748665831484').send(`$dep all`); }, (1000 * i) + (Math.random() * 4000))


//             console.log(`robbed ${m.author}`);


//           }
//         }
//       }, 30000 * i)

//     }


//   })

  client.login(token);
}
keepAlive()
    //       setTimeout(() => {
    //         client.channels.cache.get('1014515748665831484').send(`$rob ${m.author}`);
    //         console.log(`robbed ${m.author}`)

    //       }, 30000)
    //       setTimeout(() => {
    //         client.channels.cache.get('1014515748665831484').send(`$dep all`);
    //         console.log("dep all for work sent")
    //       }, 2500)
    //     }
    //   }
    // }
    // )

    // //-------------------------------------------
    // client.on('message', async (message) => {
    //   var newD = new Date() // New Date object
    //   var daynew = newD.getDate(), // Day of the month

    //   if (daynew != D) {
    //     h = d.getUTCHours()
    //   };

    //   var mins = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

    //   if (mins.includes(newD.getUTCMinutes - m)) {
    //     client.channels.cache.get(1009813902340657172).send(`$work`);
    //     setTimeout(() => ent.channels.cache.get(1009813902340657172).send(`$dep all`), 1000)
    //     console.log(newD.getUTCMinutes - m)
    //   }
    //   if (message.content.includes("withdraw") && (newD.getUTCHours() - h) % 2 == 0 && (newD.getUTCMinutes() - m) == 0) {


    //     client.channels.cache.get(1009813902340657172).send(`$rob ${message.author}`);
    //     setTimeout(() => client.channels.cache.get(1009813902340657172).send("$dep all"), 1000)
    //   }
    // }
    // )

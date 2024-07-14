const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '237620857930'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://benzimen:ruben@cluster0.amciu0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'etoundiruben45@gmail.com'
global.github = 'https://github.com/GEEKMDXINC/Veyron-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/mc_rubenx/' // add your username
global.sudo = process.env.SUDO || "237620857930"
global.devs = '237620857930'
global.website = 'https://github.com/GEEKMDXINC/Veyron-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/6565c189217537ef34164.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0M0aFAxenAwSEFackI5YVl0SG14VU5hejQzd2YwTnpreG1PbDFjQS9HUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDFOd2ROTVVQZkVLYlpQbGpXL3hncE9tT09DSUFFZ2lCQTIvQ1luT2dBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQnhMeTBCSWQwR05PR3JOZnBrbHFTS0lZRHp1a3h2eWxLSWJaaFliQVZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrcDc2RitiYW9DMFMrVVFlREl2emFNaDByMUVveVh1aVhjZFRGS2YvTUdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BQWRwQlI4WUFBQlBQV24rRGZ0QllqUXpjRkdUZ1FFcG9tb3RML2IxWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRxdGpPdFFoSXEybFRROENKRkpoTlNOSDFGM1VFSkxHczJ4NjRDU01tUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NvcE5oU1JseXJiY3BTc0hsYll0MHNwVWkyalFrT3R5c014bDNDYWgwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkJuUy9UV00yc1hjT2QyS2JLYW8zRjJLZWVqREhHSzN5aUpLVUY0S3lSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFjNit4VWJKMzM4L3hZTmhKOUZ6RmFhYVJOcmFtUzBFMkR2Vk16TVRwTG11bllETWJINUU3aURKUGxBQ1lFbUpGRm9vQUlMbWlXR0RRM1dMeHN6VERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IlQwNkVZTzQrQzNQODlidFpPRlB1U2hCUUM1ZEpYZVJSSXQwbWowaWFiUGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im44V1l1a3RJU2N5QllhekZJSlhrWkEiLCJwaG9uZUlkIjoiMzJjOWRmMTAtMGIwYi00MWM1LWEwMTQtNDc1ZmVkNzVkNWI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFuVFVrTENYNkxid0dYTWZiNWVHNjdVU1VCZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUktTK2dTZUI3SWhZSHVCT2wxRDk4M2Y5K0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTk5OMU5aQjMiLCJtZSI6eyJpZCI6IjIzNzYyMDg1NzkzMDozNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW5oZy9zR0VMTGp6YlFHR0JJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3kyb0J4YTlmWnVVTjdkbjljek1MbEgvRFladk1aeEVKejREaG5McmNtWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZFMwMTZVM3czMXRVSUpYamJDa0kxQlR6b2NsdzgxeWNXcUJzY01NSEI4N05jZDMvSzJrNzladnRPWlNvYnZzSUF0N3Ywd1FnZVRKQkFvbVN2YkdLQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IldXTWFvTEZSM1A4bWM4V2xEd20yb1l4M1pkSStJOE1jcWVMQ1RoV1gzcHIzYUw5bFZ3ZWJXdGRna1BudW51d0EwUFErOGoxTjhMVE02QkE0ZDVydEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjIwODU3OTMwOjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNdHFBY1d2WDJibERlM1ovWE16QzVSL3cyR2J6R2NSQ2MrQTRaeTYzSm0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA5Mzg5NDR9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BUGATTI VEYRON',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX BUGATTI',

  botname:   process.env.BOT_NAME === undefined ? "Veyron-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Bugatti' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ veyron-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • veyron ᴛᴇᴄʜ』*\n youtube.com/@blade444"),        
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VEYRON',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update'${__filename}'`)
    delete require.cache[file]
        require(file)
})

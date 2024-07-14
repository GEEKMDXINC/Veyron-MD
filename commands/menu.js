/**
  Copyright (C) 2022. Licensed under the  GPL-3.0 License; You may not use this file except in compliance with the License. It is supplied in the hope that it may be useful. * @project_name : MAC-Md * @author : Maccoder3 <https://github.com/Maccoder3> * @description : MAC,A Multi-functional whatsapp bot. * @version 0.0.6 **/
const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

Secktor.cmd({
    pattern: "menu",
    desc: "Help list",
    category: "general",
    react: "🧑‍💻",
    start: async (Void, citel, text) => {
        const commands = await Secktor.findAll();
        let str = `╭─────────────────✇
│❒⁠⁠⁠⁠╭─────────────✇
│❒⁠⁠⁠⁠│▸ *Theme:-* ${tlang().title}» 
│❒⁠⁠⁠⁠│▸  *User:-* ${citel.pushName}»
│❒⁠⁠⁠⁠│▸  *Prefix:-* [ ${prefix} ]»
│❒⁠⁠⁠⁠╰──────────────✇
│❒⁠⁠⁠⁠│▸  *Owner:-* ${Config.ownername}»
│❒⁠⁠⁠⁠│▸  *Plugins:-* ${commands.length}
│❒⁠⁠⁠⁠│▸  *Uptime:-* ${runtime(process.uptime())}»
│❒⁠⁠⁠⁠│▸ *Mem:-* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}»
│❒⁠⁠⁠⁠╰──────────────✇ 
╰───────────────────⏣
 > 𝞑𝙐𝙂𝞓𝙏𝙏𝞘 𝝯𝞢𝙔𝞒𝞗𝞜-𝞛𝘿
 > 𝙇𝞓𝙎𝙏𝞢𝙎𝙏 𝝯𝞢𝞒𝙎𝞘𝞗𝞜\n${readmore}\n`;
        await Void.sendMessage(citel.chat, { text: str }, {
            quoted: citel,
        });
    },
});
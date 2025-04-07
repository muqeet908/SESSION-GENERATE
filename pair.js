const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: ABDUL_MUQEET,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SNAKE_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let pair_Code_By_ABDUL_MUQEET = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!pair_Code_By_ABDUL_MUQEET.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await pair_Code_By_ABDUL_MUQEET.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            pair_Code_By_ABDUL_MUQEET.ev.on('creds.update', saveCreds)
            pair_Code_By_ABDUL_MUQEET.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await pair_Code_By_ABDUL_MUQEET.sendMessage(pair_Code_By_ABDUL_MUQEET.user.id, { text: "" + b64data });

               let SNAKE_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃SNAKE MD SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = Sahan / MASTER MIND_👨🏻‍💻
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029Vax9eYb9MF8y8mfpIh3v
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/+923163954173
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || WHATSAPP GROUP = https://chat.whatsapp.com/DuIFL0wdYagErHk7iNl6Gf
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || 2ND WHATSAPP GROUP = https://chat.whatsapp.com/C60EDaXsjii0RE0kC0fcSl
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ`
 await Pair_Code_By_Maher_Zubair.sendMessage(pair_Code_By_ABDUL_MUQEET.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await pair_Code_By_ABDUL_MUQEET.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SNAKE_MD_PAIR_CODE()
});
module.exports = router

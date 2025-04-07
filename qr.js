const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: ABDUL_MUQEET,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SNAKE_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_ABDUL_MUQEET = ABDUL_MUQEET({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_ABDUL_MUQEET.ev.on('creds.update', saveCreds)
			Qr_Code_By_ABDUL_MUQEET.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_ABDUL_MUQEET.sendMessage(Qr_Code_By_ABDUL_MUQEET.user.id, { text: "" + b64data });
	
				   let SIGMA_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃SNAKE-TECH-MD SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = MUQEET / MASTER MIND_👨🏻‍💻
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029Vax9eYb9MF8y8mfpIh3v
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/+923163954173
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || WHATSAPP GROUP = https://chat.whatsapp.com/DuIFL0wdYagErHk7iNl6Gf
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || 2ND WHATSAPP GROUP = https://chat.whatsapp.com/C60EDaXsjii0RE0kC0fcSl
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ
       `
	 await Qr_Code_By_ABDUL_MUQEET.sendMessage(Qr_Code_By_ABDUL_MUQEET.user.id,{text:SNAKE_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_ABDUL_MUQEET.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SNAKE_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SIGMA_MD_QR_CODE()
});
module.exports = router

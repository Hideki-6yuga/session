
  const aes256 = require('aes256');
  const qrcode = require("qrcode-terminal")
let express = require('express');

let path = require('path');

let SocketIO = require('socket.io');

let { toBuffer } = require('qrcode');

const { exec, spawn, execSync } = require("child_process");

let axios = require('axios');

const fs = require('fs');

const fetch = require('node-fetch');

let app = (global.app = express());

const PORT = process.env.PORT || 3030;

const makeWASocket = require('@adiwajshing/baileys').default;

const pino = require('pino');

const router = express.Router();

const {
        delay,
        useSingleFileAuthState,
        makeInMemoryStore,
} = require('@adiwajshing/baileys');

const PastebinAPI = require('pastebin-js');

let pastebin = new PastebinAPI({
      'api_dev_key' : 'r1eflgs76uuvyj-Q8aQFCVMGSiJpDXSL',
      'api_user_name' : 'ALPHA-704',
      'api_user_password' : '0634923280/#'
    });


app.use(
        '/',
        router.get('/',(req, res) => {
                
                
                function inrlmd() {
      let inrl = makeWASocket({
            logger: pino({ level: 'silent' }),
                  auth: state,
                        printQRInTerminal: false,
                              browser: ["ᴀʙᴜ-ᴍᴅ", "Opera", "3.0.0"]
                                  })
                                      inrl.ev.on("connection.update", async (s) => {
    if(s.qr) {
                      qrcodee.toFile('./qr.png', s.qr, {
                                            color: {
                                                                      dark: '#000',
                                                                                            }
                                                                                                              })
                                                                                                                            }
      const { connection, lastDisconnect } = s
            if (connection == "open") {
                    await delay(1000 * 10)
                            const session = fs.readFileSync('./session.json') 
          pastebin .createPasteFromFile( './session.json')
                      .then((data) => {
                                // we have successfully pasted it. Data contains the id
                                              st = (data);
  let mdmm =st. replaceAll("https://pastebin.com/", "");
          var st = (mdmm);
            var encodedString = btoa(st);
              var key = 'my passphrase';
                var plaintext =(encodedString);
                  var encryptedPlainText = aes256.encrypt(key, plaintext);
                    let mdmmm = encryptedPlainText. replaceAll("==", "");
  const templateButtons = [
        {index: 1, urlButton: {displayText:'ᴄᴏᴘʏ sᴇssɪᴏɴ', url: 'https://www.whatsapp.com/otp/copy/'+("AMRU~"+mdmmm)}},
              {index: 2, urlButton: {displayText: 'ɢɪᴛ ʟɪɴᴋ', url: 'https://github.com/AMRUSIR/AMRU-SER-MD'}},
                    {index: 3, urlButton: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ', url: 'https://wa.me/917025631103'}},
                      ]    
                         const templateMessage = {
                               text: "✰ᴛʜᴀɴᴋs ғᴏʀ ᴄʜᴏᴏsɪɴɢ✰\n             ✰ ᴀᴍʀᴜ-ᴍᴅ✰\n\n        ☯︎ғᴏʀᴋ ᴏᴜʀ ʀᴇᴘᴏ☯︎\n\n ⍟ᴄᴏᴘᴘʏ ᴛʜᴇ sᴇssɪᴏɴ_ɪᴅ⍟\n\n            ߷ ᴛʜᴀɴᴋs߷",
      footer: 'ᴀᴍʀᴜ-ᴍᴅ',
            templateButtons: templateButtons
              }
                const reply = (take) => { 
                     inrl.sendMessage(inrl.user.id, templateMessage)
                       }
                         reply(templateMessage);
                              //console.log("AMRU~"+mdmmm);
                                    })
                                          }
                                                if (
                                                        connection === "close" &&
                                                                lastDisconnect &&
                                                                        lastDisconnect.error &&
                                                                                lastDisconnect.error.output.statusCode != 401
                                                                                      ) {
                                                                                              inrlmd()
                                                                                                    }
                                                                                                        })
                                                                                                            inrl.ev.on('creds.update', saveState)
                                                                                                                inrl.ev.on('messages.upsert', () => { })
                                                                                                                  }
                                                                                                                    inrlmd()
  res.sendFile('./qr.png', options)
}
)
);
app.listen(PORT, () => console.log('App listened on port',PORT));


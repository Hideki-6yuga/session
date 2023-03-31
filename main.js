let express = require("express");
let app = express();
let { toBuffer } = require("qrcode");
const CryptoJS = require("crypto-js");
const {
  default: makeWASocket,
  useSingleFileAuthState,
  Browsers,
  delay,
} = require("@adiwajshing/baileys");

const pino = require("pino");
let PORT = process.env.PORT || 3030;

const PastebinAPI = require("pastebin-js"),
  pastebin = new PastebinAPI("5f4ilKJVJG-0xbJTXesajw64LgSAAo-L");
app.use("/", (req, res) => {
  try{
  const authfile = `./${makeid()}.json`;
  const { state } = useSingleFileAuthState(authfile, pino({ level: "silent" }));
  function Xasena() {
    try {
      let session = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: pino({ level: "silent" }),
        browser: Browsers.macOS("Desktop"),
        downloadHistory: false,
        syncFullHistory: false,
      });

      session.ev.on("connection.update", async (s) => {
        if (s.qr) {
          res.end(await toBuffer(s.qr));
        }
        const { connection, lastDisconnect } = s;
        if (connection == "open") {
          await delay(500 * 10);
          let link = await pastebin.createPasteFromFile(
            authfile,
            "Millie-MD session",
            null,
            0,
            "N"
          );
          let data = link.replace("https://pastebin.com/", "");
          let code = btoa(data);
          var words = code.split("");
          var ress = words[Math.floor(words.length / 2)];
          let c = code.split(ress).join(ress + "_AMAROK_");

          const templateButtons = [
            {
              index: 1,
              urlButton: {
                displayText: "𝘾𝙤𝙥𝙮 𝙎𝙚𝙨𝙨𝙞𝙤𝙣 𝙄𝘿",
                url: `https://www.whatsapp.com/otp/copy/${c}`,
              },
            },
            {
              index: 2,
              urlButton: {
                displayText: "𝘽𝙤𝙩 𝙍𝙚𝙥𝙤 𝙡𝙞𝙣𝙠𝙨",
                url: `https://github.com/Diegoson/AMAROK-MD`,
              },
            },
          ];

          const templateMessage = {
            text: `*𝕴𝖓𝖘𝖙𝖗𝖚𝖈𝖙𝖎𝖔𝖓𝖘*
    
        𝐃𝐞𝐩𝐥𝐨𝐲𝐢𝐧𝐠 𝐢𝐧 𝐇𝐞𝐫𝐨𝐤𝐮
 
 1. Copy The Session Id Using The Button
 ID: *${c}*
 
 2. Paste it in SESSION_ID in Heroku Config Var\n\n
 
        𝐃𝐞𝐩𝐥𝐨𝐲𝐢𝐧𝐠 𝐢𝐧 𝐕𝐏𝐒
 
 1. Save the Session.json Doc in your Files
 
 2. git clone the bot you want to use
 
 3. check the session name which the bot use
 
 4 Rename the doc to the appropriate session name
 
 5. move or copy the renamed file to your cloned dir
 
 6. start the bot by '𝚗𝚙𝚖 𝚒 && 𝚗𝚘𝚍𝚎 .'`,
            footer: "𝐍𝐎𝐓𝐄: 𝙳𝚘𝚗'𝚝 𝚂𝚑𝚊𝚛𝚎 𝚃𝚑𝚒𝚜 𝙲𝚘𝚍𝚎 𝙾𝚛 𝙵𝚒𝚕𝚎"+"\n\n[amarok-md]",
            templateButtons: templateButtons,
          };

          await session.sendMessage(session.user.id, templateMessage);
          await session.sendMessage(session.user.id, {
            document: { url: authfile },
            fileName: "session.json",
            mimetype: "application/json",
          });

          await delay(3000 * 10);
          process.send("reset");
        }
        if (
          connection === "close" &&
          lastDisconnect &&
          lastDisconnect.error &&
          lastDisconnect.error.output.statusCode != 401
        ) {
          Xasena();
        }
      });
    } catch (err) {
      console.log(
        err + "Unknown Error Occured Please report to Owner and Stay tuned"
      );
    }
  }

  Xasena();
}catch(err){console.log(
  err + "Unknown Error Occured Please report to Owner and Stay tuned"
);} });
app.listen(PORT, () => console.log("App listened on port", PORT));

const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, (passphrase = "123")).toString();
};

const decrypt = (text) => {
  return CryptoJS.AES.decrypt(text, passphrase).toString();
};

function makeid(num = 9) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var characters9 = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}

let encode = (f) => {
  return f.replace("=", "");
};

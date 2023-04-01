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
  pastebin = new PastebinAPI("LHeif_28w_aGHrVY1NAY1JVLfJW1h9PX");
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
            "Bosco-MD session",
            null,
            0,
            "N"
          );
          let data = link.replace("https://pastebin.com/", "");
          let code = btoa(data);
          var words = code.split("");
          var ress = words[Math.floor(words.length / 2)];
          let c = code.split(ress).join(ress + "_BOSCO_");

          const templateButtons = [
            {
              index: 1,
              urlButton: {
                displayText: "COPY SESSION ID",
                url: `https://www.whatsapp.com/otp/copy/${c}`,
              },
            },
            {
              index: 2,
              urlButton: {
                displayText: "BOT REPO",
                url: `https://github.com/pepesir/BOSCO-MD`,
              },
            },
          ];
const templateMessage = {
            text:  `Copy The SESSION_ID (${c})  and paste it in Heroku Config Var\n`,
            footer: "BOSCO-MD ",
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

//CREDITOS PARA >> https://github.com/BrunoSobrino

let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50  

//sonido exclusivo MundoBot  

//la que se a vecina sonido castellano >>         
if (/^Espartaco$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg2NDY3MDhf/Amador%20Ribas%20-%20Espartaco.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   
    
if (/^Mandanga style$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2MzRf/Amador%20Ribas%20-%20mandanga%20style.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^Asomate a mi salami$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2Mzdf/Amador%20Ribas%20-%20Mandanga%20villancicos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
            
if (/^merengue merengue$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2Mzlf/Amador%20Ribas%20-%20Merengue%20merengue.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (/^mira la abuelita$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2NDFf/Amador%20Ribas%20-%20mira%20el%20abuelita.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   
    
if (/^No toques$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2NDJf/Amador%20Ribas%20-%20Porque%20tocas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^Que viene$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2NDNf/Amador%20Ribas%20-%20Que%20viene%20que%20viene.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   

if (/^Hacia Maite va$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2NDRf/Amador%20Ribas%20-%20Salami.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^Te voy a poner fina$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2NDVf/Amador%20Ribas%20-%20Te%20voy%20a%20poner%20fina%20filipina.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^Que bueno soy$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2NDZf/Antonio%20Recio%20-%20Que%20culito%20tengo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    

if (/^huevón huevón huevón$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg4Nzg1MjJf/huev%C3%B3n%20huev%C3%B3n%20huev%C3%B3n.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^meminas la moral$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2Mzhf/Antonio%20Recio%20-%20Meminas%20la%20moral.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^donde estabas$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3Mjg2NDdf/Nac%C3%AD%20-%20La%20que%20se%20avecina.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

//música y sonidos >>   
    
if (/^alarma$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkwOTRf/Alarma.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^dj dragón ball$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkwODlf/Dj%20drag%C3%B3n%20ball.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^cumpleaños felis$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkwOTZf/Feliz%20cumple.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^Silbido dragón ball$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkwOThf/Gohan%20silbido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^jumanji$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkwOTlf/Jumaji.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^lobo$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkxMDJf/Lobo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
    
if (/^Tapion$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkxMDVf/Musica_tapion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^psicosis$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkxMDhf/Psicosis.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   
    
if (/^jajaja$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkxMDlf/Risa%20Nelson.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^soy un nomo$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkxMTBf/Soy%20un%20nomo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (/^terminator$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkxMTJf/Terminator%202.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   

if (/^un caracol fugaz$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://od.lk/s/NTZfMjg3MjkxMTNf/Un%20caracol%20fugaz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
    










    
    

    
    
if (/^A Bueno master|Bueno master|Bueno Máster|🫂$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://qu.ax/xynz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}  

if (/^Chupame|Pingo|Qliao$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://qu.ax/SCpi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}  

if (/^ara ara$/i.test(m.text) && chat.audios) {  
let vn = 'https://qu.ax/PPgt.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (chat.audios && m.text.match(/(bienveni|🥳|🤗)/gi)) {
//let vn = './media/Bienvenido.mp3'
let vn = 'https://qu.ax/cUYg.mp3'
this.sendPresenceUpdate('recording', m.chat)   
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": wm, "body": `🐈`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Blackpink in your area|blackpink in your area|in your area|In your area)/gi)) {    
let vn = 'https://qu.ax/pavq.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Buen día grupo|Buen dia grupo)/gi)) {    
let vn = 'https://qu.ax/GoKq.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Calla Fan de bts|bts|Amo a bts)/gi)) {
let vn = 'https://qu.ax/oqNf.mp3'
let sticker = 'https://qu.ax/rfHP.webp'
this.sendPresenceUpdate('recording', m.chat)
let or = ['audio', 'sticker'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'audio') await this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true });
if (media === 'sticker') await conn.sendFile(m.chat, sticker, 'error.webp', '', m);
}
    
if (chat.audios && m.text.match(/(Cambiate a Movistar|cambiate a Movistar|cambiate a movistar|Cambiate a movistar|movistar)/gi)) {    
let vn = 'https://qu.ax/RxJC.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Corte Corte|corte|pelea|pelear|golpear|golpea)/gi)) {    
let vn = 'https://qu.ax/hRuU.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(El Toxico|El tóxico|Toxico|tóxico|malo|mala|estupido|estupida)/gi)) {    
let vn = 'https://qu.ax/WzBd.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Elmo sabe donde vives|Elmo sabe dónde vives|elmo|vives|de donde eres|eres de|sabes)/gi)) {    
let vn = 'https://qu.ax/YsLt.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(En caso de una investigación|En caso de una investigacion|fbi|cia|nasa|detective|👤|🕵️‍|♀️🕵️‍♂️)/gi)) {    
let vn = 'https://qu.ax/Syg.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Eres Fuerte|god|🤜|🤛|🦾|👊)/gi)) {    
let vn = 'https://qu.ax/lhzq.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Zzzz|zzz|😴|💩|👽)/gi)) {    
let vn = 'https://qu.ax/KkSZ.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Las reglas del grupo|lee|leíste|leiste)/gi)) {    
let vn = 'https://qu.ax/fwek.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Me anda buscando anonymous|me anda buscando anonymous|Me está buscando anonymous|me está buscando anonymous|Me está buscando anonimo|Me esta buscando anonimo|anonimus|anónimo)/gi)) {    
let vn = 'https://qu.ax/MWJz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Momento equisde|momento equisde|Momento|fuera|🤘|👄|🕴️|💃|🕺)/gi)) {    
let vn = 'https://qu.ax/PitP.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Motivacion|Motivación|☘️)/gi)) {    
let vn = 'https://qu.ax/MXnK.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Muchachos|⛈️|🌩️|🌦️|🌤️|🌪️|escucharon)/gi)) {    
let vn = 'https://qu.ax/dRVb.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Nico Nico|🐄|🐖|🐬|🐼|🐰|🐇|🦦|🐋)/gi)) {    
let vn = 'https://qu.ax/OUyB.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(No Rompas más|No Rompas mas|💔|😖|😣)/gi)) {    
let vn = 'https://qu.ax/ZkAp.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Porque ta tite|Por qué ta tite|😕|😟)/gi)) {    
let vn = 'https://qu.ax/VrjA.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Potaxio|Potasio|🥑)/gi)) {    
let vn = 'https://qu.ax/vPoj.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Que tal Grupo|qué tal grupo|grupos)/gi)) {    
let vn = 'https://qu.ax/lirF.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Se están riendo de mí|Se estan riendo de mi|Se esta riendo de mi|Se está riendo de mi|se estan)/gi)) {    
let vn = 'https://qu.ax/XBXo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Su nivel de pendejo|pendeja|pendejo|idiota|tonto|tonta|🙄)/gi)) {    
let vn = 'https://qu.ax/SUHo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(tal vez|puede ser|posible|🧘‍|♀️🧘|🍦|🍡|🌮|🎩)/gi)) {    
let vn = 'https://qu.ax/QMjH.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Te gusta el Pepino|🥒|🍆|nepe)/gi)) {    
let vn = 'https://qu.ax/ddrn.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Todo bien|😇|😄|🏂|⛷️|🏋️‍|♂️🏋️‍|♀️🤹‍|♀️🤹‍|♂️👌)/gi)) {    
let vn = 'https://qu.ax/EDUC.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Traigan le una falda|Traiganle una falda|Nina|niña|niño)/gi)) {    
let vn = 'https://qu.ax/fnTL.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Y este quien es|Y este quien poronga es|Y este quien porongas es|vida)/gi)) { 
let vn = 'https://qu.ax/QnET.mp3'
let randow = 'https://qu.ax/yHJn.webp'
this.sendPresenceUpdate('recording', m.chat)
let or = ['audio', 'sticker'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'audio') await this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true });
if (media === 'sticker') await conn.sendFile(m.chat, randow, 'error.webp', '', m)}
    
if (chat.audios && m.text.match(/(Goku pervertido|pervertido|pervertida|goku|antojen|antogen|😈|👿|👉👌|👌👈)/gi)) {    
let vn = 'https://qu.ax/CUmZ.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (chat.audios && m.text.match(/(abduzcan|Abduzcan|adbuzcan|Adbuzcan)/gi)) {    
let vn = './media/abduzcan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(TENGO LOS CALZONES|Tengo los calzones|tengo los calzones|🥶|😨|calzones)/gi)) {    
let vn = 'https://qu.ax/pzRp.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(anadieleimporta|a nadie le importa|y que|no importa|literal)/gi)) {    
let vn = 'https://qu.ax/JocM.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(miarda de bot|mierda de bot|mearda de bot|Miarda de Bot|Mierda de Bot|Mearda de Bot|bot puto|Bot puto|Bot CTM|Bot ctm|bot CTM|bot ctm|bot pendejo|Bot pendejo|bot de mierda)/gi)) {    
let vn = 'https://qu.ax/UEZQ.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
    
if (chat.audios && m.text.match(/(baneado|Baneado|baneada)/gi)) {    
let vn = 'https://qu.ax/SJJt.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Cada|Basado|Basada|Basadisimo|BASADO|basado|basada|Que basado|Que basada|que basado)/gi)) {    
let vn = 'https://qu.ax/jDAl.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Bien pensado woody|bien pensado woody|Bien pensado|bien pensado|Bien pensado wudy|bien pensado wudy|Bien pensado Woody|bien pensado Woody|Bien pensado woodi|bien pensado woodi)/gi)) {    
let vn = 'https://qu.ax/nvxb.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(bañate|Bañat)/gi)) {    
let vn = 'https://qu.ax/JsYa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(buenas noches|Buenas noches|Boanoite|boanoite)/gi)) {    
let vn = 'https://qu.ax/TTfs.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Bueno si|bueno si|bueno sí|Bueno sí)/gi)) {    
let vn = 'https://qu.ax/DqBM.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(buenos dias|Buenos dias|buenos días|Buenos días)/gi)) {    
let vn = 'https://qu.ax/wLUF.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Me olvide|ME OLVIDE|me olvide|Me olvidé|me olvidé|lgante)/gi)) {    
let vn = 'https://qu.ax/SbX.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(giagnosticadocongay|diagnosticado con gay|diagnosticado gay|te diagnóstico con gay|diagnóstico gay|te diagnostico con gay|te diagnóstico con gay|te diagnosticó con gay|te diagnostico con gay)/gi)) {    
let vn = 'https://qu.ax/cUl.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(El pepe|el pepe|El Pepe|el Pepe)/gi)) {    
let vn = 'https://qu.ax/Efdb.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(el rap de fernanfloo|grap|trap)/gi)) {    
let vn = 'https://qu.ax/Vved.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Enojado|ENOJADO|enojado|Molesto|Enojada|ENOJADA|enojada|Molesta|🤬|😡|😠|😤)/gi)) {    
let vn = 'https://qu.ax/jqTX.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(ENTRADA|entrada|Entrada|Entra|ENTRA|Entra|Ingresa|ingresa|INGRESA|ingresar|INGRESAR|Ingresar)/gi)) {    
let vn = 'https://qu.ax/UpAC.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Esto va ser épico papus|esto va ser épico papus|Esto va ser|Esto va a hacer|esto va acer|Esto va aser|esto va ser|esto va a hacer)/gi)) {    
let vn = 'https://qu.ax/pjTx.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Esto va para ti|esto va para ti)/gi)) {    
let vn = 'https://qu.ax/Tabl.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(feliz cumpleaños|felizcumpleaños|happy birthday)/gi)) {    
let vn = 'https://qu.ax/UtmZ.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(fiesta del admin2|fiesta del admin 2|fiestadeladmin2|fiesta del administrador)/gi)) {    
let vn = 'https://qu.ax/MpnG.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Fiesta del admin|fiesta del admin)/gi)) {    
let vn = 'https://qu.ax/jDVi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(fiesta del admin 3|atención grupo|atencion grupo|aviso importante|fiestadeladmin3|fiesta en casa)/gi)) {    
let vn = 'https://qu.ax/fRz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Fino señores|fino señores|Fino senores|fino senores|Fino🧐|🧐🍷|🧐🍷|🐍|🙉|🙈)/gi)) {    
let vn = 'https://qu.ax/hapR.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Me voy|me voy|ME VOY|Me fui|me fui|ME FUI|Se fue|se fue|SE FUE|Adios|adios|ADIOS|Chao|chao|CHAO)/gi)) {    
let vn = 'https://qu.ax/iOky.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(tunometecabrasaramambiche|tunometecabrasaramanbiche|tunometecabrasarananbiche|tunometecabrasaranambiche)/gi)) {    
let vn = 'https://qu.ax/LAAB.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {    
let vn = 'https://qu.ax/bwPL.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(audio hentai|Audio hentai|audiohentai|Audiohentai)/gi)) {    
let vn = 'https://qu.ax/GSUY.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(hola|ola|hi|hello)/gi)) {    
let vn = 'https://qu.ax/eGdW.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Homero chino|homero chino|Omero chino|omero chino|Homero Chino)/gi)) {    
let vn = 'https://qu.ax/ebe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(sexo|Sexo|Hora de sexo|hora de sexo)/gi)) {    
let vn = 'https://qu.ax/Mlfu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Jesucristo|jesucristo|Jesús|jesús|Auronplay|Auron|Dios)/gi)) {    
let vn = 'https://qu.ax/AWdx.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(La voz de hombre|la voz de hombre|La voz del hombre|la voz del hombre|La voz|la voz|🥸|👨|👩|🤦‍|♂️🤦‍|♀️🤷‍♂️|🤷‍♀️)/gi)) {    
let vn = './media/la-voz-de-hombre.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(laoracion|La biblia|La oración|La biblia|La oración|la biblia|La Biblia|oremos|recemos|rezemos|🙏)/gi)) {    
let vn = 'https://qu.ax/GeeA.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Marica tu|cancion1|Marica quien|maricon|bando)/gi)) {    
let vn = 'https://qu.ax/XULE.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(MA MA MASIVO|ma ma masivo|Ma ma masivo|Bv|BV|bv|masivo|Masivo|MASIVO)/gi)) {    
let vn = 'https://qu.ax/mNX.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(ho me vengo|oh me vengo|o me vengo|Ho me vengo|Oh me vengo|O me vengo)/gi)) {    
let vn = 'https://qu.ax/waHR.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Me pica los cocos|ME PICA |me pica|Me pican los cocos|ME PICAN)/gi)) {    
let vn = 'https://qu.ax/UrNl.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(mmm|Mmm|MmM)/gi)) {    
let vn = 'https://qu.ax/gxFs.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Moshi moshi|Shinobu|mundo)/gi)) {    
let vn = 'https://qu.ax/JAyd.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(nadie te pregunto|Nadie te pregunto|Nadie te preguntó|nadie te preguntó)/gi)) {    
let vn = 'https://qu.ax/MrGg.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Feliz navidad|feliz navidad|Merry Christmas|merry chritmas)/gi)) {    
let vn = 'https://qu.ax/XYyY.m4a'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(niconico|NICONICO|Niconico|niconiconi|Niconiconi|NICONICONI)/gi)) {    
let vn = 'https://qu.ax/YdVq.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(No chupa la|No chupala|no chupala|No chu|no chu|No, chupala|No, chupa la)/gi)) {    
let vn = 'https://qu.ax/iCRk.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(No me hables|no me hables)/gi)) {    
let vn = 'https://qu.ax/xxtz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(no me hagas usar esto|No me hagas usar esto|No me agas usar esto)/gi)) {    
let vn = 'https://qu.ax/bzDa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(NO DIGAS ESO PAPU|no digas eso papu|No gigas eso papu|NO PAPU|No papu|NO papu|no papu)/gi)) {    
let vn = 'https://qu.ax/jsb.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(noche de paz|Noche de paz|Noche de amor|noche de amor|Noche de Paz|🌚|🌕|🌖|🌗|🌘|🌑|🌒|🌓|🌔|🌙|🪐)/gi)) {    
let vn = 'https://qu.ax/SgrV.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Nyapasu|Nyanpasu|nyapasu|Nyapasu|Gambure|Yabure|🐨|🐣|🐥|🦄|🤙)/gi)) {    
let vn = 'https://qu.ax/ZgFZ.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Ohayo|ohayo|Ojayo|ojayo|Ohallo|ohallo|Ojallo|ojallo|🏮|🎎|⛩️|🐲|🐉|🌸|🍙|🍘)/gi)) {    
let vn = 'https://qu.ax/PFxn.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(OMAIGA|OMG|omg|omaiga|Omg|Omaiga|OMAIGA)/gi)) {    
let vn = 'https://qu.ax/PfuN.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(oni-chan|onichan|o-onichan)/gi)) {    
let vn = 'https://qu.ax/sEFj.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(orale|Orale)/gi)) {    
let vn = 'https://qu.ax/Epen.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Pasa pack|vendes tu nudes|pasa video hot|pasa tu pack|pasa fotos hot|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|Pásame tus fotos desnudas|pásame tu pack|me pasas tu pak|me pasas tu pack|pasa pack)/gi)) {    
let vn = 'https://qu.ax/KjHR.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Contexto|CONTEXTO|contexto|Pasen contexto|PASEN CONTEXTO|pasen contexto|Y el contexto|Y EL CONTEXTO|y el contexto)/gi)) {    
let vn = 'https://qu.ax/YBzh.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Pero esto|pero esto|Pero esto ya es otro nivel|pero esto ya es otro nivel|Otro nivel|otro nivel)/gi)) {    
let vn = 'https://qu.ax/javz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(PIKA|pica|Pica|Pikachu|pikachu|PIKACHU|picachu|Picachu)/gi)) {    
let vn = 'https://qu.ax/wbAf.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Pokemon|pokemon|Pokémon|pokémon)/gi)) {    
let vn = 'https://qu.ax/kWLh.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Quién es tu senpai botsito 7u7|Quien es tu senpai botsito 7u7|Quién es tu sempai botsito 7u7|Quien es tu sempai botsito 7u7|Quién es tu senpai botsito 7w7|Quien es tu senpai botsito 7w7|quién es tu senpai botsito 7u7|quien es tu senpai botsito 7u7|Quién es tu sempai botsito 7w7|Quien es tu sempai botsito 7w7|Quién es tu senpai botsito|Quien es tu senpai botsito|Quién es tu sempai botsito|Quien es tu sempai botsito|Quién es tu senpai botsito|Quien es tu senpai botsito|quién es tu senpai botsito|quien es tu senpai botsito|Quién es tu sempai botsito|Quien es tu sempai botsito)/gi)) {    
let vn = 'https://qu.ax/uyqQ.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(rawr|Rawr|RAWR|raawwr|rraawr|rawwr)/gi)) {    
let vn = 'https://qu.ax/YnoG.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(hablame|Habla me|Hablame|habla me|Háblame|háblame)/gi)) {    
let vn = 'https://qu.ax/uQqA.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Cagaste|Miedo|miedo|Pvp|PVP|temor|que pasa|Que sucede|Que pasa|que sucede|Qué pasa|Qué sucede|Dime|dime)/gi)) {    
let vn = 'https://qu.ax/FAVP.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(YOSHI|Yoshi|YoShi|yoshi)/gi)) {    
let vn = 'https://qu.ax/ZgKT.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Verdad que te engañe|verdad que te engañe|verdad que|Verdad que)/gi)) {    
let vn = 'https://qu.ax/yTid.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(vivan|vivan los novios|vivanlosnovios)/gi)) {    
let vn = 'https://qu.ax/vHX.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {    
let vn = 'https://qu.ax/thgS.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(Usted esta detenido|usted esta detenido|usted está detenido|Usted está detenido)/gi)) {    
let vn = 'https://qu.ax/UWqX.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(una pregunta|pregunton|preguntona)/gi)) {    
let vn = 'https://qu.ax/NHOM.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(oye|🐔|Chiste)/gi)) {    
let vn = 'https://qu.ax/MSiQ.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(gaspi y la minita|Gaspi y la mina|ig del la minita)/gi)) {
let vn = 'https://qu.ax/wYil.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(gaspi frase|frase)/gi)) {
let vn = 'https://qu.ax/gNwU.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(se pubrio|se que re pubrio)/gi)) {
let vn = 'https://qu.ax/keKg.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(goo|temazo|fuaa temon)/gi)) {
let vn = 'https://qu.ax/SWYV.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(:V|:v|v:)/gi)) {
let vn = 'https://qu.ax/cxDg.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(freefire|freefire)/gi)) {
let vn = 'https://qu.ax/Dwqp.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Aguanta|aguanta)/gi)) {
let vn = 'https://qu.ax/Qmz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(es viernes|Es viernes)/gi)) {
let vn = 'https://qu.ax/LcdD.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(feriado|feriado de que)/gi)) {
let vn = 'https://qu.ax/mFCT.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Delevery|delivery|espanadas)/gi)) {
let vn = 'https://qu.ax/WGzN.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(putos|tarado|tarado eh|tarado)/gi)) {
let vn = 'https://qu.ax/CoOd.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(donde esta?|donde esta)/gi)) {
let vn = 'https://qu.ax/kCWg.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Q onda|que onda|🤪)/gi)) {
let vn = 'https://qu.ax/YpsR.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(bebesita|bot canta)/gi)) {
let vn = 'https://qu.ax/Ouwp.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(tka|tka)/gi)) {
let vn = 'https://qu.ax/jakw.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(takataka|bot cantar)/gi)) {
let vn = 'https://qu.ax/rxvq.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Hey|Hei|hey|HEY)/gi)) {
let vn = 'https://qu.ax/AaBt.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Joder|joder)/gi)) {
let vn = 'https://qu.ax/lSgD.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(:c|c:|:c)/gi)) {
let vn = 'https://qu.ax/XMHj.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU)/gi)) {
let vn = 'https://qu.ax/bfC.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Sus|sus|Amongos|among us|Among us|Among)/gi)) {
let vn = 'https://qu.ax/Mnrz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(te amo|teamo)/gi)) {
let vn = 'https://qu.ax/rGdn.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Estoy triste|ESTOY TRISTE|estoy triste|Triste|TRISTE|triste|Troste|TROSTE|troste|Truste|TRUSTE|truste)/gi)) {
let vn = 'https://qu.ax/QSyP.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(un Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {
let vn = 'https://qu.ax/pmOm.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {
let vn = 'https://qu.ax/lOCR.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(fiesta viernes|viernes|Viernes|viernes fiesta)/gi)) {
let vn = 'https://qu.ax/wqXs.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(WTF|wtf|Wtf|wataf|watafac|watafack)/gi)) {
let vn = 'https://qu.ax/aPtM.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Yokese|yokese|YOKESE)/gi)) {
let vn = 'https://qu.ax/PWgf.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (chat.audios && m.text.match(/(Bruno|bruno)/gi)) {
let vn = 'https://qu.ax/frSi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
    
if (chat.audios && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga)/gi)) {    
let vn = 'https://qu.ax/pXts.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
   
return !0 }
export default handler

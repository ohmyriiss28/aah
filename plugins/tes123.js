import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `•⊰❂ OMR28-BOT ❂⊱• is here (｡>_<｡)`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.reply(m.chat, info, fakes,{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://lit.link/ohmyriiss28?fbclid=PAAaZTMMZcg8yL2pStiV2XJJXCVvY20VnkUReXQHct01i5fcMDdtfYTOsMQ0Q,
      mediaType: 2,
      description: "https://lit.link/ohmyriiss28?fbclid=PAAaZTMMZcg8yL2pStiV2XJJXCVvY20VnkUReXQHct01i5fcMDdtfYTOsMQ0Q", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|bot|ikratos|test)$/i

handler.command = new RegExp



export default handler

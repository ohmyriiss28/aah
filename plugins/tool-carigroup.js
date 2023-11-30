import { groupWA } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
        if (!text) throw `uhm.. what are you looking for?\n\nexample:\n${usedPrefix + command} mabar`
        let res = await groupWA(text)
        if (!res) throw 'Group Not Found'
        var pik = pickRandom(res) 
        var { subject, url } = pik
        let caption = `
    *Nama* : ${subject}
    *Link :* ${url}
    `
            return m.reply(caption)
    
    }
    handler.help = ['carigrup <pencarian>']
    handler.tags = ['tools']
    handler.command = /^carig(ro?up|c)/i
    export default handler

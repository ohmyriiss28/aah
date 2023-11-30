import { instagramdl } from '@bochilteam/scraper'
var handler = async (m, { args }) => {
    if (!args[0]) throw 'Input URL'
    try { 
    	let res = await bochil.snapsave(args[0]) 
    let media = await res[0].url
    if (!res) throw 'Can\'t download the post'
    m.reply('_In progress, please wait..._')
    conn.sendMessage(m.chat, { video : { url : media }}, m) 
    } catch {
     try {
     	let res2 = await instagramdl(args[0]) 
   let media2 = res2.url
   let cap = res2.title
   return conn.sendFile(m.chat, media2, 'instagram.mp4', cap, m)
  } catch {
  conn.sendFile(m.chat, media, '','',m) } finally {
   }
  }
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?|insta|instagram(dl)?)$/i

export default handler
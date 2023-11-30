
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
┏━•❅•°•❈ OMR28-BOT •°•❅•━┓
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I'm •⊰❂ OMR28-BOT ❂⊱• \n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│       𝗈𝗁𝗆𝗒𝗋𝗂𝗂𝗌𝗌28
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Slasher-Official 🇧🇩
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/628565251134
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
┗━•❅•°•❈ OMR28-BOT •°•❅•━┛
*•⊰❂ OMR28-BOT ❂⊱•! *
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler

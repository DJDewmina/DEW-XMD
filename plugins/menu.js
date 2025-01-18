import { promises } from 'fs'
import { join } from 'path'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix }) => {

const formattedInfo = `
📂 Repository Name: ${repoData.name}
📝 Description: ${repoData.description}
👤 Owner: ${repoData.owner.login}
⭐ Stars: ${repoData.stargazers_count}
🍴 Forks: ${repoData.forks_count}
🌐 URL: ${repoData.html_url}
      `.trim()

      // Send the formatted information as a message
      await conn.relayMessage(
        m.chat,
        {
          requestPaymentMessage: {
            currencyCodeIso4217: 'INR',
            amount1000: 69000,
            requestFrom: m.sender,
            noteMessage: {
              extendedTextMessage: {
                text: formattedInfo,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                  },
                },
              },
            },
          },
        },
        {}
      )
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Repository තොරතුරු ලබා ගැනීමට නොහැකි විය.', m)
    }
  } catch (error) {
    console.error(error)
    await conn.reply(m.chat, 'Repository තොරතුරු ලබා ගැනීමේදී දෝෂයක් ඇති විය.', m)
  }
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2', 'h', 'help2']

export default handler

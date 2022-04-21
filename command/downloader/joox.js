let { fetchJson } = require('../../lib/function')

module.exports = {
  name: "joox",
  category: "downloader",
  desc: "Download music from Joox",
  async exec(msg , sock , args) {
    try{
    let { from , sender, reply } = msg
    if(args.length < 1)return reply('No query given to search..')
    query = args.join(' ')
    result = await fetchJson('https://api.zeks.me/api/joox?apikey=apivinz&q=' + query)
    get_result = result.data[0]
    let txt = '*Joox Downloader*\n\n'
    txt += '• Title : ' + get_result.judul + '\n'
    txt += '• Album : ' + get_result.album + '\n'
    txt += '• Size : ' + get_result.size + '\n'
    txt += '• Url : ' + get_result.audio + ''
    await sock.sendMessage(from, { image : { url: get_result.thumb}  , caption: txt }, {quoted : msg})
    await sock.sendMessage(from, { audio : { url: get_result.audio} }, {quoted : msg})
    } catch (e) {
        console.log(e)
        await reply('Something went wrong, check back later.');
        }
  }
}

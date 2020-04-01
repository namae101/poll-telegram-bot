const config = {
  botToken: process.env.BOT_TOKEN,
  currentHost: 'https://poll-test-bot.now.sh',
  isDevelopment: process.env.NODE_ENV === 'dev'
}

module.exports = {
  config
}

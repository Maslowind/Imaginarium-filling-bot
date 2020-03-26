const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);

    if (msg.photo != undefined) {
        bot.sendPhoto(chatId, msg.photo[0].file_id)
    }
    else {
        bot.sendMessage(chatId, (msg.from.first_name + ', це ж не фото. Ви що, вже набухалися?'));
    }
});
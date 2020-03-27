const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const eventsFunctions = require('./features/events');


const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
eventsFunctions(bot);

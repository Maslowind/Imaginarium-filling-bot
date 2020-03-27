const createPhoto = require('../database/create_photo');
const getAllPhotos = require('../database/get_all_photos');
let photo_list = [];
module.exports = function eventsFunctions(bot) {
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        //console.log(msg);

        if (msg.photo != undefined) {
            bot.sendMessage(chatId, (msg.from.first_name + ', дякую =)'));            
        }
        else if (msg.text = "/showAll") {
            photo_list = await getAllPhotos();
            console.log(photo_list);
            for (let i = 0; i < photo_list.length; i++) {
                bot.sendPhoto(chatId, photo_list[i]);
            }
        }
        else {
            bot.sendMessage(chatId, (msg.from.first_name + ', це ж не фото. Ви що, вже набухалися?'));
            console.log(msg);
        }
    });
}
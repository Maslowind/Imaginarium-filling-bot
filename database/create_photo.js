module.exports = function createPhoto(fileId) {
  const mongoose = require('mongoose');
  const MongoURI = process.env.MONGO_URI;
  const col_struct = require('./col_struct.js');
  let Photo = mongoose.model('Photo', col_struct, "IMDB");
  mongoose.connect(MongoURI, { useNewUrlParser: true })
  let newPhoto = new Photo({ _id: fileId });
  Photo.findOne({ _id: fileId }, (err, fb) => {
    if (err) {
      throw err;
    } else if (fb === null) {
      newPhoto.save(function (err, fluffy) {
        if (err) return console.error(err);
      })
    }
  });

};


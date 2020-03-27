module.exports = async function  getAllPhotos() {
  const mongoose = require('mongoose');
  const MongoURI = process.env.MONGO_URI;
  const col_struct = require('./col_struct.js');
  let Photo = mongoose.model('Photo', col_struct, "IMDB");
  mongoose.connect(MongoURI, { useNewUrlParser: true })
  let photos_list = [];
  console.log("0")
  await Photo.findOne({ _id: fileId }, (err, fb) => {
    console.log(fb)
    if (err) {
      throw err;
    } else if (fb === null) photos_list = null;
    else {
      for (let i = 0; i < fb.length; i++)
        photos_list[i] = fb[i]._id;
    }
  });
  return photos_list;
};
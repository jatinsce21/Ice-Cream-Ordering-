const mongoose = require("mongoose");

const connect = (url) => {
  mongoose.connect(url).then(console.log("Done"));
};

module.exports = connect;

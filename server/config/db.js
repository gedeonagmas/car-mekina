const mongoose = require("mongoose");
async function mongodb() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }); //replace by MONGO_URL
  console.log("database connected successfully");
}
mongodb().catch((err) => console.log(err));

module.exports = mongoose;

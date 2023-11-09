const mongoose = require("mongoose");
async function mongodb() {
  await mongoose.connect("mongodb+srv://user:oOa6vWU2VSLZV5RR@cluster0.rhayeki.mongodb.net/GYM?retryWrites=true&w=majority", { useNewUrlParser: true }); //replace by MONGO_URL
  console.log("database connected successfully");
}
mongodb().catch((err) => console.log(err));

module.exports = mongoose;

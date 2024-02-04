const { Schema, model } = require("mongoose");
const bookSchema = Schema({
  name: { type: String, required: true },
  phoneno: { type: Number, required: true },
  emailaddress: { type: String, required: true },
  checkin: { type: Number, default: Date.now() },
  checkout: { type: Number, default: Date.now() },
  totalcheck: { type: Number, default: Date.now() },
});
module.exports = model("book", bookSchema);

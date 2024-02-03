const { Schema, model } = require("mongoose");
const bookSchema = Schema({
  title: { type: String, required: true },
});
module.exports = model("book", bookSchema);

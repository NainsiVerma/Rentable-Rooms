const { Schema, model } = require("../connection");

// defining the structure of data to store
const myschema = new Schema({
  owner: String,
  address: String,
  image: String,
  description: String,
  rent: Number,
  type: String,
  contact: String,
  name: String,
  createdAt: Date,
});

module.exports = model("rentable", myschema);

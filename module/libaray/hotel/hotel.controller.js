const bookmodel = require("./libaray.model");
const create = (payload) => {
  return bookmodel.create(payload);
};
const get = () => {
  return bookmodel.find();
};
const getById = (id) => {
  return bookmodel.findOne(id);
};
const updateById = (id) => {
  return bookmodel.updateOne(id);
};
const remove = (id) => {
  return bookmodel.deleteOne(id);
};
module.exports = { create, get, getById, updateById, remove };

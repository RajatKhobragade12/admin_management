const mongoose = require('mongoose');

const clientMaster = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  admin: { type: String, required: true },
  contact: { type: String, required: true },
  doj: { type: Date, required: true },
  pwd: { type: String, required: true },
  chips: { type: Number, required: true },
  status: { type: String, required: true },
  withdraw:{type:Boolean,default:false}
});

module.exports = mongoose.model('client', clientMaster);

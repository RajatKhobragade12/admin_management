const mongoose = require('mongoose');

const miniAdminSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  admin: { type: String, required: true },
  contact: { type: String, required: true },
  doj: { type: Date, required: true },
  pwd: { type: String, required: true },
  subadminShareMatchShr: { type: Number, required: true },
  subadminShareCasinoShr: { type: Number, required: true },
  subadminCommType: { type: String, required: true },
  subadminCommMatch: { type: Number, required: true },
  subadminCommSSN: { type: Number, required: true },
  chips: { type: Number, required: true },
  status: { type: String, required: true },
  role:{type:String,default:"Mini-Admin"}
});

module.exports = mongoose.model('miniAdmin', miniAdminSchema);

const mongoose = require('mongoose');

const masterMasterSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  admin: { type: String, required: true },
  subadminShareCasinoShr: { type: Number, required: true },
  subadminCommType: { type: String, required: true },
  subadminCommMatch: { type: Number, required: true },
  subadminCommSSN: { type: Number, required: true },
  chips: { type: Number, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('masterMaster', masterMasterSchema);

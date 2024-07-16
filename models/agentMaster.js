const mongoose = require('mongoose');

const agentMaster = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  admin: { type: String, required: true },
  contact: { type: String, required: true },
  doj: { type: Date, required: true },
  pwd: { type: String, required: true },
  subadminCommType: { type: String, required: true },
  subadminCommMatch: { type: Number, required: true },
  subadminCommSSN: { type: Number, required: true },
  chips: { type: Number, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('agentMaster', agentMaster);

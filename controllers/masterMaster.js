const masterMasterModel = require('../models/masterMaster');

const createMasterMaster =  async (req, res) => {
  try {
    const {
      code,
      name,
      admin,
      subadminShareCasinoShr,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    } = req.body;

    if (!code || !name || !admin || !subadminShareCasinoShr || !subadminCommType || !subadminCommMatch || !subadminCommSSN || !chips || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMasterMaster = await masterMasterModel.create({
      code,
      name,
      admin,
      subadminShareCasinoShr,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    });

    res.status(201).json(newMasterMaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



const updateMasterMaster = async (req, res) => {
  try {
    const {
      code,
      name,
      admin,
      subadminShareCasinoShr,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    } = req.body;


    const masterMaster = await masterMasterModel.findById(req.params.id);

    if (!masterMaster) {
      return res.status(404).json({ message: 'Master Master not found' });
    }

    if (code) {
      masterMaster.code = code;
    }
    if (name) {
      masterMaster.name = name;
    }
    if (admin) {
      masterMaster.admin = admin;
    }
    if (subadminShareCasinoShr) {
      masterMaster.subadminShareCasinoShr = subadminShareCasinoShr;
    }
    if (subadminCommType) {
      masterMaster.subadminCommType = subadminCommType;
    }
    if (subadminCommMatch) {
      masterMaster.subadminCommMatch = subadminCommMatch;
    }
    if (subadminCommSSN) {
      masterMaster.subadminCommSSN = subadminCommSSN;
    }
    if (chips) {
      masterMaster.chips = chips;
    }
    if (status) {
      masterMaster.status = status;
    }

    const updatedMasterMaster = await masterMaster.save();

    res.status(201).json({ message: 'Master Master updated successfully', data: updatedMasterMaster });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
    createMasterMaster,
    updateMasterMaster
}
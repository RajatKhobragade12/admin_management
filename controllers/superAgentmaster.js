const superAdminMasterModel = require('../models/superAgentMaster');

const  createSuperAgentMaster = async (req, res) => {
  try {
    const {
      code,
      name,
      admin,
      contact,
      doj,
      pwd,
      subadminShareCasinoShr,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    } = req.body;

    if (!code || !name || !admin || !contact || !doj || !pwd || !subadminShareCasinoShr || !subadminCommType || !subadminCommMatch || !subadminCommSSN || !chips || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMiniAdmin = await superAdminMasterModel.create({
      code,
      name,
      admin,
      contact,
      doj,
      pwd,
      subadminShareCasinoShr,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    });

    res.status(201).json(newMiniAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



const updateSuperAgentMaster =  async (req, res) => {
  try {
    const {
      code,
      name,
      admin,
      contact,
      doj,
      pwd,
      subadminShareCasinoShr,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    } = req.body;


    const superAdminmaster = await superAdminMasterModel.findById(req.params.id);
    if (!superAdminmaster) {
      return res.status(404).json({ message: 'super admin master not found' });
    }

    if (code) {
        superAdminmaster.code = code;
    }
    if (name) {
        superAdminmaster.name = name;
    }
    if (admin) {
        superAdminmaster.admin = admin;
    }
    if (contact) {
        superAdminmaster.contact = contact;
    }
    if (doj) {
        superAdminmaster.doj = doj;
    }
    if (pwd) {
        superAdminmaster.pwd = pwd;
    }
    if (subadminShareCasinoShr) {
        superAdminmaster.subadminShareCasinoShr = subadminShareCasinoShr;
    }
    if (subadminCommType) {
        superAdminmaster.subadminCommType = subadminCommType;
    }
    if (subadminCommMatch) {
        superAdminmaster.subadminCommMatch = subadminCommMatch;
    }
    if (subadminCommSSN) {
        superAdminmaster.subadminCommSSN = subadminCommSSN;
    }
    if (chips) {
        superAdminmaster.chips = chips;
    }
    if (status) {
        superAdminmaster.status = status;
    }

    const data = await superAdminmaster.save();

    res.status(201).json({ message: 'super admin master updated successfully', data: data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
    createSuperAgentMaster,
    updateSuperAgentMaster
}
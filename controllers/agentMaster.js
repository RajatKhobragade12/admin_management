const agentMasterModel = require('../models/agentMaster');

const createAgentMaster = async (req, res) => {
  try {
    const {
      code,
      name,
      admin,
      contact,
      doj,
      pwd,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    } = req.body;

    if (!code || !name || !admin || !contact || !doj || !pwd || !subadminCommType || !subadminCommMatch || !subadminCommSSN || !chips || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newAgentMaster = await agentMasterModel.create({
      code,
      name,
      admin,
      contact,
      doj,
      pwd,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    });

    res.status(201).json(newAgentMaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateAgentMaster = async (req, res) => {
  try {
    const {
      code,
      name,
      admin,
      contact,
      doj,
      pwd,
      subadminCommType,
      subadminCommMatch,
      subadminCommSSN,
      chips,
      status
    } = req.body;

    if (!code || !name || !admin || !contact || !doj || !pwd || !subadminCommType || !subadminCommMatch || !subadminCommSSN || !chips || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const agentMaster = await agentMasterModel.findById(req.params.id);

    if (!agentMaster) {
      return res.status(404).json({ message: 'Agent Master not found' });
    }

    if (code) {
      agentMaster.code = code;
    }
    if (name) {
      agentMaster.name = name;
    }
    if (admin) {
      agentMaster.admin = admin;
    }
    if (contact) {
      agentMaster.contact = contact;
    }
    if (doj) {
      agentMaster.doj = doj;
    }
    if (pwd) {
      agentMaster.pwd = pwd;
    }
    if (subadminCommType) {
      agentMaster.subadminCommType = subadminCommType;
    }
    if (subadminCommMatch) {
      agentMaster.subadminCommMatch = subadminCommMatch;
    }
    if (subadminCommSSN) {
      agentMaster.subadminCommSSN = subadminCommSSN;
    }
    if (chips) {
      agentMaster.chips = chips;
    }
    if (status) {
      agentMaster.status = status;
    }

    const updatedAgentMaster = await agentMaster.save();

    res.status(201).json({ message: 'Agent Master updated successfully', data: updatedAgentMaster });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
    createAgentMaster,
    updateAgentMaster
}
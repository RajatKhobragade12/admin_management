const miniAdminMasterModel = require('../models/miniAdminMaster');
const miniAdminModel  = require('../models/miniAdmin');


 const createMiniAdminMaster = async (req, res) => {
    try {
        const { code, name, admin, contact, doj, pwd, subadminShareMatchShr, subadminShareCasinoShr, subadminCommType, subadminCommMatch} = req.body;
        if (!code || !name || !admin || !contact || !doj || !pwd || !subadminShareMatchShr || !subadminShareCasinoShr || !subadminCommType || !subadminCommMatch) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newMiniAdmin = await miniAdminMasterModel.create({
            code,
            name,
            admin,
            contact,
            doj,
            pwd,
            subadminShareMatchShr,
            subadminShareCasinoShr,
            subadminCommType,
            subadminCommMatch
        });
        res.status(201).json({ message: "Mini admin master created successfully", data: newMiniAdmin });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updateminiAdminMaster = async (req, res) => {
    try {
      const {
        code,
        name,
        admin,
        contact,
        doj,
        pwd,
        subadminShareMatchShr,
        subadminShareCasinoShr,
        subadminCommType,
        subadminCommMatch,
        subadminCommSSN,
        chips,
        status
      } = req.body;
  
      const data = await miniAdminMasterModel.findById(req.params.id);
  
      if (!data) {
        return res.status(404).json({ message: 'Mini-admin not found' });
      }
  
      if (code) {
        data.code = code;
      }
      if (name) {
        data.name = name;
      }
      if (admin) {
        data.admin = admin;
      }
      if (contact) {
        data.contact = contact;
      }
      if (doj) {
        data.doj = doj;
      }
      if (pwd) {
        data.pwd = pwd;
      }
      if (subadminShareMatchShr) {
        data.subadminShareMatchShr = subadminShareMatchShr;
      }
      if (subadminShareCasinoShr) {
        data.subadminShareCasinoShr = subadminShareCasinoShr;
      }
      if (subadminCommType) {
        data.subadminCommType = subadminCommType;
      }
      if (subadminCommMatch) {
        data.subadminCommMatch = subadminCommMatch;
      }
      if (subadminCommSSN) {
        data.subadminCommSSN = subadminCommSSN;
      }
      if (chips) {
        data.chips = chips;
      }
      if (status) {
        data.status = status;
      }
  
      const updatedMiniAdmin = await data.save();
  
      res.status(201).json({ message: 'Mini admin updated successfully', data: updatedMiniAdmin });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports = {
    createMiniAdminMaster,
    updateminiAdminMaster

}
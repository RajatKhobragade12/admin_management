const miniAdminModel = require('../models/miniAdmin');

const createMiniAdmin = async (req, res) => {
    try {
        const { code, name, admin, contact, doj, pwd, subadminShareMatchShr, subadminShareCasinoShr, subadminCommType, subadminCommMatch, subadminCommSSN, chips, status } = req.body;
        if (!code || !name || !admin || !contact || !doj || !pwd || !subadminShareMatchShr || !subadminShareCasinoShr || !subadminCommType || !subadminCommMatch || !subadminCommSSN || !chips || !status) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newMiniAdmin = await miniAdminModel.create({
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
        });
        res.status(201).json({ message: "Mini admin created successfully", data: newMiniAdmin });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updateMiniAdmin = async (req, res) => {
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
  
      const data = await miniAdminModel.findById(req.params.id);
      
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


const search =  async (req, res) => {
    try {
      const { search, sortField, sortOrder, page = 1, limit = 10 } = req.query;
      const query = {};
  
      if (search) {
        query.$or = [
          { code: { $regex: search, $options: 'i' } },
          { name: { $regex: search, $options: 'i' } },
          { admin: { $regex: search, $options: 'i' } },
          { contact: { $regex: search, $options: 'i' } },
        ];
      }
  
      const sort = {};
      if (sortField && sortOrder) {
        sort[sortField] = sortOrder === 'asc' ? 1 : -1;
      }
  
      const skip = (page - 1) * limit;
  
      const total = await miniAdminModel.countDocuments(query);
      const miniAdmins = await miniAdminModel.find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit);
  
      res.json({
        data: miniAdmins,
        total,
        page,
        limit,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
module.exports = {
    createMiniAdmin,
    updateMiniAdmin,
    search
}
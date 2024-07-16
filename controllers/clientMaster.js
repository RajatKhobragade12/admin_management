const clientMasterModel = require('../models/clientMaster');



const createClientMaster =  async (req, res) => {
  try {
    const { code, name, admin, contact, doj, pwd, chips, status } = req.body;

    if (!code || !name || !admin || !contact || !doj || !pwd || !chips || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newClientMaster = await clientMasterModel.create({
      code,
      name,
      admin,
      contact,
      doj,
      pwd,
      chips,
      status
    });

    res.status(201).json(newClientMaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 const updateClientMaster = async (req, res) => {
  try {
    const { code, name, admin, contact, doj, pwd, chips, status } = req.body;

    if (!code || !name || !admin || !contact || !doj || !pwd || !chips || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const clientMaster = await clientMasterModel.findById(req.params.id);

    if (!clientMaster) {
      return res.status(404).json({ message: 'Client Master not found' });
    }

    if (code) {
      clientMaster.code = code;
    }
    if (name) {
      clientMaster.name = name;
    }
    if (admin) {
      clientMaster.admin = admin;
    }
    if (contact) {
      clientMaster.contact = contact;
    }
    if (doj) {
      clientMaster.doj = doj;
    }
    if (pwd) {
      clientMaster.pwd = pwd;
    }
    if (chips) {
      clientMaster.chips = chips;
    }
    if (status) {
      clientMaster.status = status;
    }

    const updatedClientMaster = await clientMaster.save();

    res.status(201).json({ message: 'Client Master updated successfully', data: updatedClientMaster });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const withdraw  = async(req,res)=>{
    try {
    let {id} = req.params;
    let {status} = req.body;
    const clientMaster = await clientMasterModel.findById(id);
    if (!clientMaster) {
        return res.status(404).json({ message: 'Client not found' });
      }
   if(status){

       clientMaster.withdraw= status
   }
   res.status(200).json({ message: 'Withrow application successfully', data: clientMaster });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    updateClientMaster,
    createClientMaster,
    withdraw
}
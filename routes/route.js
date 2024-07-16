const express = require('express');
const route = express.Router()
const {register,login} = require('../controllers/user');

const {createMiniAdmin,updateMiniAdmin,search} = require("../controllers/miniAdmin");
const {createMiniAdminMaster,updateminiAdminMaster} = require("../controllers/miniAdminMaster");
const {createMasterMaster,updateMasterMaster} = require("../controllers/masterMaster");
const {createSuperAgentMaster,updateSuperAgentMaster} = require("../controllers/superAgentmaster");
const {createClientMaster,updateClientMaster ,withdraw} = require("../controllers/clientMaster");
const {createAgentMaster,updateAgentMaster} = require("../controllers/agentMaster")

route.post('/register', register);
route.post('/login', login);


route.post('/create-mini-admin', createMiniAdmin);
route.put('/update-mini-admin/:id', updateMiniAdmin);

route.post('/create-mini-admin-master', createMiniAdminMaster);
route.put('/update-mini-admin-master/:id', updateminiAdminMaster);


route.post('/master-master', createMasterMaster);
route.put('/master-master/:id', updateMasterMaster);

route.post('/super-agent-master', createSuperAgentMaster);
route.put('/super-agent-master/:id', updateSuperAgentMaster);

route.post('/agent-master', createAgentMaster);
route.put('/agent-master/:id', updateAgentMaster);



route.post('/client-masters', createClientMaster);
route.put('/client-masters/:id', updateClientMaster);
route.put('/withdraw/:id', withdraw);
route.post('/search', search);




module.exports = route
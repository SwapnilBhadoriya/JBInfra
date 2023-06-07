const express = require('express');

const router = express.Router();
const {submitCustomerDetails} = require('../controllers/customer')

router.post('/',submitCustomerDetails);
router.get('/',function(req,res){return res.json({msg:"Working"})})

module.exports = router;
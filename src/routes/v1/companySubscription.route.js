const express = require('express');
const { ticketController, ourServicesController, companySubscriptionController} = require('../../controllers');
const adminAuth = require('../../middlewares/adminAuth');
const companyAuth = require('../../middlewares/companyAuth');
const { isAuthenticated } = require('../../middlewares/isAuthenticated');
// const { isAdmin } = require('../../middlewares/isAdmin');
const validateCompanySubscription = require('../../validations/companySubscription.validate')
const validate = require('../../middlewares/validate');
const router = express.Router();

router.post('/buySubscription',companyAuth(),validate(validateCompanySubscription.validateBuySubscription),companySubscriptionController.buyUserSubscription);
router.get('/getSubscription', companyAuth(), validate(validateCompanySubscription.validateGetSubscription),companySubscriptionController.getAllUserSubscription);
router.post('/cancelSubscription', companyAuth(),validate(validateCompanySubscription.validateCancelSubscription),companySubscriptionController.cancelUserSubscription);


module.exports = router;

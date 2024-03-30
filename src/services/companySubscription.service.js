const httpStatus = require('http-status');
const CONSTANT = require("../config/constant");
const ApiError = require('../utils/ApiError');
// const {  sendTicketConfirmationEmail, sendTicketReplyEmail } = require('./email.service');
const Ticket = require('../models/ticket.model');
const { sendTicketConfirmationEmail, sendTicketReplyEmail } = require('../helpers/mailFunctions');
const OurService = require('../models/ourServices.model');
const CompanySubscription = require('../models/companySubscription.model');


const buySubscription = async (planName,serviceId,planId,companyId,creditCount,planPrice, description,isCustom,isExpired) => {


    const subscriptionDetails = {
        planName: planName,
        serviceId: serviceId,
        planId: planId,
        companyId: companyId,
        creditCount: creditCount,
        planPrice: planPrice,
        description: description,
        isCustom: isCustom,
        isExpired: isExpired,
        
    }
    console.log(subscriptionDetails)
    const result = await CompanySubscription.create(subscriptionDetails);

    // here we can send the mail to the company of taken subscription

    return {data: result,code:CONSTANT.SUCCESSFUL,message:CONSTANT.BUY_SUBSCRIPTION};

}

const getSubscription = async () => {

    const result = await CompanySubscription.find({});

    return {data: result,code:CONSTANT.SUCCESSFUL,message:CONSTANT.SUBSCRIPTION_LIST};

}


const cancelSubscription = async (user, subscriptionId) => {
    const companyId = user._id;
  
    // Find the subscription by ID and company ID
    const findSubscription = await CompanySubscription.findOneAndUpdate(
      { _id: subscriptionId, companyId: companyId },
      { $set: { isExpired: true } },
      { new: true } // Return the updated document
    );
  
    // Check if subscription found
    if (!findSubscription) {
      return { data: [], code: CONSTANT.BAD_REQUEST, message: CONSTANT.NO_SUBSCRIPTION };
    }
  
    // Return the updated subscription and success message
    return { data: findSubscription, code: CONSTANT.SUCCESSFUL, message: CONSTANT.CANCEL_SUBSCRIPTION };
  };
  



module.exports = { buySubscription, getSubscription,cancelSubscription };


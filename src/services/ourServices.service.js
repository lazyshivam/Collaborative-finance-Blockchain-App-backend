// const {UserCart} =require('../models');
const { User } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
// const {  sendTicketConfirmationEmail, sendTicketReplyEmail } = require('./email.service');
const Ticket = require('../models/ticket.model');
const { sendTicketConfirmationEmail, sendTicketReplyEmail } = require('../helpers/mailFunctions');
const OurService = require('../models/ourServices.model');
const CONSTANT = require('../config/constant');

const createService = async (serviceDetails) => {

  
    const result = await OurService.create(serviceDetails);

    return {data:result,code:CONSTANT.SUCCESSFUL,message:CONSTANT.SERVICE_CREATED};

}

const getService = async () => {

    const result = await OurService.find({isDelete:1});

    return {data:result,code:CONSTANT.SUCCESSFUL,message:CONSTANT.SERVICE_LIST};

}

const updateStatus = async (serviceId,newStatus) => {
    // find one and update status
    const updatedResult = await OurService.findOneAndUpdate({ _id: serviceId },
        { $set: { status: newStatus } },
        { new: true }
    );

    // check if service is available or not
    if (!updatedResult) {
        return {data:[],code:CONSTANT.BAD_REQUEST,message:CONSTANT.SERVICE_NOT_FOUND}
    }

    return {data:updatedResult,code:CONSTANT.SUCCESSFUL,message:CONSTANT.SERVICE_UPDATE};
}

const deleteService = async (serviceId,deleteStatus) => {
    const deletedService = await OurService.findOneAndUpdate({ _id: serviceId },
        { $set: { isDelete: deleteStatus } },
        { new: true}
    );
  
    if (!deletedService) {
      return { data: [], code: CONSTANT.BAD_REQUEST, message: CONSTANT.SERVICE_NOT_FOUND};
    }
  
    return { data: deletedService, code: CONSTANT.SUCCESSFUL, message: CONSTANT.SERVICE_DELETED };
}

module.exports = { createService, getService, updateStatus,deleteService };


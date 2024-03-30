const { User } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
// const {  sendTicketConfirmationEmail, sendTicketReplyEmail } = require('./email.service');
const ServicePlan = require('../models/servicesPlan.model');
const CONSTANT = require('../config/constant');

const createServicePlan = async (planDetails) => {

  const result = await ServicePlan.create(planDetails);

  return { data: result, code: CONSTANT.SUCCESSFUL, message: CONSTANT.PLAN_CREATED };

}


const getServicePlan = async (isAdmin, userId) => {
  const query = {isDelete:1};

  // Apply conditional filtering based on user type:
  if (!isAdmin) {
    query.$or = [
      { isCustom: false }, // General plans
      {
        isCustom: true,
        allowedFor: { $elemMatch: { user: userId } } // Custom plans allowed for user
      }
    ];
  }

  const service = await ServicePlan.find(query);

  return { data: service, code: CONSTANT.SUCCESSFUL, message: CONSTANT.PLAN_LIST };

}

const updatePlan = async (servicePlanId, newStatus) => {

  const updatedResult = await ServicePlan.findOneAndUpdate(
    { _id: servicePlanId },
    { $set: { status: newStatus } },
    { new: true }
  );


  if (!updatedResult) {
    return { data: [], code: CONSTANT.BAD_REQUEST, message: CONSTANT.PLAN_NOT_FOUND }
  }
  return { data: updatedResult, code: CONSTANT.SUCCESSFUL, message: CONSTANT.PLAN_UPDATED };
}


const updatePlanAndGrantAccess = async (servicePlanId, customerId) => {
  // Check if customer already exists in allowedFor
  const existingPlan = await ServicePlan.findOne({ _id: servicePlanId });
  if (!existingPlan) {
    return { data: [], code: CONSTANT.BAD_REQUEST, message: CONSTANT.PLAN_NOT_FOUND };
  }

  const existingCustomers = existingPlan.allowedFor?.map(allowed => allowed.user);
  const isCustomerPresent = existingCustomers?.includes(customerId);

  // Update only if customer is not present
  if (!isCustomerPresent) {
    const updatedResult = await ServicePlan.findOneAndUpdate(
      { _id: servicePlanId },
      {
        $set: { isCustom: true },
        $addToSet: { allowedFor: { user: customerId } },
      },
      { new: true }
    );

    return { data: updatedResult, code: CONSTANT.SUCCESSFUL, message: CONSTANT.CUSTOMER_ADDED };
  } else {
    // Customer already present
    return { data: existingPlan, code: CONSTANT.SUCCESSFUL, message: CONSTANT.CUSTOMER_ALREADY_PRESENT };
  }
};

const deletePlan = async (servicePlanId, newDeleteStatus) => {
  const deletedPlan = await ServicePlan.findOneAndUpdate({ _id: servicePlanId },
    { $set: { isDelete: newDeleteStatus } },
    { new: true }

  );

  if (!deletedPlan) {
    return { data: [], code: CONSTANT.BAD_REQUEST, message: CONSTANT.PLAN_NOT_FOUND };
  }

  return { data: deletedPlan, code: CONSTANT.SUCCESSFUL, message: CONSTANT.PLAN_DELETED };
};




module.exports = { createServicePlan, getServicePlan, updatePlan, updatePlanAndGrantAccess, deletePlan };


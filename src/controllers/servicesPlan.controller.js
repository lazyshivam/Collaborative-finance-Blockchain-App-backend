const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {  servicePlan } = require('../services');

const createPlan = catchAsync(async (req, res) => {
   
   
  const service = await servicePlan.createServicePlan(req.body);
  res.status(httpStatus.CREATED).send(service);
});

// here we return based on plan isCustom status
const getAllPlan = catchAsync(async (req, res) => {
    const user = req.user;
    const isAdmin = false;
    console.log(user._id)
    const allServices = await servicePlan.getServicePlan(isAdmin, user._id);
    res.status(httpStatus.OK).send(allServices);
});

// function for admin to get all created plan 
const getAllPlanAdmin = catchAsync(async (req, res) => {
    const user = req.user;
    const isAdmin = true;
    console.log(user)
    const allServices = await servicePlan.getServicePlan(isAdmin, user._id);
    res.status(httpStatus.OK).send(allServices);
});

const updatePlan = catchAsync(async (req, res) => {
    const servicePlanId = req.query.servicePlanId;
    const newStatus = req.body.newStatus;

    const updatedResult = await servicePlan.updatePlan(servicePlanId,newStatus);

    res.status(httpStatus.OK).send(updatedResult);
});

const updateAndGrantAccess = catchAsync(async (req, res) => {
    const servicePlanId = req.query.servicePlanId;
    const {customerId} = req.body;
   
    const updatedResult = await servicePlan.updatePlanAndGrantAccess(servicePlanId,customerId);

    res.status(httpStatus.OK).send(updatedResult);
});

const deleteServicePlan = catchAsync(async (req, res) => {
    const servicePlanId = req.query.servicePlanId;
    const newDeleteStatus = req.body.isDelete;
    const deletedResult = await servicePlan.deletePlan(servicePlanId,newDeleteStatus);

    res.status(httpStatus.OK).send(deletedResult);
});



module.exports = {createPlan,getAllPlan,updatePlan,getAllPlanAdmin,updateAndGrantAccess,deleteServicePlan};
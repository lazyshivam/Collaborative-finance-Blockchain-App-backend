const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ourService } = require('../services');

const createOurService = catchAsync(async (req, res) => {

  const service = await ourService.createService(req.body);
  res.status(httpStatus.CREATED).send(service);
});

const getAllService = catchAsync(async (req, res) => {
    const allServices = await ourService.getService();
    res.status(httpStatus.OK).send(allServices);
});

const updateServiceStatus = catchAsync(async (req, res) => {
    const serviceId = req.query.serviceId;
    const newStatus=req.body.newStatus
   
    const updatedResult = await ourService.updateStatus(serviceId,newStatus);

    res.status(httpStatus.OK).send(updatedResult);
});

const deleteOurService = catchAsync(async (req, res) => {
    const serviceId = req.query.serviceId;
    const newDeleteStatus = req.body.isDelete;
    const deletedResult = await ourService.deleteService(serviceId,newDeleteStatus);

    res.status(httpStatus.OK).send(deletedResult);
});

module.exports = {createOurService,getAllService,updateServiceStatus,deleteOurService};
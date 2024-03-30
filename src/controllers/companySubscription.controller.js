const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { subscriptionService } = require('../services');

const buyUserSubscription = catchAsync(async (req, res) => {
    const companyId = req.user._id;
    const { planName,serviceId,planId,creditCount,planPrice, description,isCustom,isExpired} = req.body;
    if (!planName || !serviceId || !planId || !companyId || !creditCount || !planPrice || !description) { 
        throw new ApiError(httpStatus.NOT_FOUND,"Not found");
    }

  const subscriptionResult = await subscriptionService.buySubscription(planName,serviceId,planId,companyId,creditCount,planPrice, description,isCustom,isExpired);
  res.status(httpStatus.CREATED).send(subscriptionResult);
});

const getAllUserSubscription = catchAsync(async (req, res) => {
    const user = req.user;
    const allSubscription = await subscriptionService.getSubscription(user);
    res.status(httpStatus.OK).send(allSubscription);
});

const cancelUserSubscription = catchAsync(async (req, res) => {
    const user = req.user;
    const subscriptionId = req.query.subscriptionId;
    const deleteResult = await subscriptionService.cancelSubscription(user, subscriptionId)
    
    res.status(httpStatus.OK).send(deleteResult);
});



module.exports = {buyUserSubscription,getAllUserSubscription,cancelUserSubscription};
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { PincodeService, ApiRequestService, updateLimit } = require('../services');
const CONSTANT = require('../config/constant');

const createPincode = catchAsync(async (req, res) => {
    const pincode = await PincodeService.createPincode(req.body);
    res.send(pincode);
});

const getPincodes = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sortBy', 'limit', 'page', 'searchBy', 'status']);
    const result = await PincodeService.queryPincodes(options);
    res.send({ data: result, code: CONSTANT.SUCCESSFUL, message: CONSTANT.PINCODE_LIST });
});

const getPincode = catchAsync(async (req, res) => {
    const pincode = await PincodeService.getPincodeById(req.params.pincodeId);
    if (!pincode) {
        res.send({ data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.PINCODE_NOT_FOUND });
    }
    res.send({ data: pincode, code: CONSTANT.SUCCESSFUL, message: CONSTANT.PINCODE_DETAILS });
});

const updatePincode = catchAsync(async (req, res) => {
    const pincode = await PincodeService.updatePincodeById(req.params.pincodeId, req.body);
    res.send(pincode);
});

const deletePincode = catchAsync(async (req, res) => {
    var details = await PincodeService.deletePincodeById(req.params.pincodeId);
    if (details) {
        res.send(details);
    }
    res.send(details);
});

const getPincodesWithoutPagination = catchAsync(async (req, res) => {
    let companyId = req.user._id;
    const options = pick(req.params, ['pincode']);
    const result = await PincodeService.queryPincodesWithoutPagination(options);
    ApiRequestService.createAPIRequest({ apiType: 'pincode', company: companyId,rawHeaders:req.rawHeaders });
    updateLimit.updateApiLimit(companyId,'pincode');
    res.send({ data: result, code: CONSTANT.SUCCESSFUL, message: CONSTANT.PINCODE_LIST });
});

module.exports = {
    createPincode,
    getPincodes,
    getPincode,
    updatePincode,
    deletePincode,
    getPincodesWithoutPagination
};

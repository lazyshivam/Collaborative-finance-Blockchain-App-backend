const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { ShortenService, ApiRequestService, updateLimit } = require('../services');
const CONSTANT = require('../config/constant');
const config = require('../config/config');

const createshorten = catchAsync(async (req, res) => {
    req.body['apiUrl'] = (req.user && req.user.apiUrl) ? req.user.apiUrl : config.API_URL
    const shorten = await ShortenService.createshorten(req.body);
    if (shorten) {
        updateLimit.updateApiLimit(req.user._id,'urlshort');
        await ApiRequestService.createAPIRequest({ apiType: 'urlshort', company: req.user._id, rawHeaders: req.rawHeaders })
    }
    // var url = config.API_URL + shorten.data.uniqId
    res.send(shorten);
});

const getshortens = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sortBy', 'limit', 'page', 'searchBy', 'status']);
    const result = await ShortenService.queryshortens(options);
    res.send({ data: result, code: CONSTANT.SUCCESSFUL, message: CONSTANT.SHORTEN_LIST });
});

const getshorten = catchAsync(async (req, res) => {
    const shorten = await ShortenService.getshorten(req.params.shortenId);
    if (!shorten) {
        res.send({ data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.SHORTEN_NOT_FOUND });
    }
    res.send({ data: shorten, code: CONSTANT.SUCCESSFUL, message: CONSTANT.SHORTEN_DETAILS });
});

const updateshorten = catchAsync(async (req, res) => {
    const shorten = await ShortenService.updateshortenById(req.params.shortenId, req.body);
    res.send(shorten);
});

const deleteshorten = catchAsync(async (req, res) => {
    var details = await ShortenService.deleteshortenById(req.params.shortenId);
    if (details) {
        res.send(details);
    }
    res.send(details);
});

const getshortenRedirectUrl = catchAsync(async (req, res) => {
    const shorten = await ShortenService.getshortenRedirectUrl(req.params.shortenId);
    if (!shorten) {
        res.send({ data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.SHORTEN_NOT_FOUND });
    } else {
        ShortenService.increaseClickCount(shorten.id)
        res.redirect(shorten.actualUrl);
    }
});
module.exports = {
    createshorten,
    getshortens,
    getshorten,
    updateshorten,
    deleteshorten,
    getshortenRedirectUrl
};
const httpStatus = require('http-status');
const pick = require('../../utils/pick');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { CompanyService, ApiRequestService } = require('../../services');
const CONSTANT = require('../../config/constant');

const createCompany = catchAsync(async (req, res) => {
    const company = await CompanyService.createCompany(req.body);
    res.send(company);
});

const getCompanies = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sortBy', 'limit', 'page', 'searchBy', 'status']);
    // console.log('call---', options)
    options.limit = Number(options.limit)
    options.page = Number(options.page)
    const result = await CompanyService.queryCompaniesForAdmin(options);
    res.send({ data: result, code: CONSTANT.SUCCESSFUL, message: CONSTANT.COMPANY_LIST });
});

const getCompany = catchAsync(async (req, res) => {
    const company = await CompanyService.getCompanyById(req.params.companyId);
    if (!company) {
        res.send({ data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.COMPANY_USER_NOT_FOUND });
    } else {
        res.send({ data: company, code: CONSTANT.SUCCESSFUL, message: CONSTANT.COMPANY_USER_DETAILS });
    }
});

const updateCompany = catchAsync(async (req, res) => {
    const company = await CompanyService.updateCompanyById(req.params.companyId, req.body);
    res.send(company);
});

const deleteCompany = catchAsync(async (req, res) => {
    var details = await CompanyService.deleteCompanyById(req.params.companyId);
    if (details) {
        res.send(details);
    }
    res.send(details);
});

const getReportForURL = catchAsync(async (req, res) => {
    var response = await ApiRequestService.getMonthWiseDataForURL(req.params.companyId, req.query.year);
    res.send(response);
});

const getReportForPincode = catchAsync(async (req, res)=>{
    var response = await ApiRequestService.getMonthWiseDataForPincode(req.params.companyId, req.query.year);
    res.send(response);
});

const getReportForDashboard = catchAsync(async (req, res)=>{
    var response = await ApiRequestService.getMonthWiseDataForDashboard(req.query.year, req.params.type);
    res.send(response);
});

const getDashboardForAdmin = catchAsync(async (req, res)=>{
    var response = await ApiRequestService.getDashboardForAdmin();
    res.send(response);
});

const addAPICredit = catchAsync(async (req, res) => {
    var response = await CompanyService.updateCompanyAPICredit(req.params.companyId, req.body);
    res.send(response);
});

const getAPICredit = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sortBy', 'limit', 'page', 'searchBy', 'status']);
    // console.log('call---', options)
    options['companyId'] = req.params.companyId
    options.limit = Number(options.limit)
    options.page = Number(options.page)
    var response = await CompanyService.queryCompaniesForGetCreditHistory(options);
    res.send({ data: response, code: CONSTANT.SUCCESSFUL, message: CONSTANT.COMPANY_LIST });
});

module.exports = {
    createCompany,
    getCompanies,
    getCompany,
    updateCompany,
    deleteCompany,
    getReportForURL,
    getReportForPincode,
    addAPICredit,
    getAPICredit,
    getReportForDashboard,
    getDashboardForAdmin
};
const express = require('express');
const adminAuth = require('../../../middlewares/adminAuth');
const validate = require('../../../middlewares/validate');
const companyValidation = require('../../../validations/company.validation');
const { adminCompanyController } = require('../../../controllers')

const router = express.Router();

router
    .route('/')
    .post(adminAuth('createRole'), validate(companyValidation.createCompany), adminCompanyController.createCompany)
    .get(adminAuth('getCompanies'), validate(companyValidation.getCompanies), adminCompanyController.getCompanies);

router
    .route('/:companyId')
    .get(adminAuth('getCompany'), validate(companyValidation.getCompany), adminCompanyController.getCompany)
    .patch(adminAuth('updateCompany'), validate(companyValidation.updateCompany), adminCompanyController.updateCompany)
    .delete(adminAuth('deleteCompany'), validate(companyValidation.deleteCompany), adminCompanyController.deleteCompany);

router
    .route('/report/pincode/:companyId')
    .get(adminAuth('getReport'), validate(companyValidation.getReport), adminCompanyController.getReportForPincode);

router
    .route('/report-dashboard')
    .get(adminAuth('getReport'), validate(companyValidation.getReport), adminCompanyController.getReportForDashboard);

router
    .route('/report/url/:companyId')
    .get(adminAuth('getReport'), validate(companyValidation.getReport), adminCompanyController.getReportForURL);

router
    .route('/add/credit/:companyId')
    .patch(adminAuth('getReport'), validate(companyValidation.getReport), adminCompanyController.addAPICredit)
    .get(adminAuth('getReport'), validate(companyValidation.getCompany), adminCompanyController.getAPICredit);

module.exports = router;
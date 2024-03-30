const express = require('express');
const adminAuth = require('../../../middlewares/adminAuth');
const validate = require('../../../middlewares/validate');
const companyValidation = require('../../../validations/company.validation');
const { adminCompanyController } = require('../../../controllers')

const router = express.Router();


router
    .route('/report/:type')
    .get(adminAuth('getReport'), adminCompanyController.getReportForDashboard);

    router
    .route('/')
    .get(adminAuth('getReport'), adminCompanyController.getDashboardForAdmin);

module.exports = router;
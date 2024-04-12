const express = require('express');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const validate = require('../../middlewares/validate');
const companyValidation = require('../../validations/company.validation');
const { companyController } = require('../../controllers')

const router = express.Router();

// router.route('/change-password').post(companyAuth('getUsersWithoutPagination'), userController.changePassword);

router.post('/auth/register', validate(companyValidation.createCompany), companyController.createCompany);
router.post('/auth/userSignup', validate(companyValidation.registerUser), companyController.createUser);
router.post('/auth/login', validate(companyValidation.login), companyController.login);
router.post('/auth/logout', validate(companyValidation.logout), companyController.logout);
router.post('/auth/refresh-tokens', validate(companyValidation.refreshTokens), companyController.refreshTokens);
router.post('/auth/forgot-password', validate(companyValidation.forgotPassword), companyController.forgotPassword);
router.post('/auth/reset-password', validate(companyValidation.resetPassword), companyController.resetPassword);
router.post('/auth/verify',validate(companyValidation.verifyEmail),companyController.verifyEmail);
router.post('/auth/resend-emailVerification', companyController.resendEmailVerification);

module.exports = router;
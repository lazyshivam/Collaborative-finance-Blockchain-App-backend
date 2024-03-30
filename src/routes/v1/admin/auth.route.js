const express = require('express');
const validate = require('../../../middlewares/validate');
const authValidation = require('../../../validations/auth.validation');
const { adminAuthController } = require('../../../controllers')
const adminAuth = require('../../../middlewares/adminAuth');

const router = express.Router();

router.post('/auth/login', validate(authValidation.login), adminAuthController.login);
router.post('/auth/logout', validate(authValidation.logout), adminAuthController.logout);
router.post('/auth/refresh-tokens', validate(authValidation.refreshTokens), adminAuthController.refreshTokens);
router.post('/auth/forgot-password', validate(authValidation.forgotPassword), adminAuthController.forgotPassword);
router.post('/auth/reset-password', validate(authValidation.resetPassword), adminAuthController.resetPassword);
router.route('/change-password').post(adminAuth('changePassword'), adminAuthController.changePassword);

module.exports = router;
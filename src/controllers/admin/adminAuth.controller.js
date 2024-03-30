const catchAsync = require('../../utils/catchAsync');
const { adminAuthService, adminStaffService, tokenService } = require('../../services');
const CONSTANT = require('../../config/constant');
const { MailFunction } = require('../../helpers');

const login = catchAsync(async (req, res) => {
    var { email, password } = req.body;
    email = email.toLocaleLowerCase()
    const admin = await adminAuthService.loginUserWithEmailAndPassword(email, password);
    if (admin && admin.data && admin.code == 200) {
        const tokens = await tokenService.generateAuthTokens(admin.data);
        if (admin && tokens) {
            res.send({ data: { admin: admin.data, tokens }, code: CONSTANT.SUCCESSFUL, message: CONSTANT.COMPANY_USER_DETAILS });
        } else {
            res.send(admin)
        }
    } else {
        res.send(admin)
    }
});

const logout = catchAsync(async (req, res) => {
    await adminAuthService.logout(req.body.refreshToken);
    res.send({ data: {}, code: CONSTANT.SUCCESSFUL, message: CONSTANT.Logout_MSG })
});

const refreshTokens = catchAsync(async (req, res) => {
    const tokens = await adminAuthService.refreshAuth(req.body.refreshToken);
    res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
    console.log('req.body.email----forgot', req.body.email)
    const admin = await adminAuthService.validateUserWithEmail(req.body.email);
    if (admin) {
        var resetPasswordToken = await tokenService.generateResetPasswordToken(admin);
        await MailFunction.sendResetPasswordEmail(req.body.email, resetPasswordToken, 'admin');
        res.send({ data: {}, code: CONSTANT.SUCCESSFUL, message: CONSTANT.FORGOT_PASSWORD });
    } else {
        res.send({ data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.COMPANY_USER_NOT_FOUND });
    }
});

const resetPassword = catchAsync(async (req, res) => {
    var response = await adminAuthService.resetPassword(req.query.token, req.body.password);
    res.send(response);
});

const changePassword = catchAsync(async (req, res) => {
    var result;
    console.log('req.user===', req.user)
    if (req.user && req.user.type != 'superadmin') {
        var userDetails = await adminStaffService.getAdminStaffUserById(req.user._id);
        if (!userDetails || !(await userDetails.isPasswordMatch(req.body.oldPassword))) {
            // console.log('check if---', userDetails)
            res.send({ data: {}, code: CONSTANT.UNAUTHORIZED, message: CONSTANT.OLD_PASSWORD_MSG })
        } else {
            result = await adminStaffService.updateAdminStaffUserById(req.user._id, req.body);
        }
    } else {
        var adminDetails = await adminAuthService.getAdminById(req.user._id);
        if (!adminDetails || !(await adminDetails.isPasswordMatch(req.body.oldPassword))) {
            res.send({ data: {}, code: CONSTANT.UNAUTHORIZED, message: CONSTANT.OLD_PASSWORD_MSG })
        } else {
            result = await adminAuthService.updateAdminById(req.user._id, req.body);
        }
    }
    if (result) {
        res.send({ data: result, code: CONSTANT.SUCCESSFUL, message: CONSTANT.CHANGE_PASSWORD });
    }
});
module.exports = {
    login,
    logout,
    refreshTokens,
    forgotPassword,
    resetPassword,
    changePassword
};
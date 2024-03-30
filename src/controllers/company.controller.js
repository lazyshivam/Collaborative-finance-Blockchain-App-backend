const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { CompanyService, tokenService } = require('../services');
const CONSTANT = require('../config/constant');
const { MailFunction } = require('../helpers');

const createCompany = catchAsync(async (req, res) => {
    req.body.userType = "superadmin";
    const company = await CompanyService.createCompany(req.body);
    res.send(company);
});

const createUser = catchAsync(async (req, res) => {
    req.body.userType = "user";
    const user = await CompanyService.createCompany(req.body);

    res.send(user);
});

const getCompany = catchAsync(async (req, res) => {
    const company = await CompanyService.getCompanyById(req.params.userId);
    if (!company) {
        res.send({ data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.COMPANY_NOT_FOUND });
    }
    res.send({ data: company, code: CONSTANT.SUCCESSFUL, message: CONSTANT.COMPANY_DETAILS });
});

const updateCompany = catchAsync(async (req, res) => {
    const company = await CompanyService.updateCompanyById(req.params.userId, req.body);
    res.send(company);
});

const deleteCompany = catchAsync(async (req, res) => {
    var details = await CompanyService.deleteCompanyById(req.params.userId);
    if (details) {
        res.send(details);
    }
    res.send(details);
});

const login = catchAsync(async (req, res) => {
    var { email, password } = req.body;
    email = email.toLocaleLowerCase()
    const company = await CompanyService.loginUserWithEmailAndPassword(email, password);
    if (company && company.data && company.code == 200) {
        const tokens = await tokenService.generateAuthTokens(company.data);
        if (company && tokens) {
            res.send({ data: { company: company.data, tokens }, code: CONSTANT.SUCCESSFUL, message: CONSTANT.COMPANY_DETAILS });
        } else {
            res.send(company)
        }
    } else {
        res.send(company)
    }
});

const logout = catchAsync(async (req, res) => {
    await CompanyService.logout(req.body.refreshToken);
    // res.status(httpStatus.NO_CONTENT).send();
    res.send({ data: {}, code: CONSTANT.SUCCESSFUL, message: CONSTANT.Logout_MSG })
});

const refreshTokens = catchAsync(async (req, res) => {
    const tokens = await CompanyService.refreshAuth(req.body.refreshToken);
    res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
    console.log('req.body.email----forgot', req.body.email)
    const company = await CompanyService.validateUserWithEmail(req.body.email);
    if (company) {
        var resetPasswordToken = await tokenService.generateResetPasswordToken(company);
        await MailFunction.sendResetPasswordEmail(req.body.email, resetPasswordToken, 'company');
        res.send({ data: {}, code: CONSTANT.SUCCESSFUL, message: CONSTANT.FORGOT_PASSWORD });
    } else {
        res.send({ data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.COMPANY_NOT_FOUND });
    }
});

const resetPassword = catchAsync(async (req, res) => {
    var response = await CompanyService.resetPassword(req.query.token, req.body.password);
    res.send(response);
    // res.status(httpStatus.NO_CONTENT).send();
});

// email verification of registered user

const verifyEmail = catchAsync(async (req, res) => {
    var response = await CompanyService.verifyUserEmail(req.query.token);
    res.send(response);

});
const resendEmailVerification = catchAsync(async (req, res) => {
    const email = req.body.email;
    const response = await CompanyService.resendUserEmailVerification(email);

    res.send(response);
});


module.exports = {
    createCompany,
    createUser,
    getCompany,
    updateCompany,
    deleteCompany,
    login,
    logout,
    refreshTokens,
    forgotPassword,
    resetPassword,
    verifyEmail,
    resendEmailVerification
};
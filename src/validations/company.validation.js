const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCompany = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        companyName: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().allow('').allow(null),
        alternatePhone: Joi.string().allow('').allow(null),
        password: Joi.string(),
        apiKey: Joi.string().allow('').allow(null),
        apiKeySecret: Joi.string().allow('').allow(null),
        panNumber: Joi.string().allow('').allow(null),
        gstNumber: Joi.string().allow('').allow(null),
        cinNumber: Joi.string().allow('').allow(null),
        country: Joi.string().allow('').allow(null),
        registeredAddress: Joi.string().allow('').allow(null),
        postalAddress: Joi.string().allow('').allow(null),
        apiDetails: Joi.array().allow('').allow(null),
        apiHitLimit: Joi.number().allow('').allow(null),
        advanceAmount: Joi.number().allow('').allow(null),
        remainingAmount: Joi.number().allow('').allow(null),
        pincodeService: Joi.boolean().allow('').allow(null),
        urlService: Joi.boolean().allow('').allow(null),
        pincodeCredit: Joi.number().allow('').allow(null),
        urlCredit: Joi.number().allow('').allow(null),
        apiUrl: Joi.string().allow('').allow(null),
        isStatus: Joi.number().allow('').allow(null),
        isDelete: Joi.number().allow('').allow(null),
    }),
};

const getCompanies = {
    query: Joi.object().keys({
        name: Joi.string(),
        role: Joi.string(),
        sortBy: Joi.string(),
        searchBy: Joi.string().allow('').allow(null),
        status: Joi.string().allow('').allow(null),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getCompany = {
    params: Joi.object().keys({
        companyId: Joi.string().custom(objectId),
    }),
};

const updateCompany = {
    params: Joi.object().keys({
        companyId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string().required(),
            companyName: Joi.string().required(),
            email: Joi.string().required(),
            phone: Joi.string().allow('').allow(null),
            alternatePhone: Joi.string().allow('').allow(null),
            password: Joi.string(),
            apiKey: Joi.string().allow('').allow(null),
            apiKeySecret: Joi.string().allow('').allow(null),
            panNumber: Joi.string().allow('').allow(null),
            gstNumber: Joi.string().allow('').allow(null),
            cinNumber: Joi.string().allow('').allow(null),
            country: Joi.string().allow('').allow(null),
            registeredAddress: Joi.string().allow('').allow(null),
            postalAddress: Joi.string().allow('').allow(null),
            apiDetails: Joi.array().allow('').allow(null),
            apiHitLimit: Joi.number().allow('').allow(null),
            advanceAmount: Joi.number().allow('').allow(null),
            pincodeService: Joi.boolean().allow('').allow(null),
            urlService: Joi.boolean().allow('').allow(null),
            remainingAmount: Joi.number().allow('').allow(null),
            pincodeCredit: Joi.number().allow('').allow(null),
            urlCredit: Joi.number().allow('').allow(null),
            apiUrl: Joi.string().allow('').allow(null),
            isSubscribed: Joi.boolean().required(),
            status: Joi.number().allow('').allow(null),
            isStatus: Joi.number().allow('').allow(null),
            isDelete: Joi.number().allow('').allow(null),
            createdAt: Joi.date(),
            updatedAt: Joi.date(),
            id: Joi.string()
        })
        .min(1),
};

const deleteCompany = {
    params: Joi.object().keys({
        companyId: Joi.string().custom(objectId),
    }),
};

const registerUser = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().allow('').required(),
        confirmPassword: Joi.string().allow('').allow(null),
        name: Joi.string().required(),
        phone: Joi.string().allow('').allow(null)
    }),
};

const login = {
    body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

const logout = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    }),
};

const refreshTokens = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    }),
};

const forgotPassword = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
    }),
};

const resetPassword = {
    query: Joi.object().keys({
        token: Joi.string().required(),
    }),
    body: Joi.object().keys({
        password: Joi.string().required(),
        // password: Joi.string().required().custom(password),
    }),
};
const verifyEmail = {
    query: Joi.object().keys({
        token: Joi.string().required(),
    }),

};

module.exports = {
    createCompany,
    getCompanies,
    getCompany,
    updateCompany,
    deleteCompany,
    registerUser,
    login,
    refreshTokens,
    forgotPassword,
    resetPassword,
    logout,
    verifyEmail
};
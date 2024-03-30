const Joi = require('joi');
const { objectId } = require('./custom.validation');

const validateCreateService = {
    body: Joi.object().keys({
        apiType: Joi.number().integer().valid(0, 1),
        apiName: Joi.string().trim().required().min(3).max(255),
        description: Joi.string().trim().allow(null, ''), // Optional description
    }),
}

const validateGetService = {
    // body: Joi.object().keys({
    //     planName: Joi.string().trim().required().min(3).max(255),
    //     serviceId: Joi.string().custom(objectId),
    //     creditCount: Joi.number().integer().min(0).required(),
    //     planPrice: Joi.number().precision(2).required(), // Allows two decimal places
    //     description: Joi.string().trim().allow(null, ''), // Optional description
    //     duration: Joi.number().integer().min(1).optional(), // Allow optional duration with minimum 1
    //     durationUnit: Joi.string().trim().valid('day', 'week', 'month', 'year').optional(), // Allow optional duration unit with specific valid values

    // }),
}



const validateUpdateService = {
    query: Joi.object().keys({
        serviceId: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object().keys({
        newStatus: Joi.number().integer().valid(0, 1, 2),
    })
}

const validateDeleteService = {
    query: Joi.object().keys({
        serviceId: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object().keys({
        isDelete: Joi.number().integer().valid(0, 1),
    })

}



module.exports = {
    validateCreateService,
    validateGetService,
    validateUpdateService,
    validateDeleteService
};

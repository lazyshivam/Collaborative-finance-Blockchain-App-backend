const Joi = require('joi');
const { objectId } = require('./custom.validation');

const validateBuySubscription = {
    body: Joi.object().keys({
        planName: Joi.string().trim().required().min(3).max(255),
        serviceId: Joi.string().trim().custom(objectId).required(),
        planId: Joi.string().trim().custom(objectId).required(),
        creditCount: Joi.number().integer().min(0).required(),
        planPrice: Joi.number().precision(2).required(), // Allows two decimal places
        description: Joi.string().trim().allow(null, ''), // Optional description
        isCustom: Joi.boolean().required(), // Ensures boolean value
        isExpired: Joi.boolean().required()
    }),
}

const validateGetSubscription = {
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

const validateCancelSubscription = {
    query: Joi.object().keys({
        subscriptionId: Joi.string().trim().custom(objectId).required(),
    }),

}




module.exports = {
    validateBuySubscription,
    validateCancelSubscription,
    validateGetSubscription
};

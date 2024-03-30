const Joi = require('joi');
const { objectId } = require('./custom.validation');

const validateCreatePlan = {
    body: Joi.object().keys({
        planName: Joi.string().trim().required().min(3).max(255),
        serviceId: Joi.string().custom(objectId),
        creditCount: Joi.number().integer().min(0).required(),
        planPrice: Joi.number().precision(2).required(), // Allows two decimal places
        description: Joi.string().trim().allow(null, ''), // Optional description
        duration: Joi.number().integer().min(1).optional(), // Allow optional duration with minimum 1
        durationUnit: Joi.string().trim().valid('day', 'week', 'month', 'year').optional(), // Allow optional duration unit with specific valid values

    }),
}

const validateGetPlan = {
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

const validateUpdatePlanGrantAccess = {
    query: Joi.object().keys({
        servicePlanId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        customerId: Joi.string().custom(objectId)
    })
}

const validateUpdatePlan = {
    query: Joi.object().keys({
        servicePlanId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        newStatus: Joi.number().integer().valid(0, 1, 2),
    })
}

const validateDeletePlan = {
    query: Joi.object().keys({
        servicePlanId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        isDelete: Joi.number().integer().valid(0, 1),
    })

}



module.exports = {
    validateCreatePlan,
    validateUpdatePlan,
    validateUpdatePlanGrantAccess,
    validateDeletePlan,
    validateGetPlan
};

const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
var mongoosePaginate = require('mongoose-paginate');



const servicePlanSchema = mongoose.Schema({
    planName: { type: String, default: '' },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'OurService' },
    creditCount: { type: Number, default: 1 },//1000
    planPrice: { type: Number, default: 1 },//50
    description: { type: String, default: '' },
    duration: { type: Number, default: -1 },
    durationUnit: { type: String, enum: ['day', 'week', 'month', 'year'], default: 'month' },
    status: { type: Number, default: 1 }, //0 is acive, 1 is inactive
    isCustom: { type: Boolean, default: false },
    allowedFor: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'companies' },
        }
    ],
    isDelete: { type: Number, default: 1 }, //0 is delete, 1 is Active
}
    , {
        timestamps: true,
    });
servicePlanSchema.virtual('service', {
    ref: 'OurService',
    localField: '_id',
    foreignField: 'serviceId',
});

// add plugin that converts mongoose to json
servicePlanSchema.plugin(toJSON);
servicePlanSchema.plugin(mongoosePaginate);

/**
 * @typedef CREDITAPIHIT
 */
const ServicePlan = mongoose.model('ServicePlan', servicePlanSchema);

module.exports = ServicePlan;
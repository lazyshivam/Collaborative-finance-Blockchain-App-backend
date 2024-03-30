const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
var mongoosePaginate = require('mongoose-paginate');



const servicePlanSchema = mongoose.Schema({
    planName: { type: String, default: '' },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'OurService' },
    planId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServicePlan' },
    companyId:{ type: mongoose.Schema.Types.ObjectId, ref: 'company'},
    creditCount: { type: Number, default: 1 },
    planPrice: { type: Number, default: 1 },
    description: { type: String, default: '' },
    expireAt: { type: Date },
    status: { type: Number, default: 1 }, //0 is acive, 1 is inactive
    isCustom: { type: Boolean, default: false },
    isExpired: { type: Boolean, default: false },
    isDelete: { type: Number, default: 1 }, //0 is delete, 1 is Active
},{
        timestamps: true,
});

servicePlanSchema.virtual('service', {
  ref: 'OurService',
  localField: '_id',
  foreignField: 'serviceId',
});

// servicePlanSchema.virtual('plans', {
//   ref: 'service_plan',
//   localField: '_id',
//   foreignField: 'planId',
// });

// add plugin that converts mongoose to json
servicePlanSchema.plugin(toJSON);
servicePlanSchema.plugin(mongoosePaginate);

/**
 * @typedef CREDITAPIHIT
 */
const CompanySubscription = mongoose.model('CompanySubscription', servicePlanSchema);

module.exports = CompanySubscription;
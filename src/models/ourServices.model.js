const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
var mongoosePaginate = require('mongoose-paginate');
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);


const ourServicesSchema = mongoose.Schema({
    apiType: { type: Number, default: 0 }, //0 Free,1 Paid
    apiName: { type: String, default: '' },
    apiSlug: { type: String, slug: "apiName" },
    description:{type:String,default:''},
    status: { type: Number, default: 1 }, //0 is acive, 1 is inactive
    isDelete: { type: Number, default: 1 } //0 is delete, 1 is Active
}, {
    timestamps: true,
});

// add plugin that converts mongoose to json
ourServicesSchema.plugin(toJSON);
ourServicesSchema.plugin(mongoosePaginate);

/**
 * @typedef CREDITAPIHIT
 */

const OurService = mongoose.model('OurService', ourServicesSchema);

module.exports = OurService;

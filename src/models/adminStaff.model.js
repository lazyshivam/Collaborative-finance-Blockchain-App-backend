const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
var mongoosePaginate = require('mongoose-paginate');

const staffSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    address: String,
    state: String,
    country: String,
    city: String,
    zipcode: String,
    fulladdress: String,
    phone: String,
    profilePhoto: String,
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'adminroles' },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
    type: Number, //1-Access based, 2-Non Access based
    status: { type: Number, default: 1 }, //0 is Inactive, 1 is Active
    isDelete: { type: Number, default: 1 } //0 is delete, 1 is Active
}, {
    timestamps: true,
});

// add plugin that converts mongoose to json
staffSchema.plugin(toJSON);
staffSchema.plugin(mongoosePaginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
staffSchema.statics.isEmailTaken = async function (email, excludeUserId, company) {
    var object = {};
    if (company && excludeUserId) {
        object = { email, company, _id: { $ne: excludeUserId } }
    } else {
        object = { email, company }
    }
    const user = await this.findOne(object);
    return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
staffSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};

staffSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

/**
 * @typedef Staff
 */
const Staff = mongoose.model('admin_staff', staffSchema);

module.exports = Staff;

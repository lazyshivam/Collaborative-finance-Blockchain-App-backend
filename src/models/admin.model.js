const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON } = require('./plugins');
var mongoosePaginate = require('mongoose-paginate');

const adminSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    address: String,
    state: String,
    country: String,
    city: String,
    zipcode: String,
    profilePhoto:String,
    type: { type: String, default: 'superadmin' },
    status: { type: Number, default: 1 }, //0 is Inactive, 1 is Active
    isDelete: { type: Number, default: 1 } //0 is delete, 1 is Active
}, {
    timestamps: true,
});

// add plugin that converts mongoose to json
adminSchema.plugin(toJSON);
adminSchema.plugin(mongoosePaginate);

/**
 * Check if name is taken
 * @param {string} name - The user's name
 * @param {ObjectId} [excludeAdminId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
adminSchema.statics.isNameTaken = async function (name, excludeAdminId) {
    const admin = await this.findOne({ name, isDelete: 1, _id: { $ne: excludeAdminId } });
    return !!admin;
};

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeAdminId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
adminSchema.statics.isEmailTaken = async function (email, excludeAdminId) {
    const admin = await this.findOne({ email, isDelete: 1, _id: { $ne: excludeAdminId } });
    return !!admin;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
adminSchema.methods.isPasswordMatch = async function (password) {
    const admin = this;
    return bcrypt.compare(password.toString(), admin.password);
};

adminSchema.pre('save', async function (next) {
    const admin = this;
    if (admin.isModified('password')) {
        admin.password = await bcrypt.hash(admin.password, 8);
    }
    next();
});

/**
 * @typedef ADMIN
 */
const ADMIN = mongoose.model('admin', adminSchema);
async function inIt() {
    var success = await ADMIN.count({});
    if (success == 0) {
        await new ADMIN({ name: 'Super Admin', email: 'shivamgoswami.ss.pp@gmail.com', password: 'Admin@1234', type: 'superadmin' }).save();
    }
};

inIt();
module.exports = ADMIN;

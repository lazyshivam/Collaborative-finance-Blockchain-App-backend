const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { toJSON } = require("./plugins");
var mongoosePaginate = require("mongoose-paginate");

const companySchema = mongoose.Schema(
  {
    companyName: String,
    name: String,
    email: String,
    phone: String,
    alternatePhone: String,
    panNumber: String,
    gstNumber: String,
    cinNumber: String,
    registeredAddress: String,
    postalAddress: String,
    cinNumber: String,
    password: String,
    apiKey: String,
    apiKeySecret: String,
    apiUrl: String,
    pincodeService: { type: Boolean, default: false },
    emailVerificationStatus: { type: Boolean, default: false },
    urlService: { type: Boolean, default: false },
    pincodeCredit: { type: Number, default: 0 },
    urlCredit: { type: Number, default: 0 },
    apiDetails: [],
    isSubscribed: { type: Boolean, default: false },
    isStatus: { type: Number, default: 1 }, //0 is Inactive, 1 is Active
    isDelete: { type: Number, default: 1 }, //0 is delete, 1 is Active
  },
  {
    timestamps: true,
  }
);



companySchema.virtual('activePlan', {
  ref: 'company_subscription',
  localField: '_id',
  foreignField: 'companyId',
  match:{isExpired:false,isDelete:1,status:1}
});
// "apiDetails" : [ 
//   {
//       "type" : "pincode",
//       "apiHitLimit" : 6100
//   }, 
//   {
//       "type" : "urlshort",
//       "apiHitLimit" : 1000
//   }
// ],
// add plugin that converts mongoose to json
companySchema.plugin(toJSON);
companySchema.plugin(mongoosePaginate);

/**
 * Check if name is taken
 * @param {string} name - The user's name
 * @param {ObjectId} [excludeCompanyId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
companySchema.statics.isNameTaken = async function (name, excludeCompanyId) {
  const company = await this.findOne({ name, _id: { $ne: excludeCompanyId } });
  return !!company;
};

/**
 * Check if company name is taken
 * @param {string} companyName - The user's companyName
 * @param {ObjectId} [excludeCompanyId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
companySchema.statics.isCompanyNameTaken = async function (
  companyName,
  excludeCompanyId
) {
  const company = await this.findOne({
    companyName,
    _id: { $ne: excludeCompanyId },
  });
  return !!company;
};

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
companySchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const company = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!company;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
companySchema.methods.isPasswordMatch = async function (password) {
  const company = this;
  return bcrypt.compare(password.toString(), company.password);
};

companySchema.pre("save", async function (next) {
  const company = this;
  if (company.isModified("password")) {
    company.password = await bcrypt.hash(company.password, 8);
  }
  next();
});

companySchema.pre("save", async function (next) {
  const company = this;
  if (company.isModified("key")) {
    company.key = await bcrypt.hash(company.companyName, 8);
  }
  if (company.isModified("apiKeySecret")) {
    company.apiKeySecret = await bcrypt.hash(
      company.companyName + company.name,
      8
    );
  }
  next();
});

/**
 * @typedef COMPANY
 */
const COMPANY = mongoose.model("company", companySchema);
// async function inIt() {
//     var success = await COMPANY.count({});
//     var key = await bcrypt.hash('Ratnaafin Holdings Private Limited', 8);
//     var apiKeySecret = await bcrypt.hash('Ratnaafin Holdings Private Limited' + 'Malav Gautam Desai', 8);
//     // console.log('COMPANY success===', success, key, apiKeySecret);
//     if (success == 0) {
//         await new COMPANY({
//             companyName: 'Ratnaafin Holdings Private Limited',
//             name: 'Malav Gautam Desai',
//             email: 'malav@ratnaafin.com',
//             password: '12345678',
//             phone: '9512034601',
//             alternatePhone: '9512034601',
//             gstNumber: '24AAJCR0087N1Z0',
//             cinNumber: 'U74999GJ2018PTC102898',
//             registeredAddress: '201 - 202, Shilp Aperia, Ambli - Bopal Road, Ahmedabad, Gujarat, 380052',
//             postalAddress: '201 - 202, Shilp Aperia, Ambli - Bopal Road, Ahmedabad, Gujarat, 380052',
//             apiKey: key,
//             apiKeySecret: apiKeySecret
//         }).save();
//     }
// };

// inIt();
module.exports = COMPANY;

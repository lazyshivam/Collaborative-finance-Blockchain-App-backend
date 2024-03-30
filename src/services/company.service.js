const { CompanyModel, CreditAPIHitModel } = require("../models");
const CONSTANT = require("../config/constant");
const Token = require("../models/token.model");
const { tokenTypes } = require("../config/tokens");
const tokenService = require("./token.service");
// const {emailVerificationToken}=require('../helpers/emailVerificationToken.js');
const bcrypt = require("bcryptjs");
const mailFunctions = require("../helpers/mailFunctions");

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getCompanyUserById = async (id) => {
  return CompanyModel.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getCompanyUserByEmail = async (email) => {
  return CompanyModel.findOne({ email });
};

/**
 * Create a Company
 * @param {Object} companyBody
 * @returns {Promise<Company>}
 */
const createCompany = async (companyBody) => {
  // console.log(companyBody);
  if (await CompanyModel.isEmailTaken(companyBody.email)) {
    return { data: {}, code: CONSTANT.BAD_REQUEST, message: CONSTANT.COMPANY_EMAIL_ALREADY_EXISTS, };
  }
  if (
    companyBody.companyName &&
    (await CompanyModel.isCompanyNameTaken(companyBody.companyName))
  ) {
    return {
      data: {},
      code: 400,
      message: CONSTANT.COMPANY_NAME_ALREADY_EXISTS,
    };
  }

  companyBody["apiKey"] = await bcrypt.hash(
    companyBody.companyName || companyBody.name,
    8
  );
  companyBody["apiKeySecret"] = await bcrypt.hash((companyBody.companyName || companyBody.name) + companyBody.email, 8);

  // saving user email verification token in database
  const company = await CompanyModel.create(companyBody);
  const token = await tokenService.generateEmailVerificationToken(company);
  //   console.log(tokenDoc)
  await mailFunctions.sendVerificationEmail(company, token);
  return { data: company, code: 200, message: CONSTANT.COMPANY_CREATE };
};

/**
 * Query for company
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {string} [options.searchBy] - Search By use for search
 * @returns {Promise<QueryResult>}
 */
const queryCompanies = async (options) => {
  var condition = {};
  if (options.searchBy && options.searchBy != "undefined") {
    condition["name"] = {
      $regex: ".*" + options.searchBy + ".*",
      $options: "si",
    };
  }
  options["sort"] = { createdAt: -1 };
  options["populate"] = { path: "role company", select: "name companyName" };
  const companies = await CompanyModel.paginate(condition, options);
  return companies;
};

/**
 * Get Company by id
 * @param {ObjectId} id
 * @returns {Promise<Company>}
 */
const getCompanyById = async (id) => {
  return CompanyModel.findById(id);
};

/**
 * Update company by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Company>}
 */
const updateCompanyById = async (userId, updateBody) => {
  const company = await getCompanyById(userId);
  if (!company) {
    return { data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.COMPANY_NOT_FOUND, };
  }
  if (
    updateBody.email &&
    (await CompanyModel.isEmailTaken(updateBody.name, userId))
  ) {
    return { data: {}, code: CONSTANT.BAD_REQUEST, message: CONSTANT.COMPANY_EMAIL_ALREADY_EXISTS, };
  }
  updateBody.updatedAt = new Date();
  Object.assign(company, updateBody);
  await company.save();
  return { data: company, code: CONSTANT.SUCCESSFUL, message: CONSTANT.COMPANY_UPDATE, };
};

/**
 * Delete company by id
 * @param {ObjectId} userId
 * @returns {Promise<Company>}
 */
const deleteCompanyById = async (userId) => {
  const company = await getCompanyById(userId);
  if (!company) {
    return { data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.COMPANY_NOT_FOUND, };
  }
  // company.status = company.status == 0 ? 1 : 0;
  company.isDelete = 0;
  await company.save();
  var message =
    company.status == 1 ? CONSTANT.COMPANY_STATUS_ACTIVE : CONSTANT.COMPANY_STATUS_INACTIVE;

  return { data: company, code: CONSTANT.SUCCESSFUL, message: message };
};

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const validateUserWithEmail = async (email) => {
  var details = await getCompanyUserByEmail(email);
  return details;
};

/**
 * Logout
 * @param {string} refreshToken
 * @returns {Promise}
 */
const logout = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({
    token: refreshToken,
    type: tokenTypes.REFRESH,
    blacklisted: false,
  });

  if (!refreshTokenDoc) {
    return { data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.NOT_FOUND_MSG, };
  }
  await refreshTokenDoc.remove();
};

/**
 * Refresh auth tokens
 * @param {string} refreshToken
 * @returns {Promise<Object>}
 */
const refreshAuth = async (refreshToken) => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(refreshToken, tokenTypes.REFRESH);

    const user = await getCompanyUserById(refreshTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.remove();
    return tokenService.generateAuthTokens(user);
  } catch (error) {
    return { data: {}, code: CONSTANT.UNAUTHORIZED, message: CONSTANT.UNAUTHORIZED_MSG, };
  }
};

/**
 * Reset password
 * @param {string} resetPasswordToken
 * @param {string} newPassword
 * @returns {Promise}
 */
const resetPassword = async (resetPasswordToken, newPassword) => {
  try {
    const resetPasswordTokenDoc = await tokenService.verifyToken(
      resetPasswordToken,
      tokenTypes.RESET_PASSWORD
    );
    var company = await CompanyModel.findOne({
      _id: resetPasswordTokenDoc.user,
    });
    await updateCompanyById(company._id, { password: newPassword });
    await Token.deleteMany({ user: company._id, type: tokenTypes.RESET_PASSWORD, });

    return { data: {}, code: CONSTANT.SUCCESSFUL, message: "Password updated successfully", };
  } catch (error) {
    return { data: {}, code: CONSTANT.UNAUTHORIZED, message: "Password reset failed", };
  }
};

/**
 * Query for company
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {string} [options.searchBy] - Search By use for search
 * @returns {Promise<QueryResult>}
 */
const queryCompaniesForAdmin = async (options) => {
  var condition = {};
  if (options.searchBy && options.searchBy != "undefined") {
    condition["companyName"] = {
      $regex: ".*" + options.searchBy + ".*",
      $options: "si",
    };
  }
  options["sort"] = { createdAt: -1 };
  const companies = await CompanyModel.paginate(condition, options);
  return companies;
};

const updateCompanyAPICredit = async (userId, updateBody) => {
  const company = await getCompanyById(userId);
  if (!company) {
    return { data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.COMPANY_NOT_FOUND, };
  }

  updateBody["company"] = userId;
  updateBody.creditCount = Number(updateBody.creditCount);
  var creditHit = await CreditAPIHitModel.create(updateBody);

  let existingApiIndex = -1; // Index of the existing apiType in apiDetails, initialized to -1 as not found

  // Check if the apiType already exists in apiDetails
  if (company.apiDetails.length > 0) {
    existingApiIndex = company.apiDetails.findIndex(
      (api) => api.type === updateBody.apiType
    );
  }

  if (existingApiIndex > -1) {
    // If the apiType already exists, update the existing entry
    company.apiDetails[existingApiIndex].apiHitLimit += Number(updateBody.creditCount);
  } else {
    // If the apiType does not exist, create a new entry for it
    company.apiDetails.push({
      type: updateBody.apiType,
      apiHitLimit: Number(updateBody.creditCount),
      advanceAmount: 0,
      remainingAmount: 0,
    });
  }

  // console.log('company=====', company, updateBody);
  await CompanyModel.updateOne({ _id: userId }, { $set: company });
  return { data: creditHit, code: CONSTANT.SUCCESSFUL, message: CONSTANT.COMPANY_UPDATE, };
};

/**
 * Query for Get Credit History Using Company Id
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {string} [options.searchBy] - Search By use for search
 * @returns {Promise<QueryResult>}
 */
const queryCompaniesForGetCreditHistory = async (options) => {
  var condition = { $and: [{ isDelete: 1, company: options.companyId }] };
  // if (options.companyId && options.companyId != 'undefined') {
  //     condition.$and.push({
  //       $or: [{
  //         company: options.companyId
  //       }]
  //     });
  //   }
  options["sort"] = { createdAt: -1 };
  console.log("con=========", JSON.stringify(condition), options);
  const companies = await CreditAPIHitModel.paginate(condition, options);
  return companies;
};

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  var details = await getCompanyUserByEmail(email);
  if (!details || !(await details.isPasswordMatch(password))) {
    return { data: {}, code: CONSTANT.UNAUTHORIZED, message: CONSTANT.UNAUTHORIZED_MSG, };
  }

  // Check if user email is verified
  if (!details.emailVerificationStatus) {
    // Sending verification email reminder
    return { data: {}, code: CONSTANT.BAD_REQUEST, message: CONSTANT.VERIFICATION_REQUIRED_MSG, };
  }
  return { data: details, code: CONSTANT.SUCCESSFUL, message: CONSTANT.UNAUTHORIZED_MSG, };
};

// verification of user email

const verifyUserEmail = async (verifyToken) => {
  try {
    const verificationTokenDoc = await tokenService.verifyToken(
      verifyToken,
      tokenTypes.EMAIL_VERIFICATION
    );
    console.log("🚀 ~ verifyUserEmail ~ verificationTokenDoc:", verificationTokenDoc);

    if (user.emailVerificationStatus == true) {

      return { data: {}, code: CONSTANT.BAD_REQUEST, message: CONSTANT.USER_ALREADY_VERIFIED, };
    }
    await tokenService.deleteToken(verifyToken, tokenTypes.EMAIL_VERIFICATION);
    await updateCompanyById(user._id, { emailVerificationStatus: true });
    return { data: {}, code: CONSTANT.SUCCESSFUL, message: "Email verified successfully" };

  } catch (error) {
    return { data: {}, code: CONSTANT.BAD_REQUEST, message: "Email veification failed" };
  }
};
//   again vefication of user email if user email is not verified
const resendUserEmailVerification = async (userEmail) => {
  const user = await CompanyModel.findOne({ email: userEmail });
  const token = await tokenService.generateEmailVerificationToken(user);
  await mailFunctions.sendVerificationEmail(user.email, token);
  return { data: user, code: 200, message: CONSTANT.COMPANY_CREATE };
};

module.exports = {
  createCompany,
  queryCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getCompanyUserById,
  getCompanyUserByEmail,
  validateUserWithEmail,
  loginUserWithEmailAndPassword,
  logout,
  refreshAuth,
  resetPassword,
  queryCompaniesForAdmin,
  updateCompanyAPICredit,
  queryCompaniesForGetCreditHistory,
  verifyUserEmail,
  resendUserEmailVerification,
};

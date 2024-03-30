const { AdminStaff } = require('../../models');
const CONSTANT = require('../../config/constant');

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getAdminStaffUserByEmail = async (email) => {
    return Company.findOne({ email });
};

const getAdminStaffByEmail = async (email) => {
    return AdminStaff.findOne({ email });
};

/**
 * Create a Company User
 * @param {Object} userBody
 * @returns {Promise<Company>}
 */
const createAdminStaffUser = async (userBody) => {
    if (await AdminStaff.isEmailTaken(userBody.email, '', userBody.company)) {
        return { data: {}, code: 400, message: CONSTANT.ADMIN_STAFF_EMAIL_ALREADY_EXISTS }
    } else {
        const user = await AdminStaff.create(userBody);
        return { data: user, code: 200, message: CONSTANT.ADMIN_STAFF_CREATE };
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
const queryAdminStaffUsers = async (options) => {
    var condition = { $and: [{ company: options.companyId, isDelete: 1, _id: { $ne: options.loginedInUser } }] };
    if (options.searchBy && options.searchBy != 'undefined') {
        condition.$and.push({
            $or: [{
                name: {
                    $regex: ".*" + options.searchBy + ".*",
                    $options: "si"
                }
            }]
        })
    }
    if (options.status && options.status != 'undefined') {
        condition.$and.push({
            $or: [{
                status: options.status
            }]
        })
    }
    options['sort'] = { createdAt: -1 }
    options['populate'] = { path: 'role', select: 'name' }
    const users = await AdminStaff.paginate(condition, options);
    return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Company>}
 */
const getAdminStaffUserById = async (id) => {
    return AdminStaff.findById(id);
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Company>}
 */
const updateAdminStaffUserById = async (userId, updateBody) => {
    const user = await getAdminStaffUserById(userId);
    if (!user) {
        return { data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.ADMIN_STAFF_NOT_FOUND }
    }
    if (updateBody.email && (await AdminStaff.isEmailTaken(updateBody.name, userId, updateBody.company))) {
        return { data: {}, code: CONSTANT.BAD_REQUEST, message: CONSTANT.ADMIN_STAFF_EMAIL_ALREADY_EXISTS }
    }
    Object.assign(user, updateBody);
    await user.save();
    return { data: user, code: CONSTANT.SUCCESSFUL, message: CONSTANT.ADMIN_STAFF_UPDATE };
};

/**
 * Delete company by id
 * @param {ObjectId} userId
 * @returns {Promise<Company>}
 */
const deleteAdminStaffUserById = async (userId) => {
    const user = await getAdminStaffUserById(userId);
    if (!user) {
        return { data: {}, code: CONSTANT.NOT_FOUND, message: CONSTANT.ADMIN_STAFF_NOT_FOUND }
    }
    // user.status = user.status == 0 ? 1 : 0;
    user.isDelete = 0;
    await user.save();
    // var message = user.status == 1 ? CONSTANT.ADMIN_STAFF_STATUS_ACTIVE : CONSTANT.ADMIN_STAFF_STATUS_INACTIVE
    return { data: user, code: CONSTANT.SUCCESSFUL, message: CONSTANT.ADMIN_STAFF_STATUS_DELETE }
};

/**
 * Query for Users
 * @param {Object} options - Query options
 * @param {string} [options.searchBy] - Search By use for search
 * @returns {Promise<QueryResult>}
 */
const queryAdminStaffUsersWithoutPagination = async (options) => {
    var condition = { $and: [{ company: options.companyId, isDelete: 1 }] };
    if (options.searchBy && options.searchBy != 'undefined') {
        condition.$and.push({
            $or: [{
                name: {
                    $regex: ".*" + options.searchBy + ".*",
                    $options: "si"
                }
            }]
        })
    }
    // options['populate'] = { path: 'role company', select: 'name companyName' }
    const user = await AdminStaff.find(condition).populate({ path: 'role company', select: 'name companyName' });
    return user;
};
module.exports = {
    queryAdminStaffUsers,
    updateAdminStaffUserById,
    deleteAdminStaffUserById,
    getAdminStaffUserById,
    getAdminStaffUserByEmail,
    getAdminStaffByEmail,
    createAdminStaffUser,
    queryAdminStaffUsersWithoutPagination
};

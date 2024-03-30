const express = require('express');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const adminAuth = require('../../../middlewares/adminAuth');
const validate = require('../../../middlewares/validate');
const { staffValidation } = require('../../../validations');
const { adminStaffController } = require('../../../controllers')

const router = express.Router();

router
    .route('/')
    .post(adminAuth('createAdminStaffUser'), validate(staffValidation.createStaff), adminStaffController.createAdminStaffUser)
    .get(adminAuth('getAdminStaffUsers'), validate(staffValidation.getStaffs), adminStaffController.getAdminStaffUsers);

router
    .route('/:staffId')
    .get(adminAuth('getAdminStaffUser'), validate(staffValidation.getStaff), adminStaffController.getAdminStaffUser)
    .patch(adminAuth('updateAdminStaffUser'), validate(staffValidation.updateStaff), adminStaffController.updateAdminStaffUser)
    .delete(adminAuth('deleteAdminStaffUser'), validate(staffValidation.deleteStaff), adminStaffController.deleteAdminStaffUser);

router
    .route('/profile/:staffId')
    .patch(adminAuth('updateProfile'), upload.fields([{ name: 'profilePhoto', maxCount: 1 }]), adminStaffController.updateProfile)


module.exports = router;
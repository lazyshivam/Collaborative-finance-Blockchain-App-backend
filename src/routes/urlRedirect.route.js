const express = require('express');
// const auth = require('../middlewares/companyAuth');
const VerifyRequest = require('../middlewares/verifyRequest');
// const validate = require('../middlewares/validate');
// const shortenValidation = require('../validations/shorten.validation');
const ShortenController = require('../controllers/shorten.controller');

const router = express.Router();

router
    .route('/:shortenId')
    .get(ShortenController.getshortenRedirectUrl)

module.exports = router;
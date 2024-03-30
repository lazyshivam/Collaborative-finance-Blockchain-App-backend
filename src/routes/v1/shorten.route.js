const express = require('express');
const auth = require('../../middlewares/companyAuth');
const VerifyRequest = require('../../middlewares/verifyRequest');
const validate = require('../../middlewares/validate');
const shortenValidation = require('../../validations/shorten.validation');
const ShortenController = require('../../controllers/shorten.controller');

const router = express.Router();

router
    .route('/')
    .post(VerifyRequest('createShorten','urlshort'), validate(shortenValidation.createShorten), ShortenController.createshorten)
    .get(VerifyRequest('getShortens'), validate(shortenValidation.getShortens), ShortenController.getshortens);

router
    .route('/:shortenId')
    .get(auth('getShorten'), validate(shortenValidation.getShorten), ShortenController.getshorten)
    .patch(auth('updateShorten'), validate(shortenValidation.updateShorten), ShortenController.updateshorten)
    .delete(auth('deleteShorten'), validate(shortenValidation.deleteShorten), ShortenController.deleteshorten);

module.exports = router;
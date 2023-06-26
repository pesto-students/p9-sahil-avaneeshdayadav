const express = require('express');
const {upload} = require('../service/file_upload');
const {
    handleGetAssets,
    handlePostAssets,
    handleUpdateAsset,
    handleDeleteAsset,
    handleGetFinancial,
    handleCreateFinancial,
    handleUploadFile,
} = require('../controllers/wealth_portfolio');


const router = express.Router();
router.route('/assets/:email').get(handleGetAssets);
router.route('/assets').post(handlePostAssets);

router.route('/assets/:id').put(handleUpdateAsset).delete(handleDeleteAsset);
router.route('/financial/:email/:year/:month').get(handleGetFinancial);
router.route('/financial').post(handleCreateFinancial);
router.route('/upload').post(upload.single('file'),handleUploadFile);
module.exports = router;
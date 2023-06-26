
const { Asset,Financial,Breakdown,Invoice } = require('../models/wealth_portfolio')

// Get Asset
async function handleGetAssets(req, res) {
    console.log("Inside handle assets "+ req.params)

    try {
        const assets = await Asset.find({ userId: req.params.email });
        res.json(assets);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching assets');
    }
}


// Create Asset
async function handlePostAssets(req, res) {
    console.log(req.body);
    const { email, name, value, type } = req.body;
    try {
        const asset = new Asset({
            name: name,
            type: type,
            value: value,
            userId: email,
        });
        await asset.save();
        res.status(201).send('Asset added successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding asset');
    }
}


// Update asset API
async function handleUpdateAsset(req, res) {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset || asset.userId !== req.user.email) {
            return res.sendStatus(404);
        }
        asset.name = req.body.name;
        asset.type = req.body.type;
        asset.value = req.body.value;
        await asset.save();
        res.send('Asset updated successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating asset');
    }
};


// Delete asset API
async function handleDeleteAsset(req, res) {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset || asset.userId !== req.user.email) {
            return res.sendStatus(404);
        }
        await asset.remove();
        res.send('Asset deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting asset');
    }
};

// Get Financial
async function handleGetFinancial(req, res) {
    try {
        let query = { userId: req.params.email };
        if (req.params.year) {
            query.year = parseInt(req.params.year);
        }
        if (req.query.month) {
            query.month = parseInt(req.params.month);
        }
        const financials = await Financial.find(query);

        res.json(financials);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching financial data');
    }
};


// Add financial
async function handleCreateFinancial(req, res){
    try {
        const financial = new Financial({
            type: req.body.type,
            amount: req.body.amount,
            year: req.body.year,
            month: req.body.month,
            userId: req.body.email,
        });
        await financial.save();
        res.status(201).send('Financial data added successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding financial data');
    }
};


// Upload file API
async function handleUploadFile(req, res){
    try {
        const file = new File({
            filename: req.file.filename,
            path: req.file.path,
            userId: req.user.email,
        });
        await file.save();
        res.status(201).send('File uploaded successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error uploading file');
    }
};

module.exports = {
    handleGetAssets,
    handlePostAssets,
    handleUpdateAsset,
    handleDeleteAsset,
    handleGetFinancial,
    handleCreateFinancial,
    handleUploadFile,
}
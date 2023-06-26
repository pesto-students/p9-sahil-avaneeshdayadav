const UserModel = require('../models/user');
const {v4: uuidV4} = require('uuid');
const {generateToken} = require('../service/authentication');
const bcrypt = require('bcrypt');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await UserModel.find({});
    return res.json({ responseBody: allDbUsers });
}

async function handleGetUserByName(req, res) {
    try {
        const userbyName = await UserModel.find({firstName:req.params.name});
        if(userbyName.length === 0)
            return res.status(404).json({ error: '404 | user not found' });
        else
        return res.json(userbyName);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to find user' });
    }
}

async function handleUpdateUserById(req, res) {
    await UserModel.findByAndUpdate(req.params.id, { lastName: 'Changed' });
    return res.json({ status: 'Success' });
}

async function handleDeleteUserById(req, res) {
    await UserModel.findByIdAndDelete(req.params.id);
    return res.json({ status: "Delete success" });
}

async function handleUserLogin(req,res){
    const {email, password} = req.body;
    const userQuery = await UserModel.findOne({email});
    if(!userQuery){
        return res.json({error:"User don't exists."});
    }

    const match = await bcrypt.compare(password, userQuery.password);
    if (!match) {
        return res.status(401).send('Invalid email or password');
    }
    /*
    If you are using cookie based (statefull) authentication then this.
    const sessionId = uuidV4();
    setUser(sessionId, userQuery);
    res.cookie('uid', sessionId);
    */

    const token = generateToken(userQuery);
    res.cookie('uid', token);
    res.render('index',{title:"Express"});
}


async function handleUserSignUp(req, res){
    try {
        const { name, contact, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user object based on the UserModel
        const newUser = new UserModel({
            email: email,
            password: hashedPassword,
            name: name,
            contact: contact,
        });

        console.log(newUser);
        // Save the new user to the database
        const createdUser = await newUser.save();
        res.render('index',{ title: 'Express' });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Failed to create user' });
    }
}


module.exports = {
    handleGetAllUsers,
    handleGetUserByName,
    handleDeleteUserById,
    handleUpdateUserById,
    handleUserSignUp,
    handleUserLogin
};

/*
If you are using the stateful Rest API authentication then
async function restrictToLoggedInUserOnly(req,res,next){
    const userUid = req.cookies?.uid;
    console.log("userUid "+userUid);
    if(!userUid)
        return res.redirect('/login');

    // const user = getUser(userUid);

    if(!user)
        return res.redirect('/login');
    
    req.user = user;
    next();
}



*/
const {authenticate} = require('../service/authentication')
async function restrictToLoggedInUserOnly(req,res,next){
    authenticate(req,res,next);
}

module.exports = {
    restrictToLoggedInUserOnly,
}
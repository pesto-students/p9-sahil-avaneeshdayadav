var express = require('express');
var router = express.Router();
const {
  handleUserSignUp,
  handleUserLogin,
} = require('../controllers/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup',(req,res,next)=>{
  res.render('signup');
})

router.get('/login',(req,res,next)=>{
  res.render('login');
})

router.get('/assets',(req,res,next)=>{
  res.render('assets');
})

router.route('/login').post(handleUserLogin);
router.route('/signup').post(handleUserSignUp);

module.exports = router;


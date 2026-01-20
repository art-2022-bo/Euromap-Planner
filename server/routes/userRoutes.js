var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var { requireAuth } = require('../middleware/auth');
var { loginSession } = require('../middleware/loginSession');




// routes...
router.post('/createUser', userController.createUser);
router.get('/getUsers', requireAuth, userController.getUsers);
router.post('/signUp', userController.signUp);
router.post('/logIn', userController.logIn);
router.delete('/deleteUser', requireAuth, userController.deleteUser);
router.patch('/changePassword' , requireAuth, userController.changePassword);
router.put('/createNewAccount', requireAuth, userController.createNewAccount);

// session-management routes (uses requireAuth)
router.get('/me', userController.getCurrentUser);
router.post('/logout', userController.logOut);

// routes for loginSession (30-minute inactivity)
router.get('/loginSessionTimeout/getUsers', loginSession, userController.getUsers);
router.get('/loginSessionTimeout/me', loginSession, userController.getCurrentUser);
router.patch('/loginSessionTimeout/changePassword', loginSession, userController.changePassword);
router.post('/loginSessionTimeout/logout', loginSession, userController.logOut);

module.exports = router;

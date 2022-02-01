const express = require('express');
const {
	register,
	login,
	all_users,
	current_user,
} = require('../controller/userController');
const auth = require('../middleware/auth');
const {
	registerValidation,
	loginValidation,
} = require('../validations/userValidations');
const router = express.Router();

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

router.post('/current_user', auth, current_user);
router.post('/all_users', auth, all_users);

module.exports = router;

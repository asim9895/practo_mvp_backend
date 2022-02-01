const { check } = require('express-validator');

exports.registerValidation = [
	check('username').not().isEmpty().withMessage('Username is required'),
	check('email')
		.not()
		.isEmpty()
		.withMessage('Email is required')
		.isEmail()
		.withMessage('Invalid Email Address'),
	check('password')
		.isLength({ min: 6, max: 12 })
		.withMessage('your password should have min and max length between 6-12')
		.matches(/\d/)
		.withMessage('your password should have at least one number')
		.matches(/[!@#$%^&*(),.?":{}|<>]/)
		.withMessage('your password should have at least one special character')
		.matches(/[A-Z]/)
		.withMessage('your password must contain atleast one capital letter'),
];

exports.loginValidation = [
	check('username').not().isEmpty().withMessage('Username is required'),
	check('password').not().isEmpty().withMessage('Password is required'),
];

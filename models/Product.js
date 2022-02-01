const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			required: true,
		},
		stock: {
			type: Number,
			default: 0,
		},
		price: {
			type: Number,
		},
		color: {
			type: String,
		},
		company_name: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

//=======================================================
//product model
//=======================================================
var mongoose = require('mongoose');
//=======================================================
//ProductSchema
//=======================================================
var ProductSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	url: { type: String, trim: true },
	description: { type: String, trim: true },
	quantity: { type: Number },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Product', ProductSchema);
ProductSchema.path('name').required(true, "Name field is required");
ProductSchema.path('url').required(true, "Url field is required");
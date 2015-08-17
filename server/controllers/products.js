//=======================================================
//server side: products controller
//=======================================================
//=======================================================
//attach product.js model
//=======================================================
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
//=======================================================
//products.js Controller
//=======================================================
module.exports = (function() 
{
	return {
		getProducts: function(req, res)
		{
			Product.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		addNewProduct: function(req, res)
		{
			var product = new Product(req.body);
  			product.save(function(err, record){
  				if(err)
  				{
  					res.json({status:'failed', err:err})
  				}else
  				{
  					res.json({status:'success'})
  				}
  			})
		},
		destroyCustomer: function(req, res)
		{
			Customer.remove({ _id: req.params.id}, function (err, status) {
				if (err){
					console.log('ERR');
				} else {
					res.json({status:'success'});
				}
			})
		},
		getProductsDash: function(req, res)
		{
			Product.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			}).limit(req.params.num);
		}
	}
})();
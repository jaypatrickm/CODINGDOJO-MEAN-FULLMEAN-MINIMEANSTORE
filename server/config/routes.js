//=======================================================
//Routes File
//=======================================================
module.exports = function(app)
{
//=======================================================
//require any controllers you may need
//=======================================================
var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');
//=======================================================
	
	//root route
	app.get('/', function(req, res) 
	{
		res.render('index');
	})

	//customers.html routes
	app.get('/getCustomers', function(req, res)
	{
		customers.getCustomers(req, res);
	})
	app.post('/addCustomer', function(req, res)
	{
		customers.addNewCustomer(req, res);
	})
	app.delete('/destroyCustomer/:id', function(req, res){
		customers.destroyCustomer(req, res);
	})

	//orders.html routes
	app.post('/addOrder', function(req, res)
	{
		orders.addNewOrder(req,res);
	})
	app.get('/getOrders', function(req, res)
	{
		orders.getOrders(req, res);
	})

	//products.html routes
	app.post('/addProduct', function(req, res)
	{
		products.addNewProduct(req,res);
	})
	app.get('/getProducts', function(req, res)
	{
		products.getProducts(req,res);
	})

	//dashboard.html routes
	app.get('/dashboard/getProducts/:num', function(req, res)
	{
		products.getProductsDash(req,res);
	})
	app.get('/dashboard/getOrders/:num', function(req, res)
	{
		orders.getOrdersDash(req,res);
	})
	app.get('/dashboard/getAllOrders', function(req, res)
	{
		orders.getOrders(req,res);
	})
};
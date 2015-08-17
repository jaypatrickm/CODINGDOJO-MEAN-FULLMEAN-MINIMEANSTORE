//=======================================================
//productsFactory -- New Products
//=======================================================
orderscustomersModule.factory('productsFactory', function($http)
{
	var factory = {};

	factory.getProducts = function (callback)
	{
		$http.get('/getProducts').success(function(output){ callback(output); });
	}

	factory.addProduct = function(data, callback)
	{
		$http.post('/addProduct', data).success(function(output){ callback(output); });
	}

	// factory.destroyCustomer = function(id, callback)
	// {
	// 	$http.delete('/destroyCustomer/' + id).success(function(output){ callback(output); });
	// }

	return factory;
});
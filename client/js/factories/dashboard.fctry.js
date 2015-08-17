//=======================================================
//dashboardFactory -- Dashboard Info Retrieval
//=======================================================
orderscustomersModule.factory('dashboardFactory', function($http)
{
	var factory = {};

	factory.getProducts = function (num, callback)
	{
		console.log('what is num? : ', num);
		$http.get('/dashboard/getProducts/' + num).success(function(output){ callback(output); });
	}

	factory.getOrders = function (num, callback)
	{
		$http.get('/dashboard/getOrders/' + num).success(function(output){ callback(output); });
	}

	factory.getAllOrders = function (callback)
	{
		$http.get('/dashboard/getAllOrders').success(function(output){ callback(output); });
	}

	// factory.destroyCustomer = function(id, callback)
	// {
	// 	$http.delete('/destroyCustomer/' + id).success(function(output){ callback(output); });
	// }

	return factory;
});
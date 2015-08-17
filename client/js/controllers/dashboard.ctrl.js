//=======================================================
//client side: dashboardController
//=======================================================
orderscustomersModule.controller('dashboardController', function($scope, dashboardFactory, customersFactory, ordersFactory, productsFactory)
{
	function dateFormat(dateToFormat)
	{
		var date = new Date(dateToFormat);
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var month = monthNames[date.getMonth()];
		var day = date.getDate();
		var year = date.getFullYear();
		var newDate = month + ' ' + day + ' ' + year;
		return newDate;
	}

	$scope.products = [];
	
	var getProductList = function()
	{
		productsFactory.getProducts(function(data)
		{
			$scope.products = data;
		})
	}

	getProductList();
	
	// $scope.products = [];
	
	// var getProductList = function(num)
	// {
	// 	dashboardFactory.getProducts(num,function(data)
	// 	{
	// 		$scope.products = data;
	// 	})
	// }

	// var product_count = 2; 
	// getProductList(product_count);

	// $scope.showMoreProducts = function(num)
	// {
	// 	console.log('show more!');
	// 	product_count = product_count + num;
	// 	console.log('product_count ', product_count)
	// 	dashboardFactory.getProducts(product_count, function(data)
	// 	{
	// 		$scope.products = data;
	// 	})
	// }

	// $scope.orders = [];

	// var getOrderList = function(num)
	// {
	// 	dashboardFactory.getOrders(num, function(data)
	// 	{
	// 		for(var x in data)
	// 		{
	// 			data[x].created_at = dateFormat(data[x].created_at);
	// 		}
	// 		$scope.orders = data;
	// 	})
	// }

	// var order_count = 3;
	// getOrderList(3);

	// $scope.showAllOrders = function()
	// {
	// 	dashboardFactory.getAllOrders(function(data)
	// 	{
	// 		for(var x in data)
	// 		{
	// 			data[x].created_at = dateFormat(data[x].created_at);
	// 		}
	// 		$scope.orders = data;
	// 	})
	// }

	$scope.orders = [];

	var getOrderList = function()
	{
		ordersFactory.getOrders(function(data)
		{
			for(var x in data)
			{
				data[x].created_at = dateFormat(data[x].created_at);
			}
			$scope.orders = data;
		})
	}

	getOrderList();

	$scope.customers = [];
	
	var getCustomerList = function()
	{
		customersFactory.getCustomers(function(data)
		{
			for(var x in data)
			{
				data[x].created_at = dateFormat(data[x].created_at);
			}
			$scope.customers = data;
		})
	}

	getCustomerList();

})
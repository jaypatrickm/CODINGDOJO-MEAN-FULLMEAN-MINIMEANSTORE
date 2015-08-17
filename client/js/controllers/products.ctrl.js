//=======================================================
//client side: productsController
//=======================================================
orderscustomersModule.controller('productsController', function($scope, productsFactory)
{
	$scope.products = [];
	
	var getProductList = function()
	{
		productsFactory.getProducts(function(data)
		{
			$scope.products = data;
		})
	}

	getProductList();

	$scope.addProduct = function() 
	{
		var exists = false;
		for(var i=0; i < $scope.products.length; i++)
		{
			if ($scope.products[i].name == $scope.newProduct.name)
			{
				$('#error').text('Product is already in your database, please update it instead.');
				exists = true;
			}
		}

		if (exists == false)
		{
			productsFactory.addProduct($scope.newProduct, function(){
				getProductList();
			});
		}
	}

	// $scope.destroyCustomer = function(id)
	// {
	// 	customersFactory.destroyCustomer(id, function()
	// 	{
	// 		getCustomerList();
	// 	})
	// }

})
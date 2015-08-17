//=======================================================
//APP.JS -- orderscustomersModule stores angular app 'myApp'
//=======================================================
var orderscustomersModule = angular.module('myApp', ['ngRoute']);

orderscustomersModule.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html'
	})
	.when('/customers', {
		templateUrl: 'partials/customers.html'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html'
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html'
	})
	.when('/products', {
		templateUrl: 'partials/products.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
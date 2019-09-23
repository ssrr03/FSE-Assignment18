	var assignment = angular.module('assignment', ['ngRoute']);

	assignment.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/employees.html',
				controller  : 'mainController'
			})

			.when('/addemployee', {
				templateUrl : 'pages/new.html',
				controller  : 'addEmployee'
			})

			.when('/editemployee', {
				templateUrl : 'pages/edit.html',
				controller  : 'editEmployee'
			});
	});

	assignment.controller('mainController', function($scope) {
		$scope.message = 'Main Controller';
	});

	assignment.controller('addEmployee', function($scope) {
		$scope.message = 'Add Employee.';
	});

	assignment.controller('editEmployee', function($scope) {
		$scope.message = 'Edit Employee.';
	});
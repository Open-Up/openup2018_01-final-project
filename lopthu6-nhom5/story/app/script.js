(function () {
	var app = angular.module('commiconline', ['ngRoute', 'ngResource']);

	app.config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('');

			$routeProvider.
				when('/', {
					templateUrl: 'home.html',
				}).
				when('/story/:storyid', {
					templateUrl: 'storyDetail.html',
					controller: 'storyDetailController',
				});
		}
	]);
	app.controller('storyDetailController', function ($scope, $http, $routeParams) {
		$http.get('http://localhost:5000/api/story/' + $routeParams.storyid).
			then(function (response) {
				$scope.story = response.data;
				console.log($scope.story[0].image);
			});
	}

	)
})();
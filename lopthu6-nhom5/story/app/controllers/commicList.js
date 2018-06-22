(function (angular) {
	function CommicListController($scope, $http) {
		var ctrl = this;
		$http.get('http://localhost:5000/api/story').then(function (response) {
			ctrl.commic = response.data;
		})

	}

	angular.module('commiconline').component('commicList', {
		templateUrl: "commicList.html",
		controller: CommicListController,
	});
})(window.angular);
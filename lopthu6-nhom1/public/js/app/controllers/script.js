(function () {
    var app = angular.module("course", []);
    app.controller('MainController', function ($scope, $http) {
        $scope.reviews = [];
        $scope.numbers = [];
        $scope.courses = [];

        $http
            .get('http://localhost:9000/api/reviews/')
            .then(result => {
                $scope.reviews = result.data.data;
            })

        $http
            .get('http://localhost:9000/api/course/')
            .then(result => {
                console.log(result.data.data);
                $scope.courses = result.data.data;
            })

        $http
            .get('http://localhost:9000/api/numberresults/')
            .then(result => {
                console.log(result.data);
                $scope.numbers = result.data.data;
            })

        $scope.clickTo = function (destination) {
            console.log('AAA');
            $('html,body').animate({
                scrollTop: $(destination)
                    .offset()
                    .top
            }, 'slow');
        }
    });
})();
(function () {
    var app = angular.module('app');
    app.service('productService', function ($http, $interval, $q, $timeout) {
        return {
            getProductsByCategory: function (category, subcategory) {
                return $http.get('http://localhost:4200/api/product/' + category + '/' + subcategory).then(products => {
                    console.log(products);
                    return products;
                })
            },
            getProductByName: function (name) {
                return $http.get('http://localhost:4200/api/product/product-detail/' + name).then(product => {
                    return product;
                });
            }

        }
    })
})();
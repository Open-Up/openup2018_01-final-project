// Code goes here
(function () {
  var app = angular.module("store", ["store.product"]);


  app.controller("StoreController", ['$http', '$log', function ($http, $log) {
    var self = this;

    $http.get("/api/getallmonan")
      .then(function (response) {
        $log.log("Data", response.data);
        self.products = response.data.data;
      })
      .catch(function (err) {
        $log.error("Error while loading products", err);
      });

    self.selectProduct = function (setProduct) {
      selectedProduct = setProduct;
    };

    $http.get("/api/getallcomment").then(function (response) {
      self.listComment = response.data.data
      console.log(self.listComment)
    })
      .catch(function (err) {
        $log.error("Error while loading products", err);
      });


    self.now = Date.now();

  }]);


  app.controller('ReviewController',function ($http, $log, $scope) {
    var self = this;
    // self.id = 0;
    // self.id = function (setProduct) {
    //   selectedProduct = setProduct;
    // };

    $scope.review = {
      NoiDung: '',
      ten_user:'',
      created_at: new Date()
     }

     $scope.addReview = function (product) {
      // product.reviews.unshift(self.review);
      $scope.review.created_at =new Date()
      $scope.review.id_MonAn = product.id;
      $http.post("api/addComment", $scope.review).then(function(response){
        console.log(response)
        $scope.review = {
          created_at: new Date()
        };
      })
    };
  });
})();

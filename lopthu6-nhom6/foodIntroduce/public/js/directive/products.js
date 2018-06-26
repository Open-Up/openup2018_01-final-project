(function() {
  "use strict";

  var app = angular.module("store.product", []);

  app.directive("productTitle", function() {
    return {
      restrict: "EA",
      templateUrl: "product-title.html",
      scope: {
        prdct: "="
      }
    };
  });

  app.directive("productGallery", function() {
    return {
      restrict: "EA",
      templateUrl: "product-gallery.html",
      scope: {
        images: "="
      }
    };
  });

  app.directive("navBar", function() {
    return {
      restrict: "EA",
      templateUrl: "nav-bar.html",
      scope: {
        images: "="
      }
    };
  });

  app.directive("menuContent", function() {
    return {
      restrict: "EA",
      templateUrl: "menu-content.html",
      scope: {
        images: "="
      },
      controller: function() {
        var self = this;
        var selectedProduct = 0;

        self.selectedProduct = function(setProduct) {
          selectedProduct = setProduct;
        };

        self.isSelected = function(checkProduct) {
          return selectedProduct === checkProduct;
        };
        
        self.getIndex = function() {
          return selectedProduct;
        };

      },
      controllerAs: "menu"
    };
  });
  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      scope:{
        product: "="
      },
      templateUrl: 'product-panels.html',
      controller: function() {
        var self = this;
        var selectedTab = 3;
        
        self.isSelected = function(tab) {
          return selectedTab === tab;
        };
        
        self.selectTab = function(tab) {
          selectedTab = tab;
        };
      },
      controllerAs: '$ctrl'
    };
  });


  app.directive("intro", function() {
    return {
      restrict: "EA",
      templateUrl: "intro.html",
      scope: {
        images: "="
      }
    };
  });
  
  app.directive("outro", function() {
    return {
      restrict: "EA",
      templateUrl: "outro.html",
      scope: {
        images: "="
      }
    };
  });
  
  app.directive("order", function() {
    return {
      restrict: "EA",
      templateUrl: "order.html",
      scope: {
        images: "="
      }
    };
  });
})();

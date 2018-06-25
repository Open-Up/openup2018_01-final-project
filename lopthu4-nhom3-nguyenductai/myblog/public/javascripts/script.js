// Code goes here

(function() {
  'use strict';
  var app = angular.module('app', []);

  //controller
  app.controller('PostController', ['$http', function($http) {
    var ctrl = this;

    //data load
    ctrl.posts = {};
    $http.get('/post-layout/post').then(function(data) {
      ctrl.posts = data.data;
    });


    ctrl.deletePost = function(post) {
      var idx = ctrl.posts.indexOf(post);
      $http.post('/post-layout', {id:idx}).then(function (data) {
        ctrl.posts = data.data;
      });
      // $http.delete('/post-layout/post', post).then(function (data) {
      //   console.log(post);
      //   console.log(data.data);
      //   ctrl.posts = data.data;
      // });
      // var idx = ctrl.posts.indexOf(post);
      // if (idx >= 0) {
      //   console.log(post);
      //   ctrl.posts.splice(idx, 1);
      // }
    };

    ctrl.posting = function(posted) {
      var date = new Date();
      var string = date.getDate()+'/'+ date.getMonth()+'/'+ date.getFullYear();
      posted.time = string;
      $http.post('/post-layout/post', posted).then(function(data) {
          ctrl.posts = data.data;
      })
    };
  }]);

  app.controller('LogInController', ['$http', function($http) {
    var ctrl = this;
    ctrl.isLogIn = false;
    ctrl.login = function(account) {
      $http.post('/account/log-in-layout', account).then(function(data) {
        if (data.data) {
          ctrl.isLogIn = data.data;
          alert('log in success!');
        } else {
          alert('user name or password invalid!');
        };
      });
    };
    ctrl.logout = function() {
      ctrl.isLogIn = false;
    };
  }]);

  app.controller('AuthorController', ['$http', function($http) {
    var ctrl = this;

    //show data panel
    ctrl.show = true;
    ctrl.setshow = function(show) {
      ctrl.show = show;
    };

    //data load
    ctrl.author = {};
    $http.get('/account').then(function(data) {
      ctrl.author = data.data;
    });

    //change data
    ctrl.updateInfo = function(account) {
      $http.post('/account', account).then(function(data) {
          ctrl.author = data.data;
          ctrl.setshow(true);
      });
    };
  }]);

  app.controller('PostDetailController', function() {
    var ctrl = this;
    ctrl.del = function() {
      ctrl.deletePost({
        post: ctrl.post
      });
    };
  });

  //directive
  app.directive('postLayout', function() {
    return {
      restrict: 'E',
      templateUrl: '/post-layout',
      controller: 'PostController',
      controllerAs: 'postCtrl',
    };
  });

  app.directive('logOutLayout', function() {
    return {
      restrict: 'E',
      templateUrl: '/account/log-out-layout',
      controller: 'LogInController',
      controllerAs: 'loginCtrl',
    };
  });

  app.directive('logIn', function() {
    return {
      restrict: 'A',
      controller: 'LogInController',
      controllerAs: 'loginCtrl',
    };
  });

  app.directive('authorLayout', function() {
    return {
      restrict: 'E',
      templateUrl: '/account/author-layout',
      controller: 'AuthorController',
      controllerAs: 'authCtrl',
    };
  });

  app.directive('logInLayout', function() {
    return {
      restrict: 'E',
      templateUrl: '/account/log-in-layout',
      controller: 'LogInController',
      controllerAs: 'loginCtrl',
    };
  });

  // app.directive('contactLayout', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: '/contact-layout',
  //   };
  // });

  app.directive('sliderLayout', function() {
    return {
      restrict: 'E',
      templateUrl: '/slider-layout',
    };
  });

  //component
  app.component('postDetail', {
    templateUrl: '/post-layout/post-detail',
    bindings: {
      post: '=',
    },
  });

  app.component('postDetailLogIn', {
    template: '<div class="container-fluid"><button class="btn btn-primary pull-right" ng-click="$ctrl.del()"><i class="fa fa-trash"></i></button></div><post-detail post="$ctrl.post"></post-detail>',
    controller: 'PostDetailController',
    bindings: {
      post: '=',
      deletePost: '&',
    },
  });
})();

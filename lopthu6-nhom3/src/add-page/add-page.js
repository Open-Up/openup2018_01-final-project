import template from './add-page.pug'

export const AddPageComponent = {
  template: template(),
  controller: AddPageController
}

export function AddPageController($scope, $window, items, timeline) {
  this.$onInit = function () {
    $scope.items = items.list()
    $scope.price = 0
  }

  $scope.back = function() {
    $window.history.back()
  }

  $scope.add = function() {
    timeline.addIncome()
  }
}

import template from './getting-started.pug'

export const GettingStartedComponent = {
  template: template(),
  controller: GettingStartedController
}

export function GettingStartedController(
  $scope,
  $location,
  items,
  startApp
) {
  this.$onInit = function() {
    const initialItems = [
      'Water and Electricity',
      'Drink',
      'Food',
      'Car',
      'Books',
      'Household and Furniture'
    ]

    for (let item of initialItems) {
      items.add(item)
    }

    $scope.newItem = ''
  }

  $scope.addItem = function(item) {
    if (item && !items.has(item)) {
      items.add(item)
      return true
    }
    return false
  }

  $scope.listItems = function() {
    return items.list()
  }

  $scope.add = function() {
    if ($scope.addItem($scope.newItem)) {
      $scope.newItem = ''
    }
  }

  $scope.handleInput = function($event) {
    if ($event.keyCode === 13) {
      $scope.add()
    }
  }

  $scope.next = function() {
    items.save()
    startApp.setDone()
    $location.path('/')
  }
}

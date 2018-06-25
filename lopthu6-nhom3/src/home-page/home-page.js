import template from './home-page.pug'

export const HomePageComponent = {
  template: template(),
  controller: HomePageController
}

export function HomePageController(
  $scope,
  $location,
  sidenav,
  startApp,
  balance,
  items
) {
  this.$onInit = function() {
    if (!startApp.isDone()) {
      $location.path('/getting-started')
    }

    items.load()
    balance.load()
  }

  $scope.getBalance = function() {
    return balance.value()
  }

  $scope.toggleSidenav = function() {
    sidenav.toggle()
  }

  $scope.add = function() {
    $location.path('/add-page')
  }
}

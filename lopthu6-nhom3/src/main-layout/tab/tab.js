import template from './tab.pug'

export const TabComponent = {
  transclude: true,
  template: template(),
  controller: TabController,
  bindings: {
    name: '@'    
  }
}

export function TabController($element, $location) {
  this.$onInit = function () {
    if ($element.attr('path') === $location.path()) {
      $element.addClass('active')
    }
  }
}

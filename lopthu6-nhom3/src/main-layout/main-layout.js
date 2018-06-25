import template from './main-layout.pug'

export const MainLayoutComponent = {
  transclude: true,
  template: template(),
  controller: MainLayoutController
}

export function MainLayoutController() {}

import template from './p-fab.pug'

export const PFABComponent = {
  template: template(),
  controller: PFABController,
  bindings: {
    pClick: '&',
    pIcon: '@'
  }
}

export function PFABController() {}

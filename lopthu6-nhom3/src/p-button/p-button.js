import template from './p-button.pug'

export const PButtonComponent = {
  template: template(),
  controller: PButtonController,
  bindings: {
    pClick: '&'
  }
}

export function PButtonController() {}

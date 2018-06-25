import template from './p-input.pug'

export const PInputComponent = {
  template: template(),
  controller: PInputController,
  bindings: {
    pType: '@?',
    pLabel: '@?',
    pKeydown: '&?',
    pModel: '=?',
    pPattern: '@?',
    pPlaceholder: '@?'
  }
}

export function PInputController($scope) {}

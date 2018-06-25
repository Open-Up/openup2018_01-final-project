import template from './p-select.pug'

export const PSelectComponent = {
  template: template(),
  controller: PSelectController,
  bindings: {
    pLabel: '@?',
    pModel: '=?',
    pItems: '<?'
  }
}

export function PSelectController() {}

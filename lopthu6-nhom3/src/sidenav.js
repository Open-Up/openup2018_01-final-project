export function SidenavService($mdSidenav) {
  const toggle = buildToggler('closeEventsDisabled')

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle()
    }
  }

  return {
    toggle
  }
}

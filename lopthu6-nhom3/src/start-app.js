export function StartAppService(store) {
  function setDone() {
    store.set('start-app', true)
  }

  function isDone() {
    return store.get('start-app')
  }

  return {
    setDone,
    isDone
  }
}

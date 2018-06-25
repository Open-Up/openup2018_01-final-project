export function StoreService() {
  function get(key) {
    return JSON.parse(localStorage.getItem(key) || null)
  }

  function set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  return {
    get,
    set
  }
}

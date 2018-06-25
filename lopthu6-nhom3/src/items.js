export function ItemsService(store) {
  let items = new Set()

  function add(item) {
    items.add(item)
  }

  function remove(item) {
    items.delete(item)
  }

  function has(item) {
    items.has(item)
  }

  function list() {
    return Array.from(items)
  }

  function load() {
    let data = store.get('items')
    if (data) {
      items = new Set(data)
    } else {
      items = new Set()
    }
  }

  function save() {
    store.set('items', Array.from(items))
  }

  return {
    add,
    remove,
    list,
    load,
    save,
    has
  }
}

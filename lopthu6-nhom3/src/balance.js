export function BalanceService(store) {
  let balance = 0

  function load() {
    const data = store.get('balance')
    if (data) {
      balance = data
    }
  }

  function increase(amount) {
    balance += amount
  }

  function decrease(amount) {
    if (balance > amount) {
      balance -= amount
      return true
    }
    return false
  }

  function value() {
    return balance
  }

  return {
    increase,
    decrease,
    load,
    value
  }
}

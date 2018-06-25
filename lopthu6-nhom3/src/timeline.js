export function TimelineService(balance) {
  const timeline = []

  function addIncome(item, amount, datetime) {
    balance.increase(amount)

    timeline.push({
      type: 'income',
      item,
      amount,
      datetime
    })
  }

  function addExpend(item, amount, datetime) {
    if (balance.decrease(amount)) {
      timeline.push({
        type: 'expend',
        item,
        amount,
        datetime
      })
    }
  }

  function remove(timelineItem) {
    const index = timeline.findIndex(timelineItem)
    if (index !== -1) {
      timeline.splice(index, 1)
    }
  }

  return {
    addIncome,
    addExpend,
    remove
  }
}

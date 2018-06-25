function waitFor(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

describe('angularjs homepage todo list', function() {
  it('should add a todo', async function() {
    browser.get('http://localhost:8080')
    await waitFor(1000)
    element(by.css('input')).sendKeys('House')
    await waitFor(1000)
    element(by.css('input')).sendKeys('\n')
    await waitFor(1000)
    expect(element.all(by.css('li')).last().getText()).toBe('House')
  })
})

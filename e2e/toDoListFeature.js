describe('To Do List', function(){
  it('has a title', function(){
    browser.get('http://localhost:8000');
    expect(browser.getTitle()).toEqual('To Do List Challenge');
  });


  it('finds profiles', function() {
    browser.get('http://localhost:8000');
    

    element(by.model('todoList.todoText')).sendKeys('Install Travis');
    element(by.className('btn')).click();

    expect(element(by.binding('todo')).getText()).
        toEqual('Install Travis');
  });
});

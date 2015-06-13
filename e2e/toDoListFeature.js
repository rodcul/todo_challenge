describe('To Do List', function(){
  it('has a title', function(){
    browser.get('http://localhost:8000');
    expect(browser.getTitle()).toEqual('To Do List Challenge');
  });


  it('Add a to do', function() {
    browser.get('http://localhost:8000');
    element(by.model('todoList.todoText')).sendKeys('Install Travis');
    element(by.className('btn')).click();
    expect(element(by.binding('todo.text')).getText()).
        toEqual('Install Travis');
  });

  xit('Complete a to do', function(){
    browser.get('http://localhost:8000');
    element(by.model('todoList.todoText')).sendKeys('Install Travis');
    element(by.className('btn')).click();
    element(by.model('todoList.done')) = true;
    expect( element('input[ng-model="todoList.done"]').attr('checked') ).toBeTruthy();
  });

});

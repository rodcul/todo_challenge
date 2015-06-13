describe('To Do List', function(){

  beforeEach(function(){
    browser.get('http://localhost:8000');

  });


  it('has a title', function(){
    expect(browser.getTitle()).toEqual('To Do List Challenge');
  });


  it('Add a to do', function() {
    element(by.model('todoList.todoText')).sendKeys('Install Travis');
    element(by.className('btn')).click();
    expect(element(by.binding('todo.text')).getText()).
        toEqual('Install Travis');
  });

  xit('Complete a to do', function(){
    element(by.model('todoList.todoText')).sendKeys('Install Travis');
    element(by.className('btn')).click();
    element(by.model('todoList.done')) = true;
    expect( element('input[ng-model="todoList.done"]').attr('checked') ).toBeTruthy();
  });

});

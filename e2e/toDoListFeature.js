describe('To Do List', function(){
  it('has a title', function(){
    browser.get('http://localhost:8000');
    expect(browser.getTitle()).toEqual('To Do List Challenge');
  });
});

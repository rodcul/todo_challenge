describe('To Do List Engine', function(){
  it('should store a to do', function(){
    var toDoList = new ToDoListEngine;
    toDoList.addToDo('Learn AngularJS');
    expect(toDoList.toDos[0]).toEqual('Learn AngularJS');
  });

  it('should store multiple to dos', function(){
    var toDoList = new ToDoListEngine;
    toDoList.addToDo('Learn AngularJS');
    toDoList.addToDo('Learn protractor');
    toDoList.addToDo('Setup Travis CI');
    expect(toDoList.toDos.length).toEqual(3);
  });

});

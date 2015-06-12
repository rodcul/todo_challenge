function ToDoListEngine(){
  this.toDos = []
};

ToDoListEngine.prototype.addToDo = function (toDo) {
  this.toDos.push(toDo);
};

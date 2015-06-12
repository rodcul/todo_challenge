function ToDoList(){
  this.toDos = []
};

ToDoList.prototype.addToDo = function (toDo) {
  this.toDos.push(toDo);
};

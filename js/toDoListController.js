todoApp.controller('ToDoListController', [function() {

	var self = this;
	self.todos = [];

	self.addTodo = function() {
		self.todos.unshift(self.todoText);
		self.todoText = '';

	};

}]);

todoApp.controller('ToDoListController', [function() {

	var self = this;
	self.todos = [];

	self.filter =

	self.addTodo = function(task) {
		self.todos.unshift({text: task, done:false});
		self.todoText = '';
		console.log(self.todos);

	};

}]);

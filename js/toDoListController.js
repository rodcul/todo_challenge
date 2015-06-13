todoApp.controller('ToDoListController', [function() {

	var self = this;
	self.todos = [{text:'Learn AngularJS', done: false},
								{text:'Learn Protractor', done: false},
								{text: 'Get Travis CI working', done: true}];


	self.addTodo = function(task) {
		self.todos.unshift({text: task, done:false});
		self.todoText = '';
		console.log(self.todos);

	};

	self.archive = function () {
		self.todos = self.todos.filter(function(todo){return todo['done'] == false});
	};

}]);

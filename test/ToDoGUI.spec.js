describe('ToDoListController', function() {
	beforeEach(module('todoApp'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('ToDoListController');
	}));

	it('initialises with an empty list', function() {
		expect(ctrl.todos).toEqual([]);
	});

	it('shows a list of tasks', function() {
    var tasks = [{text:'Learn AngularJS', done: false},
									{text:'Learn Protractor', done: false},
									{text: 'Get Travis CI working', done: false}];
		ctrl.addTodo('Get Travis CI working');
		ctrl.addTodo('Learn Protractor');
		ctrl.addTodo('Learn AngularJS');
    expect(ctrl.todos).toEqual(tasks);
	});
});

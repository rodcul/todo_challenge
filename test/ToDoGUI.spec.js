describe('ToDoListController', function() {
	beforeEach(module('todoApp'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('ToDoListController');
	}));

	it('initialises with an empty list', function() {
		expect([ctrl.todos]).toBeUndefined();
	});

	it('shows a list of tasks', function() {
    var toDos = ['Learn AngularJS','Learn Protractor', 'Get Travis CI working'];

    expect(ctrl.todos).toEqual(toDos);

	});
});

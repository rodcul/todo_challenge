describe('ToDoListController', function() {
	beforeEach(module('ToDoList'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('ToDoListController');
	}));

	it('initialises with an empty list', function() {
		expect(ctrl.toDos).toBeUndefined();
	});

	it('shows a list of tasks', function() {
    var toDos = ['Learn AngularJS','Learn Protractor', 'Get Travis CI working'];

    expect(ctrl.toDos).toEqual(toDos);

	});
});

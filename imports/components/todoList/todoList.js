import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

// Get the data before you load up the template file
import { Tasks } from '../../api/tasks.js';

import template from './todoList.html';


// When there isn't a database connection ...
let seedTasks = [{
			text: "This is task 1"
		}, {
			text: "This is task 2"
		}, {
			text: "This is task 3"
		}];

// $scope.getReactively()  turns Angular scope variables into Meteor reactive variables.
class TodoListCtrl {
	constructor($scope) {
		//this.tasks =  seedTasks;
		$scope.viewModel(this);

		this.subscribe('tasks');

		this.hideCompleted = false;
 
	    this.helpers({
	      tasks() {
	      	const selector = {};

	      	// If hideCompleted is checked, filter tasks
	      	if (this.getReactively('hideCompleted')) { //what is getReactively? Where is it defined? 

	      		//create the query selector clause
	      		selector.checked = {
	      			$ne : true,
	      		};
	      	}
	        return Tasks.find(selector, { sort: { createdAt: -1} });
	      },

	      incompleteCount() {
	      	return Tasks.find({checked: {$ne: true}}).count();
	      },

	      currentUser() {
	      	return Meteor.user();
	      }

	    })
	}

	addTask(newTask) {
	
		Meteor.call('tasks.insert', newTask);

		this.newTask = '';
	}

	updateTask(task) {
		// Make a change to the text in the Task collection item
		Meteor.call('task.update', task);
	}

	removeTask(task) {
		// Add a removeDate to the task to indicate it has been removed
		// The task can be recovered if desired before some 7 days have expired
/*		alert("Removing task.", task.text);
		Tasks.update(task._id, {
			$set: {
				removedAt: new Date
			},
		});
		alert("Task marked for removal.", task.removedAt)

*/
		//alert("Task marked for removal." + task._id);
		Meteor.call('tasks.remove', task._id);
	}

	destroyTask(task) {
		// Delete the task from the database
	}

	setPrivate(task) {
		Meteor.call('tasks.setPrivate', task._id, !task.private);
	}

	setChecked(task) {
		Meteor.call('tasks.setChecked', task._id, !task.checked);
	}

	restoreAll() {
		Tasks.update({}, {
			$unset : { 
				removedAt : ""
				}
			},
			{
			multi: true
		})
	}



}

export default angular.module('todoList', [ 
	angularMeteor
])
	.component('todoList', {
		templateUrl: 'imports/components/todoList/todoList.html',
		//controller: TodoListCtrl
		controller: [ '$scope', TodoListCtrl ]
})


// Added to test to see if I can make a custom module and control.
var appNow = angular.module('otherStuff', [ angularMeteor ]);

/*appNow.template('otherStuff', function(){
	return '<h1>Other Stuff and then Some</h1>'
}); 

appNow.controller('otherCtrl', function($scope){
	$scope.title = "Too Much Food for You!!";
});

*/

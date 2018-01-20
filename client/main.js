import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todoList from '../imports/components/todoList/todoList';
import "../imports/startup/accounts-config.js";
import { Component, View } from 'angular';


@Component ({
	selector: 'other-stuff',
	template: '<h2>Total wreck!</h2>'
})
export class OtherStuff {
constructor () {
	}
}

@View({
	template: '<h2>Total wreck!</h2>'
})
export class MoreStuff {
	constructor() {
	
	}
}



import './main.html';

angular.module('simple-todos', [ 
	angularMeteor,
	todoList.name,
	'accounts.ui'
]);


function onReady() {
	angular.bootstrap(document, ['simple-todos']);
}

if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
} else {
	angular.element(document).ready(onReady);
}


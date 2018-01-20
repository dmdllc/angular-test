/* eslint-env mocha */

import 'angular-mocks';
import { Meteor } from 'meteor/meteor';

import todoList from '../todoList';

describe('todoList', function() {
	var element;

	beforeEach(function() {
		var $compile;
		var $rootScope;

	    window.module(todosList.name);
	
		inject(function(_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
		});

		element = $compile('<todo-list></todo-list>')($rootScope.$new(true));
		$rootScope.$digest();
	})
})
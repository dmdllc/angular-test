import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

if(Meteor.isServer) {
	Meteor.publish('tasks', function taskPublication() {

console.log("Entering Meteor.publish");
		return Tasks.find( {
			$or: [{
				private: {
					$ne: true
				}
			}, {
				owner: this.userId
			}, ]
		});
	});
}

Meteor.methods({
	'tasks.insert' (text) {
		check(text, String);

		if(!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}

		//Meteor.call('tasks.insert', text)
		
	    Tasks.insert({
	      text : text,
	      createdAt: new Date(),
	      owner: Meteor.userId(),
	      username: Meteor.user().username,
	    });
	},

	'tasks.remove' (taskId) {
		check(taskId, String);

		Tasks.remove(taskId);
	},

	'task.update' (taskId, text) {
		check(taskId, String);
		check(text, String);

		Task.update(taskId, {
			$set: {
				text
			}
		});
	},

	'tasks.setChecked' (taskId, setChecked) {
		check(taskId, String);
		check(setChecked, Boolean);

		Tasks.update(taskId, {
			$set: {
				checked: setChecked
			}
		});
	},


	'tasks.setPrivate' (taskId, setToPrivate) {
		check(taskId, String);
		check(setToPrivate, Boolean);

		console.log("getting here.")

		const task = Tasks.findOne(taskId);

		//Make sure only the task owner can make a task private
		if(task.owner !== Meteor.userId()) {
			throw new Meteor.Error('not authorized');
		}

		Tasks.update(taskId, {
			$set: {
				private: setToPrivate
				}
		})
	}
})
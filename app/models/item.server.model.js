'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ItemSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	value: {
		type: Number,
		default: '',
		trim: true,
		required: 'Target Value cannot be blank'
	},
	owner: {
		type: String,
		default: ''
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ItemSchema);

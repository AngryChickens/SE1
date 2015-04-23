'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
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
	content: {
		type: Number,
		default: '',
		trim: true,
		required: 'Target Value cannot be blank'
	},
	startDate: {
		type: Date,
		default: '',
		required: 'Start Date cannot be blank'
	},
	endDate: {
		type: Date,
		default: '',
		required: 'End Date cannot be blank'
	},
	currentBalance: {
		type: Number,
		default: 0
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);

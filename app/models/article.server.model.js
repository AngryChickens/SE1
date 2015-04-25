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
		trim: true,
		required: 'Target Value must be a value greater than 0 and cannot be blank'
	},
	startDate: {
		type: Date,
		trim: true,
		required: 'Start Date cannot be blank'
	},
	endDate: {
		type: Date,
		trim: true,
		required: 'End Date cannot be blank'
	},
	currentBalance: {
		type: Number
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);

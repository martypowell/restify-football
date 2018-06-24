const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const PositionSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true,
			trim: true,
		},
		abbreviation: {
			type: String,
			required: true,
			trim: true,
			maxlength: 2,
		},
		category: {
			type: String,
			required: true,
			trim: true,
		},
        isActive: {
			type: Boolean,
			required: true,
			trim: true,
        }
	},
	{ minimize: false },
);

PositionSchema.plugin(timestamps);
PositionSchema.plugin(mongooseStringQuery);

const Team = mongoose.model('Position', PositionSchema);
module.exports = Team;    
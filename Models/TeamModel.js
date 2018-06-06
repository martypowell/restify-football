const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const TeamSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
        },
        league: {
			type: String,
			required: true,
			trim: true,
        },
        stadium: {
            type: String,
			required: true,
			trim: true,
        }
	},
	{ minimize: false },
);

TeamSchema.plugin(timestamps);
TeamSchema.plugin(mongooseStringQuery);

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;    
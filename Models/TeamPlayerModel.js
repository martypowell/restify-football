const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');
const TeamPlayerStats = require('./TeamPlayerStatsModel');

const TeamPlayerSchema = new mongoose.Schema(
	{
		number: {
			type: Number,
			required: false,
        },
        position: {
            type: String,
			required: false,
        },
	},
	{ minimize: false },
);

TeamPlayerSchema.plugin(timestamps);
TeamPlayerSchema.plugin(mongooseStringQuery);

const Team = mongoose.model('TeamPlayer', TeamPlayerSchema);
module.exports = Team;    
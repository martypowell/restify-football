const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const TeamPlayerStatsSchema = new mongoose.Schema(
	{
        appearances: {
			type: Number,
			required: true,
        },
        starts: {
			type: Number,
			required: true,
        },
		goals: {
			type: Number,
			required: true,
        },
        assists: {
			type: Number,
			required: true,
        },
	},
	{ minimize: false },
);

TeamPlayerStatsSchema.plugin(timestamps);
TeamPlayerStatsSchema.plugin(mongooseStringQuery);

const Team = mongoose.model('TeamPlayerStats', TeamPlayerStatsSchema);
module.exports = Team;    
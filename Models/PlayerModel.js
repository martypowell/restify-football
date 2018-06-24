const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');
const TeamPlayerModel = require('../Models/TeamPlayerModel');

const PlayerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
        },
        teams: [{ type: schema.Types.ObjectId, ref: 'TeamPlayer' }]
	},
	{ minimize: false },
);

PlayerSchema.plugin(timestamps);
PlayerSchema.plugin(mongooseStringQuery);

const Team = mongoose.model('Player', PlayerSchema);
module.exports = Team;    
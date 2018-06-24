
const RouteHandler = require('../RouteHandler');

/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema
 */
const Players = require('../Models/PlayerModel');

module.exports = (server) => {
	RouteHandler(server, 'teams/:id/players', Players);
};

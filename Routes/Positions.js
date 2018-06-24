const RouteHandler = require('../RouteHandler');

/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema
 */
const PositionModel = require('../Models/PositionModel');

module.exports = (server) => {
    RouteHandler(server, 'positions', PositionModel);
};    
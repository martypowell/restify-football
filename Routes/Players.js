
const RouteHandler = require('../RouteHandler');
const apiMethodHandlers = require('../ApiMethodHandlers').default;
const Players = require('../Models/PlayerModel');
const root = 'players';

module.exports = (server) => {
	server.get(`/${root}`, (req, res, next) => {
		apiMethodHandlers.GetAll(Players, req, res, next);
	});

	server.post(`/${root}`, (req, res, next) => {
		apiMethodHandlers.Save(Players, req, res, next);
	});
};
